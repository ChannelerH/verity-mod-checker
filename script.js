const routes = {
  java: {
    label: "Java setup route",
    readout: "Java",
    link: "https://www.curseforge.com/minecraft/mc-mods/verity-je",
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
    link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-be",
    versions: ["Bedrock 26.30", "Bedrock 26.20", "I am not sure"],
    issues: ["download", "not working", "box not spawning", "voice not working", "is it real"],
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
        title: "Do not assume Java voice steps apply to Bedrock",
        summary:
          "Bedrock addon behavior differs from Java mod behavior. Start with the Bedrock project instructions.",
        steps: [
          "Confirm the Bedrock addon version mentions voice support.",
          "Check platform microphone permission if the feature is available.",
          "Test without resource packs that alter sound behavior.",
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
    link: "https://www.curseforge.com/minecraft-bedrock/addons/verity-be",
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
  button.addEventListener("click", () => setEdition(button.dataset.edition));
});

[versionSelect, issueSelect, voiceToggle, aiToggle].forEach((control) => {
  control.addEventListener("change", render);
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
