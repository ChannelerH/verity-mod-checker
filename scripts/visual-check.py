from pathlib import Path

from playwright.sync_api import sync_playwright


BASE_URL = "http://127.0.0.1:4173"
VIEWPORTS = {
    "desktop": {"width": 1440, "height": 1000},
    "mobile": {"width": 390, "height": 844},
}
ROUTES = [
    "/",
    "/java/",
    "/bedrock/",
    "/ai-model/",
    "/api-connection-failed/",
    "/how-to-talk-to-verity/",
    "/not-working/",
]


def assert_layout(page, route, viewport_name):
    page.goto(f"{BASE_URL}{route}", wait_until="networkidle")
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

        page.goto(BASE_URL, wait_until="networkidle")
        page.locator("#sourceInput").fill("verity-5.7.3.jar")
        page.locator("#sourceCheckForm").evaluate("form => form.requestSubmit()")
        page.locator("#sourceVerdict").wait_for(state="visible")
        result_text = page.locator("#sourceResult").inner_text()
        assert "Verity JE" in result_text
        assert "8461257" in result_text
        context.close()

    browser.close()

    assert not console_errors, f"browser console errors: {console_errors}"

print("VISUAL_CHECK_OK desktop+mobile core routes and current-file checker")
