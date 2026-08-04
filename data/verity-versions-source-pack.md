# Verity Mod Version Matrix Source Pack

Checked: 2026-08-04 09:45 Asia/Shanghai

Canonical guide: https://veritymodchecker.online/versions/

Machine-readable data:

- Release JSON: https://veritymodchecker.online/data/verity-releases.json
- Source-map JSON: https://veritymodchecker.online/data/verity-source-map.json
- Source-map CSV: https://veritymodchecker.online/data/verity-source-map.csv
- Verity BE 2.0.0 source pack: https://veritymodchecker.online/data/verity-be-2-0-0-source-pack.md
- Public Verity BE 2.0.0 Gist copy: https://gist.github.com/ChannelerH/92901d32f1848ca2d737a237433dd23b

Purpose: this source pack gives editors, moderators, video creators, wiki contributors, and Minecraft community helpers a citation-safe version matrix for Verity Mod searches. It does not host Verity files, mirror downloads, bypass official pages, collect API keys, or claim that download counters are malware verdicts.

## Fast answer

There is no single "latest Verity Mod download" that fits every player.

- Java players using Modrinth currently see Verity JE 6.1, version ID `6jRN8Exp`, file `verity-6.1.jar`, Forge 1.20.1. The Modrinth API marks this version type as `beta`, so cite it as the current visible Modrinth route, not as the same stable route as CurseForge.
- Java players using CurseForge now see Verity JE Project ID `1591438` with `verity-6.1.jar`, file record `8555265`, as the main Forge 1.20.1 file. Keep `verity-5.7.3.jar` / `8461257` for previous stable guides and exact old-file checks.
- Bedrock and MCPE players should not use Java JAR files. They need a `.mcaddon` route by owner, Project ID, file record, supported Bedrock build, and setup requirements.
- Stale beta records such as `YLEoXe6t` / `verity-6.0.1-all.jar` and `5ech0sTo` / `verity-6.0.0.jar` are old-link diagnosis records, not current recommendations.

## Official Java sources

### Modrinth Verity JE

Project URL: https://modrinth.com/mod/verity-je-official

API URL: https://api.modrinth.com/v2/project/on1Y0osD

At the August 4 check, the Modrinth project showed:

- Project ID: `on1Y0osD`
- Project downloads: `497260`
- Followers: `176`
- Updated: `2026-08-01T16:26:35.375695Z`
- Visible version IDs: `5QXbQ4rF`, `7qhItxce`, `yAt0wv1Z`, `CXsEzVwJ`, `6jRN8Exp`

Version API URL: https://api.modrinth.com/v2/project/on1Y0osD/version

Visible versions at this check:

| Version | Version ID | File | Downloads | Loader | Game version | Type |
| --- | --- | --- | ---: | --- | --- | --- |
| 6.1 | `6jRN8Exp` | `verity-6.1.jar` | 37617 | Forge | 1.20.1 | beta |
| 6 | `CXsEzVwJ` | `verity-6.jar` | 67187 | Forge | 1.20.1 | beta |
| 5.7.3 | `yAt0wv1Z` | `verity-5.7.3.jar` | 320353 | Forge | 1.20.1 | release |
| 5.7.2 | `7qhItxce` | `verity-5.7.2.jar` | 39428 | Forge | 1.20.1 | release |
| 5.6.2 | `5QXbQ4rF` | `verity-5.6.2.jar` | 14745 | Forge | 1.20.1 | release |

The current Verity JE 6.1 file has SHA-1 `72f974905772b020c51e9605d35777be1a542e62` and SHA-512 `4e721c8709c30230ee9b9a59eca2f70410c841244baa6ec473170cb0528562e369d277f78c20a155dcd863dabaa93897290e2cf0402804107bca93a98aa1b189`.

### CurseForge Verity JE

Project URL: https://www.curseforge.com/minecraft/mc-mods/verity-je

At the August 4 check, the project page showed:

- Project name: Verity JE
- Owner: `VarmiteYT`
- Project ID: `1591438`
- Project downloads: `2695452`
- Main file: `verity-6.1.jar`
- Main file record: `8555265`
- Main file downloads: `27.0K`
- Previous stable file: `verity-5.7.3.jar` / `8461257` / `866.6K` displayed downloads
- Loader and game version: Forge 1.20.1

The project description says Verity JE is an official adaptation created and published with ThatMob permission. It also warns that the NeoForge 1.21.1 branch is deprecated and buggy.

## Official Bedrock and MCPE sources

### Verity BE (Official)

Project URL: https://www.curseforge.com/minecraft-bedrock/addons/verity-be

File URL: https://www.curseforge.com/minecraft-bedrock/addons/verity-be/files/8544453

At the August 4 check:

- Owner: `Undertaletalelover`
- Project ID: `1574632`
- Project downloads: `4490032`
- Current file: `Verity (Stable) (2.0.0)-(26.3).mcaddon`
- File record: `8544453`
- File downloads: `193.7K` displayed at the check
- File size: `23.7 MB`
- Supported build: `26.30`
- What's new: hot fix.
- Setup notes: enable Beta APIs, run the route-specific connect command, use cheats, and type `Verity` before the chat message.
- Same-day old-link route: record `8543534`, the earlier visible Stable 2.0.0 file, remains useful for old tutorials and cached snippets but is not the current hot fix recommendation.
- Previous visible route: record `8506198`, `Verity (Stable) (1.1.0)-(26.3).mcaddon`, remains useful for old-video and old-file diagnosis but is no longer the current file recommendation.

### PnTMC Verity - Bedrock Edition

Project URL: https://www.curseforge.com/minecraft-bedrock/addons/verity-bedrock-edition

Files URL: https://www.curseforge.com/minecraft-bedrock/addons/verity-bedrock-edition/files/all

MCPEDL URL: https://mcpedl.com/verity-bedrock-edition/

At the August 4 check:

- Owner: `PnTMC`
- Project ID: `1575941`
- CurseForge project downloads: `8325618`
- MCPEDL displayed listing downloads: `8.3M`
- CurseForge files/all showed `1-19 of 19 results`
- MCPEDL listed the three 3.2.0 downloads above older 3.1.0 and 3.0.0 rows

Current 3.2.0 rows:

| Bedrock row | File record | Displayed downloads | File size | Uploaded |
| --- | ---: | ---: | ---: | --- |
| `ThatMob's Verity 3.2.0 by PnTMC [Add-on] - V26.30.mcaddon` | 8517480 | 756.3K | 39.6 MB | 2026-07-27 |
| `ThatMob's Verity 3.2.0 by PnTMC [Add-on] - V26.20.mcaddon` | 8517478 | 31.3K | 39.6 MB | 2026-07-27 |
| `ThatMob's Verity 3.2.0 by PnTMC [Add-on] - V26.10.mcaddon` | 8517473 | 22.2K | 39.6 MB | 2026-07-27 |

Older rows still visible and relevant to old videos:

- 3.1.0 V26.30 record `8503821`, 268.1K displayed downloads
- 3.1.0 V26.20 row, 40.8K displayed downloads
- 3.1.0 V26.10 row, 29.6K displayed downloads
- 3.0.0 V26.30 row, 103.6K displayed downloads
- 3.0.0 V26.20 row, 34.1K displayed downloads
- 3.0.0 V26.10 row, 29.6K displayed downloads
- 2.1.0 V26.30 record `8327253`, 2.9M displayed downloads
- 2.1.0 V26.20 record `8327250`, 306.1K displayed downloads
- 2.1.0 V26.10 record `8327242`, 229.1K displayed downloads

MCPEDL comments at this check still include real player questions around no reply, no spawn with Beta API on, how to talk, voice, monster form, and whether the add-on is good. Those are user-need signals for troubleshooting pages, not reasons to mirror files.

### Verity Pocket Edition (Be)

Project URL: https://www.curseforge.com/minecraft-bedrock/addons/verity-pocket-edition-be

File URL: https://www.curseforge.com/minecraft-bedrock/addons/verity-pocket-edition-be/files/8406293

At the August 4 check:

- Owner: `vexi1111_`
- Project ID: `1596246`
- Project downloads: `68107`
- Current file: `Verity (1.0.2) - (26.3).mcaddon`
- File record: `8406293`
- File downloads: `60.3K`
- File size: `18.6 MB`
- Supported build: `26.30`
- Known note: AI may stop responding when a Cloudflare Workers daily limit is hit.

## Suggested citations

Use:

- "current visible Modrinth Verity JE 6.1 route"
- "CurseForge Verity JE stable comparison file"
- "Verity BE Project ID 1574632"
- "PnTMC Verity - Bedrock Edition Project ID 1575941"
- "Verity Pocket Edition (Be) Project ID 1596246"

Avoid:

- "one latest Verity Mod file for everyone"
- "Java JAR for MCPE"
- "MCPEDL and CurseForge rows are identical"
- "download counter proves safety"
- "this site hosts the download"

The maintained guide page is https://veritymodchecker.online/versions/.
