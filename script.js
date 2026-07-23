const routes = {
  java: {
    label: "Java setup route",
    readout: "Java",
    link: "https://www.curseforge.com/minecraft/mc-mods/verity-je/files/8461257",
    versions: ["1.21.1 NeoForge", "1.20.1 Forge", "I am not sure"],
    issues: ["download", "not working", "voice not working", "AI setup", "is it real"],
    summaries: {
      download: {
        title: "Use the Java project page and confirm your loader",
        summary:
          "For Java, the safest Verity Mod download path starts with the maintainer page. Match Minecraft version and loader before launching.",
        steps: [
          "Open the Java route and verify the file is listed for your Minecraft version.",
          "Install the matching Forge or NeoForge loader before adding the mod file.",
          "Launch once with only required dependencies if the game crashes.",
          "Add AI or voice settings after the base mod loads successfully."
        ]
      },
      "not working": {
        title: "Check loader, version, and AI setup in that order",
        summary:
          "Most Java failures come from a version mismatch, an unsupported loader, or incomplete AI configuration.",
        steps: [
          "Confirm that the selected Verity Mod file matches your Minecraft version.",
          "Confirm Forge versus NeoForge instead of mixing loaders.",
          "Disable unrelated mods and test a clean profile.",
          "If the character stays silent, finish Groq or Ollama configuration outside this site."
        ]
      },
      "voice not working": {
        title: "Verify the voice stack before changing the mod",
        summary:
          "Voice issues are usually dependency, permission, or server configuration problems rather than a download problem.",
        steps: [
          "Confirm your build actually supports voice features.",
          "Check microphone permission in your operating system and launcher.",
          "Test voice chat in a clean world or server profile.",
          "Keep the Verity Mod file and any voice dependency on the same Minecraft version."
        ]
      },
      "AI setup": {
        title: "Configure Groq or Ollama only on the provider side",
        summary:
          "This checker never asks for keys. Use your provider settings, then return to Minecraft and test a simple prompt.",
        steps: [
          "Choose Groq or Ollama according to the Java project instructions.",
          "Create or configure the provider outside this website.",
          "Restart Minecraft after changing provider settings.",
          "If responses are slow, test a smaller model or a clean local profile."
        ]
      },
      "is it real": {
        title: "Trust maintainer pages over reposted files",
        summary:
          "A real Verity Mod route should point to known project pages and preserve the package identity.",
        steps: [
          "Avoid pages that force a downloader, APK, or unrelated extension.",
          "Check that the page names the edition and Minecraft version clearly.",
          "Prefer CurseForge or another maintainer-controlled page.",
          "Do not enter a Groq API key into random download pages."
        ]
      }
    }
  },
  bedrock: {
    label: "Bedrock addon route",
    readout: "Bedrock",
    link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-be/files/8486588",
    versions: ["Bedrock 26.30", "Bedrock 26.20", "I am not sure"],
    issues: ["download", "not working", "only saying ...", "box not spawning", "voice not working", "is it real"],
    summaries: {
      download: {
        title: "Use the Verity BE addon page, not the Java mod file",
        summary:
          "Bedrock players need addon files and world settings. A Java .jar file will not work in Bedrock.",
        steps: [
          "Open the Verity BE route and choose the addon version that matches your game.",
          "Import the addon into Minecraft Bedrock.",
          "Activate both resource and behavior packs in the world settings.",
          "Restart the world after the packs are enabled."
        ]
      },
      "not working": {
        title: "Check packs, cheats, and experimental settings",
        summary:
          "Bedrock setup usually fails when behavior packs are inactive or required world options are disabled.",
        steps: [
          "Open world settings and confirm behavior pack plus resource pack are active.",
          "Enable cheats if the addon instructions require commands.",
          "Turn on Beta APIs or experimental options when the version calls for it.",
          "Create a fresh test world to separate addon problems from old-world settings."
        ]
      },
      "only saying ...": {
        title: "Reconnect the Verity BE debugger backend",
        summary:
          "For Verity BE, dots usually mean Beta APIs or the project backend connection is missing rather than a bad download.",
        steps: [
          "Confirm that you installed Verity BE by Undertaletalelover, Project ID 1574632.",
          "Enable Beta APIs and cheats in a clean Bedrock 26.30 world.",
          "Check the current project page, then run the listed connect command; on July 18 it is /script debugger connect traye.ddns.net.",
          "If the command still fails, check the maintainer Discord or project comments for backend status before reinstalling."
        ]
      },
      "box not spawning": {
        title: "Confirm the command and world permissions",
        summary:
          "If the box or entity does not appear, the world often lacks the required behavior pack or command permission.",
        steps: [
          "Recheck that the behavior pack is active under the current world.",
          "Enable cheats and command permissions.",
          "Use the exact command from the maintainer page for your addon version.",
          "Restart Minecraft after changing experimental settings."
        ]
      },
      "voice not working": {
        title: "Enable Verity BE 1.0.9 local TTS before changing files",
        summary:
          "Verity BE 1.0.9 adds a local text-to-speech toggle. Bedrock addon behavior still differs from Java mod behavior.",
        steps: [
          "Confirm that you installed Verity BE 1.0.9, CurseForge record 8486588.",
          "Run /verity:tts on, then trigger a new dialogue response.",
          "Check Minecraft and device audio, then test without resource packs that alter sound behavior.",
          "Use the Verity BE maintainer page instead of Java troubleshooting."
        ]
      },
      "is it real": {
        title: "Check edition naming before downloading",
        summary:
          "Real Bedrock pages should clearly say Bedrock, addon, MCPE, or behavior pack. Avoid disguised Java downloads.",
        steps: [
          "Use maintainer pages that identify the Bedrock edition.",
          "Avoid archives that ask you to install unrelated launchers.",
          "Compare version numbers against your Minecraft Bedrock build.",
          "Do not install files from short-link chains with hidden final URLs."
        ]
      }
    }
  },
  pe: {
    label: "MCPE addon route",
    readout: "MCPE",
    link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-be/files/8486588",
    versions: ["MCPE current", "MCPE older build", "I am not sure"],
    issues: ["download", "not working", "box not spawning", "is it real"],
    summaries: {
      download: {
        title: "Use the MCPE-compatible Bedrock route",
        summary:
          "MCPE players should start from a Bedrock addon page and avoid desktop Java files.",
        steps: [
          "Open the MCPE route and verify it is listed for Bedrock or Pocket Edition.",
          "Import the addon through Minecraft on the device.",
          "Activate resource and behavior packs.",
          "Create a new world if an older save keeps failing."
        ]
      },
      "not working": {
        title: "Rebuild the world settings from a clean test world",
        summary:
          "On mobile, world settings and pack activation are the most common blockers.",
        steps: [
          "Create a new test world.",
          "Enable required experimental settings before opening the world.",
          "Activate both addon packs.",
          "Restart the app if the imported pack does not appear."
        ]
      },
      "box not spawning": {
        title: "Check commands and addon activation on mobile",
        summary:
          "The entity or box will not appear if commands are blocked or the behavior pack is missing.",
        steps: [
          "Enable cheats for the test world.",
          "Confirm behavior pack activation after importing.",
          "Use the command exactly as written by the maintainer.",
          "Update Minecraft if your MCPE build is older than the addon target."
        ]
      },
      "is it real": {
        title: "Avoid mobile download pages that hide the source",
        summary:
          "MCPE searches often lead to reposts. Prefer pages that name the addon, edition, and original project source.",
        steps: [
          "Check whether the page says Bedrock, MCPE, or addon.",
          "Avoid APK installers or unrelated store prompts.",
          "Prefer known mod hosting pages.",
          "Delete suspicious files that do not import into Minecraft."
        ]
      }
    }
  }
};

const fallbackIssue = {
  title: "Start with edition and version matching",
  summary: "Choose the nearest issue type and follow the checklist from top to bottom.",
  steps: ["Confirm edition.", "Confirm version.", "Use a maintainer page.", "Test in a clean world or profile."]
};

const versionSelect = document.querySelector("#versionSelect");
const issueSelect = document.querySelector("#issueSelect");
const resultLabel = document.querySelector("#resultLabel");
const resultTitle = document.querySelector("#resultTitle");
const resultSummary = document.querySelector("#resultSummary");
const stepsList = document.querySelector("#stepsList");
const primaryLink = document.querySelector("#primaryLink");
const copyButton = document.querySelector("#copyButton");
const readoutEdition = document.querySelector("#readoutEdition");
const voiceToggle = document.querySelector("#voiceToggle");
const aiToggle = document.querySelector("#aiToggle");
let currentEdition = "java";

function setOptions(select, items) {
  select.replaceChildren(
    ...items.map((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      return option;
    })
  );
}

function getActiveSummary(route, issue) {
  return route.summaries[issue] || fallbackIssue;
}

function render() {
  const route = routes[currentEdition];
  const issue = issueSelect.value || route.issues[0];
  const summary = getActiveSummary(route, issue);
  const steps = [...summary.steps];

  if (voiceToggle.checked && !steps.some((step) => step.toLowerCase().includes("voice"))) {
    steps.push("Because voice is enabled in your setup, verify microphone permission and any voice dependency separately.");
  }

  if (aiToggle.checked && currentEdition === "java" && !steps.some((step) => step.includes("Groq") || step.includes("Ollama"))) {
    steps.push("For Java AI behavior, configure Groq or Ollama outside this checker before testing again.");
  }

  resultLabel.textContent = route.label;
  resultTitle.textContent = summary.title;
  resultSummary.textContent = summary.summary;
  primaryLink.href = route.link;
  readoutEdition.textContent = route.readout;

  stepsList.replaceChildren(
    ...steps.map((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      return li;
    })
  );
}

function setEdition(edition) {
  currentEdition = edition;
  const route = routes[edition];
  setOptions(versionSelect, route.versions);
  setOptions(issueSelect, route.issues);

  document.querySelectorAll(".segment").forEach((button) => {
    const active = button.dataset.edition === edition;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  render();
}

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    setEdition(button.dataset.edition);
    trackEvent("verity_route_edition", { edition: button.dataset.edition });
  });
});

[versionSelect, issueSelect, voiceToggle, aiToggle].forEach((control) => {
  control.addEventListener("change", () => {
    render();
    trackEvent("verity_route_change", { control: control.id, edition: currentEdition });
  });
});

copyButton.addEventListener("click", async () => {
  const steps = Array.from(stepsList.querySelectorAll("li")).map((li, index) => `${index + 1}. ${li.textContent}`);
  const text = `${resultTitle.textContent}\n${resultSummary.textContent}\n\n${steps.join("\n")}\n\n${primaryLink.href}`;

  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = "Copied";
    setTimeout(() => {
      copyButton.textContent = "Copy checklist";
    }, 1600);
  } catch {
    copyButton.textContent = "Copy failed";
    setTimeout(() => {
      copyButton.textContent = "Copy checklist";
    }, 1600);
  }
});

setEdition(currentEdition);

const knownProjects = [
  {
    name: "Verity JE",
    edition: "Java",
    sources: [
      {
        platform: "CurseForge",
        id: "1591438",
        slugs: ["/minecraft/mc-mods/verity-je"],
        link: "https://www.curseforge.com/minecraft/mc-mods/verity-je/files"
      },
      {
        platform: "Modrinth",
        id: "on1Y0osD",
        slugs: ["/mod/verity-je-official"],
        link: "https://modrinth.com/mod/verity-je-official/versions"
      }
    ],
    releases: [
      {
        status: "current",
        filename: "verity-5.7.3.jar",
        versionNumber: "5.7.3",
        sizeMb: 235.06,
        version: "Minecraft 1.20.1 · Forge",
        published: "July 18, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8461257",
            link: "https://www.curseforge.com/minecraft/mc-mods/verity-je/files/8461257"
          },
          {
            platform: "Modrinth",
            id: "yAt0wv1Z",
            link: "https://modrinth.com/mod/verity-je-official/version/5.7.3",
            hashes: {
              sha1: "da28115bbad0478d9ed9c97f2466b67d46d13d51",
              sha512: "15cd8d895788f4859ecf442b7a970c8bca3b30db99aa170639b5f003a18b0f0255bdf5b042eb95a686ac51ecec80afbfeb766654c3471f5cc890664982cd9c81"
            }
          }
        ]
      },
      {
        status: "deprecated-buggy",
        filename: "verity-3.4.1.jar",
        versionNumber: "3.4.1",
        sizeMb: null,
        version: "Minecraft 1.21.1 · NeoForge",
        published: "June 30, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8346795",
            link: "https://www.curseforge.com/minecraft/mc-mods/verity-je/files/8346795"
          }
        ]
      }
    ]
  },
  {
    name: "Verity BE",
    edition: "Bedrock",
    sources: [
      {
        platform: "CurseForge",
        id: "1574632",
        slugs: ["/minecraft-bedrock/addons/verity-be"],
        link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-be/files"
      }
    ],
    releases: [
      {
        status: "current",
        filename: "Verity (Stable) (1.0.9)-(26.3).mcaddon",
        versionNumber: "1.0.9",
        sizeMb: 19.70,
        version: "Bedrock 26.30",
        published: "July 22, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8486588",
            link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-be/files/8486588"
          }
        ]
      }
    ]
  },
  {
    name: "Verity - Bedrock Edition",
    edition: "Bedrock",
    sources: [
      {
        platform: "CurseForge",
        id: "1575941",
        slugs: ["/minecraft-bedrock/addons/verity-bedrock-edition"],
        link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-bedrock-edition/files"
      }
    ],
    releases: [
      {
        status: "current",
        filename: "ThatMob's Verity 2.1.0 by PnTMC [Add-on] - V26.30.mcaddon",
        versionNumber: "2.1.0",
        sizeMb: 35.45,
        version: "Bedrock 26.30",
        published: "June 27, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8327253",
            link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-bedrock-edition/files/8327253"
          }
        ]
      }
    ]
  }
];

function normalizeSignal(value) {
  try {
    return decodeURIComponent(value).toLowerCase();
  } catch {
    return value.toLowerCase();
  }
}

function findKnownRelease(value) {
  const clean = normalizeSignal(value);
  for (const project of knownProjects) {
    for (const release of project.releases) {
      const record = release.records.find((item) =>
        clean.includes(item.id.toLowerCase()) ||
        Object.values(item.hashes || {}).some((hash) => clean.includes(hash.toLowerCase()))
      );
      if (clean.includes(release.filename.toLowerCase()) || record) return { project, release, record };
    }
  }
  return null;
}

function projectIdentityLabel(project) {
  return project.sources.map((source) => `${source.platform} ${source.id}`).join(" · ");
}

function releaseRecordLink(project, release, preferredPlatform = "") {
  if (release) {
    const record = release.records.find((item) => item.platform === preferredPlatform) || release.records[0];
    if (record) return record.link;
  }
  return project.sources.find((source) => source.platform === preferredPlatform)?.link || project.sources[0].link;
}

function releaseRecordLabel(release, record) {
  if (!record) return "files";
  return record.platform === "CurseForge" ? `record #${record.id}` : `version ${release.versionNumber}`;
}

function findKnownSourceUrl(parsedUrl) {
  const host = parsedUrl.hostname.replace(/^www\./, "");
  const platform = host === "curseforge.com" || host.endsWith(".curseforge.com")
    ? "CurseForge"
    : host === "modrinth.com" || host.endsWith(".modrinth.com")
      ? "Modrinth"
      : "";
  if (!platform) return null;

  const path = normalizeSignal(parsedUrl.pathname);
  for (const project of knownProjects) {
    const source = project.sources.find((item) =>
      item.platform === platform &&
      (item.slugs.some((slug) => path.includes(slug.toLowerCase())) || path.includes(item.id.toLowerCase()))
    );
    if (!source) continue;

    for (const release of project.releases) {
      const record = release.records.find((item) =>
        item.platform === platform &&
        (path.includes(item.id.toLowerCase()) || path.includes(`/version/${release.versionNumber.toLowerCase()}`))
      );
      if (record) return { project, source, release, record };
    }
    return { project, source, release: null, record: null };
  }
  return null;
}

function releasePublisherHash(release, algorithm) {
  return release?.records.find((record) => record.hashes?.[algorithm])?.hashes[algorithm] || "";
}

const sourceCheckForm = document.querySelector("#sourceCheckForm");
const sourceInput = document.querySelector("#sourceInput");
const sourceFile = document.querySelector("#sourceFile");
const sourceFileName = document.querySelector("#sourceFileName");
const sourceReset = document.querySelector("#sourceReset");
const sourceResult = document.querySelector("#sourceResult");
const sourceVerdict = document.querySelector("#sourceVerdict");
const sourceRisk = document.querySelector("#sourceRisk");
const sourceTitle = document.querySelector("#sourceTitle");
const sourceSummary = document.querySelector("#sourceSummary");
const sourceFacts = document.querySelector("#sourceFacts");
const sourceChecks = document.querySelector("#sourceChecks");
const sourceProjectLink = document.querySelector("#sourceProjectLink");
const copyHashButton = document.querySelector("#copyHashButton");
let currentFileHash = "";
let currentFileHashLabel = "SHA-256";

function trackEvent(name, parameters = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, parameters);
  }
}

function packageType(value) {
  const clean = value.toLowerCase().split(/[?#]/)[0];
  if (clean.endsWith(".jar")) return "Java JAR";
  if (clean.endsWith(".mcaddon")) return "Bedrock MCADDON";
  if (clean.endsWith(".mcpack")) return "Bedrock MCPACK";
  if (clean.endsWith(".zip")) return "ZIP archive or source";
  if (/\.(exe|msi|apk|dmg|scr)$/.test(clean)) return "Executable installer";
  return "Not identified";
}

function findKnownProject(value) {
  const clean = normalizeSignal(value);
  const releaseMatch = findKnownRelease(value);
  if (releaseMatch) return releaseMatch.project;
  return knownProjects.find((project) =>
    project.sources.some((source) =>
      clean.includes(source.id.toLowerCase()) ||
      source.slugs.some((slug) => clean.includes(slug.toLowerCase()))
    )
  );
}

function buildFact(label, value) {
  const wrapper = document.createElement("div");
  const term = document.createElement("dt");
  const description = document.createElement("dd");
  term.textContent = label;
  description.textContent = value;
  wrapper.append(term, description);
  return wrapper;
}

function setSourceResult(result) {
  sourceResult.dataset.state = result.state;
  sourceVerdict.textContent = result.verdict;
  sourceRisk.textContent = result.risk;
  sourceTitle.textContent = result.title;
  sourceSummary.textContent = result.summary;
  sourceFacts.replaceChildren(
    buildFact("Source", result.source),
    buildFact("Package", result.package),
    buildFact("Project match", result.project),
    buildFact(result.hashLabel || "SHA-256", result.hash || "Choose a file to calculate"),
    buildFact("Publisher checksum", result.publisherCheck || "Not checked")
  );
  sourceChecks.replaceChildren(
    ...result.checks.map((check) => {
      const item = document.createElement("li");
      item.textContent = check;
      return item;
    })
  );
  sourceProjectLink.href = result.link;
  sourceProjectLink.textContent = result.linkLabel;
  if (result.external) {
    sourceProjectLink.target = "_blank";
    sourceProjectLink.rel = "noopener";
  } else {
    sourceProjectLink.removeAttribute("target");
    sourceProjectLink.removeAttribute("rel");
  }
  currentFileHash = result.hash || "";
  currentFileHashLabel = result.hashLabel || "SHA-256";
  copyHashButton.disabled = !currentFileHash;
  copyHashButton.textContent = `Copy ${currentFileHashLabel}`;
}

function inspectTextSource(rawValue) {
  const value = rawValue.trim();
  const releaseMatch = findKnownRelease(value);
  const project = releaseMatch?.project || findKnownProject(value);
  const type = packageType(value);
  const hashAlgorithm = /^[a-f0-9]{40}$/i.test(value)
    ? "SHA-1"
    : /^[a-f0-9]{64}$/i.test(value)
      ? "SHA-256"
      : /^[a-f0-9]{128}$/i.test(value)
        ? "SHA-512"
        : "";
  const riskyExtension = type === "Executable installer";
  let parsedUrl = null;

  try {
    parsedUrl = new URL(value);
  } catch {
    parsedUrl = null;
  }

  if (hashAlgorithm) {
    const normalizedHash = value.toLowerCase();
    const knownChecksum = releaseMatch?.record &&
      Object.values(releaseMatch.record.hashes || {}).some((hash) => hash.toLowerCase() === normalizedHash);

    if (knownChecksum) {
      return {
        state: "verified",
        verdict: "Publisher checksum match",
        risk: "Exact bytes identified",
        title: `${releaseMatch.project.name} ${hashAlgorithm} checksum recognized`,
        summary: `This fingerprint exactly matches the checksum published for ${releaseMatch.release.filename} on the checked Modrinth version record. It proves byte-for-byte identity with that recorded file, not that the mod is risk-free.`,
        source: `${releaseMatch.record.platform} checksum`,
        package: releaseMatch.release.filename.endsWith(".jar") ? "Java JAR" : "Bedrock MCADDON",
        project: `${releaseMatch.project.name} · ${projectIdentityLabel(releaseMatch.project)}`,
        hash: normalizedHash,
        hashLabel: hashAlgorithm,
        publisherCheck: `${hashAlgorithm} exact match`,
        checks: [
          "The checksum matches the publisher record byte for byte.",
          "A publisher checksum is an identity check, not a malware guarantee.",
          "Keep the Minecraft version and loader matched to the same release."
        ],
        link: releaseMatch.record.link,
        linkLabel: `Open ${releaseMatch.record.platform} ${releaseRecordLabel(releaseMatch.release, releaseMatch.record)}`,
        external: true
      };
    }

    const reputationLookupSupported = hashAlgorithm !== "SHA-512";
    return {
      state: "caution",
      verdict: "Fingerprint received",
      risk: "No checked match",
      title: `This ${hashAlgorithm} does not match a recorded publisher checksum`,
      summary: "The fingerprint is valid in shape, but it does not match the current publisher checksum recorded by this checker. That does not prove the file is malicious; confirm the exact version and source before installing it.",
      source: `${hashAlgorithm} input`,
      package: "Unknown",
      project: "No identity data",
      hash: normalizedHash,
      hashLabel: hashAlgorithm,
      publisherCheck: "No current match",
      checks: [
        "A matching hash proves two files are identical, not that either file is safe.",
        "Do not post private API keys, account tokens, or personal paths with a hash report.",
        "Return to the publisher project record and verify the release metadata."
      ],
      link: reputationLookupSupported ? `https://www.virustotal.com/gui/file/${normalizedHash}` : "/download/",
      linkLabel: reputationLookupSupported ? "Look up this hash" : "Compare checked projects",
      external: reputationLookupSupported
    };
  }

  if (riskyExtension) {
    return {
      state: "danger",
      verdict: "Package mismatch",
      risk: "Do not run it",
      title: "This is not a normal Verity Mod package",
      summary: "Minecraft Java mods normally use JAR files, while Bedrock add-ons normally use MCADDON or MCPACK files. An EXE, MSI, APK, DMG, or SCR presented as the mod needs an explanation from a traceable publisher before it is opened.",
      source: parsedUrl ? parsedUrl.hostname : "Filename only",
      package: type,
      project: project ? `${project.name} name signal only` : "No known match",
      hash: "",
      checks: [
        "Do not run the file to see what happens.",
        "Delete downloads from hidden redirects, short links, or unrelated installers.",
        "Open the known project record and obtain the package type listed there."
      ],
      link: "/download/",
      linkLabel: "Open known projects",
      external: false
    };
  }

  if (parsedUrl) {
    const host = parsedUrl.hostname.replace(/^www\./, "");
    const riskyHosts = ["mediafire.com", "mega.nz", "dropbox.com", "bit.ly", "tinyurl.com", "discordapp.com", "discord.com"];
    const isRiskyHost = riskyHosts.some((domain) => host === domain || host.endsWith(`.${domain}`));
    const isCurseForge = host === "curseforge.com" || host.endsWith(".curseforge.com");
    const isModrinth = host === "modrinth.com" || host.endsWith(".modrinth.com");
    const isGitHub = host === "github.com" || host.endsWith(".github.com");
    const sourceMatch = findKnownSourceUrl(parsedUrl);

    if (sourceMatch) {
      const matchedRelease = sourceMatch.release || releaseMatch?.release;
      const matchedRecord = sourceMatch.record || releaseMatch?.record;
      const hasPublisherHash = Boolean(releasePublisherHash(matchedRelease, "sha512"));
      return {
        state: "verified",
        verdict: "Known project match",
        risk: "Identity matched",
        title: `${sourceMatch.project.name} ${sourceMatch.source.platform} route recognized`,
        summary: `The host and project path match the checked ${sourceMatch.project.edition} source. Still confirm the exact Minecraft version, loader or add-on build, owner, and release date on the destination page before downloading.`,
        source: host,
        package: type,
        project: `${sourceMatch.project.name} · ${projectIdentityLabel(sourceMatch.project)}`,
        hash: "",
        publisherCheck: hasPublisherHash ? "SHA-512 available for local comparison" : "Not published in the checked record",
        checks: [
          `The ${sourceMatch.source.platform} host and known project path match.`,
          "This result verifies identity signals, not the contents of a downloaded file.",
          hasPublisherHash
            ? "Choose the local JAR to compare it with the publisher's SHA-512 checksum."
            : "Use the project files tab and avoid direct mirrors of an older release."
        ],
        link: matchedRecord?.link || releaseRecordLink(sourceMatch.project, matchedRelease, sourceMatch.source.platform),
        linkLabel: matchedRecord
          ? `Open ${sourceMatch.source.platform} ${releaseRecordLabel(matchedRelease, matchedRecord)}`
          : `Open ${sourceMatch.project.name} on ${sourceMatch.source.platform}`,
        external: true
      };
    }

    if (isRiskyHost) {
      return {
        state: "danger",
        verdict: "Mirror or redirect host",
        risk: "Source not verified",
        title: "This link does not preserve a known project identity",
        summary: "A generic file host, chat attachment, or short link can distribute bytes without showing the original owner, Project ID, supported Minecraft version, or release history. Do not treat the filename as proof.",
        source: host,
        package: type,
        project: project ? `${project.name} text match only` : "No known match",
        hash: "",
        checks: [
          "Do not install from a mirror when the maintained project page is available.",
          "A copied filename can be attached to different file contents.",
          "Use the known project record and compare the current release there."
        ],
        link: project ? releaseRecordLink(project, releaseMatch?.release) : "/download/",
        linkLabel: project ? `Open ${project.name} files` : "Compare known projects",
        external: Boolean(project),
      };
    }

    if (isCurseForge || isModrinth || isGitHub) {
      return {
        state: "caution",
        verdict: "Recognized platform",
        risk: "Project not matched",
        title: "The host is known, but this project identity is different or unknown",
        summary: "A trusted hosting platform can contain many unrelated projects. Compare the author, project path, edition, version, and release record instead of assuming every Verity-named page is the same mod.",
        source: host,
        package: type,
        project: project ? `${project.name} partial match` : "No checked project match",
        hash: "",
        checks: [
          "Platform reputation does not replace project verification.",
          "Confirm Java versus Bedrock before downloading.",
          "Do not mistake a source ZIP for an installable release."
        ],
        link: "/download/",
        linkLabel: "Compare checked projects",
        external: false
      };
    }

    return {
      state: "caution",
      verdict: "Unknown source",
      risk: "Manual review needed",
      title: "This domain is not in the checked source map",
      summary: "The checker cannot connect this host to one of the current Verity project records. That does not prove the link is malicious, but it means the source, owner, and release history remain unverified.",
      source: host,
      package: type,
      project: project ? `${project.name} text match only` : "No known match",
      hash: "",
      checks: [
        "Find the original project page before downloading.",
        "Avoid pages that hide the final URL or require unrelated software.",
        "Match the game edition and package type before installation."
      ],
      link: "/download/",
      linkLabel: "Open checked source map",
      external: false
    };
  }

  if (project) {
    const exactFile = Boolean(releaseMatch);
    const exactProjectId = project.sources.some((source) => value.toLowerCase() === source.id.toLowerCase());
    const matchedRecord = releaseMatch?.record || releaseMatch?.release.records[0];
    const releaseDetail = releaseMatch
      ? `${releaseMatch.release.version}; ${releaseRecordLabel(releaseMatch.release, matchedRecord)}; ${releaseMatch.release.published}`
      : "No exact current file record in the input";
    return {
      state: "caution",
      verdict: exactFile || exactProjectId ? "Known release signal" : "Partial name match",
      risk: "Name can be copied",
      title: exactFile ? `${project.name} filename recognized` : `${project.name} record recognized`,
      summary: `The text matches a checked filename, project path, or Project ID. ${releaseDetail}. A filename can be copied, so use the linked publisher record to confirm that the downloaded bytes came from the same release.`,
      source: "Text or filename",
      package: type,
      project: `${project.name} · ${projectIdentityLabel(project)}`,
      hash: "",
      publisherCheck: releasePublisherHash(releaseMatch?.release, "sha512") ? "SHA-512 available for local comparison" : "Not published in the checked record",
      checks: [
        "Filename matching is useful but not a content scan.",
        "Confirm the current file on the publisher files page.",
        releasePublisherHash(releaseMatch?.release, "sha512")
          ? "Choose the local file to compare its SHA-512 with the publisher record."
          : "Choose a local file to calculate its SHA-256 fingerprint."
      ],
      link: releaseRecordLink(project, releaseMatch?.release, matchedRecord?.platform),
      linkLabel: matchedRecord
        ? `Open ${matchedRecord.platform} ${releaseRecordLabel(releaseMatch.release, matchedRecord)}`
        : `Open ${project.name} files`,
      external: true
    };
  }

  return {
    state: "caution",
    verdict: "No known match",
    risk: "Manual review needed",
    title: "This name alone is not enough to verify a Verity Mod file",
    summary: "The value does not match a checked project ID, project path, or current filename. Open the source map and compare edition, owner, version, and package type before installing anything.",
    source: "Text or filename",
    package: type,
    project: "No known match",
    hash: "",
    checks: [
      "Check whether the file is a Java JAR or Bedrock add-on.",
      "Avoid executable installers and hidden redirect chains.",
      "Use a maintained project page instead of a repost."
    ],
    link: "/download/",
    linkLabel: "Compare known projects",
    external: false
  };
}

function digestToHex(digest) {
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function inspectLocalFile(file) {
  const type = packageType(file.name);
  const releaseMatch = findKnownRelease(file.name);
  const project = releaseMatch?.project || findKnownProject(file.name);
  const riskyExtension = type === "Executable installer";
  const fileBytes = await file.arrayBuffer();
  const hash = digestToHex(await crypto.subtle.digest("SHA-256", fileBytes));
  const expectedSha512 = releasePublisherHash(releaseMatch?.release, "sha512");
  const sha512 = expectedSha512 ? digestToHex(await crypto.subtle.digest("SHA-512", fileBytes)) : "";
  const publisherHashMatches = Boolean(expectedSha512 && sha512 === expectedSha512);
  const publisherHashMismatch = Boolean(expectedSha512 && sha512 !== expectedSha512);
  const size = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;

  if (riskyExtension) {
    return {
      state: "danger",
      verdict: "Package mismatch",
      risk: "Do not run it",
      title: "The selected file is an executable, not a normal mod package",
      summary: "The browser calculated a fingerprint without uploading the file. Minecraft Java and Bedrock use different package formats, but neither normally requires this executable type as the Verity mod itself.",
      source: `Local file · ${size}`,
      package: type,
      project: project ? `${project.name} filename text only` : "No known match",
      hash,
      hashLabel: "SHA-256",
      publisherCheck: "Not applicable",
      checks: [
        "Do not launch the executable.",
        "Search the SHA-256 before deleting it if you need an incident record.",
        "Return to a traceable project files page."
      ],
      link: `https://www.virustotal.com/gui/file/${hash}`,
      linkLabel: "Look up this hash",
      external: true
    };
  }

  const measuredSizeMb = file.size / (1024 * 1024);
  const expectedSizeMb = releaseMatch?.release.sizeMb;
  const sizeMatches = expectedSizeMb ? Math.abs(measuredSizeMb - expectedSizeMb) <= 0.15 : false;
  const exactMetadata = Boolean(releaseMatch && sizeMatches);
  const checksumRecord = releaseMatch?.release.records.find((record) => record.hashes?.sha512);
  const matchedRecord = releaseMatch?.record || checksumRecord || releaseMatch?.release.records[0];
  const expectedDetail = releaseMatch
    ? `${releaseMatch.release.version}; expected ${expectedSizeMb ? `${expectedSizeMb.toFixed(2)} MB` : "size not recorded"}; ${releaseRecordLabel(releaseMatch.release, matchedRecord)}`
    : "No current release metadata matched";

  return {
    state: publisherHashMismatch ? "danger" : publisherHashMatches || exactMetadata ? "verified" : "caution",
    verdict: publisherHashMismatch
      ? "Publisher checksum mismatch"
      : publisherHashMatches
        ? "Publisher checksum match"
        : exactMetadata
          ? "Current metadata match"
          : project
            ? "Filename match only"
            : "Local fingerprint created",
    risk: publisherHashMismatch ? "Not the checked bytes" : publisherHashMatches ? "Exact bytes identified" : exactMetadata ? "Not a malware verdict" : "Contents not scanned",
    title: publisherHashMismatch
      ? `${project.name} filename matches, but the SHA-512 does not`
      : publisherHashMatches
        ? `${project.name} matches the publisher's current checksum`
        : exactMetadata
          ? `${project.name} name and size match the current record`
          : project
            ? `${project.name} filename signal found`
            : "File fingerprint calculated locally",
    summary: publisherHashMismatch
      ? `The filename or size may match, but the local SHA-512 is different from the checksum published for the checked Modrinth file (${expectedDetail}). This does not identify malware, but it proves this is not byte-for-byte the recorded artifact.`
      : publisherHashMatches
        ? `The filename, size, and SHA-512 match the checked publisher metadata (${expectedDetail}). This proves byte-for-byte identity with that Modrinth artifact; it is still not a general malware guarantee.`
        : exactMetadata
          ? `The filename and displayed size match the checked public release metadata (${expectedDetail}). No publisher checksum is recorded for this route, so the result remains a metadata match rather than a byte-for-byte verification.`
      : project
        ? `The name matches a checked project signal, but the full current metadata did not match (${expectedDetail}). Compare this SHA-256 and the original publisher record before installing.`
        : "The file was not uploaded. Its package type and SHA-256 are now visible, but no checked project identity could be matched from the filename alone.",
    source: `Local file · ${size}`,
    package: type,
    project: project ? `${project.name} · ${projectIdentityLabel(project)}` : "No known match",
    hash,
    hashLabel: "SHA-256",
    publisherCheck: expectedSha512 ? (publisherHashMatches ? "SHA-512 exact match" : "SHA-512 mismatch") : "No publisher hash recorded",
    checks: [
      "SHA-256 identifies the selected bytes and changes if the file changes.",
      publisherHashMatches
        ? "The local SHA-512 exactly matches the publisher's current Modrinth checksum."
        : publisherHashMismatch
          ? "Do not treat this file as the checked Modrinth artifact."
          : exactMetadata
            ? "Filename and displayed size match the checked release record."
            : "A hash without a publisher reference does not prove safety.",
      project ? "Open the matched project files page and compare release details." : "Confirm the source, owner, edition, and release before installing."
    ],
    link: project ? releaseRecordLink(project, releaseMatch?.release, matchedRecord?.platform) : `https://www.virustotal.com/gui/file/${hash}`,
    linkLabel: project
      ? matchedRecord
        ? `Open ${matchedRecord.platform} ${releaseRecordLabel(releaseMatch.release, matchedRecord)}`
        : `Open ${project.name} files`
      : "Look up this hash",
    external: true
  };
}

sourceFile.addEventListener("change", () => {
  const file = sourceFile.files[0];
  if (file) sourceInput.value = "";
  sourceFileName.textContent = file ? `${file.name} · ${(file.size / (1024 * 1024)).toFixed(2)} MB` : "No file selected";
});

sourceInput.addEventListener("input", () => {
  if (!sourceInput.value.trim() || !sourceFile.files.length) return;
  sourceFile.value = "";
  sourceFileName.textContent = "No file selected";
});

sourceCheckForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const file = sourceFile.files[0];
  const value = sourceInput.value.trim();

  if (!file && !value) {
    sourceInput.focus();
    setSourceResult({
      state: "caution",
      verdict: "Nothing to check",
      risk: "Input required",
      title: "Paste a URL or choose a local file",
      summary: "The checker needs a source URL, Project ID, filename, checksum, or local file before it can compare identity signals.",
      source: "Waiting",
      package: "Waiting",
      project: "Waiting",
      hash: "",
      checks: ["Use a full project URL when possible.", "Files are processed locally and are not uploaded."],
      link: "/download/",
      linkLabel: "Compare known projects",
      external: false
    });
    return;
  }

  sourceVerdict.textContent = file ? "Calculating locally" : "Checking source";
  sourceRisk.textContent = "Please wait";
  try {
    const result = file ? await inspectLocalFile(file) : inspectTextSource(value);
    setSourceResult(result);
    trackEvent("verity_source_check", {
      input_type: file ? "local_file" : "text_or_url",
      result_state: result.state,
      package_type: result.package
    });
  } catch {
    setSourceResult({
      state: "caution",
      verdict: "Check failed",
      risk: "Try another input",
      title: "The browser could not inspect this file",
      summary: "The file may be too large for available browser memory or Web Crypto may be unavailable. No file data was uploaded.",
      source: "Local browser",
      package: file ? packageType(file.name) : "Unknown",
      project: "Not checked",
      hash: "",
      checks: ["Try the project URL or filename instead.", "Use a desktop browser for very large files."],
      link: "/download/",
      linkLabel: "Compare known projects",
      external: false
    });
  }
});

sourceReset.addEventListener("click", () => {
  sourceCheckForm.reset();
  sourceFileName.textContent = "No file selected";
  setSourceResult({
    state: "idle",
    verdict: "Ready to check",
    risk: "Local only",
    title: "Paste a source or choose a file",
    summary: "A strong match needs more than the word “Verity.” Check the publishing host, project identity, Minecraft edition, package type, and release record together.",
    source: "Waiting",
    package: "Waiting",
    project: "Waiting",
    hash: "",
    checks: ["No data has been sent anywhere.", "Known projects currently include Verity JE and two separate Bedrock add-ons."],
    link: "/download/",
    linkLabel: "Compare known projects",
    external: false
  });
});

copyHashButton.addEventListener("click", async () => {
  if (!currentFileHash) return;
  try {
    await navigator.clipboard.writeText(currentFileHash);
    copyHashButton.textContent = "Hash copied";
    trackEvent("verity_hash_copy", { method: currentFileHashLabel.toLowerCase().replace("-", "") });
  } catch {
    copyHashButton.textContent = "Copy failed";
  }
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link) return;
  try {
    const destination = new URL(link.href, window.location.href);
    if (destination.hostname !== window.location.hostname) {
      const isProjectRoute = destination.hostname === "www.curseforge.com" || destination.hostname === "modrinth.com";
      const projectName = destination.pathname.includes("verity-bedrock-edition")
        ? "PnTMC Verity Bedrock"
        : destination.pathname.includes("verity-be")
          ? "Verity BE"
          : destination.pathname.includes("verity-je") || destination.pathname.includes("verity-je-official")
            ? "Verity JE"
            : "External reference";
      const section = link.closest("section");
      const linkArea = section?.id || (link.closest("footer") ? "footer" : link.closest("header") ? "header" : "content");
      trackEvent(isProjectRoute ? "verity_outbound_project_click" : "verity_outbound_reference_click", {
        destination_host: destination.hostname,
        destination_path: destination.pathname,
        link_text: link.textContent.trim().slice(0, 80),
        project_name: projectName,
        source_page: window.location.pathname,
        link_area: linkArea,
        transport_type: "beacon"
      });
    }
  } catch {
    // Ignore malformed links; normal navigation behavior is unchanged.
  }
});
