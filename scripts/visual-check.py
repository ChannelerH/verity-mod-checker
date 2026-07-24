from pathlib import Path

from playwright.sync_api import sync_playwright


BASE_URL = "http://127.0.0.1:4173"
VIEWPORTS = {
    "desktop": {"width": 1440, "height": 1000},
    "mobile": {"width": 390, "height": 844},
}
ROUTES = [
    "/",
    "/download/",
    "/curseforge/",
    "/creators/",
    "/faq/",
    "/is-verity-real/",
    "/java/",
    "/bedrock/",
    "/pocket-edition/",
    "/how-to-get-verity-mod/",
    "/what-is-verity-mod/",
    "/what-happened/",
    "/ai-model/",
    "/api-connection-failed/",
    "/how-to-talk-to-verity/",
    "/not-working/",
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

        page.goto(BASE_URL, wait_until="domcontentloaded")
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

        page.locator("#sourceInput").fill(
            "15cd8d895788f4859ecf442b7a970c8bca3b30db99aa170639b5f003a18b0f0255bdf5b042eb95a686ac51ecec80afbfeb766654c3471f5cc890664982cd9c81"
        )
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "publisher checksum match" in result_text.lower()

        page.locator("#sourceFile").set_input_files(
            files={
                "name": "verity-5.7.3.jar",
                "mimeType": "application/java-archive",
                "buffer": b"checksum mismatch test",
            }
        )
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        result_text = page.locator("#sourceResult").inner_text()
        assert "publisher checksum mismatch" in result_text.lower()
        context.close()

    browser.close()

    assert not console_errors, f"browser console errors: {console_errors}"

print("VISUAL_CHECK_OK desktop+mobile routes, Modrinth identity, and checksum branches")
