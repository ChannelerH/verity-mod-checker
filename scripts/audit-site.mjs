import fs from "node:fs";
import path from "node:path";

const pageFiles = [
  "index.html",
  ...fs
    .readdirSync(".")
    .filter((name) => name !== "dist-cf" && fs.existsSync(path.join(name, "index.html")))
    .map((name) => path.join(name, "index.html"))
    .sort(),
];
const errors = [];
const titles = new Map();
const descriptions = new Map();
const releaseSnapshot = JSON.parse(fs.readFileSync("data/verity-releases.json", "utf8"));
const currentJavaRelease = releaseSnapshot.projects
  .find((project) => project.name === "Verity JE")
  ?.releases.find((release) => release.status === "current");

for (const file of pageFiles) {
  const html = fs.readFileSync(file, "utf8");
  const visibleText = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = visibleText.match(/[A-Za-z0-9'.-]+/g) || [];
  const exactPhrases = visibleText.toLowerCase().match(/verity mod/g) || [];
  // Match common SEO tools: phrase occurrences divided by total visible words.
  const density = words.length ? (exactPhrases.length / words.length) * 100 : 0;
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1];
  const description = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i)?.[1];
  const h1Count = (html.match(/<h1(?:\s[^>]*)?>[\s\S]*?<\/h1>/gi) || []).length;
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1];

  for (const block of html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(block[1]);
    } catch (error) {
      errors.push(`${file}: invalid JSON-LD (${error.message})`);
    }
  }

  if (!title || !description || h1Count !== 1 || !canonical) {
    errors.push(`${file}: metadata title=${Boolean(title)} description=${Boolean(description)} h1=${h1Count} canonical=${Boolean(canonical)}`);
  }
  if (words.length < 1200) errors.push(`${file}: only ${words.length} visible words; expected at least 1200`);
  if (exactPhrases.length === 0) errors.push(`${file}: the primary phrase does not appear in visible copy`);
  if (density > 3) errors.push(`${file}: exact phrase occurrence density ${density.toFixed(2)}% needs a keyword-stuffing review`);
  if (title && titles.has(title)) errors.push(`${file}: duplicate title with ${titles.get(title)}`);
  if (description && descriptions.has(description)) errors.push(`${file}: duplicate description with ${descriptions.get(description)}`);
  if (title) titles.set(title, file);
  if (description) descriptions.set(description, file);

  console.log(`${file}\t${words.length} words\t${exactPhrases.length} exact phrases\t${density.toFixed(2)}% occurrence density\t${h1Count} h1`);
}

if (!currentJavaRelease?.filename || !currentJavaRelease?.recordId) {
  errors.push("data/verity-releases.json: missing current Verity JE filename or record ID");
} else {
  const expectedSignals = [currentJavaRelease.filename, String(currentJavaRelease.recordId)];
  for (const file of ["index.html", "download/index.html", "java/index.html", "script.js", "feed.xml"]) {
    const content = fs.readFileSync(file, "utf8");
    for (const signal of expectedSignals) {
      if (!content.includes(signal)) errors.push(`${file}: missing current Java release signal ${signal}`);
    }
  }
}

const sitemap = fs.readFileSync("sitemap.xml", "utf8");
for (const retiredRoute of ["/verity-je/", "/mcpe/"]) {
  if (sitemap.includes(retiredRoute)) errors.push(`sitemap.xml: retired route remains listed ${retiredRoute}`);
}

const worker = fs.readFileSync("_worker.js", "utf8");
for (const retiredRoute of ["/verity-je", "/mcpe"]) {
  if (!worker.includes(retiredRoute)) errors.push(`_worker.js: missing redirect for ${retiredRoute}`);
}
if (!worker.includes('url.pathname === "/data/operations-log.json"')) {
  errors.push("_worker.js: private operations log path is not blocked");
}

for (const file of pageFiles) {
  const html = fs.readFileSync(file, "utf8");
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    let localPath = match[1];
    if (localPath === "/") localPath = "/index.html";
    else if (localPath.endsWith("/")) localPath += "index.html";
    if (!fs.existsSync(`.${localPath}`)) errors.push(`${file}: missing local target ${match[1]}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`STATIC_AUDIT_OK ${pageFiles.length} pages`);
