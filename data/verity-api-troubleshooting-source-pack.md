# Verity Mod API Connection Failed Source Pack

Checked: 2026-07-30 23:05 Asia/Shanghai

Canonical guide: https://veritymodchecker.online/api-connection-failed/

Machine-readable data:

- JSON: https://veritymodchecker.online/data/verity-api-troubleshooting.json
- CSV: https://veritymodchecker.online/data/verity-api-troubleshooting.csv
- Schema: https://veritymodchecker.online/data/verity-api-troubleshooting.schema.json
- Public Gist: https://gist.github.com/ChannelerH/a28dc4b2bb4a397793345e6c61afc86e

This source pack is for community editors, video creators, support helpers, and players who need to cite the Verity Mod API connection failed route without mirroring files or collecting API keys. It separates provider errors from Minecraft install errors.

## Why this exists

The latest delayed Search Console sample for veritymodchecker.online shows the head query beginning to appear and continued player demand around API errors, including these query rows:

- `verity mod`: 2 clicks / 3 impressions
- `verity api connection failed 401`: 2 clicks / 2 impressions
- `verity-3.4.1.jar`: 1 click / 13 impressions
- `api connection failed status 429 verity`: 1 click / 4 impressions
- `api connection failed 429 verity mod`: 1 click / 2 impressions
- `verity mod status 429`: 1 click / 2 impressions
- `api connection failed 401 verity mod`: 1 click / 1 impression
- `verity error 401`: 1 click / 1 impression
- `api connection failed status 429 verity mod`: 1 click / 1 impression

GA4 last-7-days data checked July 30 shows `/api-connection-failed/` as the highest-viewed page in the page-title sample, with 158 page views. The same GA4 check shows 156 Organic Search sessions, 90 Referral sessions, 73 `gist.github.com / referral` sessions, and 58 `verity_outbound_project_click` events.

## Current Verity JE source facts

Official Modrinth API checks on July 30 show:

- Project: `on1Y0osD`
- Current version: `CXsEzVwJ`
- Current file: `verity-6.jar`
- Loader / game version: Forge 1.20.1
- Project downloads at check: 367,159
- Current version downloads at check: 22,116
- Stable 5.7.3 version downloads at check: 276,733
- Project updated: 2026-07-29T18:50:58.960032Z
- Followers at check: 121
- SHA-1 for `verity-6.jar`: `609c799d7350a657cf2193839224bd6c2f9971b2`
- SHA-512 for `verity-6.jar`: `25771d7476639e5669bea28d0beb503813ca304cfd6ddb080be3eb4186fbea34024f3a0e93bcaeb4cef4ecfb925420956a5b0e92f4a957c7ff7b3a4a22127b6e`

Primary source URLs:

- https://api.modrinth.com/v2/project/on1Y0osD
- https://api.modrinth.com/v2/version/CXsEzVwJ
- https://api.modrinth.com/v2/version/yAt0wv1Z

## Status-code route map

| Status or symptom | Most likely layer | First action |
|---|---|---|
| 401 Unauthorized or invalid API key | Credential or wrong provider | Match Groq versus OpenRouter, rotate exposed keys, paste one fresh provider key locally, and retest one short text prompt. |
| 403 Forbidden | Account, organization, model, route, content, or permission restriction | Check model access, provider permissions, account restrictions, and any guardrail or moderation message. |
| 404 model or endpoint not found | Model ID, endpoint, or route configuration | Open the current provider model list and select a model supported by the installed Verity build. |
| 429 Too Many Requests | Request, token, audio, image, or daily rate limit | Stop retries, inspect the provider limits page, wait for the reset window, then test one short text prompt. |
| 503 service unavailable or provider 529 overload | Provider availability, upstream route, or temporary capacity | Wait, check provider status or model availability, and retry one short text prompt later. |
| Ollama connection refused | Local service, host, port, firewall, or missing local model | Start Ollama, confirm it answers outside Minecraft, and match the exact local endpoint and model in the Verity profile. |
| Null, blank, or silent reply | Model output, profile configuration, local service, integration log, or voice layer | Test one short typed prompt, compare model names and endpoints, and read a sanitized launcher or mod log. |
| Text works but voice does not | Speech recognition, TTS, device, language, voice dependency, or audio limit | Keep the provider setup unchanged and move to microphone, TTS, output device, language, and voice dependency checks. |

## Provider references

- Groq errors: https://console.groq.com/docs/errors
- Groq rate limits: https://console.groq.com/docs/rate-limits
- OpenRouter errors: https://openrouter.ai/docs/api-reference/errors
- Ollama API: https://docs.ollama.com/api

## Safety rules for support posts

Do share:

- Provider
- Status code or symptom
- Model name
- Minecraft profile
- Text test state
- Key safety state
- Sanitized log line with no API key

Do not share:

- API keys
- Full screenshots that expose keys
- Token-bearing URLs
- Download mirrors or rehosted files
- Claims that a status code is a malware verdict

This source pack does not host files, collect API keys, scan files, or replace the maintainer project pages.
