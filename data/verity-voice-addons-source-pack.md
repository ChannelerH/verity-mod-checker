# Smiley's Better Voice source pack for Verity JE voice add-on checks

Checked: 2026-07-30 23:55 Asia/Shanghai

Canonical route: https://veritymodchecker.online/smileys-better-voice/

Machine data:

- JSON: https://veritymodchecker.online/data/verity-voice-addons.json
- Schema: https://veritymodchecker.online/data/verity-voice-addons.schema.json
- Source map: https://veritymodchecker.online/source-map/
- Public Gist copy: https://gist.github.com/ChannelerH/d5c697e15f451982d489dff268d0ac3c

## Why this source pack exists

Current Verity search demand is no longer only "download the mod." Search Console is beginning to show the exact head query `verity mod`, while GA4 shows active traffic on API and voice troubleshooting pages. A current public player question also describes the common symptom: Verity messages appear in chat, but no voice can be heard. At the same time, current search results surface Smiley's Better Voice as a dedicated Verity JE add-on for expressive TTS and voice mimicking.

This source pack gives editors, creators, server helpers, and community answer writers a citation-safe summary they can reference without reposting JAR files, collecting API keys, or guessing whether a voice issue belongs to Java, Bedrock, VERITY.exe, Fish Audio, Cartesia, Groq, or local Minecraft audio.

## Primary checked project

Project: Smiley's Better Voice

- Host: CurseForge
- Owner: Toast5
- Project ID: 1608717
- Project URL: https://www.curseforge.com/minecraft/mc-mods/smileys-better-voice
- Project downloads at check: 100,498
- Main current file: `Smiley's Better Voice-4.0.0.jar`
- File record: 8536538
- File URL: https://www.curseforge.com/minecraft/mc-mods/smileys-better-voice/files/8536538
- File downloads at check: 2.4K displayed
- File size: 1.4 MB
- Loader: Forge for the current 1.20.1 file
- Project page also shows game versions 1.21.1 and 1.20.1 and loaders Forge and NeoForge
- Maven snippet: `implementation fg.deobf("curse.maven:smileys-better-voice-1608717:8536538")`

## Route interpretation

Smiley's Better Voice is a Verity JE add-on. It is not a replacement for Verity JE, not a Bedrock MCADDON, not a VERITY.exe modpack, not a generic "voice fix" mirror, and not a place to paste private API keys.

The project page describes it as an add-on to VarmiteYT's Verity JE that changes how Verity sounds. It adds provider-specific TTS options and voice mimicking while Verity JE remains the parent mod.

## Requirements from the checked project page

- Minecraft 1.20.1 for the current 4.0.0 Forge file.
- Forge 47+.
- Verity JE 5.0+.
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
