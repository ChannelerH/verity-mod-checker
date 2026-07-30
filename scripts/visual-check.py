import os
from pathlib import Path

from playwright.sync_api import sync_playwright


BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:4173").rstrip("/")
VIEWPORTS = {
    "desktop": {"width": 1440, "height": 1000},
    "mobile": {"width": 390, "height": 844},
}
ROUTES = [
    "/",
    "/link/",
    "/download/",
    "/verity-pack/",
    "/java-vs-bedrock/",
    "/updates/",
    "/verity-mod-wiki/",
    "/verity-mod-vercel-app/",
    "/verity-mod-1-21-60/",
    "/best-verity-mod-bedrock/",
    "/verity-mod-virus-check/",
    "/verity-mod-downloads/",
    "/real-verity-mod-updated/",
    "/verity-souls/",
    "/verity-1-0-0-jar/",
    "/source-map/",
    "/verity-dweller/",
    "/verity-monster-form/",
    "/play/",
    "/tlauncher/",
    "/routes/",
    "/server/",
    "/verity-map/",
    "/minecraft-verity-mod/",
    "/curseforge/",
    "/creators/",
    "/faq/",
    "/fabric/",
    "/horror-mod/",
    "/is-verity-real/",
    "/java/",
    "/verity-je/",
    "/verity-6-jar/",
    "/verity-6-0-1-jar/",
    "/verity-6-0-0-jar/",
    "/verity-5-7-3-jar/",
    "/verity-3-4-1-jar/",
    "/verity-be/",
    "/bedrock/",
    "/duplicate-package/",
    "/pocket-edition/",
    "/apk/",
    "/mcpedl/",
    "/pntmc-verity-2-1-0/",
    "/pntmc-verity-3-2-0/",
    "/how-to-spawn-verity/",
    "/verity-mod-lag-fix/",
    "/how-to-get-verity-mod/",
    "/what-is-verity-mod/",
    "/what-happened/",
    "/ai-model/",
    "/verity-groq-api-key/",
    "/api-connection-failed/",
    "/status-401/",
    "/status-429/",
    "/how-to-talk-to-verity/",
    "/not-working/",
    "/verity-doesnt-respond/",
    "/voice-not-working/",
    "/taken-down/",
    "/verity-exe/",
    "/survive-from-verity-or-falsity/",
    "/ultimate-verity/",
]


def assert_layout(page, route, viewport_name):
    page.goto(f"{BASE_URL}{route}", wait_until="domcontentloaded")
    page.locator("h1").wait_for(state="visible")
    metrics = page.evaluate(
        """
        () => ({
          viewport: document.documentElement.clientWidth,
          scroll: document.documentElement.scrollWidth,
          h1: document.querySelector('h1')?.getBoundingClientRect().toJSON(),
          header: document.querySelector('.topbar')?.getBoundingClientRect().toJSON()
        })
        """
    )
    assert metrics["scroll"] <= metrics["viewport"] + 1, (
        f"horizontal overflow on {route} at {viewport_name}: {metrics}"
    )
    assert metrics["h1"]["height"] > 0 and metrics["h1"]["width"] > 0
    screenshot_name = route.strip("/").replace("/", "-") or "home"
    page.screenshot(
        path=f"/tmp/verity-{screenshot_name}-{viewport_name}.png",
        full_page=True,
    )


with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    console_errors = []

    def record_console_error(message):
        if message.type != "error":
            return
        if "Failed to load resource: net::ERR_NETWORK_CHANGED" in message.text:
            return
        console_errors.append(message.text)

    for viewport_name, viewport in VIEWPORTS.items():
        context = browser.new_context(viewport=viewport)
        page = context.new_page()
        page.on("console", record_console_error)
        for route in ROUTES:
            assert_layout(page, route, viewport_name)

        page.goto(f"{BASE_URL}/source-map/", wait_until="domcontentloaded")
        source_map_text = page.locator("main").inner_text()
        assert "Open CSV" in source_map_text
        assert "Open JSON" in source_map_text
        assert "Similar-name JSON" in source_map_text
        assert "VERITY.exe" in source_map_text
        assert "VERITY.exe Remastered" in source_map_text
        assert "Verity Dweller" in source_map_text
        assert "Verity Body Overhaul" in source_map_text
        assert "Verity May Be" in source_map_text
        assert "VerityCraft" in source_map_text
        assert "Survive from VERITY or FALSITY" in source_map_text
        assert "Ultimate VERITY" in source_map_text
        assert "Ultimate Verity Horror" in source_map_text
        assert "Ultimate Verity Skinpack" in source_map_text
        assert "verity-6.jar" in source_map_text
        assert "CXsEzVwJ" in source_map_text
        assert "stale-beta-endpoint-404" in source_map_text
        assert page.locator('a[href="/data/verity-source-map.csv"]').count() >= 1
        assert page.locator('a[href="/data/verity-source-map.json"]').count() >= 1
        assert page.locator("tbody tr").count() == 33

        page.goto(f"{BASE_URL}/verity-mod-wiki/", wait_until="domcontentloaded")
        wiki_text = page.locator("main").inner_text()
        assert "Verity Mod Wiki" in wiki_text
        assert "Java JE 6 CXsEzVwJ" in wiki_text
        assert "CurseForge #8461257" in wiki_text
        assert "Bedrock BE #8506198" in wiki_text
        assert "PnTMC #8517480" in wiki_text
        assert "Monster form" in wiki_text
        assert page.locator('a[href="/download/"]').count() >= 1
        assert page.locator('a[href="/updates/"]').count() >= 1
        assert page.locator('a[href="/creators/"]').count() >= 1
        assert page.locator('a[href="/source-map/"]').count() >= 1
        assert page.locator('a[href="/verity-monster-form/"]').count() >= 1

        page.goto(f"{BASE_URL}/creators/#author-outreach", wait_until="domcontentloaded")
        creators_text = page.locator("main").inner_text()
        assert "Where a reference link helps without replacing official downloads" in creators_text
        assert "source / version checker" in creators_text
        assert "Suggested one-line placement" in creators_text
        assert page.locator("#author-outreach").count() == 1
        assert page.locator('a[href="/mcpedl/"]').count() >= 1
        assert page.locator('a[href="/taken-down/"]').count() >= 1

        page.goto(f"{BASE_URL}/ai-model/", wait_until="domcontentloaded")
        ai_model_text = page.locator("main").inner_text()
        assert "One-word replies" in ai_model_text
        assert "model-context problem" in ai_model_text
        assert "timheinrich2011/verity-3b" in ai_model_text

        page.goto(f"{BASE_URL}/what-is-verity-mod/", wait_until="domcontentloaded")
        what_is_text = page.locator("main").inner_text()
        assert "What Is the Verity Mod?" in what_is_text
        assert "Real, official, and downloadable are three separate questions" in what_is_text
        assert "explicit permission and agreement from ThatMob" in what_is_text
        assert "Who made Verity Mod?" in what_is_text
        assert page.locator('a[href="/verity-je/"]').count() >= 1
        assert page.locator('a[href="/download/"]').count() >= 1

        page.goto(f"{BASE_URL}/verity-souls/", wait_until="domcontentloaded")
        souls_text = page.locator("main").inner_text()
        assert "Verity Souls Mod Status" in souls_text
        assert "No checked Project ID" in souls_text
        assert "unconfirmed" in souls_text.lower()
        assert page.locator('a[href="/data/verity-rumors.json"]').count() >= 1

        page.goto(f"{BASE_URL}/verity-1-0-0-jar/", wait_until="domcontentloaded")
        legacy_text = page.locator("main").inner_text()
        assert "verity-1.0.0.jar Check" in legacy_text
        assert "Forge 1.20.1" in legacy_text
        assert "Google Drive" in legacy_text
        assert "Verity JE" in legacy_text
        assert page.locator('a[href="/data/verity-legacy-files.json"]').count() >= 1

        page.goto(f"{BASE_URL}/verity-6-jar/", wait_until="domcontentloaded")
        v6_text = page.locator("main").inner_text()
        assert "verity-6.jar File Check" in v6_text
        assert "CXsEzVwJ" in v6_text
        assert "13,087" in v6_text
        assert "609c799d7350a657cf2193839224bd6c2f9971b2" in v6_text
        assert page.locator('a[href="/verity-5-7-3-jar/"]').count() >= 1

        page.goto(f"{BASE_URL}/verity-je/", wait_until="domcontentloaded")
        verity_je_text = page.locator("main").inner_text()
        assert "Verity JE Download" in verity_je_text
        assert "13,087" in verity_je_text
        assert "356,475" in verity_je_text
        assert "2,391,732" in verity_je_text
        assert "681.2K" in verity_je_text
        assert page.locator('a[href="https://modrinth.com/mod/verity-je-official/version/CXsEzVwJ"]').count() >= 1

        page.goto(f"{BASE_URL}/verity-5-7-3-jar/", wait_until="domcontentloaded")
        v573_text = page.locator("main").inner_text()
        assert "verity-5.7.3.jar Download" in v573_text
        assert "If you searched verity-5.7.3.jar, choose the source by job" in v573_text
        assert "Open official download source" in v573_text
        assert "Open CurseForge file #8461257" in v573_text
        assert "Open Modrinth yAt0wv1Z" in v573_text
        v573_schema_text = page.locator('script[type="application/ld+json"]').nth(1).text_content()
        assert "SoftwareApplication" in v573_schema_text
        assert "681.2K" in v573_text
        assert "275,288" in v573_text
        assert "GeckoLib" in v573_text
        assert page.locator('a[href="https://www.curseforge.com/minecraft/mc-mods/verity-je/files/8461257"]').count() >= 1
        assert page.locator('a[href="https://modrinth.com/mod/verity-je-official/version/5.7.3"]').count() >= 1

        page.goto(f"{BASE_URL}/verity-mod-vercel-app/", wait_until="domcontentloaded")
        vercel_text = page.locator("main").inner_text()
        assert "Is verity-mod.vercel.app Safe?" in vercel_text
        assert "Download Verity v2.6" in vercel_text
        assert "Forge 1.21.x" in vercel_text
        assert "unverified" in vercel_text.lower()
        assert page.locator('a[href="/verity-6-jar/"]').count() >= 1

        page.goto(f"{BASE_URL}/verity-mod-1-21-60/", wait_until="domcontentloaded")
        bedrock_121_text = page.locator("main").inner_text()
        assert "Verity Mod 1.21.60 Bedrock Check" in bedrock_121_text
        assert "1.21.80" in bedrock_121_text
        assert "V26.30" in bedrock_121_text
        assert "8517480" in bedrock_121_text
        assert "8506198" in bedrock_121_text
        assert page.locator('a[href="/pntmc-verity-3-2-0/"]').count() >= 1

        page.goto(f"{BASE_URL}/best-verity-mod-bedrock/", wait_until="domcontentloaded")
        best_bedrock_text = page.locator("main").inner_text()
        assert "Best Verity Mod for Bedrock" in best_bedrock_text
        assert "Verity BE" in best_bedrock_text
        assert "PnTMC" in best_bedrock_text
        assert "MCPEDL" in best_bedrock_text
        assert "8506198" in best_bedrock_text
        assert "8517480" in best_bedrock_text
        assert "Beta APIs" in best_bedrock_text
        assert page.locator('a[href="/verity-be/"]').count() >= 1
        assert page.locator('a[href="/pntmc-verity-3-2-0/"]').count() >= 1
        assert page.locator('a[href="/mcpedl/"]').count() >= 1

        page.goto(f"{BASE_URL}/mcpedl/", wait_until="domcontentloaded")
        mcpedl_text = page.locator("main").inner_text()
        assert "Verity Mod MCPEDL Route" in mcpedl_text
        assert "citation helper" in mcpedl_text.lower()
        assert "7,492,433" in mcpedl_text
        assert "311.5K" in mcpedl_text
        assert "8517480" in mcpedl_text
        assert "8327253" in mcpedl_text
        assert "PnTMC YouTube" in mcpedl_text
        assert page.locator('a[href="/data/verity-source-map.csv"]').count() >= 1
        assert page.locator('a[href="https://www.youtube.com/@PnTMCvn"]').count() >= 1

        page.goto(f"{BASE_URL}/pntmc-verity-3-2-0/", wait_until="domcontentloaded")
        pntmc_320_text = page.locator("main").inner_text()
        pntmc_320_dom_text = page.locator("main").text_content()
        assert "ThatMob's Verity 3.2.0 by PnTMC" in pntmc_320_text
        assert "311.5K" in pntmc_320_text
        assert "does not reply or never transforms" in pntmc_320_text
        assert "no-reply" in pntmc_320_dom_text
        assert "no-monster-form" in pntmc_320_dom_text
        assert page.locator('a[href="https://www.youtube.com/@PnTMCvn"]').count() >= 1

        page.goto(f"{BASE_URL}/verity-be/", wait_until="domcontentloaded")
        verity_be_text = page.locator("main").inner_text()
        assert "Verity BE Official Download" in verity_be_text
        assert "Open official Verity BE download source" in verity_be_text
        assert "4,094,168" in verity_be_text
        assert "238.0K" in verity_be_text
        assert "8506198" in verity_be_text
        assert page.locator('a[href="https://www.curseforge.com/minecraft-bedrock/addons/verity-be/files/8506198"]').count() >= 1

        page.goto(f"{BASE_URL}/verity-mod-virus-check/", wait_until="domcontentloaded")
        safety_text = page.locator("main").inner_text()
        assert "Is Verity Mod a Virus?" in safety_text
        assert "No malware verdict" in safety_text
        assert "verity-6.jar" in safety_text
        assert "8506198" in safety_text
        assert "8517480" in safety_text
        assert "Vercel" in safety_text
        assert "APK" in safety_text
        assert page.locator('a[href="/data/verity-safety-checks.json"]').count() >= 1
        assert page.locator('a[href="/verity-mod-vercel-app/"]').count() >= 1
        assert page.locator('a[href="/apk/"]').count() >= 1

        page.goto(f"{BASE_URL}/java/#java-install-help", wait_until="domcontentloaded")
        java_help_text = page.locator("main").inner_text()
        assert "Verity JE / Verity Mod Java Download" in java_help_text
        assert "Verity JE is the Java route, but the source decides the file" in java_help_text
        assert "Use this page when you searched Verity JE download" in java_help_text
        assert "Do not reinstall the JAR for a provider error" in java_help_text
        assert "If you are helping a child install Verity on Java" in java_help_text
        assert "CurseForge app fails" in java_help_text
        assert "old JAR" in java_help_text
        assert "CXsEzVwJ" in java_help_text
        assert "8461257" in java_help_text
        assert "356,475" in java_help_text
        assert "2,391,732" in java_help_text
        assert page.locator('a[href="/verity-je/"]').count() >= 1
        assert page.locator('a[href="/api-connection-failed/"]').count() >= 1
        assert page.locator('a[href="/not-working/"]').count() >= 1

        page.goto(f"{BASE_URL}/not-working/", wait_until="domcontentloaded")
        not_working_text = page.locator("main").inner_text()
        assert "Installed the JAR but Verity does not appear" in not_working_text
        assert "CurseForge app download fails" in not_working_text
        assert "Import says failed or duplicate pack" in not_working_text
        assert page.locator('a[href="/java/#java-install-help"]').count() >= 1

        page.goto(f"{BASE_URL}/voice-not-working/", wait_until="domcontentloaded")
        voice_text = page.locator("main").inner_text()
        assert "CURRENT PLAYER SIGNALS" in voice_text
        assert "microphone tutorial did not make Verity talk" in voice_text
        assert "VERITY.exe CurseForge page" in voice_text
        assert "Simple Voice Chat hears you but Verity does not react" in voice_text
        assert page.locator('a[href="https://www.reddit.com/r/Minecraft/comments/1utpwov/verity_mod_voice_not_working/"]').count() >= 1
        assert page.locator('a[href="https://www.curseforge.com/minecraft/modpacks/verity-exe"]').count() >= 1

        page.goto(f"{BASE_URL}/how-to-talk-to-verity/", wait_until="domcontentloaded")
        talk_text = page.locator("main").inner_text()
        assert "only says one word" in talk_text
        assert "AI model checklist" in talk_text

        page.goto(f"{BASE_URL}/verity-dweller/", wait_until="domcontentloaded")
        dweller_text = page.locator("main").inner_text()
        assert "Verity Dweller" in dweller_text
        assert "eZW2ZX0U" in dweller_text
        assert "Horrorland" in dweller_text
        assert "Verity Body Overhaul" in dweller_text
        assert "1629639" in dweller_text
        assert page.locator('a[href="/data/verity-lookalikes.json"]').count() >= 1

        page.goto(f"{BASE_URL}/verity-monster-form/", wait_until="domcontentloaded")
        monster_text = page.locator("main").inner_text()
        assert "Verity Monster Form Route Check" in monster_text
        assert "Verity Body Overhaul" in monster_text
        assert "1629639" in monster_text
        assert "8530009" in monster_text
        assert "Verity May Be" in monster_text
        assert "1583253" in monster_text
        assert "VerityCraft" in monster_text
        assert page.locator('a[href="/verity-je/"]').count() >= 1
        assert page.locator('a[href="/verity-pack/"]').count() >= 1
        assert page.locator('a[href="/not-working/"]').count() >= 1
        assert page.locator('a[href="/source-map/"]').count() >= 1

        page.goto(f"{BASE_URL}/play/", wait_until="domcontentloaded")
        page.locator("#playEdition").select_option("bedrock")
        page.locator("#playSession").select_option("friends")
        page.locator("#playGoal").select_option("spawn")
        play_text = page.locator("#routeSummary").inner_text()
        assert "friends" in play_text
        assert "behavior pack activation" in play_text
        assert page.locator("#routeLink").get_attribute("href").endswith("/how-to-spawn-verity/")

        page.goto(f"{BASE_URL}/tlauncher/", wait_until="domcontentloaded")
        tlauncher_text = page.locator("main").inner_text()
        assert "Verity Mod TLauncher Route Check" in tlauncher_text
        assert "Do not use TLauncher as source proof" in tlauncher_text
        assert "Forge 1.20.1" in tlauncher_text
        assert "8461257" in tlauncher_text
        assert "account bypass" in tlauncher_text.lower()
        assert page.locator('a[href="/server/"]').count() >= 1
        assert page.locator('a[href="/not-working/"]').count() >= 1

        page.goto(f"{BASE_URL}/server/", wait_until="domcontentloaded")
        page.locator("#serverEdition").select_option("aternos")
        page.locator("#serverGoal").select_option("ai")
        server_text = page.locator("#serverSummary").inner_text()
        assert "provider access" in server_text
        assert page.locator("#serverLink").get_attribute("href").endswith("/api-connection-failed/")

        page.goto(f"{BASE_URL}/api-connection-failed/", wait_until="domcontentloaded")
        api_page_text = page.locator("main").inner_text()
        assert "official provider evidence" in api_page_text.lower()
        assert "OpenRouter exposes key and credit state" in api_page_text
        assert "Groq Orpheus voice" in api_page_text
        page.locator("#apiProvider").select_option("ollama")
        page.locator("#apiSymptom").select_option("refused")
        diagnosis_text = page.locator("#apiDiagnosisResult").inner_text()
        assert "Ollama: Connection refused" in diagnosis_text
        assert "Start Ollama" in diagnosis_text

        page.goto(f"{BASE_URL}/status-401/", wait_until="domcontentloaded")
        status_401_text = page.locator("main").inner_text()
        assert "official credential evidence" in status_401_text.lower()
        assert "OpenRouter separates invalid credentials" in status_401_text
        assert "401-to-429" in status_401_text

        page.goto(f"{BASE_URL}/status-429/", wait_until="domcontentloaded")
        status_429_text = page.locator("main").inner_text()
        assert "official rate-limit evidence" in status_429_text.lower()
        assert "OpenRouter 429 can come from the platform" in status_429_text
        assert "Groq Orpheus voice" in status_429_text

        page.goto(BASE_URL, wait_until="domcontentloaded")
        page.locator("#sourceInput").fill("https://www.curseforge.com/minecraft/modpacks/verity-beta")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        page.locator("#sourceVerdict").wait_for(state="visible")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Verity Pack" in result_text
        assert "modpack" in result_text.lower()
        assert page.locator("#sourceProjectLink").get_attribute("href").endswith("/verity-pack/")

        page.locator("#sourceInput").fill("https://www.curseforge.com/minecraft/modpacks/veritypack")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "VerityPack" in result_text
        assert "1587394" in result_text

        page.locator("#sourceInput").fill("https://www.curseforge.com/minecraft/modpacks/verity-exe/files/8526843")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "VERITY.exe" in result_text
        assert "1585389" in result_text
        assert "8526843" in result_text
        assert page.locator("#sourceProjectLink").get_attribute("href").endswith("/verity-exe/")

        page.locator("#sourceInput").fill("https://www.curseforge.com/minecraft/modpacks/ultimate-verity/files/8467605")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Ultimate VERITY" in result_text
        assert "1584643" in result_text
        assert "8467605" in result_text
        assert page.locator("#sourceProjectLink").get_attribute("href") == "/ultimate-verity/"

        page.locator("#sourceInput").fill("https://www.curseforge.com/minecraft/modpacks/ultimate-verity-horror/files/8464466")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Ultimate Verity Horror" in result_text
        assert "1616028" in result_text
        assert "8464466" in result_text
        assert page.locator("#sourceProjectLink").get_attribute("href") == "/ultimate-verity/"

        page.locator("#sourceInput").fill("https://www.curseforge.com/minecraft-bedrock/skins/ultimate-verity-skinpack/files/8472780")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Ultimate Verity Skinpack" in result_text
        assert "1599807" in result_text
        assert "8472780" in result_text
        assert page.locator("#sourceProjectLink").get_attribute("href") == "/ultimate-verity/"

        page.locator("#sourceInput").fill("https://modrinth.com/modpack/verity.exe-remastered/version/4N4vQrK7")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "VERITY.exe Remastered" in result_text
        assert "L5qUPsXS" in result_text
        assert "Modrinth MRPACK profile" in result_text
        assert page.locator("#sourceProjectLink").get_attribute("href").endswith("/verity-exe/")

        page.locator("#sourceInput").fill("VERITY.exe Remastered 1.0.0.mrpack")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "VERITY.exe Remastered" in result_text
        assert "Modrinth MRPACK" in result_text

        page.locator("#sourceInput").fill("verity-1.0.0.jar")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "legacy file signal" in result_text.lower()
        assert "Modrinth Verity JE 6" in result_text
        assert "verity-6.jar" in result_text
        assert page.locator("#sourceProjectLink").get_attribute("href") == "/verity-1-0-0-jar/"

        page.locator("#sourceInput").fill("https://drive.google.com/file/d/19n7S-TVD4Nzeu6fTGlxMYIO_LsXEzlOO/view?usp=sharing")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "legacy file signal" in result_text.lower()
        assert "Drive" in result_text or "drive.google.com" in result_text
        assert page.locator("#sourceProjectLink").get_attribute("href") == "/verity-1-0-0-jar/"

        page.locator("#sourceInput").fill("How to Install VERITY Mod for MINECRAFT Tlauncher")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "tlauncher route signal" in result_text.lower()
        assert "Forge 1.20.1" in result_text
        assert page.locator("#sourceProjectLink").get_attribute("href") == "/tlauncher/"

        page.locator("#sourceInput").fill("verity-6.0.1-all.jar")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        page.locator("#sourceVerdict").wait_for(state="visible")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Verity JE" in result_text
        assert "OBSERVED BETA, NOW UNLISTED" in result_text
        assert "missing from the active Modrinth version list" in result_text

        page.locator("#sourceInput").fill("https://modrinth.com/mod/verity-je-official/version/6.0.1-beta")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "KNOWN PROJECT MATCH" in result_text
        assert "on1Y0osD" in result_text
        assert "CXsEzVwJ" in result_text
        assert page.locator("#sourceProjectLink").get_attribute("href").endswith("/version/CXsEzVwJ")

        page.locator("#sourceInput").fill("https://www.curseforge.com/minecraft-bedrock/addons/verity-bedrock-edition/files/8327253")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "CurseForge route recognized" in result_text
        assert "8327253" in result_text
        assert "Bedrock MCADDON" in result_text

        page.locator("#sourceInput").fill("verity-5.7.3.jar")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        page.locator("#sourceVerdict").wait_for(state="visible")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Verity JE" in result_text
        assert "8461257" in result_text

        page.locator("#sourceInput").fill("verity.jar")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Verity JE" in result_text
        assert "8461257" in result_text
        assert page.locator("#sourceProjectLink").get_attribute("href").endswith("/files/8461257")

        page.locator("#sourceInput").fill("https://modrinth.com/mod/verity-je-official/version/5.7.3")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Modrinth route recognized" in result_text
        assert "on1Y0osD" in result_text
        assert "SHA-512 available" in result_text
        assert page.locator("#sourceProjectLink").get_attribute("href").endswith("/version/5.7.3")

        page.locator("#sourceInput").fill("https://modrinth.com/mod/verity-dweller/version/COqUGsQr")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "similar-name route" in result_text.lower()
        assert "Verity Dweller" in result_text
        assert "eZW2ZX0U" in result_text
        assert page.locator("#sourceProjectLink").get_attribute("href") == "/verity-dweller/"

        page.locator("#sourceInput").fill("eZW2ZX0U")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Verity Dweller" in result_text
        assert "not the main verity mod" in result_text.lower()

        page.locator("#sourceInput").fill("https://www.curseforge.com/minecraft/mc-mods/verity-body-overhaul/files/8530009")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Verity Body Overhaul" in result_text
        assert "1629639" in result_text
        assert "visual add-on" in result_text.lower()
        assert page.locator("#sourceProjectLink").get_attribute("href") == "/verity-monster-form/"

        page.locator("#sourceInput").fill("https://www.curseforge.com/minecraft/modpacks/verity-may-be/files/8365755")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Verity May Be" in result_text
        assert "1583253" in result_text
        assert "monster-form" in result_text.lower() or "horror-profile" in result_text.lower()
        assert page.locator("#sourceProjectLink").get_attribute("href") == "/verity-monster-form/"

        page.locator("#sourceInput").fill("VerityV1.1.0.jar")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "verity.jar fan project" in result_text
        assert "1600657" in result_text
        assert page.locator("#sourceProjectLink").get_attribute("href") == "/verity-monster-form/"

        page.locator("#sourceInput").fill("Horrorland with Verity - MC 1.20.1 9.3.0.mrpack")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Horrorland - With Verity!" in result_text
        assert "mJcQB7OR" in result_text
        assert "Modrinth MRPACK" in result_text

        page.locator("#sourceInput").fill("https://modrinth.com/mod/unrelated-project?file=verity-5.7.3.jar")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "recognized platform" in result_text.lower()
        assert page.locator("#sourceProjectLink").get_attribute("href") == "/download/"

        page.locator("#sourceInput").fill(
            "https://www.curseforge.com/minecraft-bedrock/addons/verity-pocket-edition-be/files/8406293"
        )
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Verity Pocket Edition (Be)" in result_text
        assert "8406293" in result_text

        page.locator("#sourceInput").fill("Verity (Stable) (1.1.0)-(26.3#).mcaddon")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Verity BE" in result_text
        assert "8506198" in result_text

        page.locator("#sourceInput").fill("verity be official")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Verity BE" in result_text
        assert "8506198" in result_text

        page.locator("#sourceInput").fill(
            "https://www.curseforge.com/minecraft-bedrock/addons/verity-bedrock-edition/files/8517480"
        )
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Verity - Bedrock Edition" in result_text
        assert "8517480" in result_text

        page.locator("#sourceInput").fill("ThatMob's Verity 3.2.0 by PnTMC [Add-on] - V26.20.mcaddon")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Verity - Bedrock Edition" in result_text
        assert "Bedrock 26.20" in result_text
        assert "8517478" in result_text
        assert page.locator("#sourceProjectLink").get_attribute("href").endswith("/files/8517478")

        page.locator("#sourceInput").fill(
            "c8b282be27ab4a0f19da6e834c4ee70602cef98bb5a81fe848932c1ca0edd98c41904602fe02b357d0a65265fba352860df6e06da669de6404143a224ce40afb"
        )
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "historical checksum match" in result_text.lower()

        page.locator("#sourceInput").fill(
            "15cd8d895788f4859ecf442b7a970c8bca3b30db99aa170639b5f003a18b0f0255bdf5b042eb95a686ac51ecec80afbfeb766654c3471f5cc890664982cd9c81"
        )
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "publisher checksum match" in result_text.lower()

        page.locator("#sourceInput").fill("")
        page.locator("#sourceFile").set_input_files(
            files={
                "name": "verity-5.7.3.jar",
                "mimeType": "application/java-archive",
                "buffer": b"checksum mismatch test",
            }
        )
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        page.wait_for_function(
            "() => document.querySelector('#sourceResult')?.innerText.toLowerCase().includes('publisher checksum mismatch')"
        )
        result_text = page.locator("#sourceResult").inner_text()
        assert "publisher checksum mismatch" in result_text.lower()
        context.close()

    browser.close()

    assert not console_errors, f"browser console errors: {console_errors}"

print("VISUAL_CHECK_OK desktop+mobile routes including source map CSV/JSON table, Verity Souls status route, old verity-1.0.0.jar route, TLauncher route and checker intent, AI model one-word replies, how-to-talk AI model routing, Verity Dweller route, VERITY.exe Remastered route, Ultimate VERITY route cluster, Real Verity Mod updated, Fabric, play and server route selectors, latest updates route, 6.0.1 beta route, 6.0.0 previous beta route, status 401 and 429 routes with provider evidence, Groq API key route, 3.4.1 status route, lag route, spawn route, PnTMC 3.2.0 route, API diagnosis, aliases, similar-name Modrinth identity, legacy Drive-link identity, and checksum branches")
