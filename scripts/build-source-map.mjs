import fs from "node:fs";
import path from "node:path";

const releases = JSON.parse(fs.readFileSync("data/verity-releases.json", "utf8"));
const modpacks = JSON.parse(fs.readFileSync("data/verity-modpacks.json", "utf8"));
const lookalikes = JSON.parse(fs.readFileSync("data/verity-lookalikes.json", "utf8"));

const site = "https://veritymodchecker.online";
const generatedAt = [releases.checkedAt, modpacks.checkedAt, lookalikes.checkedAt].sort().at(-1);

function projectByName(name) {
  const project = releases.projects.find((entry) => entry.name === name);
  if (!project) throw new Error(`Missing project: ${name}`);
  return project;
}

function releaseByStatus(project, status) {
  const release = project.releases.find((entry) => entry.status === status);
  if (!release) throw new Error(`Missing ${status} release for ${project.name}`);
  return release;
}

function releaseByRecord(project, recordId) {
  const release = project.releases.find((entry) => String(entry.recordId) === String(recordId));
  if (!release) throw new Error(`Missing record ${recordId} for ${project.name}`);
  return release;
}

function alternateByHost(project, host) {
  const source = project.verifiedAlternateSources?.find((entry) => entry.host === host);
  if (!source) throw new Error(`Missing alternate ${host} source for ${project.name}`);
  return source;
}

const java = projectByName("Verity JE");
const javaStable = releaseByStatus(java, "current");
const javaLegacy = releaseByRecord(java, 8346795);
const modrinth = alternateByHost(java, "Modrinth");
const modrinthCurrent = modrinth.releases.find((entry) => entry.recordId === "CXsEzVwJ");
const modrinthStable = modrinth.releases.find((entry) => entry.recordId === "yAt0wv1Z");
const modrinthBeta601 = modrinth.releases.find((entry) => entry.recordId === "YLEoXe6t");
const modrinthBeta600 = modrinth.releases.find((entry) => entry.recordId === "5ech0sTo");
const verityBe = projectByName("Verity BE");
const verityBeCurrent = releaseByStatus(verityBe, "current");
const pntmc = projectByName("Verity - Bedrock Edition");
const pocket = projectByName("Verity Pocket Edition (Be)");
const pocketCurrent = releaseByStatus(pocket, "current");

function routeIdSegment(value) {
  return String(value).replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function modpackGuideUrl(item) {
  if (item.name === "VERITY.exe" || item.name === "VERITY.exe Remastered") return `${site}/verity-exe/`;
  if (["Ultimate VERITY.", "Ultimate Verity Horror", "Ultimate Verity Skinpack"].includes(item.name)) return `${site}/ultimate-verity/`;
  if (item.name === "Survive from VERITY or FALSITY") return `${site}/survive-from-verity-or-falsity/`;
  if (item.name === "Verity World - AI Horror Adventure with Verity") return `${site}/verity-world/`;
  if (
    [
      "Verity May Be",
      "VerityCraft",
      "Horror Ultimate Selection",
      "Verity Endless Horror Experience",
      "Verity + Factories"
    ].includes(item.name)
  ) {
    return `${site}/verity-monster-form/`;
  }
  return `${site}/verity-pack/`;
}

function modpackRecommendedUse(item) {
  if (item.name === "VERITY.exe") return "Use only when the player intentionally wants the VERITY.exe modpack profile.";
  if (item.name === "VERITY.exe Remastered") return "Use only when the player intentionally selected the Modrinth VERITY.exe Remastered MRPACK route.";
  if (item.name === "Ultimate VERITY." || item.name === "Ultimate Verity Horror") return "Use only when the player intentionally selected this Ultimate Verity modpack profile.";
  if (item.name === "Ultimate Verity Skinpack") return "Use only when the player intentionally selected the cosmetic Bedrock Ultimate Verity Skinpack route.";
  if (item.name === "Survive from VERITY or FALSITY") return "Use when the player intentionally selected the separate Verity or Falsity modpack profile.";
  if (item.name === "Verity World - AI Horror Adventure with Verity") return "Use only when the player intentionally wants the Verity World Forge 1.20.1 modpack route.";
  if (modpackGuideUrl(item).endsWith("/verity-monster-form/")) {
    return "Use when the player intentionally wants a monster-form or horror-profile route rather than the standalone Verity JE or Bedrock file.";
  }
  return "Use only when the player intentionally selected this separate modpack result.";
}

function lookalikeGuideUrl(item) {
  if (item.name === "Verity Body Overhaul" || item.name === "verity.jar") return `${site}/verity-monster-form/`;
  return `${site}/verity-dweller/`;
}

const records = [
  {
    routeId: "java-modrinth-6-current",
    routeName: "Verity JE 6 Modrinth release",
    edition: "Java",
    host: "Modrinth",
    owner: modrinth.owner,
    projectId: modrinth.projectId,
    projectUrl: modrinth.projectUrl,
    projectDownloadsAtCheck: modrinth.projectDownloadsAtCheck,
    packageType: modrinthCurrent.packageType,
    fileName: modrinthCurrent.filename,
    recordId: modrinthCurrent.recordId,
    recordUrl: modrinthCurrent.recordUrl,
    minecraftVersion: modrinthCurrent.minecraftVersion,
    loader: modrinthCurrent.loader,
    publishedDate: modrinthCurrent.publishedDate,
    fileSizeMb: modrinthCurrent.displayedSizeMb,
    fileDownloadsAtCheck: modrinthCurrent.recordDownloadsAtCheck,
    status: "current-release",
    recommendedUse: "Use when the player intentionally follows the current Modrinth Verity JE 6 route.",
    caution: "CurseForge still shows 5.7.3 as its visible main file, so keep the source platform in the citation.",
    localGuideUrl: `${site}/verity-6-jar/`
  },
  {
    routeId: "java-curseforge-stable",
    routeName: "Verity JE stable CurseForge file",
    edition: "Java",
    host: "CurseForge",
    owner: java.owner,
    projectId: java.projectId,
    projectUrl: java.projectUrl,
    projectDownloadsAtCheck: java.projectDownloadsAtCheck,
    packageType: javaStable.packageType,
    fileName: javaStable.filename,
    recordId: javaStable.recordId,
    recordUrl: javaStable.recordUrl,
    minecraftVersion: javaStable.minecraftVersion,
    loader: javaStable.loader,
    publishedDate: javaStable.publishedDate,
    fileSizeMb: javaStable.displayedSizeMb,
    fileDownloadsAtCheck: javaStable.recordDownloadsAtCheck,
    status: "current-stable",
    recommendedUse: "Use when the player needs the stable Java Forge 1.20.1 file.",
    caution: "Do not replace this with a Bedrock MCADDON or a copied beta link.",
    localGuideUrl: `${site}/verity-5-7-3-jar/`
  },
  {
    routeId: "java-modrinth-stable",
    routeName: "Verity JE stable Modrinth version",
    edition: "Java",
    host: "Modrinth",
    owner: modrinth.owner,
    projectId: modrinth.projectId,
    projectUrl: modrinth.projectUrl,
    projectDownloadsAtCheck: modrinth.projectDownloadsAtCheck,
    packageType: modrinthStable.packageType,
    fileName: modrinthStable.filename,
    recordId: modrinthStable.recordId,
    recordUrl: modrinthStable.recordUrl,
    minecraftVersion: modrinthStable.minecraftVersion,
    loader: modrinthStable.loader,
    publishedDate: modrinthStable.publishedDate,
    fileSizeMb: modrinthStable.displayedSizeMb,
    fileDownloadsAtCheck: modrinthStable.recordDownloadsAtCheck,
    status: "current-stable",
    recommendedUse: "Use when the player needs the Modrinth checksum and publisher version record.",
    caution: "Project downloads and version downloads are separate counters.",
    localGuideUrl: `${site}/verity-5-7-3-jar/`
  },
  {
    routeId: "java-modrinth-601-observed",
    routeName: "Verity JE 6.0.1 beta observed record",
    edition: "Java",
    host: "Modrinth",
    owner: modrinth.owner,
    projectId: modrinth.projectId,
    projectUrl: modrinth.projectUrl,
    projectDownloadsAtCheck: modrinth.projectDownloadsAtCheck,
    packageType: modrinthBeta601.packageType,
    fileName: modrinthBeta601.filename,
    recordId: modrinthBeta601.recordId,
    recordUrl: modrinthBeta601.recordUrl,
    minecraftVersion: modrinthBeta601.minecraftVersion,
    loader: modrinthBeta601.loader,
    publishedDate: modrinthBeta601.publishedDate,
    fileSizeMb: modrinthBeta601.displayedSizeMb,
    fileDownloadsAtCheck: modrinthBeta601.recordDownloadsAtCheck,
    status: "stale-beta-endpoint-404",
    recommendedUse: "Use only for stale-link diagnosis when a comment or video names 6.0.1.",
    caution: "The version endpoint returned 404 and the ID was not in the active versions list at check.",
    localGuideUrl: `${site}/verity-6-0-1-jar/`
  },
  {
    routeId: "java-modrinth-600-observed",
    routeName: "Verity JE 6.0.0 beta observed record",
    edition: "Java",
    host: "Modrinth",
    owner: modrinth.owner,
    projectId: modrinth.projectId,
    projectUrl: modrinth.projectUrl,
    projectDownloadsAtCheck: modrinth.projectDownloadsAtCheck,
    packageType: modrinthBeta600.packageType,
    fileName: modrinthBeta600.filename,
    recordId: modrinthBeta600.recordId,
    recordUrl: modrinthBeta600.recordUrl,
    minecraftVersion: modrinthBeta600.minecraftVersion,
    loader: modrinthBeta600.loader,
    publishedDate: modrinthBeta600.publishedDate,
    fileSizeMb: modrinthBeta600.displayedSizeMb,
    fileDownloadsAtCheck: modrinthBeta600.recordDownloadsAtCheck,
    status: "stale-beta-endpoint-404",
    recommendedUse: "Use only for stale-link diagnosis when a comment or video names 6.0.0.",
    caution: "The version endpoint returned 404 and the ID was not in the active versions list at check.",
    localGuideUrl: `${site}/verity-6-0-0-jar/`
  },
  {
    routeId: "java-neoforge-341-legacy",
    routeName: "Verity JE 3.4.1 legacy NeoForge file",
    edition: "Java",
    host: "CurseForge",
    owner: java.owner,
    projectId: java.projectId,
    projectUrl: java.projectUrl,
    projectDownloadsAtCheck: java.projectDownloadsAtCheck,
    packageType: javaLegacy.packageType,
    fileName: javaLegacy.filename,
    recordId: javaLegacy.recordId,
    recordUrl: javaLegacy.recordUrl,
    minecraftVersion: javaLegacy.minecraftVersion,
    loader: javaLegacy.loader,
    publishedDate: javaLegacy.publishedDate,
    fileSizeMb: javaLegacy.displayedSizeMb,
    fileDownloadsAtCheck: javaLegacy.recordDownloadsAtCheck,
    status: "legacy-deprecated-branch",
    recommendedUse: "Use only when the exact old filename or NeoForge 1.21.1 branch is the question.",
    caution: "The maintainer describes this branch as deprecated and buggy.",
    localGuideUrl: `${site}/verity-3-4-1-jar/`
  },
  {
    routeId: "bedrock-verity-be-current",
    routeName: "Verity BE official Bedrock file",
    edition: "Bedrock",
    host: "CurseForge",
    owner: verityBe.owner,
    projectId: verityBe.projectId,
    projectUrl: verityBe.projectUrl,
    projectDownloadsAtCheck: verityBe.projectDownloadsAtCheck,
    packageType: verityBeCurrent.packageType,
    fileName: verityBeCurrent.filename,
    recordId: verityBeCurrent.recordId,
    recordUrl: verityBeCurrent.recordUrl,
    minecraftVersion: verityBeCurrent.minecraftVersion,
    loader: verityBeCurrent.loader,
    publishedDate: verityBeCurrent.publishedDate,
    fileSizeMb: verityBeCurrent.displayedSizeMb,
    fileDownloadsAtCheck: verityBeCurrent.recordDownloadsAtCheck,
    status: "current-bedrock-addon",
    recommendedUse: "Use when the selected page names Verity BE, Undertaletalelover, or record 8506198.",
    caution: "This is a Bedrock MCADDON route, not a Java JAR.",
    localGuideUrl: `${site}/verity-be/`
  },
  ...[8517480, 8517478, 8517473, 8503821, 8327253].map((recordId) => {
    const item = releaseByRecord(pntmc, recordId);
    return {
      routeId: `pntmc-${recordId}`,
      routeName: `PnTMC Verity Bedrock file ${recordId}`,
      edition: "Bedrock",
      host: "CurseForge",
      owner: pntmc.owner,
      projectId: pntmc.projectId,
      projectUrl: pntmc.projectUrl,
      projectDownloadsAtCheck: pntmc.projectDownloadsAtCheck,
      packageType: item.packageType,
      fileName: item.filename,
      recordId: item.recordId,
      recordUrl: item.recordUrl,
      minecraftVersion: item.minecraftVersion,
      loader: item.loader,
      publishedDate: item.publishedDate,
      fileSizeMb: item.displayedSizeMb,
      fileDownloadsAtCheck: item.recordDownloadsAtCheck,
      status: item.status,
      recommendedUse: recordId === 8517480 ? "Use as the current PnTMC V26.30 row." : "Use only when the player's Bedrock build or old tutorial names this exact record.",
      caution: recordId === 8327253 ? "This is an older 2.1.0 Bedrock row, not a Java JAR." : "Match the exact Bedrock build row before importing.",
      localGuideUrl: recordId === 8327253 ? `${site}/pntmc-verity-2-1-0/` : `${site}/pntmc-verity-3-2-0/`
    };
  }),
  {
    routeId: "bedrock-pocket-edition-current",
    routeName: "Verity Pocket Edition separate Bedrock listing",
    edition: "Bedrock",
    host: "CurseForge",
    owner: pocket.owner,
    projectId: pocket.projectId,
    projectUrl: pocket.projectUrl,
    projectDownloadsAtCheck: pocket.projectDownloadsAtCheck,
    packageType: pocketCurrent.packageType,
    fileName: pocketCurrent.filename,
    recordId: pocketCurrent.recordId,
    recordUrl: pocketCurrent.recordUrl,
    minecraftVersion: pocketCurrent.minecraftVersion,
    loader: pocketCurrent.loader,
    publishedDate: pocketCurrent.publishedDate,
    fileSizeMb: pocketCurrent.displayedSizeMb,
    fileDownloadsAtCheck: pocketCurrent.recordDownloadsAtCheck,
    status: "similar-pocket-edition-route",
    recommendedUse: "Use when the page names Verity Pocket Edition (Be) or Project ID 1596246.",
    caution: "Do not confuse this with Verity BE or PnTMC Bedrock.",
    localGuideUrl: `${site}/pocket-edition/`
  },
  ...modpacks.modpacks.map((item) => ({
    routeId: `modpack-${routeIdSegment(item.projectId)}`,
    routeName: item.name,
    edition: item.packageType === "skinpack" ? "Bedrock Skinpack" : "Modpack",
    host: item.host || "CurseForge",
    owner: item.owner,
    projectId: item.projectId,
    projectUrl: item.projectUrl,
    projectDownloadsAtCheck: item.displayedDownloadsAtCheck,
    packageType: item.packageType,
    fileName: item.mainFile || "",
    recordId: item.mainFileRecord || "",
    recordUrl: item.mainFileUrl || (item.mainFileRecord ? `${item.projectUrl}/files/${item.mainFileRecord}` : item.projectUrl),
    minecraftVersion: item.minecraftVersion || "",
    loader: item.loader || "",
    publishedDate: item.lastUpdate || "",
    fileSizeMb: item.mainFileSizeBytes ? Number((item.mainFileSizeBytes / 1024 / 1024).toFixed(2)) : "",
    fileDownloadsAtCheck: item.mainFileDownloadsAtCheck || "",
    status: item.status,
    recommendedUse: modpackRecommendedUse(item),
    caution: item.sourceNote,
    localGuideUrl: modpackGuideUrl(item)
  })),
  ...lookalikes.projects.map((item) => ({
    routeId: `lookalike-${routeIdSegment(item.projectId)}`,
    routeName: item.name,
    edition: item.projectType === "modpack" ? "Modpack" : "Similar-name project",
    host: item.host,
    owner: item.owner,
    projectId: item.projectId,
    projectUrl: item.projectUrl,
    projectDownloadsAtCheck: item.displayedDownloadsAtCheck,
    packageType: item.packageType,
    fileName: item.mainFile || "",
    recordId: item.mainFileRecord || "",
    recordUrl: item.mainFileUrl || item.projectUrl,
    minecraftVersion: item.minecraftVersion || "",
    loader: item.loader || "",
    publishedDate: item.lastUpdate || item.publishedAt || "",
    fileSizeMb: item.mainFileSizeBytes ? Number((item.mainFileSizeBytes / 1024 / 1024).toFixed(2)) : "",
    fileDownloadsAtCheck: item.mainFileDownloadsAtCheck || "",
    status: item.status,
    recommendedUse: "Use only when the player intentionally selected this similar-name result and needs to know whether it is the same as the current Verity Mod.",
    caution: item.sourceNote,
    localGuideUrl: lookalikeGuideUrl(item)
  }))
];

const curseforgeTrackedProjectDownloads = [
  java,
  verityBe,
  pntmc,
  pocket
].reduce((sum, project) => sum + Number(project.projectDownloadsAtCheck || 0), 0);
const curseforgePlusModrinthProjectDownloads = curseforgeTrackedProjectDownloads + Number(modrinth.projectDownloadsAtCheck || 0);

const summary = {
  curseforgeTrackedProjectDownloads,
  curseforgePlusModrinthProjectDownloads,
  note: "These are platform display counters across separate public project pages. They are not unique players, unique installs, or safety verdicts."
};

const sourceMap = {
  $schema: `${site}/data/verity-source-map.schema.json`,
  schemaVersion: 1,
  generatedAt,
  canonicalUrl: `${site}/source-map/`,
  method: "Derived from the site's checked release and modpack snapshots, which are maintained from public first-party project pages, official APIs where available, and exact file records. The source map normalizes route IDs for citation and comparison; it does not mirror files.",
  sourceSnapshots: [
    `${site}/data/verity-releases.json`,
    `${site}/data/verity-modpacks.json`,
    `${site}/data/verity-lookalikes.json`
  ],
  downloadCounterSummary: summary,
  records
};

fs.writeFileSync("data/verity-source-map.json", `${JSON.stringify(sourceMap, null, 2)}\n`);

const csvColumns = [
  "routeId",
  "routeName",
  "edition",
  "host",
  "owner",
  "projectId",
  "projectUrl",
  "projectDownloadsAtCheck",
  "packageType",
  "fileName",
  "recordId",
  "recordUrl",
  "minecraftVersion",
  "loader",
  "publishedDate",
  "fileSizeMb",
  "fileDownloadsAtCheck",
  "status",
  "recommendedUse",
  "caution",
  "localGuideUrl"
];

function csvCell(value) {
  const text = value == null ? "" : String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

const csv = [
  csvColumns.join(","),
  ...records.map((record) => csvColumns.map((column) => csvCell(record[column])).join(","))
].join("\n");
fs.writeFileSync("data/verity-source-map.csv", `${csv}\n`);

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatNumber(value) {
  return Number.isInteger(value) ? value.toLocaleString("en-US") : "";
}

function formatCheckedDate(value) {
  const [year, month, day] = String(value).slice(0, 10).split("-").map(Number);
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ][month - 1];
  return `${monthName} ${day}, ${year}`;
}

function rowHtml(record) {
  return `              <tr>
                <td>${escapeHtml(record.routeName)}</td>
                <td>${escapeHtml(record.edition)} · ${escapeHtml(record.host)}</td>
                <td>${escapeHtml(record.owner)} · ${escapeHtml(record.projectId)}</td>
                <td>${escapeHtml(record.fileName || "Project page")}</td>
                <td>${escapeHtml(record.recordId || "Project")}</td>
                <td>${escapeHtml(record.status)}</td>
                <td><a href="${escapeHtml(record.localGuideUrl)}">Guide</a></td>
              </tr>`;
}

const tableRows = records.map(rowHtml).join("\n");
const checkedDateLabel = formatCheckedDate(generatedAt);
const jsonLdRecords = records.slice(0, 10).map((record, index) => ({
  "@type": "ListItem",
  position: index + 1,
  name: record.routeName,
  url: record.localGuideUrl
}));

const pageHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Verity Mod Source Map: Project IDs, Files &amp; CSV Data</title>
    <meta
      name="description"
      content="Cite the current Verity Mod source map with Project IDs, file records, owners, Java and Bedrock routes, VERITY.exe modpack data, JSON, and CSV."
    />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <link rel="canonical" href="${site}/source-map/" />
    <link rel="alternate" type="application/json" title="Verity Mod source map JSON" href="/data/verity-source-map.json" />
    <link rel="alternate" type="text/csv" title="Verity Mod source map CSV" href="/data/verity-source-map.csv" />
    <meta property="og:title" content="Verity Mod Source Map" />
    <meta property="og:description" content="A citation-ready source map for Verity Java, Bedrock, MCPE, PnTMC, Modrinth, CurseForge, and VERITY.exe routes." />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${site}/source-map/" />
    <meta property="og:image" content="${site}/assets/images/verity-mod-share-v1.webp" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="theme-color" content="#171611" />
    <link rel="icon" href="../favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="../styles.css" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-37FVY65SR5"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-37FVY65SR5');
    </script>
    <script type="application/ld+json">
      ${JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Dataset",
            "@id": `${site}/source-map/#dataset`,
            name: "Verity Mod source map",
            description: "Citation-ready table of current Verity project routes, similar-name results, owners, Project IDs, file records, package types, status, and local guide URLs.",
            url: `${site}/source-map/`,
            distribution: [
              {
                "@type": "DataDownload",
                encodingFormat: "application/json",
                contentUrl: `${site}/data/verity-source-map.json`
              },
              {
                "@type": "DataDownload",
                encodingFormat: "text/csv",
                contentUrl: `${site}/data/verity-source-map.csv`
              }
            ],
            dateModified: generatedAt.slice(0, 10),
            isBasedOn: [`${site}/data/verity-releases.json`, `${site}/data/verity-modpacks.json`, `${site}/data/verity-lookalikes.json`],
            creator: { "@type": "Organization", name: "Verity Mod Checker" },
            keywords: ["verity mod source map", "verity mod project id", "verity mod csv", "verity dweller", "verity mod data"]
          },
          {
            "@type": "CollectionPage",
            "@id": `${site}/source-map/#webpage`,
            url: `${site}/source-map/`,
            name: "Verity Mod Source Map: Project IDs, Files and CSV Data",
            isPartOf: { "@id": `${site}/#website` },
            about: ["Verity Mod", "Minecraft Java", "Minecraft Bedrock", "CurseForge", "Modrinth", "MCPEDL"]
          },
          {
            "@type": "ItemList",
            "@id": `${site}/source-map/#routes`,
            name: "Verity source map routes",
            itemListElement: jsonLdRecords
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Verity Mod Guide", item: `${site}/` },
              { "@type": "ListItem", position: 2, name: "Source Map", item: `${site}/source-map/` }
            ]
          },
          {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can I cite this Verity source map?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Cite the page, JSON, or CSV when you need a stable route table for Verity project IDs, owners, file records, and package types. The data is a point-in-time source map, not a file mirror or malware verdict."
                }
              },
              {
                "@type": "Question",
                name: "Does the source map host Verity Mod files?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. The source map only links to public maintainer project pages and local guide pages. It does not mirror Java JARs, Bedrock MCADDONs, modpacks, or APKs."
                }
              }
            ]
          }
        ]
      }, null, 8)}
    </script>
  </head>
  <body>
    <header class="topbar" aria-label="Site header">
      <a class="brand" href="/" aria-label="Verity Mod Guide home">
        <span class="brand-mark" aria-hidden="true">V</span>
        <span>Verity Mod Guide</span>
      </a>
      <nav class="nav" aria-label="Primary navigation">
        <a href="/">Checker</a>
        <a href="/download/">Download</a>
        <a href="/updates/">Updates</a>
        <a href="/routes/">Routes</a>
        <a href="/source-map/">Source map</a>
        <a href="/faq/">FAQ</a>
      </nav>
    </header>

    <main>
      <section class="hero route-hero">
        <div class="hero-copy">
          <p class="eyebrow">Citation asset checked ${checkedDateLabel}</p>
          <h1>Verity Mod Source Map</h1>
          <p class="lede">
            This page is built for editors, video creators, server owners, wiki maintainers, and players who
            need one reliable Verity Mod reference without copying files from a mirror. It normalizes the
            current Java, Bedrock, MCPE, PnTMC, Modrinth, CurseForge, VERITY.exe, and similar-name routes into a single
            source map. Use it to answer which Project ID belongs to which owner, which file record is current,
            which package type should be installed, and which stale record should only be used for diagnosis.
          </p>
          <div class="trust-strip" aria-label="Source map principles">
            <span>JSON and CSV</span>
            <span>Project IDs first</span>
            <span>No file mirrors</span>
            <span>Point-in-time data</span>
          </div>
        </div>

        <aside class="result-panel">
          <div class="result-status">
            <span class="status-dot" aria-hidden="true"></span>
            <span>Reusable asset</span>
          </div>
          <h2>Use the source map when you need to cite records, not download files</h2>
          <p>
            The current checked snapshot lists ${records.length} route records. It includes the stable Verity JE
            CurseForge file, the Modrinth checksum route, observed beta records that now return 404, Verity BE,
            PnTMC Bedrock rows, Pocket Edition, separate modpack routes, and current similar-name results such
            as Verity Dweller. The CSV is useful for spreadsheets,
            public notes, and community comparison tables. The JSON is useful for bots, route checkers, and editors.
          </p>
          <ol class="steps">
            <li>Choose the row by edition and package type before using a file name.</li>
            <li>Match Project ID and record ID when a tutorial is vague.</li>
            <li>Cite the page, JSON, or CSV instead of uploading a copied file.</li>
            <li>Do not quote platform counters as unique players or safety proof.</li>
          </ol>
          <div class="action-row">
            <a class="primary-link" href="/data/verity-source-map.csv">Open CSV</a>
            <a class="copy-button" href="/data/verity-source-map.json">Open JSON</a>
            <a class="copy-button" href="/data/verity-lookalikes.json">Similar-name JSON</a>
            <a class="copy-button" href="/download/">Download map</a>
          </div>
        </aside>
      </section>

      <section class="intent-table" aria-label="Verity source map table">
        <div class="section-heading">
          <p class="eyebrow">Route records</p>
          <h2>Project IDs, file records, and local guide pages</h2>
          <p>
            A copied title can be misleading. The same Verity wording can point to a Java JAR, a Bedrock
            MCADDON, a Pocket Edition listing, a separate modpack, or an old beta link. The table below keeps
            the identity signals together so a reader can verify a source path before installing or citing it.
          </p>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Route</th>
                <th>Edition / host</th>
                <th>Owner / project</th>
                <th>File or page</th>
                <th>Record</th>
                <th>Status</th>
                <th>Guide</th>
              </tr>
            </thead>
            <tbody>
${tableRows}
            </tbody>
          </table>
        </div>
      </section>

      <section class="guide-section">
        <div class="section-heading">
          <p class="eyebrow">How to use the data</p>
          <h2>Good citations solve the player problem faster</h2>
        </div>
        <div class="guide-grid">
          <article class="guide-block guide-lead">
            <h3>Use the row that matches the edition</h3>
            <p>
              Most bad Verity Mod advice starts with a shortcut: a title says "latest," a video says
              "updated," or a reposted file name looks familiar. That shortcut skips the most important
              question, which is whether the player is on Java, Bedrock, MCPE, or a modpack profile. A
              Java JAR cannot be imported into Bedrock. A Bedrock MCADDON does not belong in a Java mods
              folder. A ZIP can be a modpack instead of the standalone file. A copied beta URL can keep
              circulating after the maintainer removes the active version record.
            </p>
            <p>
              The source map keeps those differences visible. Each row names the host, owner, Project ID,
              current or historical record, package type, local guide page, and caution note. If you write
              a community answer, cite the row and tell the reader why it matches their edition. If you
              maintain a spreadsheet or wiki, use the CSV and keep the local guide URL beside the official
              project URL. If you run a bot or route checker, use the JSON and check the generated timestamp
              before showing a verdict.
            </p>
          </article>
          <article class="guide-block">
            <h3>What the CSV is for</h3>
            <p>
              The CSV version is intentionally flat. It is easier to paste into a Google Sheet, a Discord
              moderation note, a wiki draft, or a content calendar. Columns such as <code>projectId</code>,
              <code>recordId</code>, <code>packageType</code>, and <code>localGuideUrl</code> are designed
              for quick comparison. If a user says "I downloaded Verity" without more detail, filter by
              package type first, then match the owner and record number.
            </p>
          </article>
          <article class="guide-block">
            <h3>What the JSON is for</h3>
            <p>
              The JSON version preserves the same route fields with a schema URL and source snapshot links.
              It is better for scripts, bots, and automated site checks because each record has a stable
              <code>routeId</code>. The JSON also carries the platform-counter summary: ${formatNumber(summary.curseforgeTrackedProjectDownloads)}
              displayed downloads across the four tracked CurseForge project pages, or ${formatNumber(summary.curseforgePlusModrinthProjectDownloads)}
              when the official Modrinth Verity JE project counter is added. Those are platform counters,
              not unique players.
            </p>
          </article>
          <article class="guide-block">
            <h3>Maintenance rules for reuse</h3>
            <p>
              Treat the generated timestamp as the freshness boundary. If a maintainer changes the current
              file, removes a version, updates a Bedrock build row, or changes a project description, the
              source snapshots should be checked first and this map should be rebuilt from those facts. Do
              not manually edit a single CSV cell in a public copy and call it current. That creates a forked
              reference where the page, JSON, CSV, and update feed disagree. A good community note should
              keep three links together: the official project or file record, the matching local guide page,
              and this normalized map. That gives players a path back to the maintainer page while still
              explaining why a similarly named result is Java-only, Bedrock-only, stale, or a separate
              modpack. If the question is about malware, privacy, payment, or account security, use this
              table only for source identity and run a separate security review.
            </p>
          </article>
          <article class="guide-block">
            <h3>What not to do with it</h3>
            <p>
              Do not use this source map as permission to mirror files, reupload jars, sell download packs,
              or claim that a metadata match proves a file is safe. It is a routing and citation asset. A
              player still needs to open the maintainer page, check the edition, install the correct loader
              or addon type, and follow the official setup notes. If a page hides the final URL behind a
              short-link chain, downloader, password archive, or APK installer, treat that as a separate
              source-risk problem.
            </p>
          </article>
        </div>
      </section>

      <section class="status-section">
        <div class="section-heading">
          <p class="eyebrow">Copy-safe reference</p>
          <h2>Short summary for editors and creators</h2>
          <p>
            Verity Mod is not one universal download. The checked Java route is Verity JE on CurseForge and
            Modrinth; the checked Bedrock routes include Verity BE and PnTMC's Verity - Bedrock Edition;
            Pocket Edition and VERITY.exe are separate route contexts. For citations, use
            <a href="/source-map/">the source map page</a>, <a href="/data/verity-source-map.json">JSON</a>, or
            <a href="/data/verity-source-map.csv">CSV</a>. This site links to public project records and does
            not host or mirror downloads.
          </p>
        </div>
      </section>
    </main>

    <footer>
      <nav class="footer-routes" aria-label="Footer route links">
        <a href="/">Checker</a>
        <a href="/download/">Download</a>
        <a href="/routes/">All routes</a>
        <a href="/source-map/">Source map</a>
        <a href="/data/verity-source-map.json">Source JSON</a>
        <a href="/data/verity-source-map.csv">Source CSV</a>
        <a href="/feed.xml">Updates feed</a>
      </nav>
      <p>Independent Verity Mod source map. Minecraft is a trademark of Mojang Studios. This site is not official and does not host files.</p>
    </footer>
    <script src="/analytics.js" defer></script>
  </body>
</html>
`;

fs.mkdirSync(path.join("source-map"), { recursive: true });
fs.writeFileSync(path.join("source-map", "index.html"), pageHtml);

console.log(`SOURCE_MAP_BUILT ${records.length} records`);
