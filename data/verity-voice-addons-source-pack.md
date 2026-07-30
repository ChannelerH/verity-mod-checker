# Smiley's Better Voice source pack for Verity JE voice add-on checks

Checked: 2026-07-31 03:45 Asia/Shanghai

Canonical route: https://veritymodchecker.online/smileys-better-voice/

Machine data:

- JSON: https://veritymodchecker.online/data/verity-voice-addons.json
- Schema: https://veritymodchecker.online/data/verity-voice-addons.schema.json
- Source map: https://veritymodchecker.online/source-map/
- Public Gist copy: https://gist.github.com/ChannelerH/d5c697e15f451982d489dff268d0ac3c

## Why this source pack exists

Current Verity search demand is no longer only "download the mod." Search Console is beginning to show the exact head query `verity mod`, while GA4 shows active traffic on API and voice troubleshooting pages. A current public player question also describes the common symptom: Verity messages appear in chat, but no voice can be heard. At the same time, current search results surface Smiley's Better Voice as a dedicated Verity JE add-on for expressive TTS, Fish Audio, Cartesia, and voice mimicking.

The July 31 source check adds an important compatibility note: the current Smiley's Better Voice 4.0.0 file changelog says it adds support for Verity JE 6.0.0 and is incompatible with earlier Verity JE versions. That means a silent or broken Better Voice install may be a parent/add-on version mismatch before it is a microphone, TTS provider, or API-key problem. The official `files/all` page also exposes a compact version list, so older parent routes should be matched from official rows instead of mirrored JAR posts.

This source pack gives editors, creators, server helpers, and community answer writers a citation-safe summary they can reference without reposting JAR files, collecting API keys, or guessing whether a voice issue belongs to Java, Bedrock, VERITY.exe, Fish Audio, Cartesia, Groq, or local Minecraft audio.

## Primary checked project

Project: Smiley's Better Voice

- Host: CurseForge
- Owner: Toast5
- Project ID: 1608717
- Project URL: https://www.curseforge.com/minecraft/mc-mods/smileys-better-voice
- Project downloads at check: 101,848 on the official files/all page; the exact file page rendered 101,479 during the same check
- Main current file: `Smiley's Better Voice-4.0.0.jar`
- File record: 8536538
- File URL: https://www.curseforge.com/minecraft/mc-mods/smileys-better-voice/files/8536538
- File downloads at check: 3.3K displayed in the official files/all row; the exact file page rendered 3.0K during the same check
- File size: 1.4 MB in the official files/all row
- Loader: Forge for the current 1.20.1 file
- Project page also shows game versions 1.21.1 and 1.20.1 and loaders Forge and NeoForge
- Maven snippet: `implementation fg.deobf("curse.maven:smileys-better-voice-1608717:8536538")`

The two official CurseForge routes did not render identical counters during the July 31 03:45 Asia/Shanghai check. This source pack treats project downloads and file downloads as point-in-time display counters that can lag by page cache, not as exact real-time install counts.

## Official version-list snapshot

Use this snapshot as a route-selection aid. Open the exact file page before installing an older row.

| Official row | Game / loader | Displayed downloads | Route note |
| --- | --- | --- | --- |
| `Smiley's Better Voice-4.0.0.jar` | 1.20.1 Forge | 3.3K | Current file-list row; exact file page changelog says it supports Verity JE 6.0.0 and is incompatible with earlier Verity JE versions. |
| `Smiley's Better Voice-3.1.1.jar` | 1.20.1 Forge | 18.2K | Older official row; open its exact file/changelog before pairing it with an older parent Verity JE route. |
| `Smiley's Better Voice-3.1.0.jar` | 1.20.1 Forge | 3.6K | Older official row for support threads that mention 3.1.x. |
| `Smiley's Better Voice-3.0.0.jar` | 1.20.1 Forge | 14.4K | Older official row that can help when a support thread mentions 3.0.0 behavior, but still needs exact-file verification. |
| `Smiley's Better Voice-2.0.7.jar` | 1.20.1 Forge | 9.3K | Older official Forge row for 1.20.1. |
| `Smiley's Better Voice-2.0.5.jar` | 1.20.1 Forge | 9.8K | Older official Forge row for 1.20.1. |
| `Smiley's Better Voice-2.0.2.jar` | 1.20.1 Forge | 10.6K | Older official Forge row for 1.20.1. |
| `Smiley's Better Voice-2.0.1.jar` | 1.20.1 Forge | 4.9K | Older official Forge row for 1.20.1. |
| `Smiley's Better Voice-2.0.0.jar` | 1.21.1 NeoForge | 6.1K | Separate NeoForge row; do not mix it into a 1.20.1 Forge profile. |
| `Smiley's Better Voice-2.0.0.jar` | 1.20.1 Forge | 7.7K | Same version label as the NeoForge row, but a different loader/game row. |

## Route interpretation

Smiley's Better Voice is a Verity JE add-on. It is not a replacement for Verity JE, not a Bedrock MCADDON, not a VERITY.exe modpack, not a generic "voice fix" mirror, and not a place to paste private API keys.

The project page describes it as an add-on to VarmiteYT's Verity JE that changes how Verity sounds. It adds provider-specific TTS options and voice mimicking while Verity JE remains the parent mod. The current file page changelog is more specific than the broad project-page requirement wording: for `Smiley's Better Voice-4.0.0.jar`, match Verity JE 6.0.0 and do not use that file with earlier Verity JE versions.

## Requirements from the checked project page

- Minecraft 1.20.1 for the current 4.0.0 Forge file.
- Forge 47+.
- Verity JE 6.0.0 for the current 4.0.0 file, because the file changelog says 4.0.0 is incompatible with earlier Verity JE versions.
- Older project-page requirement wording may still mention Verity JE 5.0+, so use the exact file page for the current file before installing.
- If staying on an older parent Verity JE route, choose an older Better Voice row from the official files/all page only after matching Minecraft version, loader, and exact file page notes.
- Cloth Config and GeckoLib.
- Both Verity JE and Smiley's Better Voice installed together.

## Provider split

Fish Audio:

- Default route for quality and emotion.
- Uses Fish API key and voice/reference ID.
- Supports rich emotion tags and voice mimicking.

Cartesia:

- Faster response / pronunciation route.
- Uses Cartesia API key and Voice ID.
- Separate provider settings from Fish.

Important: a Groq or Ollama "Invalid API Key" inside Verity JE can be separate from Fish or Cartesia TTS credentials. Do not tell players to replace the Better Voice JAR before they know which provider key failed.

## Voice mimicking and privacy notes

The project page describes voice mimicking as a Fish Audio feature that can upload roughly 10 seconds of clean captured speech to create a private voice model. It says mimics are private to the player's Fish account and stored server-side for multiplayer. This route should therefore avoid asking users to paste keys, voice IDs, or private audio samples into public comments.

Safe support fields:

- Installed project and file record.
- Whether Verity JE text replies work before voice.
- Whether Better Voice is enabled.
- Provider selected: Fish Audio or Cartesia.
- Whether the provider key and voice ID were entered in the right tab.
- Whether the player has internet access and provider credits.
- Sanitized status or toast message with no API key and no audio sample.

## Troubleshooting summary

- Silent Verity: confirm Better Voice is enabled, Verity JE text-to-speech is on, the provider tab has a valid key plus voice ID, and the player is online.
- Better Voice 4.0.0 with Verity JE 5.x or earlier: match the parent mod to Verity JE 6.0.0 or choose an official older Better Voice file that matches the parent route after checking its exact file page.
- Invalid API Key: check whether the error belongs to Groq/Ollama in Verity JE instead of Fish or Cartesia.
- Voice mimic failed: verify Fish key, credits, and about 10 seconds of clean push-to-talk speech.
- Repeating throw scream: compare against current Better Voice and Verity JE versions because the project notes this was fixed in 3.0.0.

## Related but separate projects

- Smiley's Better Vision lets Verity see the Minecraft world. It is not the voice add-on route.
- Smiley's Better Brain changes AI behavior. It is not the voice add-on route.
- Smiley's Collection is a modpack that bundles several Smiley add-ons. Treat it as a separate profile.

## What this site does not do

- It does not mirror JARs.
- It does not collect Fish, Cartesia, Groq, Ollama, OpenRouter, or Minecraft credentials.
- It does not upload audio.
- It does not claim that Smiley's Better Voice is official Verity JE.
- It does not use fake traffic, paid links, comment spam, CAPTCHA bypass, or GitHub directory PR outreach.
