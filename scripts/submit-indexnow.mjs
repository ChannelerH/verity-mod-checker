import fs from "node:fs";

const host = "veritymodchecker.online";
const endpoint = "https://api.indexnow.org/indexnow";
const keyFile = "b2212c6677aba44b57c09b052426de92.txt";

if (!fs.existsSync(keyFile) || fs.readFileSync(keyFile, "utf8").trim() !== keyFile.replace(/\.txt$/, "")) {
  console.error(`IndexNow key file is missing or invalid: ${keyFile}`);
  process.exit(1);
}

const key = keyFile.replace(/\.txt$/, "");
const urls = process.argv.slice(2);

if (!urls.length) {
  console.error("Usage: node scripts/submit-indexnow.mjs https://veritymodchecker.online/faq/ ...");
  process.exit(1);
}

for (const url of urls) {
  if (!url.startsWith(`https://${host}/`)) {
    console.error(`URL does not belong to ${host}: ${url}`);
    process.exit(1);
  }
}

const response = await fetch(endpoint, {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `https://${host}/${keyFile}`,
    urlList: urls,
  }),
});

const body = await response.text();
console.log(JSON.stringify({
  endpoint,
  status: response.status,
  ok: response.ok || response.status === 202,
  submitted: urls,
  body,
}, null, 2));

if (!response.ok && response.status !== 202) process.exit(1);
