# Growth Weekly Log

## 2026-08-05 To 2026-08-11

### Goals

1. Restore public DNS for `veritymodchecker.online` and `www.veritymodchecker.online`.
2. Keep official Verity source facts current without TDK churn or keyword stuffing.
3. Turn existing GSC/GA4 signals into useful updates around API errors, Java file identity, and Bedrock build matching.

### Completed On 2026-08-05

- Read GSC: 66 clicks, 2,030 impressions, 3.3% CTR, average position 8.7, 127 query rows; exact `verity mod` has 2 clicks / 3 impressions.
- Read GSC Pages: 11 indexed, 11 not indexed; validation started for crawled/discovered-not-indexed groups.
- Read GA4: 865 past-28-days sessions; last 7 days 86 Organic Search sessions, 55 Referral sessions, 14 AI Assistant sessions.
- Read GA4 events: 91 `verity_outbound_project_click`, 17 `verity_source_check`, 74 `verity_api_error_diagnosis`, 85 key events.
- Verified official source changes: Modrinth Verity JE, CurseForge Verity JE, Verity BE, PnTMC, and MCPEDL counters changed since August 4.
- Checked SERP/competitor direction: `veritymod.blog` still ranks with broader topical clusters; our exact head query appears in GSC but canonical DNS is still a blocker.
- Refreshed release data and current source packs for the August 5 source state.

### Results And Evidence

- GSC query evidence: `verity mod`, API 401/429, exact file, and `verity je download` rows are present.
- GA4 landing-page evidence: `/api-connection-failed/` is the strongest non-homepage landing page with 220 sessions.
- Referral evidence: `gist.github.com / referral` remains visible in GA4 last-7-days source/medium.
- Domain evidence: Google DNS returns no A answer for apex and www; RDAP status remains `server hold`.

### Blockers

- P0: Registrar/domain `server hold` prevents reliable canonical-domain access, indexing pings, and new external submissions.
- P1: Do not continue Reddit or GitHub directory backlink tactics; user has already rejected GitHub directory PR outreach and Reddit account is blocked.

### Next Steps

1. P0 | Resolve registrar `server hold`, then verify apex and www DNS, HTTPS, redirects, and canonical URL fetches.
2. P0 | After DNS works, submit changed URLs and sitemap through GSC/IndexNow.
3. P1 | Reply to the MCPEDL clarification email with one concise request and evidence URLs if it remains relevant.
4. P1 | Search for high-relevance current player questions around 1.21.131, status 429, and exact Java file identity, then answer only where allowed.
