# Site Operations Profile

> Last updated: 2026-08-05 09:45 Asia/Shanghai

## Basic Info

- Site name: Verity Mod Checker
- Domain: veritymodchecker.online
- Positioning: Source-checking guide for Minecraft Verity Mod routes, official project IDs, file records, version status, and troubleshooting.
- Core users: Minecraft Java and Bedrock players, server owners, video creators, wiki editors, and support helpers.
- Target regions: US-first, with observed Russia, India, Canada, Brazil, China, Belarus, and global Minecraft traffic.
- Main language: English
- Monetization: Not active yet; useful outbound-route and troubleshooting intent should be retained before ads or affiliate tests.
- Stage: 0-30 days after launch.

## Core Demand And Pages

| Priority | User problem | Target keywords | Page | CTA | Current signal |
|---:|---|---|---|---|---|
| 1 | Find the real Verity Mod route without mirrors | verity mod, verity mod download, real verity mod | `/`, `/download/`, `/what-is-verity-mod/` | Open official project page or compare route | GSC exact `verity mod`: 2 clicks / 3 impressions |
| 2 | Fix API provider failures | verity api connection failed 401, verity mod status 429 | `/api-connection-failed/`, `/status-401/`, `/status-429/` | Diagnose provider layer, do not share API keys | GA4 `/api-connection-failed/`: 220 landing sessions |
| 3 | Choose Java file/version | verity je download, verity-6.1.jar, verity-5.7.3.jar | `/java/`, `/verity-je/`, `/versions/`, exact file pages | Match host, record ID, checksum | Official Modrinth and CurseForge counters changed August 5 |
| 4 | Choose Bedrock route | verity be, mcpedl verity, pntmc verity | `/bedrock/`, `/verity-be/`, `/mcpedl/`, `/pntmc-verity-3-2-0/` | Match `.mcaddon` route and build | MCPEDL comments still ask for 1.21.131 and story-mode help |

## Indexing And Analytics

- Google Search Console: Domain property available for `veritymodchecker.online`.
- GSC performance: 2026-07-15 through 2026-08-02, 66 clicks, 2,030 impressions, 3.3% CTR, average position 8.7, 127 query rows.
- GSC indexing: 11 indexed and 11 not indexed in the latest visible Pages report; 6 crawled-not-indexed and 2 discovered-not-indexed are under validation.
- GA4: Property 545836630; last 7 days show 175 active users, 198 sessions, 978 events, 32 key events.
- GA4 channels last 7 days: Organic Search 86 sessions, Direct 43, Referral 55, AI Assistant 14.
- GA4 events past 28 days: `verity_outbound_project_click` 91, `verity_source_check` 17, `verity_api_error_diagnosis` 74.
- Sitemap: `https://veritymodchecker.online/sitemap.xml`
- Robots/noindex risk: No noindex issue observed in repo audit.
- Domain blocker: Public DNS still returns no A answer for apex and www; RDAP status is `server hold`. This is the highest traffic blocker.

## Current Assets

- Release JSON: `/data/verity-releases.json`
- Source map JSON/CSV: `/data/verity-source-map.json`, `/data/verity-source-map.csv`
- Source packs: versions, Verity BE, API troubleshooting, 429, safety, setup
- Feed: `/feed.xml`
- Referral assets already producing sessions: public Gist source packs and Yandex-indexed references.

## Rules And Constraints

- Do not buy links, post spam comments, fake traffic, bypass CAPTCHA, or create fake accounts.
- Do not submit GitHub directory PRs/issues for backlink purposes.
- Public posting or email outreach must be useful, relevant, and rule-compliant.
- When the canonical domain has `server hold`, prioritize registrar recovery before new index pings or public-link pushes.

## Current Priorities

1. Recover apex and www DNS by resolving registrar `server hold`.
2. Keep official Verity source data fresh only when first-party facts change.
3. Expand useful public references only where users are already asking version, API, Bedrock, MCPEDL, or safety questions.

## Decision Log

| Date | Decision | Reason | Impact |
|---|---|---|---|
| 2026-08-05 | Created persistent growth ops ledger | The site now has GSC/GA4 signals and daily operations need continuity | Future runs can compare baselines without relying on chat history |
| 2026-08-05 | No new backlink posting while apex is `server hold` | The canonical URL cannot resolve from public DNS, so new external submissions may fail or waste trust | Focus shifts to source refresh and registrar recovery |
