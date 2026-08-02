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
    link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-be/files/8544453",
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
        title: "Confirm the current Verity BE package before changing files",
        summary:
          "The current Verity BE 2.0.0 package uses the Bedrock addon route; voice behavior still differs from Java mod behavior.",
        steps: [
          "Confirm that you installed Verity BE 2.0.0, CurseForge record 8544453.",
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
    link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-be/files/8544453",
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
  if (!versionSelect || !issueSelect || !resultLabel || !resultTitle || !resultSummary || !primaryLink || !stepsList) return;
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

if (versionSelect && issueSelect && voiceToggle && aiToggle && copyButton) {
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
}

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
        filename: "verity-6.1.jar",
        aliases: [
          "verity 6.1",
          "verity 6.1 jar",
          "verity je 6.1",
          "verity je version 6.1",
          "verity mod 6.1",
          "verity mod version 6.1",
          "modrinth verity 6.1"
        ],
        versionNumber: "6.1",
        sizeMb: 243.09,
        version: "Minecraft 1.20.1 · Forge",
        published: "August 1, 2026",
        records: [
          {
            platform: "Modrinth",
            id: "6jRN8Exp",
            link: "https://modrinth.com/mod/verity-je-official/version/6jRN8Exp",
            hashes: {
              sha1: "72f974905772b020c51e9605d35777be1a542e62",
              sha512: "4e721c8709c30230ee9b9a59eca2f70410c841244baa6ec473170cb0528562e369d277f78c20a155dcd863dabaa93897290e2cf0402804107bca93a98aa1b189"
            }
          }
        ]
      },
      {
        status: "previous-visible",
        filename: "verity-6.jar",
        aliases: [
          "verity 6",
          "verity 6 jar",
          "verity je 6",
          "verity je version 6",
          "verity mod 6",
          "verity mod version 6",
          "modrinth verity 6"
        ],
        versionNumber: "6",
        sizeMb: 243.09,
        version: "Minecraft 1.20.1 · Forge",
        published: "July 29, 2026",
        availability: "Still visible in the Modrinth versions list on August 2, 2026, but Verity JE 6.1 is the newer current Modrinth route.",
        records: [
          {
            platform: "Modrinth",
            id: "CXsEzVwJ",
            link: "https://modrinth.com/mod/verity-je-official/version/CXsEzVwJ",
            hashes: {
              sha1: "609c799d7350a657cf2193839224bd6c2f9971b2",
              sha512: "25771d7476639e5669bea28d0beb503813ca304cfd6ddb080be3eb4186fbea34024f3a0e93bcaeb4cef4ecfb925420956a5b0e92f4a957c7ff7b3a4a22127b6e"
            }
          }
        ]
      },
      {
        status: "unlisted-beta-observed",
        filename: "verity-6.0.1-all.jar",
        versionNumber: "6.0.1-beta",
        sizeMb: 243.15,
        version: "Minecraft 1.20.1 · Forge",
        published: "July 28, 2026",
        availability: "Modrinth version endpoint returned HTTP 404 and the project versions list no longer included YLEoXe6t on July 29, 2026.",
        records: [
          {
            platform: "Modrinth",
            id: "YLEoXe6t",
            link: "https://modrinth.com/mod/verity-je-official/version/6.0.1-beta",
            hashes: {
              sha1: "288e57b5ed8ccb829da95377f38250059bbf28e8",
              sha512: "453d369063e2260c2e3af66182cfe4943fc48e6afdc0203759e04e938b938ce15de47b3693dfa6e2d1224a5a4d93ad73a872c3e7fc9688a2b3adde74bc677c59"
            }
          }
        ]
      },
      {
        status: "unlisted-previous-beta-observed",
        filename: "verity-6.0.0.jar",
        versionNumber: "6.0.0-beta",
        sizeMb: 235.11,
        version: "Minecraft 1.20.1 · Forge",
        published: "July 27, 2026",
        availability: "Modrinth version endpoint returned HTTP 404 and the project versions list no longer included 5ech0sTo on July 29, 2026.",
        records: [
          {
            platform: "Modrinth",
            id: "5ech0sTo",
            link: "https://modrinth.com/mod/verity-je-official/version/6.0.0-beta",
            hashes: {
              sha1: "87f39573ea29e796ad856d96fd056b8dfe0043d9",
              sha512: "c8b282be27ab4a0f19da6e834c4ee70602cef98bb5a81fe848932c1ca0edd98c41904602fe02b357d0a65265fba352860df6e06da669de6404143a224ce40afb"
            }
          }
        ]
      },
      {
        status: "stable-current",
        filename: "verity-5.7.3.jar",
        aliases: [
          "verity 5.7.3",
          "verity 5.7.3 jar",
          "verity.jar",
          "verity jar",
          "verity java download",
          "verity download java",
          "verity mod java download free",
          "verity mod minecraft java download",
          "mod verity 1.20.1",
          "verity mod 1.20.1",
          "verity mod 1.20 1",
          "verity mod for java edition",
          "verity je mod download",
          "forge verity",
          "verity forge"
        ],
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
        sizeMb: 156.0,
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
    name: "Smiley's Better Voice",
    edition: "Java add-on",
    route: "/smileys-better-voice/",
    sources: [
      {
        platform: "CurseForge",
        id: "1608717",
        slugs: ["/minecraft/mc-mods/smileys-better-voice"],
        link: "https://www.curseforge.com/minecraft/mc-mods/smileys-better-voice"
      }
    ],
    releases: [
      {
        status: "current-verity-je-voice-addon-route",
        filename: "Smiley's Better Voice-4.0.0.jar",
        aliases: [
          "Smiley's Better Voice",
          "smileys better voice",
          "smiley better voice",
          "better voice verity",
          "verity better voice",
          "verity voice mimic",
          "verity mod voice mimic",
          "Fish Audio",
          "Cartesia",
          "verity fish audio",
          "verity cartesia",
          "verity tts addon"
        ],
        versionNumber: "4.0.0",
        sizeMb: 1.4,
        version: "Minecraft 1.20.1 · Forge add-on",
        published: "July 29, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8536538",
            link: "https://www.curseforge.com/minecraft/mc-mods/smileys-better-voice/files/8536538"
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
        filename: "Verity (Stable) (2.0.0)-(26.3).mcaddon",
        aliases: [
          "Verity (Stable) (2.0.0)-(26.3#).mcaddon",
          "verity be",
          "verity be official",
          "verity be download",
          "verity be 2.0.0",
          "verity be 8544453",
          "verity stable 2.0.0",
          "verity stable 8544453",
          "verity hot fix",
          "verity be hot fix",
          "verity v2",
          "vertiy be"
        ],
        versionNumber: "2.0.0",
        sizeMb: 23.7,
        version: "Bedrock 26.30",
        published: "July 31, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8544453",
            link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-be/files/8544453"
          }
        ]
      },
      {
        status: "previous-visible",
        filename: "Verity (Stable) (2.0.0)-(26.3).mcaddon",
        aliases: [
          "Verity (Stable) (2.0.0)-(26.3#).mcaddon old file",
          "verity be 8543534",
          "verity stable 8543534",
          "previous verity be 2.0.0",
          "july 31 earlier verity be",
          "old verity be 2.0.0"
        ],
        versionNumber: "2.0.0",
        sizeMb: 23.7,
        version: "Bedrock 26.30",
        published: "July 30, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8543534",
            link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-be/files/8543534"
          }
        ]
      },
      {
        status: "previous-visible",
        filename: "Verity (Stable) (1.1.0)-(26.3).mcaddon",
        aliases: [
          "Verity (Stable) (1.1.0)-(26.3#).mcaddon",
          "verity be 1.1.0",
          "verity be 8506198",
          "old verity be",
          "previous verity be"
        ],
        versionNumber: "1.1.0",
        sizeMb: 21.3,
        version: "Bedrock 26.30",
        published: "July 25, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8506198",
            link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-be/files/8506198"
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
        filename: "ThatMob's Verity 3.2.0 by PnTMC [Add-on] - V26.30.mcaddon",
        versionNumber: "3.2.0",
        sizeMb: 39.6,
        version: "Bedrock 26.30",
        published: "July 27, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8517480",
            link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-bedrock-edition/files/8517480"
          }
        ]
      },
      {
        status: "current",
        filename: "ThatMob's Verity 3.2.0 by PnTMC [Add-on] - V26.20.mcaddon",
        versionNumber: "3.2.0",
        sizeMb: 39.6,
        version: "Bedrock 26.20",
        published: "July 27, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8517478",
            link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-bedrock-edition/files/8517478"
          }
        ]
      },
      {
        status: "current",
        filename: "ThatMob's Verity 3.2.0 by PnTMC [Add-on] - V26.10.mcaddon",
        versionNumber: "3.2.0",
        sizeMb: 39.6,
        version: "Bedrock 26.10 / 26.13+ row",
        published: "July 27, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8517473",
            link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-bedrock-edition/files/8517473"
          }
        ]
      },
      {
        status: "previous-still-available",
        filename: "ThatMob's Verity 3.1.0 by PnTMC [Add-on] - V26.30.mcaddon",
        aliases: [
          "ThatMob's Verity 3.1.0 by PnTMC [Add-on] - V26.20.mcaddon",
          "ThatMob's Verity 3.1.0 by PnTMC [Add-on] - V26.10.mcaddon"
        ],
        versionNumber: "3.1.0",
        sizeMb: 39.7,
        version: "Bedrock 26.30",
        published: "July 25, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8503821",
            link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-bedrock-edition/files/8503821"
          }
        ]
      },
      {
        status: "previous-still-available",
        filename: "ThatMob's Verity 2.1.0 by PnTMC [Add-on] - V26.30.mcaddon",
        versionNumber: "2.1.0",
        sizeMb: 35.4,
        version: "Bedrock 26.30",
        published: "June 27, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8327253",
            link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-bedrock-edition/files/8327253"
          }
        ]
      },
      {
        status: "previous-still-available",
        filename: "ThatMob's Verity 2.1.0 by PnTMC [Add-on] - V26.20.mcaddon",
        versionNumber: "2.1.0",
        sizeMb: 35.4,
        version: "Bedrock 26.20",
        published: "June 27, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8327250",
            link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-bedrock-edition/files/8327250"
          }
        ]
      },
      {
        status: "previous-still-available",
        filename: "ThatMob's Verity 2.1.0 by PnTMC [Add-on] - V26.10.mcaddon",
        versionNumber: "2.1.0",
        sizeMb: 35.4,
        version: "Bedrock 26.13+ / 26.10 row",
        published: "June 27, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8327242",
            link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-bedrock-edition/files/8327242"
          }
        ]
      }
    ]
  },
  {
    name: "Verity Pocket Edition (Be)",
    edition: "Bedrock",
    sources: [
      {
        platform: "CurseForge",
        id: "1596246",
        slugs: ["/minecraft-bedrock/addons/verity-pocket-edition-be"],
        link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-pocket-edition-be/files"
      }
    ],
    releases: [
      {
        status: "similar-named-current",
        filename: "Verity (1.0.2) — (26.3).mcaddon",
        aliases: ["Verity (1.0.2) — (26.3#).mcaddon", "Verity (1.0.2) - (26.3).mcaddon", "Verity (1.0.2) - (26.3#).mcaddon"],
        versionNumber: "1.0.2",
        sizeMb: 18.6,
        version: "Bedrock 26.30",
        published: "July 10, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8406293",
            link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-pocket-edition-be/files/8406293"
          }
        ]
      }
    ]
  },
  {
    name: "VERITY.exe",
    edition: "Java modpack",
    route: "/verity-exe/",
    sources: [
      {
        platform: "CurseForge",
        id: "1585389",
        slugs: ["/minecraft/modpacks/verity-exe"],
        link: "https://www.curseforge.com/minecraft/modpacks/verity-exe"
      }
    ],
    releases: [
      {
        status: "current-modpack-route",
        filename: "VERITY.exe.zip",
        aliases: ["VERITY.exe", "verity-exe", "verity exe", "Forge Port 2.1.3", "Forge Port 2.1.2"],
        versionNumber: "Forge Port 2.1.3",
        sizeMb: 40.3,
        version: "Minecraft 1.20.1 · Forge modpack",
        published: "July 30, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8539885",
            link: "https://www.curseforge.com/minecraft/modpacks/verity-exe/files/8539885"
          }
        ]
      },
      {
        status: "previous-forge-modpack-route",
        filename: "VERITY.exe.zip",
        aliases: ["Forge Port 2.1.2", "VERITY.exe 2.1.2"],
        versionNumber: "Forge Port 2.1.2",
        sizeMb: 40.3,
        version: "Minecraft 1.20.1 · Forge modpack",
        published: "July 28, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8526843",
            link: "https://www.curseforge.com/minecraft/modpacks/verity-exe/files/8526843"
          }
        ]
      },
      {
        status: "older-visible-neoforge-file",
        filename: "verity rework.zip",
        aliases: ["NeoForge 1.3.3", "verity rework"],
        versionNumber: "NeoForge 1.3.3",
        sizeMb: 0.51,
        version: "Minecraft 1.21.1 · NeoForge modpack",
        published: "July 7, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8385443",
            link: "https://www.curseforge.com/minecraft/modpacks/verity-exe/files/8385443"
          }
        ]
      }
    ]
  },
  {
    name: "VERITY.exe Remastered",
    edition: "Java modpack",
    route: "/verity-exe/",
    sources: [
      {
        platform: "Modrinth",
        id: "L5qUPsXS",
        slugs: ["/modpack/verity.exe-remastered", "/project/L5qUPsXS"],
        link: "https://modrinth.com/modpack/verity.exe-remastered"
      }
    ],
    releases: [
      {
        status: "separate-modrinth-remastered-modpack-route",
        filename: "VERITY.exe Remastered 1.0.0.mrpack",
        aliases: ["VERITY.exe Remastered", "verity exe remastered", "verity.exe remastered", "remastered verity.exe"],
        versionNumber: "1.0.0",
        sizeMb: 0.01,
        version: "Minecraft 1.20.1 · Forge MRPACK",
        published: "July 1, 2026",
        records: [
          {
            platform: "Modrinth",
            id: "4N4vQrK7",
            link: "https://modrinth.com/modpack/verity.exe-remastered/version/4N4vQrK7"
          }
        ]
      }
    ]
  },
  {
    name: "FALSITY [SMILEY]",
    edition: "Java mod",
    route: "/falsity-mod/",
    sources: [
      {
        platform: "CurseForge",
        id: "1575216",
        slugs: ["/minecraft/mc-mods/falsity-mod"],
        link: "https://www.curseforge.com/minecraft/mc-mods/falsity-mod"
      },
      {
        platform: "Modrinth",
        id: "r8Qz0Ic2",
        slugs: ["/mod/falsity", "/project/r8Qz0Ic2"],
        link: "https://modrinth.com/mod/falsity"
      }
    ],
    releases: [
      {
        status: "current-falsity-route",
        filename: "FALSITY-SMILEYARCHIVE-9.0.jar",
        aliases: ["FALSITY [SMILEY]", "Falsity Mod", "falsity", "smiley archive", "/connectfalsity", "/falsitysetup", "/falsityconfig"],
        versionNumber: "9.0",
        sizeMb: 316.1,
        version: "Minecraft 1.20.1 · Forge",
        published: "July 28, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8528006",
            link: "https://www.curseforge.com/minecraft/mc-mods/falsity-mod/files/8528006"
          },
          {
            platform: "Modrinth",
            id: "tNOLeN6v",
            link: "https://modrinth.com/mod/falsity/version/9.0",
            hashes: {
              sha1: "24660ecba1c85f818550ce65ede4f78f29c44343",
              sha512: "4889ad30c692b8f45a0b59ab3cf0b16f9a18217223cf88e01dc9003948ed8966f0b7f472064195e4a954f332ece139b8aaf4503130d763fc932e789f64fd1d7b"
            }
          }
        ]
      }
    ]
  },
  {
    name: "Falsity Mod (Bedrock remake)",
    edition: "Bedrock add-on",
    route: "/falsity-mod/",
    sources: [
      {
        platform: "CurseForge",
        id: "1594973",
        slugs: ["/minecraft-bedrock/addons/falsity-mod"],
        link: "https://www.curseforge.com/minecraft-bedrock/addons/falsity-mod"
      }
    ],
    releases: [
      {
        status: "current-bedrock-remake-route",
        filename: "Falsity_2_0_0_Addon_updated.mcaddon",
        aliases: ["Falsity Bedrock", "Falsity Mod Bedrock", "Falsity Remake", "Falsity MCPE", "MCMOBZ"],
        versionNumber: "2.0.0 updated",
        sizeMb: 23.1,
        version: "Minecraft Bedrock 26.30 · MCADDON",
        published: "July 17, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8449365",
            link: "https://www.curseforge.com/minecraft-bedrock/addons/falsity-mod/files/8449365"
          }
        ]
      }
    ]
  },
  {
    name: "Ultimate VERITY.",
    edition: "Java modpack",
    route: "/ultimate-verity/",
    sources: [
      {
        platform: "CurseForge",
        id: "1584643",
        slugs: ["/minecraft/modpacks/ultimate-verity"],
        link: "https://www.curseforge.com/minecraft/modpacks/ultimate-verity"
      }
    ],
    releases: [
      {
        status: "separate-ultimate-verity-modpack-route",
        filename: "Ultimate VERITY.-1.20.zip",
        aliases: ["Ultimate VERITY", "ultimate verity", "ultimate verity modpack"],
        versionNumber: "Forge 1.20.1 profile",
        sizeMb: 0.1,
        version: "Minecraft 1.20.1 · Forge modpack",
        published: "July 30, 2026 check",
        records: [
          {
            platform: "CurseForge",
            id: "8467605",
            link: "https://www.curseforge.com/minecraft/modpacks/ultimate-verity/files/8467605"
          }
        ]
      }
    ]
  },
  {
    name: "Ultimate Verity Horror",
    edition: "Java modpack",
    route: "/ultimate-verity/",
    sources: [
      {
        platform: "CurseForge",
        id: "1616028",
        slugs: ["/minecraft/modpacks/ultimate-verity-horror"],
        link: "https://www.curseforge.com/minecraft/modpacks/ultimate-verity-horror"
      }
    ],
    releases: [
      {
        status: "separate-ultimate-verity-horror-modpack-route",
        filename: "Ultimate Verity Horror.zip",
        aliases: ["Ultimate Verity Horror", "ultimate verity horror", "Verity horror profile"],
        versionNumber: "NeoForge 1.21.1 / Forge 1.20.1 profile",
        sizeMb: 0.02,
        version: "Minecraft 1.21.1 / 1.20.1 · NeoForge / Forge modpack",
        published: "July 30, 2026 check",
        records: [
          {
            platform: "CurseForge",
            id: "8464466",
            link: "https://www.curseforge.com/minecraft/modpacks/ultimate-verity-horror/files/8464466"
          },
          {
            platform: "CurseForge",
            id: "8461753",
            link: "https://www.curseforge.com/minecraft/modpacks/ultimate-verity-horror/files/8461753"
          }
        ]
      }
    ]
  },
  {
    name: "Ultimate Verity Skinpack",
    edition: "Bedrock skin pack",
    route: "/ultimate-verity/",
    sources: [
      {
        platform: "CurseForge",
        id: "1599807",
        slugs: ["/minecraft-bedrock/skins/ultimate-verity-skinpack"],
        link: "https://www.curseforge.com/minecraft-bedrock/skins/ultimate-verity-skinpack"
      }
    ],
    releases: [
      {
        status: "separate-ultimate-verity-bedrock-skinpack-route",
        filename: "UltimateVeritySkinPack.mcpack",
        aliases: ["Ultimate Verity Skinpack", "ultimate verity skinpack", "UltimateVeritySkinPack", "ultimate verity skins"],
        versionNumber: "Bedrock skin pack",
        sizeMb: 0.01,
        version: "Minecraft Bedrock 26.30 / 26.20 · MCPACK skin pack",
        published: "July 30, 2026 check",
        records: [
          {
            platform: "CurseForge",
            id: "8472780",
            link: "https://www.curseforge.com/minecraft-bedrock/skins/ultimate-verity-skinpack/files/8472780"
          }
        ]
      }
    ]
  },
  {
    name: "Verity Pack",
    edition: "Java modpack",
    route: "/verity-pack/",
    sources: [
      {
        platform: "CurseForge",
        id: "1583377",
        slugs: ["/minecraft/modpacks/verity-beta"],
        link: "https://www.curseforge.com/minecraft/modpacks/verity-beta"
      }
    ],
    releases: [
      {
        status: "modpack-add-verity-separately",
        filename: "Verity™.zip",
        versionNumber: "Forge 1.20.1 profile",
        sizeMb: null,
        version: "Minecraft 1.20.1 · Forge modpack",
        published: "July 29, 2026 check",
        records: [
          {
            platform: "CurseForge",
            id: "files",
            link: "/verity-pack/"
          }
        ]
      }
    ]
  },
  {
    name: "VerityPack",
    edition: "Java modpack",
    route: "/verity-pack/",
    sources: [
      {
        platform: "CurseForge",
        id: "1587394",
        slugs: ["/minecraft/modpacks/veritypack"],
        link: "https://www.curseforge.com/minecraft/modpacks/veritypack"
      }
    ],
    releases: [
      {
        status: "separate-modpack-route",
        filename: "VerityPack-1.0.7.zip",
        versionNumber: "Forge 1.20.1 profile",
        sizeMb: null,
        version: "Minecraft 1.20.1 · Forge modpack",
        published: "July 29, 2026 check",
        records: [
          {
            platform: "CurseForge",
            id: "files",
            link: "/verity-pack/"
          }
        ]
      }
    ]
  },
  {
    name: "VerityPack Realistic",
    edition: "Java modpack",
    route: "/verity-pack/",
    sources: [
      {
        platform: "CurseForge",
        id: "1596649",
        slugs: ["/minecraft/modpacks/veritypack-realistic"],
        link: "https://www.curseforge.com/minecraft/modpacks/veritypack-realistic"
      }
    ],
    releases: [
      {
        status: "separate-realistic-modpack-route",
        filename: "VerityPack Realistic",
        versionNumber: "Forge 1.20.1 profile",
        sizeMb: null,
        version: "Minecraft 1.20.1 · Forge modpack",
        published: "July 29, 2026 check",
        records: [
          {
            platform: "CurseForge",
            id: "files",
            link: "/verity-pack/"
          }
        ]
      }
    ]
  },
  {
    name: "Survive from VERITY or FALSITY",
    edition: "Java modpack",
    route: "/survive-from-verity-or-falsity/",
    sources: [
      {
        platform: "CurseForge",
        id: "1583260",
        slugs: ["/minecraft/modpacks/survive-from-verity-or-falsity"],
        link: "https://www.curseforge.com/minecraft/modpacks/survive-from-verity-or-falsity"
      }
    ],
    releases: [
      {
        status: "separate-verity-falsity-modpack-route",
        filename: "VERITY 1-1.6.1.zip",
        aliases: ["Survive from VERITY or FALSITY", "verity or falsity", "survive verity falsity", "Falsity modpack"],
        versionNumber: "Forge 1.20.1 profile",
        sizeMb: 0.02,
        version: "Minecraft 1.20.1 · Forge modpack",
        published: "July 30, 2026 check",
        records: [
          {
            platform: "CurseForge",
            id: "8399483",
            link: "https://www.curseforge.com/minecraft/modpacks/survive-from-verity-or-falsity/files/8399483"
          }
        ]
      }
    ]
  },
  {
    name: "Verity May Be",
    edition: "Java modpack",
    route: "/verity-monster-form/",
    sources: [
      {
        platform: "CurseForge",
        id: "1583253",
        slugs: ["/minecraft/modpacks/verity-may-be"],
        link: "https://www.curseforge.com/minecraft/modpacks/verity-may-be"
      }
    ],
    releases: [
      {
        status: "separate-monster-form-modpack-route",
        filename: "Verity May Be 1.3(The Brand New Lurkers).zip",
        aliases: ["Verity May Be", "verity may be", "Brand New Lurkers", "yellow ball monster form"],
        versionNumber: "1.3",
        sizeMb: null,
        version: "Minecraft 1.21.1 / 1.20.1 · NeoForge / Forge modpack",
        published: "July 3, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8365755",
            link: "https://www.curseforge.com/minecraft/modpacks/verity-may-be/files/8365755"
          }
        ]
      }
    ]
  },
  {
    name: "VerityCraft",
    edition: "Java modpack",
    route: "/verity-monster-form/",
    sources: [
      {
        platform: "CurseForge",
        id: "1600389",
        slugs: ["/minecraft/modpacks/veritycraft"],
        link: "https://www.curseforge.com/minecraft/modpacks/veritycraft"
      }
    ],
    releases: [
      {
        status: "separate-monster-form-modpack-route",
        filename: "VerityCraft - MC 1.20.1 - 4.0.0",
        aliases: ["VerityCraft", "verity craft"],
        versionNumber: "4.0.0",
        sizeMb: null,
        version: "Minecraft 1.20.1 · Forge modpack",
        published: "July 28, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "files",
            link: "/verity-monster-form/"
          }
        ]
      }
    ]
  },
  {
    name: "Horror Ultimate Selection",
    edition: "Java modpack",
    route: "/verity-monster-form/",
    sources: [
      {
        platform: "CurseForge",
        id: "1370274",
        slugs: ["/minecraft/modpacks/horror-ultimate-selection"],
        link: "https://www.curseforge.com/minecraft/modpacks/horror-ultimate-selection"
      }
    ],
    releases: [
      {
        status: "separate-horror-modpack-with-verity-route",
        filename: "Horror Ultimate Selection MC 1.20.1-7.9.0",
        aliases: ["Horror Ultimate Selection", "horror ultimate verity"],
        versionNumber: "7.9.0",
        sizeMb: null,
        version: "Minecraft 1.20.1 · Forge modpack",
        published: "July 28, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "files",
            link: "/verity-monster-form/"
          }
        ]
      }
    ]
  },
  {
    name: "Verity World - AI Horror Adventure with Verity",
    edition: "Java modpack",
    route: "/verity-world/",
    sources: [
      {
        platform: "CurseForge",
        id: "1598871",
        slugs: ["/minecraft/modpacks/verity-falsity"],
        link: "https://www.curseforge.com/minecraft/modpacks/verity-falsity"
      }
    ],
    releases: [
      {
        status: "separate-ai-horror-world-modpack-route",
        filename: "VerityWorld MC 1.20.1-1.3.0",
        aliases: ["Verity World", "VerityWorld", "AI Horror Adventure with Verity", "verity-falsity", "VoxelCore"],
        versionNumber: "1.3.0",
        sizeMb: 0.63,
        version: "Minecraft 1.20.1 · Forge modpack",
        published: "July 20, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8473476",
            link: "https://www.curseforge.com/minecraft/modpacks/verity-falsity/files/8473476"
          }
        ]
      }
    ]
  },
  {
    name: "Verity Endless Horror Experience",
    edition: "Java modpack",
    route: "/verity-monster-form/",
    sources: [
      {
        platform: "CurseForge",
        id: "1611801",
        slugs: ["/minecraft/modpacks/verity-je-horror-experience"],
        link: "https://www.curseforge.com/minecraft/modpacks/verity-je-horror-experience"
      }
    ],
    releases: [
      {
        status: "separate-verity-je-horror-modpack-route",
        filename: "VERITY JE PACK.zip",
        aliases: ["Verity Endless Horror Experience", "VERITY JE PACK"],
        versionNumber: "July 2026 profile",
        sizeMb: 0.5,
        version: "Minecraft 1.20.1 · Forge modpack",
        published: "July 15, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8440180",
            link: "https://www.curseforge.com/minecraft/modpacks/verity-je-horror-experience/files/8440180"
          }
        ]
      }
    ]
  },
  {
    name: "Verity + Factories",
    edition: "Java modpack",
    route: "/verity-monster-form/",
    sources: [
      {
        platform: "CurseForge",
        id: "1612710",
        slugs: ["/minecraft/modpacks/verityfactory"],
        link: "https://www.curseforge.com/minecraft/modpacks/verityfactory"
      }
    ],
    releases: [
      {
        status: "separate-create-and-verity-modpack-route",
        filename: "Verity And Create (Official Verity Mod) v0.4 BETA.zip",
        aliases: ["Verity + Factories", "Verity And Create", "verityfactory"],
        versionNumber: "v0.4 BETA",
        sizeMb: 0.38,
        version: "Minecraft 1.20.1 · Forge modpack",
        published: "July 20, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8473142",
            link: "https://www.curseforge.com/minecraft/modpacks/verityfactory/files/8473142"
          }
        ]
      }
    ]
  },
  {
    name: "Verity Body Overhaul",
    edition: "Similar-name route",
    route: "/verity-monster-form/",
    sources: [
      {
        platform: "CurseForge",
        id: "1629639",
        slugs: ["/minecraft/mc-mods/verity-body-overhaul"],
        link: "https://www.curseforge.com/minecraft/mc-mods/verity-body-overhaul"
      }
    ],
    releases: [
      {
        status: "visual-add-on-requires-verity-je",
        filename: "Verity Body Overhaul.jar",
        aliases: ["Verity Body Overhaul", "verity body overhaul", "body overhaul", "monster body overhaul"],
        versionNumber: "1.0",
        sizeMb: 3.4,
        version: "Minecraft 1.20.1 · Forge add-on",
        published: "July 28, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8530009",
            link: "https://www.curseforge.com/minecraft/mc-mods/verity-body-overhaul/files/8530009"
          }
        ]
      }
    ]
  },
  {
    name: "verity.jar fan project",
    edition: "Similar-name route",
    route: "/verity-monster-form/",
    sources: [
      {
        platform: "CurseForge",
        id: "1600657",
        slugs: ["/minecraft/mc-mods/veritycf"],
        link: "https://www.curseforge.com/minecraft/mc-mods/veritycf"
      }
    ],
    releases: [
      {
        status: "fan-project-not-associated-with-official-verity-team",
        filename: "VerityV1.1.0.jar",
        aliases: ["VerityV1.1.0.jar", "veritycf", "Lucas_the_Cool Verity", "human responses verity"],
        versionNumber: "1.1.0",
        sizeMb: 14.4,
        version: "Minecraft 1.21.1 · NeoForge",
        published: "July 25, 2026",
        records: [
          {
            platform: "CurseForge",
            id: "8503252",
            link: "https://www.curseforge.com/minecraft/mc-mods/veritycf/files/8503252"
          }
        ]
      }
    ]
  },
  {
    name: "Verity Dweller",
    edition: "Similar-name route",
    route: "/verity-dweller/",
    sources: [
      {
        platform: "Modrinth",
        id: "eZW2ZX0U",
        slugs: ["/mod/verity-dweller", "/project/eZW2ZX0U"],
        link: "https://modrinth.com/mod/verity-dweller"
      }
    ],
    releases: [
      {
        status: "similar-named-fabric-mod-not-verity-je",
        filename: "verity-1.0.0.jar",
        aliases: ["Verity Dweller", "the verity dweller", "verity dweller mod", "verity mod dweller"],
        versionNumber: "2.0.0",
        sizeMb: 0.13,
        version: "Minecraft 26.2 · Fabric",
        published: "July 27, 2026",
        records: [
          {
            platform: "Modrinth",
            id: "COqUGsQr",
            link: "https://modrinth.com/mod/verity-dweller/version/COqUGsQr"
          }
        ]
      }
    ]
  },
  {
    name: "Horrorland - With Verity!",
    edition: "Similar-name route",
    route: "/verity-dweller/",
    sources: [
      {
        platform: "Modrinth",
        id: "mJcQB7OR",
        slugs: ["/modpack/horrorland-modpack", "/project/mJcQB7OR"],
        link: "https://modrinth.com/modpack/horrorland-modpack"
      }
    ],
    releases: [
      {
        status: "separate-modrinth-modpack-with-verity",
        filename: "Horrorland with Verity - MC 1.20.1 9.3.0.mrpack",
        aliases: ["Horrorland - With Verity!", "Horrorland with Verity", "horrorland verity"],
        versionNumber: "9.3.0",
        sizeMb: 226.0,
        version: "Minecraft 1.20.1 · Forge modpack",
        published: "July 27, 2026",
        records: [
          {
            platform: "Modrinth",
            id: "L0WhiLev",
            link: "https://modrinth.com/modpack/horrorland-modpack/version/L0WhiLev"
          }
        ]
      }
    ]
  },
  {
    name: "Verity Paper plugin",
    edition: "Similar-name route",
    route: "/verity-dweller/",
    sources: [
      {
        platform: "Modrinth",
        id: "DYiZP3fM",
        slugs: ["/plugin/verity", "/project/DYiZP3fM"],
        link: "https://modrinth.com/plugin/verity"
      }
    ],
    releases: [
      {
        status: "unrelated-paper-server-plugin-route",
        filename: "Verity-1.7.0.jar",
        aliases: ["verity paper plugin", "verity plugin", "Modrinth Verity plugin"],
        versionNumber: "1.7.0",
        sizeMb: 0.17,
        version: "Minecraft 1.21.x · Paper",
        published: "July 26, 2024",
        records: [
          {
            platform: "Modrinth",
            id: "QQ8nARZM",
            link: "https://modrinth.com/plugin/verity/version/QQ8nARZM"
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
  const aliasMatches = [];
  for (const project of knownProjects) {
    for (const release of project.releases) {
      const record = release.records.find((item) =>
        clean.includes(item.id.toLowerCase()) ||
        Object.values(item.hashes || {}).some((hash) => clean.includes(hash.toLowerCase()))
      );
      if (clean.includes(release.filename.toLowerCase()) || record) {
        return { project, release, record, matchKind: record ? "record" : "filename" };
      }
      for (const alias of release.aliases || []) {
        const normalizedAlias = alias.toLowerCase();
        if (clean.includes(normalizedAlias)) {
          aliasMatches.push({ project, release, record, matchKind: "alias", length: normalizedAlias.length });
        }
      }
    }
  }
  aliasMatches.sort((a, b) => b.length - a.length);
  if (aliasMatches[0]) return aliasMatches[0];
  return null;
}

function pathMatchesSlug(path, slug) {
  const normalizedSlug = slug.toLowerCase();
  return path === normalizedSlug || path.startsWith(`${normalizedSlug}/`);
}

function signalContainsSlug(clean, slug) {
  const normalizedSlug = slug.toLowerCase();
  return clean.includes(`${normalizedSlug}/`) || clean.endsWith(normalizedSlug);
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
  if (record.id === "files") return "files tab";
  return record.platform === "CurseForge" ? `record #${record.id}` : `version ${release.versionNumber} (${record.id})`;
}

function modpackRoute(project) {
  return project.route || "/verity-pack/";
}

function modpackRouteLabel(project) {
  if (project.route === "/ultimate-verity/") return "Open Ultimate VERITY route check";
  if (project.route === "/survive-from-verity-or-falsity/") return "Open Survive or Falsity route check";
  if (project.route === "/falsity-mod/") return "Open Falsity route check";
  if (project.route === "/verity-world/") return "Open Verity World route check";
  if (project.route === "/verity-monster-form/") return "Open monster-form route check";
  return project.route === "/verity-exe/" ? "Open VERITY.exe route check" : "Open Verity Pack route check";
}

function modpackChecks(project) {
  if (project.name === "VERITY.exe") {
    return [
      "The project path matches the checked VERITY.exe CurseForge modpack result.",
      "Use this route only when you intentionally want the prepared Forge modpack profile.",
      "If Groq, API key, or voice chat fails, debug the provider/profile layer before replacing files."
    ];
  }
  if (project.name === "VERITY.exe Remastered") {
    return [
      "The project path matches the checked Modrinth VERITY.exe Remastered result.",
      "Use this route only when you intentionally want the separate MRPACK profile by ScootBuckley.",
      "Do not confuse it with CurseForge VERITY.exe Project ID 1585389, Verity JE, or any Bedrock add-on."
    ];
  }
  if (project.name === "FALSITY [SMILEY]") {
    return [
      "The project path matches the checked standalone FALSITY [SMILEY] Java Forge route.",
      "Use this route only when you intentionally want the Falsity 9.0 JAR, not Verity JE or Bedrock.",
      "Compare CurseForge 1575216, file 8528006, Modrinth r8Qz0Ic2, version tNOLeN6v, and hashes before trusting copied mirrors."
    ];
  }
  if (project.route === "/survive-from-verity-or-falsity/") {
    return [
      "The project path matches the checked Survive from VERITY or FALSITY CurseForge modpack route.",
      "Use this route only when you intentionally want the kanthbuymi Forge 1.20.1 profile.",
      "If you need standalone Verity JE, FALSITY [SMILEY], Bedrock, MCPE, APK, or EXE routes, open the matching source-check page instead."
    ];
  }
  if (project.route === "/ultimate-verity/") {
    return [
      "The project path matches a checked Ultimate Verity CurseForge route.",
      "Use this route only when you intentionally want that full Java profile or Bedrock skin pack context.",
      "If you need Verity JE, Verity BE, PnTMC, or the standalone Falsity route, open the matching source-check page instead."
    ];
  }
  if (project.route === "/falsity-mod/") {
    return [
      "The project path matches a Verity or Falsity CurseForge modpack result.",
      "Use this route only when you intentionally want that full profile.",
      "If you need the standalone FALSITY [SMILEY] mod or Verity JE file, open the source-check page first."
    ];
  }
  if (project.route === "/verity-world/") {
    return [
      "The project path matches the checked Verity World CurseForge modpack route.",
      "Use it only when you intentionally want the VoxelCore Forge 1.20.1 profile.",
      "If you need Verity JE, Verity BE, PnTMC, or standalone Falsity, open the matching route instead."
    ];
  }
  if (project.route === "/verity-monster-form/") {
    return [
      "The project path matches a checked monster-form or horror-profile route.",
      "Use it only when you intentionally want that body, phase, or full modpack profile.",
      "If you need the standalone Java or Bedrock file, open Verity JE or the Bedrock route instead."
    ];
  }
  return [
    "The project path matches a Verity Pack-style modpack result.",
    "Use the modpack only when you intentionally want that prepared Forge profile.",
    "If you need the actual Verity Mod file, choose Verity JE or the Bedrock route instead."
  ];
}

function modpackSummary(project, projectId) {
  if (project.name === "VERITY.exe") {
    return `This URL matches the checked VERITY.exe CurseForge modpack route, Project ID ${projectId}. The July 30 23:25 source check maps the current main file to Forge Port 2.1.3 record 8539885, while older tutorials may still mention Forge Port 2.1.2 record 8526843; Groq, API key, and voice issues should be debugged in provider or profile setup rather than by using random replacement files.`;
  }
  if (project.name === "VERITY.exe Remastered") {
    return `This URL matches the checked VERITY.exe Remastered Modrinth modpack route, Project ID ${projectId}. The July 30 source check maps it to Modrinth version 4N4vQrK7 and file VERITY.exe Remastered 1.0.0.mrpack, so use it only as a separate MRPACK profile rather than the CurseForge VERITY.exe route, Verity JE, or Bedrock.`;
  }
  if (project.name === "FALSITY [SMILEY]") {
    return `This URL matches the checked standalone FALSITY [SMILEY] route, Project ID ${projectId}. The July 29 source check maps the current file to FALSITY-SMILEYARCHIVE-9.0.jar, CurseForge file 8528006, Modrinth project r8Qz0Ic2, and Modrinth version tNOLeN6v; use it only for Falsity Forge 1.20.1 intent, not Verity JE, Bedrock, or modpack installs.`;
  }
  if (project.route === "/survive-from-verity-or-falsity/") {
    return `This URL matches the checked Survive from VERITY or FALSITY CurseForge modpack route, Project ID ${projectId}. The July 30 source check maps it to file record 8399483, VERITY 1-1.6.1.zip, Minecraft 1.20.1 Forge, 98,145 detailed project downloads, and 46.9K file downloads. Treat it as a separate profile, not as Verity JE, FALSITY [SMILEY], Bedrock, MCPE, APK, or EXE.`;
  }
  if (project.route === "/ultimate-verity/") {
    return `This URL matches the checked ${project.name} route, Project ID ${projectId}. The July 30 source check separates Ultimate VERITY Project ID 1584643, Ultimate Verity Horror Project ID 1616028, and the Bedrock Skinpack Project ID 1599807 from Verity JE, Verity BE, PnTMC, and mirror downloads. Treat this as a profile or skin context, not the default Verity Mod file.`;
  }
  if (project.route === "/falsity-mod/") {
    return `This URL matches the checked ${project.name} CurseForge modpack route, Project ID ${projectId}. Treat it as a profile route for Verity or Falsity searches, not as the standalone FALSITY [SMILEY] mod, Verity JE Java file, or Bedrock add-on.`;
  }
  if (project.route === "/verity-world/") {
    return `This URL matches the checked Verity World CurseForge modpack route, Project ID ${projectId}. The July 30 source check maps it to file record 8473476 for Minecraft 1.20.1 Forge, with 44,641 project downloads and 18.9K file downloads. Treat it as a separate profile, not as Verity JE, Verity BE, PnTMC, or standalone Falsity.`;
  }
  if (project.route === "/verity-monster-form/") {
    return `This URL matches the checked ${project.name} monster-form or horror-profile route, Project ID ${projectId}. Treat it as a separate profile, body, or phase route rather than the default standalone Verity JE Java file, Verity BE add-on, or PnTMC Bedrock route.`;
  }
  return `This URL matches a checked modpack route for ${project.name}, Project ID ${projectId}. A modpack profile is not the same artifact as the standalone Verity JE jar or a Bedrock MCADDON. Read whether the pack includes Verity or expects you to add it separately before installing.`;
}

function isSimilarNameRoute(project) {
  return project?.edition === "Similar-name route";
}

function similarNameRoute(project) {
  return project.route || "/verity-dweller/";
}

function similarNameRouteLabel(project) {
  if (project.route === "/verity-monster-form/") return "Open monster-form route check";
  return project.name === "Verity Paper plugin" ? "Open similar-name route check" : "Open Verity Dweller route check";
}

function similarNameChecks(project) {
  if (project.name === "Verity Body Overhaul") {
    return [
      "The CurseForge project path and Project ID 1629639 match Verity Body Overhaul.",
      "This is a visual add-on that requires Verity JE; it is not the standalone Verity JE file.",
      "Use the monster-form route to check body add-on order, modpack phase confusion, and Bedrock setup differences."
    ];
  }
  if (project.name === "verity.jar fan project") {
    return [
      "The CurseForge project path and Project ID 1600657 match a separate fan project.",
      "The source page says it is not associated with the official Verity Team.",
      "Use this only when the player specifically selected the veritycf page or VerityV1.1.0.jar record."
    ];
  }
  if (project.name === "Verity Dweller") {
    return [
      "The Modrinth project path and Project ID eZW2ZX0U match Verity Dweller.",
      "This is a separate Fabric JAR route, not Verity JE Project ID on1Y0osD and not a Bedrock MCADDON.",
      "Use it only when the player specifically searched for Verity Dweller or the eZW2ZX0U Modrinth page."
    ];
  }
  if (project.name === "Horrorland - With Verity!") {
    return [
      "The Modrinth project path and Project ID mJcQB7OR match a full Horrorland modpack.",
      "An MRPACK profile is not the standalone Verity Mod Java JAR or any Bedrock add-on.",
      "Use the Verity Dweller route page to compare why this result appears for Verity searches."
    ];
  }
  if (project.name === "Verity Paper plugin") {
    return [
      "The Modrinth plugin path and Project ID DYiZP3fM match a Paper server plugin.",
      "A Paper plugin is a server route, not the Forge Verity JE mod route and not a Bedrock add-on.",
      "Do not put this file in a Forge client mods folder while trying to install Verity Mod."
    ];
  }
  return [
    "The name or URL matches a similar-name route in the checked source map.",
    "Similar-name search results are useful, but they are not automatically the current Verity Mod.",
    "Compare owner, Project ID, loader, package type, and Minecraft version before installing."
  ];
}

function similarNameSummary(project, projectId) {
  if (project.name === "Verity Body Overhaul") {
    return `This URL matches the checked Verity Body Overhaul CurseForge route, Project ID ${projectId || "1629639"}. The July 30 source check maps the current file to record 8530009 and treats it as a visual add-on for Verity JE on Forge 1.20.1, not as the main Verity Mod download.`;
  }
  if (project.name === "verity.jar fan project") {
    return `This URL matches the checked verity.jar fan-project route, Project ID ${projectId || "1600657"}. The July 30 source check maps it to file record 8503252 and keeps it separate from Verity JE, Verity BE, and PnTMC.`;
  }
  if (project.name === "Verity Dweller") {
    return `This URL matches the checked Verity Dweller Modrinth route, Project ID ${projectId || "eZW2ZX0U"}. The July 30 source check maps its latest file to verity-1.0.0.jar for Fabric, so it should be handled as a similar-name project rather than the current Verity JE or Bedrock download.`;
  }
  if (project.name === "Horrorland - With Verity!") {
    return `This URL matches the checked Horrorland - With Verity! Modrinth modpack route, Project ID ${projectId || "mJcQB7OR"}. The July 30 source check maps the latest file to an MRPACK profile, not a standalone Verity Mod JAR or MCADDON.`;
  }
  if (project.name === "Verity Paper plugin") {
    return `This URL matches the checked Verity Paper plugin route, Project ID ${projectId || "DYiZP3fM"}. It is a Paper server plugin route and should not be treated as Verity JE, Verity BE, or PnTMC's Bedrock add-on.`;
  }
  return `This URL matches a checked similar-name route, Project ID ${projectId || "recorded in the source map"}. Treat it as separate from the main Verity Mod until the owner, loader, edition, package, and file record all match the user's intent.`;
}

function isJavaAddonRoute(project) {
  return project?.edition === "Java add-on";
}

function javaAddonChecks(project) {
  if (project.name === "Smiley's Better Voice") {
    return [
      "The host, project path, or file record matches the checked Smiley's Better Voice add-on route.",
      "Use it only after the parent Verity JE Java route, loader, and dependencies are already matched.",
      "Fish Audio, Cartesia, Groq, and Ollama keys belong to different setup layers; do not paste any provider key into this checker."
    ];
  }
  return [
    "The input matches a checked Java add-on route.",
    "Confirm the parent Java mod before adding this file.",
    "Use the local guide to separate add-on setup from the default download route."
  ];
}

function javaAddonSummary(project, projectId) {
  if (project.name === "Smiley's Better Voice") {
    return `This URL or text matches the checked Smiley's Better Voice CurseForge route, Project ID ${projectId || "1608717"}. The July 30 source check maps the current file to Smiley's Better Voice-4.0.0.jar, record 8536538, for Minecraft 1.20.1 Forge. Treat it as a Verity JE voice/TTS add-on for Fish Audio, Cartesia, and voice mimicking, not as the parent Verity JE download, a Bedrock MCADDON, or VERITY.exe.`;
  }
  return `This input matches a checked Java add-on route, Project ID ${projectId || "recorded in the source map"}. Treat it as separate from the default Verity Mod download until the parent mod, loader, package type, and file record match the user's intent.`;
}

function isUnavailableRelease(release) {
  return Boolean(release?.status?.includes("unlisted") || release?.availability);
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
      (item.slugs.some((slug) => pathMatchesSlug(path, slug)) || path.includes(item.id.toLowerCase()))
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
  if (clean.endsWith(".mrpack")) return "Modrinth MRPACK";
  if (clean.endsWith(".zip")) return "ZIP archive or source";
  if (/\.(exe|msi|apk|dmg|scr)$/.test(clean)) return "Executable installer";
  return "Not identified";
}

function isLegacyVerity100Signal(value, parsedUrl = null) {
  const clean = normalizeSignal(value);
  const isExplicitSimilarName =
    clean.includes("verity-dweller") ||
    clean.includes("ezw2zx0u") ||
    clean.includes("/mod/verity-dweller") ||
    clean.includes("/project/ezw2zx0u");
  if (isExplicitSimilarName) return false;

  const driveId = "19n7s-tvd4nzeu6ftglxmyio_lsxezloo";
  const host = parsedUrl?.hostname.replace(/^www\./, "").toLowerCase() || "";
  const isDriveHost =
    host === "drive.google.com" ||
    host === "docs.google.com" ||
    host.endsWith(".googleusercontent.com");
  return (
    clean.includes(driveId) ||
    clean.includes("verity-1.0.0.jar") ||
    clean.includes("verity 1.0.0 jar") ||
    clean.includes("verity mod 1.0.0") ||
    clean.includes("verity 1.0.0 forge") ||
    clean.includes("verity forge 1.20.1") ||
    clean.includes("verity geckolib") ||
    (isDriveHost && clean.includes("verity")) ||
    (isDriveHost && clean.includes(driveId))
  );
}

function legacyVerity100Checks() {
  return [
    "A copied old filename does not prove owner, Project ID, release record, or checksum.",
    "Do not install Drive, Discord, MediaFire, Mega, or repost copies unless you can connect the bytes to a trusted publisher record.",
    "Use the current Verity JE route when the goal is to play the Java Verity Mod today."
  ];
}

function legacyVerity100Result({ source, packageName, hash = "", hashLabel = "SHA-256", publisherCheck = "No current publisher match" }) {
  return {
    state: "caution",
    verdict: "Legacy file signal",
    risk: "Needs source proof",
    title: "verity-1.0.0.jar is an old or ambiguous Verity Mod file name",
    summary:
      "The input matches an old Verity Mod 1.0.0 / Forge 1.20.1 / Drive-link search pattern. Treat it as unverified until the file maps to a maintainer-controlled record; the current checked Java routes are Modrinth Verity JE 6.1 with verity-6.1.jar and the CurseForge 5.7.3 comparison route.",
    source,
    package: packageName,
    project: "Legacy Verity 1.0.0 claim · current route is Verity JE 1591438",
    hash,
    hashLabel,
    publisherCheck,
    checks: legacyVerity100Checks(),
    link: "/verity-1-0-0-jar/",
    linkLabel: "Open verity-1.0.0.jar check",
    external: false
  };
}

function isVercelRiskSignal(value, parsedUrl = null) {
  const clean = normalizeSignal(value);
  const host = parsedUrl?.hostname.replace(/^www\./, "").toLowerCase() || "";
  return (
    host === "verity-mod.vercel.app" ||
    clean.includes("verity-mod.vercel.app") ||
    clean.includes("download verity v2.6") ||
    clean.includes("download verity v2 6") ||
    clean.includes("verity v2.6") ||
    clean.includes("verity v2 6") ||
    (clean.includes("forge 1.21") && clean.includes("fabric 1.21") && clean.includes("verity"))
  );
}

function vercelRiskResult({ source, packageName }) {
  return {
    state: "danger",
    verdict: "Unverified landing page",
    risk: "Do not install from this route",
    title: "verity-mod.vercel.app does not match a checked Verity Mod source record",
    summary:
      "The input matches the Vercel-hosted Verity Mod v2.6 / Minecraft 1.21+ claim seen in current search results. The checked page did not expose a Modrinth ID, CurseForge Project ID, file record, version ID, checksum, or maintainer-controlled source trail for the download button.",
    source,
    package: packageName,
    project: "No checked Modrinth or CurseForge record",
    hash: "",
    publisherCheck: "Missing source proof",
    checks: [
      "Do not use a v2.6 download button as proof of an official route.",
      "Current checked Java evidence is Modrinth verity-6.1.jar for Forge 1.20.1, plus the CurseForge 5.7.3 comparison route.",
      "If you already downloaded a file, compare its checksum locally before installing."
    ],
    link: "/verity-mod-vercel-app/",
    linkLabel: "Open Vercel app risk check",
    external: false
  };
}

function isTlauncherIntentSignal(value) {
  const clean = normalizeSignal(value);
  return clean.includes("tlauncher") && clean.includes("verity");
}

function tlauncherIntentResult({ source, packageName }) {
  return {
    state: "caution",
    verdict: "TLauncher route signal",
    risk: "Verify the Java source first",
    title: "TLauncher does not prove a Verity Mod file is official",
    summary:
      "The input matches a TLauncher install or play query. Treat the launcher as a profile layer, not as source proof. Match the same Java route, Forge 1.20.1 profile, dependency list, and mods folder that a normal Verity JE install would use, and avoid mirror links or account-bypass claims.",
    source,
    package: packageName,
    project: "TLauncher intent · use Java Verity JE route checks",
    hash: "",
    publisherCheck: "Launcher text is not a publisher checksum",
    checks: [
      "Use a maintainer project page or a checked file route before moving any JAR into the mods folder.",
      "A TLauncher video, search result, or description link is not enough to prove owner, Project ID, file record, or checksum.",
      "Test one clean Forge 1.20.1 profile before adding friends, servers, Groq, Ollama, voice, or unrelated mods."
    ],
    link: "/tlauncher/",
    linkLabel: "Open TLauncher route check",
    external: false
  };
}

function findKnownProject(value) {
  const clean = normalizeSignal(value);
  const releaseMatch = findKnownRelease(value);
  if (releaseMatch) return releaseMatch.project;
  return knownProjects.find((project) =>
    project.sources.some((source) =>
      clean.includes(source.id.toLowerCase()) ||
      source.slugs.some((slug) => signalContainsSlug(clean, slug))
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

  if (isVercelRiskSignal(value, parsedUrl)) {
    return vercelRiskResult({
      source: parsedUrl?.hostname.replace(/^www\./, "") || "Vercel, v2.6, or Forge/Fabric 1.21.x claim",
      packageName: type === "Not identified" ? "Landing page or unknown package" : type
    });
  }

  if (isTlauncherIntentSignal(value)) {
    return tlauncherIntentResult({
      source: parsedUrl?.hostname.replace(/^www\./, "") || "TLauncher install or play query",
      packageName: type === "Not identified" ? "Launcher text or Java install claim" : type
    });
  }

  if (isLegacyVerity100Signal(value, parsedUrl)) {
    return legacyVerity100Result({
      source: parsedUrl?.hostname.replace(/^www\./, "") || "Old filename, Drive ID, or install claim",
      packageName: type === "Not identified" ? "Java JAR or Drive-hosted file" : type
    });
  }

  const isVerityExeBrandSignal = project?.name === "VERITY.exe" && !parsedUrl && value.trim().toLowerCase() === "verity.exe";

  if (hashAlgorithm) {
    const normalizedHash = value.toLowerCase();
    const knownChecksum = releaseMatch?.record &&
      Object.values(releaseMatch.record.hashes || {}).some((hash) => hash.toLowerCase() === normalizedHash);

    if (knownChecksum) {
      if (isUnavailableRelease(releaseMatch.release)) {
        return {
          state: "caution",
          verdict: "Historical checksum match",
          risk: "Record now unlisted",
          title: `${releaseMatch.project.name} ${hashAlgorithm} checksum matches an observed beta record`,
          summary: `This fingerprint matches the checksum previously recorded for ${releaseMatch.release.filename}, but the latest Modrinth source check no longer shows that beta version as an active route. Use it as historical identity evidence, not as the current Verity Mod download answer.`,
          source: `${releaseMatch.record.platform} checksum`,
          package: releaseMatch.release.filename.endsWith(".jar") ? "Java JAR" : "Bedrock MCADDON",
          project: `${releaseMatch.project.name} · ${projectIdentityLabel(releaseMatch.project)}`,
          hash: normalizedHash,
          hashLabel: hashAlgorithm,
          publisherCheck: `${hashAlgorithm} matched an unlisted record`,
          checks: [
            releaseMatch.release.availability || "The matched record is no longer listed in the current source map.",
            "Do not treat a historical beta checksum as the current Verity JE 6.1 route.",
            "Open the current verity-6.1.jar page, then compare against 5.7.3 if your source still uses CurseForge."
          ],
          link: "/verity-6-1-jar/",
          linkLabel: "Open current Verity JE 6.1 route",
          external: false
        };
      }
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

  if (riskyExtension && isVerityExeBrandSignal) {
    return {
      state: "caution",
      verdict: "Known modpack name",
      risk: "Do not run random EXE files",
      title: "VERITY.exe is a modpack route name, not an instruction to run an installer",
      summary: "The checked VERITY.exe record is a CurseForge modpack route with a current ZIP file record, not a reason to trust unrelated Windows executables. Open the modpack page and keep API key or Groq fixes inside provider/profile setup.",
      source: "Text or name signal",
      package: "CurseForge modpack profile",
      project: `${project.name} · ${projectIdentityLabel(project)}`,
      hash: "",
      publisherCheck: "Not a JAR checksum route",
      checks: modpackChecks(project),
      link: modpackRoute(project),
      linkLabel: modpackRouteLabel(project),
      external: false
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
    const riskyHosts = [
      "drive.google.com",
      "docs.google.com",
      "mediafire.com",
      "mega.nz",
      "dropbox.com",
      "gofile.io",
      "pixeldrain.com",
      "workupload.com",
      "1drv.ms",
      "bit.ly",
      "tinyurl.com",
      "discordapp.com",
      "discord.com"
    ];
    const isRiskyHost = riskyHosts.some((domain) => host === domain || host.endsWith(`.${domain}`));
    const isCurseForge = host === "curseforge.com" || host.endsWith(".curseforge.com");
    const isModrinth = host === "modrinth.com" || host.endsWith(".modrinth.com");
    const isGitHub = host === "github.com" || host.endsWith(".github.com");
    const sourceMatch = findKnownSourceUrl(parsedUrl);

    if (sourceMatch) {
      const matchedRelease = sourceMatch.release || releaseMatch?.release;
      const matchedRecord = sourceMatch.record || releaseMatch?.record;
      const hasPublisherHash = Boolean(releasePublisherHash(matchedRelease, "sha512"));
      const matchedPackageType = matchedRelease?.filename ? packageType(matchedRelease.filename) : type;
      if (isSimilarNameRoute(sourceMatch.project)) {
        return {
          state: "caution",
          verdict: "Similar-name route",
          risk: "Not the main Verity Mod",
          title: `${sourceMatch.project.name} ${sourceMatch.source.platform} route recognized`,
          summary: similarNameSummary(sourceMatch.project, sourceMatch.source.id),
          source: host,
          package: type === "Not identified" ? matchedPackageType : type,
          project: `${sourceMatch.project.name} · ${projectIdentityLabel(sourceMatch.project)}`,
          hash: "",
          publisherCheck: "Separate route, not Verity JE or Bedrock",
          checks: similarNameChecks(sourceMatch.project),
          link: similarNameRoute(sourceMatch.project),
          linkLabel: similarNameRouteLabel(sourceMatch.project),
          external: false
        };
      }
      if (isJavaAddonRoute(sourceMatch.project)) {
        const matchedRecordNote = matchedRecord
          ? ` The matched file record is ${matchedRecord.id} (${matchedRelease?.filename || "checked file"}).`
          : "";
        return {
          state: "caution",
          verdict: "Known Java add-on route",
          risk: "Install after parent Verity JE",
          title: `${sourceMatch.project.name} ${sourceMatch.source.platform} route recognized`,
          summary: `${javaAddonSummary(sourceMatch.project, sourceMatch.source.id)}${matchedRecordNote}`,
          source: host,
          package: type === "Not identified" ? matchedPackageType : type,
          project: `${sourceMatch.project.name} · ${sourceMatch.source.platform} Project ID ${sourceMatch.source.id}${matchedRecord ? ` · File ID ${matchedRecord.id}` : ""}`,
          hash: "",
          publisherCheck: "Add-on route, not the parent Verity JE download",
          checks: javaAddonChecks(sourceMatch.project),
          link: sourceMatch.project.route,
          linkLabel: "Open Better Voice route check",
          external: false
        };
      }
      if (sourceMatch.project.edition === "Java modpack" || sourceMatch.project.route === "/ultimate-verity/") {
        const matchedRecordNote = matchedRecord
          ? ` The matched file record is ${matchedRecord.id} (${matchedRelease?.filename || "checked file"}).`
          : "";
        const packageLabel = sourceMatch.project.edition === "Bedrock skin pack"
          ? "CurseForge Bedrock skin pack"
          : sourceMatch.source.platform === "Modrinth"
            ? "Modrinth MRPACK profile"
            : "CurseForge modpack profile";
        return {
          state: "caution",
          verdict: sourceMatch.project.route === "/ultimate-verity/" ? "Known Ultimate route" : "Known modpack route",
          risk: "Separate from Verity Mod file",
          title: `${sourceMatch.project.name} ${sourceMatch.source.platform} route recognized`,
          summary: `${modpackSummary(sourceMatch.project, sourceMatch.source.id)}${matchedRecordNote}`,
          source: host,
          package: packageLabel,
          project: `${sourceMatch.project.name} · ${sourceMatch.source.platform} Project ID ${sourceMatch.source.id}${matchedRecord ? ` · File ID ${matchedRecord.id}` : ""}`,
          hash: "",
          publisherCheck: "Not a JAR checksum route",
          checks: modpackChecks(sourceMatch.project),
          link: modpackRoute(sourceMatch.project),
          linkLabel: modpackRouteLabel(sourceMatch.project),
          external: false
        };
      }
      if (isUnavailableRelease(matchedRelease)) {
        return {
          state: "caution",
          verdict: "Known record, now unlisted",
          risk: "Not current",
          title: `${sourceMatch.project.name} ${sourceMatch.source.platform} beta route now returns 404`,
          summary: `The URL matches a previously observed ${sourceMatch.project.edition} beta record, but the latest source check found that Modrinth no longer lists this version and the version endpoint returns 404. Use this page to understand old filenames, then choose an active publisher route.`,
          source: host,
          package: type === "Not identified" ? matchedPackageType : type,
          project: `${sourceMatch.project.name} · ${projectIdentityLabel(sourceMatch.project)}`,
          hash: "",
          publisherCheck: hasPublisherHash ? "Historical SHA-512 recorded" : "No active publisher checksum",
          checks: [
            matchedRelease.availability || "This release is not in the current source map.",
            "Do not use a copied 6.0 beta link as the current verity-6.1.jar route.",
            "Open the current Verity JE 6.1 file check, then compare against 5.7.3 when your source still names CurseForge."
          ],
          link: "/verity-6-1-jar/",
          linkLabel: "Open current Verity JE 6.1 route",
          external: false
        };
      }
      const isStandaloneFalsitySource = sourceMatch.project.name === "FALSITY [SMILEY]";
      const isBedrockFalsitySource = sourceMatch.project.name === "Falsity Mod (Bedrock remake)";
      const sourceSummary = isStandaloneFalsitySource
        ? "The host and project path match the checked standalone FALSITY [SMILEY] route. Confirm Forge 1.20.1, PKFL, CurseForge file 8528006, Modrinth version tNOLeN6v, and hashes before downloading; do not use it as a Verity JE, Bedrock, or modpack replacement."
        : isBedrockFalsitySource
          ? "The host and project path match the checked Falsity Mod Bedrock remake route by MCMOBZ. Confirm Bedrock 26.30, Project ID 1594973, file 8449365, and the MCADDON package before importing it; do not use it as the Java FALSITY [SMILEY] Forge JAR."
        : `The host and project path match the checked ${sourceMatch.project.edition} source. Still confirm the exact Minecraft version, loader or add-on build, owner, and release date on the destination page before downloading.`;
      const sourceChecks = isStandaloneFalsitySource
        ? [
            `The ${sourceMatch.source.platform} host and known FALSITY [SMILEY] project path match.`,
            "This identifies the standalone Falsity Java Forge route, not Verity JE, Verity BE, or Survive from VERITY or FALSITY.",
            hasPublisherHash
              ? "Choose the local JAR to compare it with the publisher's SHA-512 checksum."
              : "Open the Falsity JSON or source page before trusting copied mirrors."
          ]
        : isBedrockFalsitySource
          ? [
              "The CurseForge Minecraft Bedrock Addons path and Project ID 1594973 match.",
              "This identifies the fan-made Bedrock Falsity remake, not the Java FALSITY [SMILEY] JAR.",
              "Import MCADDON files through Bedrock or MCPE flows; do not put them in a Java mods folder."
            ]
        : [
            `The ${sourceMatch.source.platform} host and known project path match.`,
            "This result verifies identity signals, not the contents of a downloaded file.",
            hasPublisherHash
              ? "Choose the local JAR to compare it with the publisher's SHA-512 checksum."
              : "Use the project files tab and avoid direct mirrors of an older release."
          ];
      return {
        state: "verified",
        verdict: "Known project match",
        risk: "Identity matched",
        title: `${sourceMatch.project.name} ${sourceMatch.source.platform} route recognized`,
        summary: sourceSummary,
        source: host,
        package: type === "Not identified" ? matchedPackageType : type,
        project: `${sourceMatch.project.name} · ${projectIdentityLabel(sourceMatch.project)}`,
        hash: "",
        publisherCheck: hasPublisherHash ? "SHA-512 available for local comparison" : "Not published in the checked record",
        checks: sourceChecks,
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
    const exactFile = Boolean(releaseMatch && releaseMatch.matchKind !== "alias");
    const exactProjectId = project.sources.some((source) => value.toLowerCase() === source.id.toLowerCase());
    const matchedRecord = releaseMatch?.record || releaseMatch?.release.records[0];
    const unavailableRelease = isUnavailableRelease(releaseMatch?.release);
    const matchedPackageType = releaseMatch?.release?.filename ? packageType(releaseMatch.release.filename) : type;
    const releaseDetail = releaseMatch
      ? `${releaseMatch.release.version}; ${releaseRecordLabel(releaseMatch.release, matchedRecord)}; ${releaseMatch.release.published}`
      : "No exact current file record in the input";
    const aliasMatch = releaseMatch?.matchKind === "alias";
    if (isSimilarNameRoute(project)) {
      return {
        state: "caution",
        verdict: "Similar-name route",
        risk: "Not the main Verity Mod",
        title: exactFile ? `${project.name} filename recognized` : `${project.name} route recognized`,
        summary: similarNameSummary(project, exactProjectId ? value : project.sources[0].id),
        source: "Text, filename, or Project ID",
        package: type === "Not identified" ? matchedPackageType : type,
        project: `${project.name} · ${projectIdentityLabel(project)}`,
        hash: "",
        publisherCheck: "Separate route, not Verity JE or Bedrock",
        checks: similarNameChecks(project),
        link: similarNameRoute(project),
        linkLabel: similarNameRouteLabel(project),
        external: false
      };
    }
    if (project.edition === "Java modpack" || project.route === "/ultimate-verity/") {
      const primaryPlatform = project.sources[0]?.platform || "Project";
      const matchedRecordNote = matchedRecord ? ` Matched file record: ${matchedRecord.id}.` : "";
      const packageLabel = project.edition === "Bedrock skin pack"
        ? "CurseForge Bedrock skin pack"
        : primaryPlatform === "Modrinth" ? "Modrinth MRPACK profile" : "CurseForge modpack profile";
      return {
        state: "caution",
        verdict: project.route === "/ultimate-verity/" ? "Known Ultimate signal" : "Known modpack signal",
        risk: "Separate from Verity Mod file",
        title: `${project.name} is a checked route`,
        summary: `${modpackSummary(project, project.sources[0]?.id)}${matchedRecordNote}`,
        source: "Text or Project ID",
        package: type === "Not identified" ? packageLabel : type,
        project: `${project.name} · ${projectIdentityLabel(project)}${matchedRecord ? ` · File ID ${matchedRecord.id}` : ""}`,
        hash: "",
        publisherCheck: "Not a JAR checksum route",
        checks: modpackChecks(project),
        link: modpackRoute(project),
        linkLabel: modpackRouteLabel(project),
        external: false
      };
    }
    if (isJavaAddonRoute(project)) {
      const matchedRecordNote = matchedRecord ? ` Matched file record: ${matchedRecord.id}.` : "";
      return {
        state: "caution",
        verdict: "Known Java add-on signal",
        risk: "Install after parent Verity JE",
        title: `${project.name} is a checked add-on route`,
        summary: `${javaAddonSummary(project, project.sources[0]?.id)}${matchedRecordNote}`,
        source: "Text or Project ID",
        package: type === "Not identified" ? "Java JAR add-on" : type,
        project: `${project.name} · ${projectIdentityLabel(project)}${matchedRecord ? ` · File ID ${matchedRecord.id}` : ""}`,
        hash: "",
        publisherCheck: "Add-on route, not the parent Verity JE download",
        checks: javaAddonChecks(project),
        link: project.route,
        linkLabel: "Open Better Voice route check",
        external: false
      };
    }
    return {
      state: "caution",
      verdict: unavailableRelease ? "Observed beta, now unlisted" : exactFile || exactProjectId ? "Known release signal" : "Partial name match",
      risk: unavailableRelease ? "Not current" : "Name can be copied",
      title: exactFile ? `${project.name} filename recognized` : `${project.name} route recognized`,
      summary: unavailableRelease
        ? `The text matches a previously observed beta filename or record. ${releaseMatch.release.availability} Use this as historical route context, not as the current Verity Mod download answer.`
        : aliasMatch
          ? `The text matches a checked project or route phrase. ${releaseDetail}. Use the linked publisher record to confirm the exact file before downloading or importing.`
          : `The text matches a checked filename, project path, or Project ID. ${releaseDetail}. A filename can be copied, so use the linked publisher record to confirm that the downloaded bytes came from the same release.`,
      source: "Text or filename",
      package: type,
      project: `${project.name} · ${projectIdentityLabel(project)}`,
      hash: "",
      publisherCheck: unavailableRelease
        ? "Historical SHA-512 recorded"
        : releasePublisherHash(releaseMatch?.release, "sha512") ? "SHA-512 available for local comparison" : "Not published in the checked record",
      checks: unavailableRelease ? [
        "The latest source check found this beta missing from the active Modrinth version list.",
        "Do not replace a stable profile from a mirror that only copies the old beta filename.",
        "Use the current 5.7.3 stable route or the project versions list before installing."
      ] : [
        "Filename matching is useful but not a content scan.",
        "Confirm the current file on the publisher files page.",
        releasePublisherHash(releaseMatch?.release, "sha512")
          ? "Choose the local file to compare its SHA-512 with the publisher record."
          : "Choose a local file to calculate its SHA-256 fingerprint."
      ],
      link: unavailableRelease ? "/verity-5-7-3-jar/" : releaseRecordLink(project, releaseMatch?.release, matchedRecord?.platform),
      linkLabel: unavailableRelease
        ? "Open current stable Java route"
        : matchedRecord
        ? `Open ${matchedRecord.platform} ${releaseRecordLabel(releaseMatch.release, matchedRecord)}`
        : `Open ${project.name} files`,
      external: !unavailableRelease
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
  const unavailableRelease = isUnavailableRelease(releaseMatch?.release);
  const size = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;

  if (isLegacyVerity100Signal(file.name)) {
    return legacyVerity100Result({
      source: `Local file · ${size}`,
      packageName: type,
      hash,
      hashLabel: "SHA-256",
      publisherCheck: "Local hash calculated; no current publisher match"
    });
  }

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

  if (project && isSimilarNameRoute(project)) {
    return {
      state: publisherHashMismatch ? "danger" : "caution",
      verdict: publisherHashMismatch ? "Publisher checksum mismatch" : exactMetadata ? "Similar-name metadata match" : "Similar-name file signal",
      risk: publisherHashMismatch ? "Not the checked bytes" : "Not the main Verity Mod",
      title: `${project.name} file signal found`,
      summary: `The local file name matches ${project.name}, which the July 30 source map treats as a similar-name route rather than the main Verity Mod route. ${expectedDetail}. The browser calculated the fingerprint locally; use it to compare identity, not as a reason to install the file as Verity JE or Bedrock.`,
      source: `Local file · ${size}`,
      package: type,
      project: `${project.name} · ${projectIdentityLabel(project)}`,
      hash,
      hashLabel: "SHA-256",
      publisherCheck: expectedSha512 ? (publisherHashMatches ? "SHA-512 exact match" : "SHA-512 mismatch") : "Separate route; no publisher hash recorded",
      checks: [
        ...similarNameChecks(project),
        exactMetadata ? "Filename and displayed size match the similar-name source-map record." : "Filename alone is not enough to prove the file came from the matched project."
      ],
      link: similarNameRoute(project),
      linkLabel: similarNameRouteLabel(project),
      external: false
    };
  }

  return {
    state: publisherHashMismatch ? "danger" : unavailableRelease ? "caution" : publisherHashMatches || exactMetadata ? "verified" : "caution",
    verdict: publisherHashMismatch
      ? "Publisher checksum mismatch"
      : unavailableRelease && publisherHashMatches
        ? "Historical checksum match"
      : publisherHashMatches
        ? "Publisher checksum match"
        : unavailableRelease
          ? "Observed beta, now unlisted"
        : exactMetadata
          ? "Current metadata match"
          : project
            ? "Filename match only"
            : "Local fingerprint created",
    risk: publisherHashMismatch ? "Not the checked bytes" : unavailableRelease ? "Record now unlisted" : publisherHashMatches ? "Exact bytes identified" : exactMetadata ? "Not a malware verdict" : "Contents not scanned",
    title: publisherHashMismatch
      ? `${project.name} filename matches, but the SHA-512 does not`
      : unavailableRelease && publisherHashMatches
        ? `${project.name} matches a historical beta checksum`
      : publisherHashMatches
        ? `${project.name} matches the publisher's current checksum`
        : unavailableRelease
          ? `${project.name} beta filename is no longer a current route`
        : exactMetadata
          ? `${project.name} name and size match the current record`
          : project
            ? `${project.name} filename signal found`
            : "File fingerprint calculated locally",
    summary: publisherHashMismatch
      ? `The filename or size may match, but the local SHA-512 is different from the checksum published for the checked Modrinth file (${expectedDetail}). This does not identify malware, but it proves this is not byte-for-byte the recorded artifact.`
      : unavailableRelease && publisherHashMatches
        ? `The file matches a checksum previously recorded for ${releaseMatch.release.filename}, but the current Modrinth check no longer lists that beta version. Treat this as historical identity evidence and return to an active publisher route before installing.`
      : publisherHashMatches
        ? `The filename, size, and SHA-512 match the checked publisher metadata (${expectedDetail}). This proves byte-for-byte identity with that Modrinth artifact; it is still not a general malware guarantee.`
        : unavailableRelease
          ? `The filename matches a previously observed beta record, but ${releaseMatch.release.availability} Compare the current versions list before installing.`
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
    publisherCheck: expectedSha512 ? (publisherHashMatches ? (unavailableRelease ? "Historical SHA-512 exact match" : "SHA-512 exact match") : "SHA-512 mismatch") : "No publisher hash recorded",
    checks: [
      "SHA-256 identifies the selected bytes and changes if the file changes.",
      unavailableRelease
        ? "The matched beta record is no longer listed as a current Modrinth version."
        : publisherHashMatches
        ? "The local SHA-512 exactly matches the publisher's current Modrinth checksum."
        : publisherHashMismatch
          ? "Do not treat this file as the checked Modrinth artifact."
          : exactMetadata
            ? "Filename and displayed size match the checked release record."
            : "A hash without a publisher reference does not prove safety.",
      project ? "Open the matched project files page and compare release details." : "Confirm the source, owner, edition, and release before installing."
    ],
    link: unavailableRelease ? "/verity-5-7-3-jar/" : project ? releaseRecordLink(project, releaseMatch?.release, matchedRecord?.platform) : `https://www.virustotal.com/gui/file/${hash}`,
    linkLabel: project
      ? unavailableRelease
        ? "Open current stable Java route"
        : matchedRecord
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
    checks: ["No data has been sent anywhere.", "Known projects currently include Verity JE and multiple separate Bedrock add-ons."],
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
