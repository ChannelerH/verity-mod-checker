# Verity Mod Download Checker

[Verity Mod Download Checker](https://veritymodchecker.online/) is a browser-only source and file identity checker for Minecraft players. It recognizes current Verity project paths, IDs, release filenames, record numbers, and package types; compares a selected file's displayed size with published metadata; calculates a local SHA-256 fingerprint without uploading the file; and links users to the exact Java or Bedrock release record.

Live custom domain: https://veritymodchecker.online/

Cloudflare Pages fallback URL: https://verity-mod-checker.pages.dev/

## Live Routes

- Download route: https://veritymodchecker.online/download/
- What is Verity Mod?: https://veritymodchecker.online/what-is-verity-mod/
- How to get Verity Mod: https://veritymodchecker.online/how-to-get-verity-mod/
- Java download route: https://veritymodchecker.online/java/
- Bedrock and MCPE route: https://veritymodchecker.online/bedrock/
- MCPE mobile route: https://veritymodchecker.online/bedrock/#mcpe
- Not working and 404 fixes: https://veritymodchecker.online/not-working/
- Voice not working fix: https://veritymodchecker.online/voice-not-working/
- Taken down or 404 route: https://veritymodchecker.online/taken-down/

## What It Covers

- Java route: Verity JE record `8461257`, Forge 1.20.1, NeoForge status, Groq, Ollama, and version checks.
- Bedrock / MCPE routes: Verity BE record `8420981`, PnTMC record `8327253`, pack activation, Beta APIs, commands, and world setup.
- Browser checker: project URL, Project ID, release record, filename, package type, displayed file size, mirror signals, and local SHA-256.
- Troubleshooting: box not spawning, dialogue missing, only saying "...", old links, 404s, mirrors, and unsafe downloads.
- SEO support: canonical domain, robots.txt, sitemap.xml, Atom updates, structured release data, GA4, and GSC submission.

The checker verifies identity signals against the public metadata recorded on July 20, 2026. The reusable snapshot is published at [`/data/verity-releases.json`](https://veritymodchecker.online/data/verity-releases.json), with route updates in [`/feed.xml`](https://veritymodchecker.online/feed.xml). The daily health job fails when that snapshot is more than 72 hours old or when the homepage, checker, download page, Java guide, and feed disagree about the current Java file. A filename, size, URL, or hash result is not a malware verdict. Downloads remain on the maintainer's CurseForge record instead of being mirrored by this site.

## Local Preview

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

Run the static SEO and internal-link audit with:

```bash
node scripts/audit-site.mjs
```

Run the desktop and mobile rendering check with Playwright installed:

```bash
python3 ~/.codex/skills/webapp-testing/scripts/with_server.py \
  --server "python3 -m http.server 4173 --bind 127.0.0.1" --port 4173 \
  -- python3 scripts/visual-check.py
```

## Deployment

The primary deployment is the Cloudflare Pages project `verity-mod-checker`, with `veritymodchecker.online` as the canonical custom domain and `www` redirected to the apex domain by `_worker.js`. The repository also retains the GitHub Pages workflow at `.github/workflows/pages.yml` as a fallback build path. `.github/workflows/site-health.yml` checks the live canonical pages, SEO files, route data, and `www` redirect every day.
