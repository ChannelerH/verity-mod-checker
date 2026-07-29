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
    "/real-verity-mod-updated/",
    "/play/",
    "/server/",
    "/minecraft-verity-mod/",
    "/curseforge/",
    "/creators/",
    "/faq/",
    "/fabric/",
    "/horror-mod/",
    "/is-verity-real/",
    "/java/",
    "/verity-je/",
    "/verity-6-0-1-jar/",
    "/verity-6-0-0-jar/",
    "/verity-5-7-3-jar/",
    "/verity-3-4-1-jar/",
    "/bedrock/",
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

    for viewport_name, viewport in VIEWPORTS.items():
        context = browser.new_context(viewport=viewport)
        page = context.new_page()
        page.on("console", lambda message: console_errors.append(message.text) if message.type == "error" else None)
        for route in ROUTES:
            assert_layout(page, route, viewport_name)

        page.goto(f"{BASE_URL}/play/", wait_until="domcontentloaded")
        page.locator("#playEdition").select_option("bedrock")
        page.locator("#playSession").select_option("friends")
        page.locator("#playGoal").select_option("spawn")
        play_text = page.locator("#routeSummary").inner_text()
        assert "friends" in play_text
        assert "behavior pack activation" in play_text
        assert page.locator("#routeLink").get_attribute("href").endswith("/how-to-spawn-verity/")

        page.goto(f"{BASE_URL}/server/", wait_until="domcontentloaded")
        page.locator("#serverEdition").select_option("aternos")
        page.locator("#serverGoal").select_option("ai")
        server_text = page.locator("#serverSummary").inner_text()
        assert "provider access" in server_text
        assert page.locator("#serverLink").get_attribute("href").endswith("/api-connection-failed/")

        page.goto(f"{BASE_URL}/api-connection-failed/", wait_until="domcontentloaded")
        page.locator("#apiProvider").select_option("ollama")
        page.locator("#apiSymptom").select_option("refused")
        diagnosis_text = page.locator("#apiDiagnosisResult").inner_text()
        assert "Ollama: Connection refused" in diagnosis_text
        assert "Start Ollama" in diagnosis_text

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
        assert "KNOWN RECORD, NOW UNLISTED" in result_text
        assert "on1Y0osD" in result_text
        assert "Historical SHA-512" in result_text
        assert page.locator("#sourceProjectLink").get_attribute("href").endswith("/verity-5-7-3-jar/")

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

        page.locator("#sourceInput").fill("https://modrinth.com/mod/verity-je-official/version/5.7.3")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Modrinth route recognized" in result_text
        assert "on1Y0osD" in result_text
        assert "SHA-512 available" in result_text
        assert page.locator("#sourceProjectLink").get_attribute("href").endswith("/version/5.7.3")

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

print("VISUAL_CHECK_OK desktop+mobile routes including Real Verity Mod updated, Fabric, play and server route selectors, latest updates route, 6.0.1 beta route, 6.0.0 previous beta route, status 401 and 429 routes, Groq API key route, 3.4.1 status route, lag route, spawn route, PnTMC 3.2.0 route, API diagnosis, aliases, Modrinth identity, and checksum branches")
