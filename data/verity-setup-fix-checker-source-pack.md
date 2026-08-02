# Verity Mod setup and fix checker source pack

Checked: August 2, 2026 at 10:53 Asia/Shanghai

Canonical checker: https://veritymodchecker.online/#route-checker

Related routes:

- Download and install: https://veritymodchecker.online/how-to-get-verity-mod/
- Not working: https://veritymodchecker.online/not-working/
- Voice problems: https://veritymodchecker.online/voice-not-working/
- Java vs Bedrock chooser: https://veritymodchecker.online/java-vs-bedrock/
- Source and file checker: https://veritymodchecker.online/#checker

This note is a citation-friendly reference for forum answers, video descriptions, wiki notes, and support replies about Verity Mod setup problems. It does not host files, mirror downloads, collect API keys, upload local files, or claim that a matched source is malware-free.

## Why a setup checker is needed

Search results and player questions mix several different Verity-related routes:

- Java players see Verity JE, Forge, NeoForge, Groq, Ollama, API keys, voice, and old beta files.
- Bedrock and MCPE players see MCADDON files, behavior packs, resource packs, Beta APIs, cheats, commands, debugger connect, and PnTMC or Verity BE routes.
- Modpack searches expose VERITY.exe, Verity Pack, Ultimate VERITY, and other pack names that are not standalone Java JAR replacements.
- Some pages say only "download Verity" without proving edition, owner, Project ID, loader, file record, or version.

The setup and fix checker routes a player by edition and symptom before they reinstall anything. The source/file checker separately handles URLs, filenames, Project IDs, hashes, and local SHA-256 checks in the browser.

## Current official Java source facts

Official Modrinth API check for Verity JE:

- Project URL: https://api.modrinth.com/v2/project/on1Y0osD
- Project ID: on1Y0osD
- Title: Verity JE
- Downloads at check: 441,649
- Followers at check: 157
- Last updated: 2026-08-01T16:26:35.375695Z

Current Modrinth version route:

- Version URL: https://api.modrinth.com/v2/version/6jRN8Exp
- Version ID: 6jRN8Exp
- Version number: 6.1
- File: verity-6.1.jar
- Loader and game version: Forge, Minecraft 1.20.1
- Version downloads at check: 5,015
- SHA-1: 72f974905772b020c51e9605d35777be1a542e62
- SHA-512: 4e721c8709c30230ee9b9a59eca2f70410c841244baa6ec473170cb0528562e369d277f78c20a155dcd863dabaa93897290e2cf0402804107bca93a98aa1b189

Stable 5.7.3 Modrinth route:

- Version URL: https://api.modrinth.com/v2/version/yAt0wv1Z
- Version ID: yAt0wv1Z
- File: verity-5.7.3.jar
- Loader and game version: Forge, Minecraft 1.20.1
- Version downloads at check: 301,968
- SHA-1: da28115bbad0478d9ed9c97f2466b67d46d13d51
- SHA-512: 15cd8d895788f4859ecf442b7a970c8bca3b30db99aa170639b5f003a18b0f0255bdf5b042eb95a686ac51ecec80afbfeb766654c3471f5cc890664982cd9c81

## Current official route pages to open before downloading

- Verity JE Java project: https://www.curseforge.com/minecraft/mc-mods/verity-je
- Verity JE Modrinth project: https://modrinth.com/project/on1Y0osD
- Verity BE Bedrock project: https://www.curseforge.com/minecraft-bedrock/addons/verity-be
- PnTMC Verity - Bedrock Edition: https://www.curseforge.com/minecraft-bedrock/addons/verity-bedrock-edition
- VERITY.exe modpack route: https://www.curseforge.com/minecraft/modpacks/verity-exe

## Symptom routing

| Player problem | Start with | Why |
| --- | --- | --- |
| "I just need the Verity Mod download" | https://veritymodchecker.online/how-to-get-verity-mod/ | Choose Java, Bedrock, MCPE, app, or modpack before opening a file. |
| "Verity Mod not working" | https://veritymodchecker.online/not-working/ | Separate loader mismatch, inactive Bedrock packs, API errors, voice, spawn, and stale files. |
| "Verity only says ..." | https://veritymodchecker.online/verity-doesnt-respond/ | Dots can be Bedrock backend, Java AI setup, provider, or voice/text route confusion. |
| "Voice or microphone does not work" | https://veritymodchecker.online/voice-not-working/ | Text response, microphone, STT, TTS, provider, and output audio are different layers. |
| "Java or Bedrock?" | https://veritymodchecker.online/java-vs-bedrock/ | A Java JAR cannot be imported into Bedrock, and a Bedrock MCADDON is not a Java mod. |
| "Is this link or file real?" | https://veritymodchecker.online/#checker | Check host, project identity, filename, Project ID, checksum signals, and package type. |

## Safe support fields

Ask a player for:

- Minecraft edition and version
- Chosen Verity route or project URL
- Filename or Project ID
- Whether the base project loads in a clean profile or world
- Whether typed chat works
- Whether voice, microphone, TTS, or provider setup is part of the issue
- One sanitized log line if an API status code is shown

Do not ask for:

- API keys
- Full screenshots exposing keys
- Rehosted download links
- Token-bearing URLs
- Payment or reciprocal links

Latest analytics context: Google Search Console delayed July 15 through July 30 showed 60 clicks, 1,830 impressions, 3.3 percent CTR, average position 8.6, and exact `verity mod` at 2 clicks / 3 impressions. GA4 last 7 days showed 290 active users, 134 Organic Search sessions, 83 Referral sessions, 68 `gist.github.com / referral` sessions, and 60 `verity_outbound_project_click` key events. Public DNS for the canonical domain currently returns no A answer while RDAP showed `server hold`, so registrar-side domain recovery is the traffic-critical blocker before canonical index pings or fresh external submissions can work reliably.
