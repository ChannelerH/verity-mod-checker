const htmlRoutes = new Set([
  "/",
  "/ai-model/",
  "/api-connection-failed/",
  "/apk/",
  "/bedrock/",
  "/creators/",
  "/curseforge/",
  "/download/",
  "/faq/",
  "/horror-mod/",
  "/how-to-get-verity-mod/",
  "/how-to-spawn-verity/",
  "/how-to-talk-to-verity/",
  "/is-verity-real/",
  "/java/",
  "/link/",
  "/mcpedl/",
  "/minecraft-verity-mod/",
  "/not-working/",
  "/play/",
  "/pntmc-verity-2-1-0/",
  "/pntmc-verity-3-2-0/",
  "/pocket-edition/",
  "/server/",
  "/status-429/",
  "/taken-down/",
  "/updates/",
  "/verity-3-4-1-jar/",
  "/verity-5-7-3-jar/",
  "/verity-6-0-0-jar/",
  "/verity-je/",
  "/verity-exe/",
  "/verity-mod-lag-fix/",
  "/voice-not-working/",
  "/what-happened/",
  "/what-is-verity-mod/",
]);

const rootFiles = new Set([
  "/04cb9707b196d4d8b34d0f083fb95f05.txt",
  "/b2212c6677aba44b57c09b052426de92.txt",
  "/analytics.js",
  "/favicon.svg",
  "/feed.xml",
  "/llms-full.txt",
  "/llms.txt",
  "/robots.txt",
  "/script.js",
  "/sitemap.xml",
  "/styles.css",
]);

const dataFiles = new Set([
  "/data/verity-app-claims.json",
  "/data/verity-app-claims.schema.json",
  "/data/verity-releases.json",
  "/data/verity-releases.schema.json",
]);

function notFound() {
  return new Response("Not found", {
    status: 404,
    headers: {
      "cache-control": "no-store",
      "content-type": "text/plain; charset=utf-8",
      "x-content-type-options": "nosniff",
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "www.veritymodchecker.online") {
      url.hostname = "veritymodchecker.online";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/dist-cf" || url.pathname.startsWith("/dist-cf/")) {
      let canonicalPath = url.pathname;
      while (canonicalPath === "/dist-cf" || canonicalPath.startsWith("/dist-cf/")) {
        canonicalPath = canonicalPath.slice("/dist-cf".length) || "/";
      }
      url.pathname = canonicalPath === "/index.html" ? "/" : canonicalPath;
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/mcpe" || url.pathname.startsWith("/mcpe/")) {
      url.pathname = "/pocket-edition/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/app" || url.pathname.startsWith("/app/")) {
      url.pathname = "/apk/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-minecraft" ||
      url.pathname.startsWith("/verity-minecraft/") ||
      url.pathname === "/minecraft-verity" ||
      url.pathname.startsWith("/minecraft-verity/") ||
      url.pathname === "/the-verity-mod" ||
      url.pathname.startsWith("/the-verity-mod/") ||
      url.pathname === "/verity-mods" ||
      url.pathname.startsWith("/verity-mods/")
    ) {
      url.pathname = "/minecraft-verity-mod/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-bedrock" ||
      url.pathname.startsWith("/verity-bedrock/") ||
      url.pathname === "/verity-bedrock-mod" ||
      url.pathname.startsWith("/verity-bedrock-mod/") ||
      url.pathname === "/verity-be" ||
      url.pathname.startsWith("/verity-be/") ||
      url.pathname === "/verity-be-download" ||
      url.pathname.startsWith("/verity-be-download/") ||
      url.pathname === "/verity-be-bedrock" ||
      url.pathname.startsWith("/verity-be-bedrock/") ||
      url.pathname === "/vertiy-be" ||
      url.pathname.startsWith("/vertiy-be/") ||
      url.pathname === "/verity-mod-bedrock-download" ||
      url.pathname.startsWith("/verity-mod-bedrock-download/") ||
      url.pathname === "/verity-minecraft-bedrock" ||
      url.pathname.startsWith("/verity-minecraft-bedrock/")
    ) {
      url.pathname = "/bedrock/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-je-download" ||
      url.pathname.startsWith("/verity-je-download/") ||
      url.pathname === "/verity-je-mod" ||
      url.pathname.startsWith("/verity-je-mod/") ||
      url.pathname === "/verity-je-modrinth" ||
      url.pathname.startsWith("/verity-je-modrinth/") ||
      url.pathname === "/verityje" ||
      url.pathname.startsWith("/verityje/") ||
      url.pathname === "/verty-je" ||
      url.pathname.startsWith("/verty-je/") ||
      url.pathname === "/vrity-je" ||
      url.pathname.startsWith("/vrity-je/") ||
      url.pathname === "/verit-je" ||
      url.pathname.startsWith("/verit-je/") ||
      url.pathname === "/veriti-je" ||
      url.pathname.startsWith("/veriti-je/") ||
      url.pathname === "/verity-j" ||
      url.pathname.startsWith("/verity-j/") ||
      url.pathname === "/verity-ja" ||
      url.pathname.startsWith("/verity-ja/") ||
      url.pathname === "/verity-jd" ||
      url.pathname.startsWith("/verity-jd/") ||
      url.pathname === "/verity-ej" ||
      url.pathname.startsWith("/verity-ej/") ||
      url.pathname === "/verity-jaba" ||
      url.pathname.startsWith("/verity-jaba/") ||
      url.pathname === "/varmiteyt-verity" ||
      url.pathname.startsWith("/varmiteyt-verity/") ||
      url.pathname === "/verity-by-varmiteyt" ||
      url.pathname.startsWith("/verity-by-varmiteyt/")
    ) {
      url.pathname = "/verity-je/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-java" ||
      url.pathname.startsWith("/verity-java/") ||
      url.pathname === "/verity-mod-java" ||
      url.pathname.startsWith("/verity-mod-java/")
    ) {
      url.pathname = "/java/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/curseforge-verity" ||
      url.pathname.startsWith("/curseforge-verity/") ||
      url.pathname === "/curseforge-verity-mod" ||
      url.pathname.startsWith("/curseforge-verity-mod/")
    ) {
      url.pathname = "/curseforge/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-horror-mod" ||
      url.pathname.startsWith("/verity-horror-mod/") ||
      url.pathname === "/verity-minecraft-horror-mod" ||
      url.pathname.startsWith("/verity-minecraft-horror-mod/")
    ) {
      url.pathname = "/horror-mod/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/what-is-verity" ||
      url.pathname.startsWith("/what-is-verity/") ||
      url.pathname === "/what-is-verity-minecraft" ||
      url.pathname.startsWith("/what-is-verity-minecraft/")
    ) {
      url.pathname = "/what-is-verity-mod/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/real-verity-mod" ||
      url.pathname.startsWith("/real-verity-mod/") ||
      url.pathname === "/the-real-verity-mod" ||
      url.pathname.startsWith("/the-real-verity-mod/") ||
      url.pathname === "/real-verity-mod-download" ||
      url.pathname.startsWith("/real-verity-mod-download/") ||
      url.pathname === "/real-verity-mod-minecraft-download" ||
      url.pathname.startsWith("/real-verity-mod-minecraft-download/") ||
      url.pathname === "/original-verity-mod" ||
      url.pathname.startsWith("/original-verity-mod/") ||
      url.pathname === "/official-verity-mod" ||
      url.pathname.startsWith("/official-verity-mod/") ||
      url.pathname === "/is-verity-mod-real" ||
      url.pathname.startsWith("/is-verity-mod-real/")
    ) {
      url.pathname = "/is-verity-real/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-mod-banned" ||
      url.pathname.startsWith("/verity-mod-banned/") ||
      url.pathname === "/was-verity-mod-banned" ||
      url.pathname.startsWith("/was-verity-mod-banned/") ||
      url.pathname === "/is-verity-mod-banned" ||
      url.pathname.startsWith("/is-verity-mod-banned/") ||
      url.pathname === "/did-verity-mod-get-banned" ||
      url.pathname.startsWith("/did-verity-mod-get-banned/") ||
      url.pathname === "/what-minecraft-horror-mod-was-banned" ||
      url.pathname.startsWith("/what-minecraft-horror-mod-was-banned/") ||
      url.pathname === "/verity-taken-down" ||
      url.pathname.startsWith("/verity-taken-down/")
    ) {
      url.pathname = "/what-happened/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/how-to-install" || url.pathname.startsWith("/how-to-install/")) {
      url.pathname = "/how-to-get-verity-mod/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/how-to-play" ||
      url.pathname.startsWith("/how-to-play/") ||
      url.pathname === "/how-to-play-verity-mod" ||
      url.pathname.startsWith("/how-to-play-verity-mod/") ||
      url.pathname === "/how-to-play-the-real-verity-mod" ||
      url.pathname.startsWith("/how-to-play-the-real-verity-mod/") ||
      url.pathname === "/how-to-play-the-real-verity-mod-in-minecraft" ||
      url.pathname.startsWith("/how-to-play-the-real-verity-mod-in-minecraft/") ||
      url.pathname === "/how-to-play-verity-mod-on-mobile" ||
      url.pathname.startsWith("/how-to-play-verity-mod-on-mobile/") ||
      url.pathname === "/how-to-play-the-verity-mod-on-mobile" ||
      url.pathname.startsWith("/how-to-play-the-verity-mod-on-mobile/") ||
      url.pathname === "/how-to-play-verity-mod-on-tlauncher" ||
      url.pathname.startsWith("/how-to-play-verity-mod-on-tlauncher/") ||
      url.pathname === "/how-to-play-verity-mod-tlauncher" ||
      url.pathname.startsWith("/how-to-play-verity-mod-tlauncher/") ||
      url.pathname === "/verity-mod-tlauncher" ||
      url.pathname.startsWith("/verity-mod-tlauncher/") ||
      url.pathname === "/how-to-use-verity-mod" ||
      url.pathname.startsWith("/how-to-use-verity-mod/") ||
      url.pathname === "/play-verity-mod" ||
      url.pathname.startsWith("/play-verity-mod/")
    ) {
      url.pathname = "/play/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-mod-server" ||
      url.pathname.startsWith("/verity-mod-server/") ||
      url.pathname === "/minecraft-verity-server" ||
      url.pathname.startsWith("/minecraft-verity-server/") ||
      url.pathname === "/verity-server" ||
      url.pathname.startsWith("/verity-server/") ||
      url.pathname === "/play-with-friends" ||
      url.pathname.startsWith("/play-with-friends/") ||
      url.pathname === "/how-to-play-verity-mod-with-friends" ||
      url.pathname.startsWith("/how-to-play-verity-mod-with-friends/") ||
      url.pathname === "/how-to-play-verity-mod-multiplayer" ||
      url.pathname.startsWith("/how-to-play-verity-mod-multiplayer/") ||
      url.pathname === "/how-to-play-verity-mod-ps4" ||
      url.pathname.startsWith("/how-to-play-verity-mod-ps4/") ||
      url.pathname === "/how-to-play-verity-mod-on-ps4" ||
      url.pathname.startsWith("/how-to-play-verity-mod-on-ps4/") ||
      url.pathname === "/how-to-play-verity-mod-xbox" ||
      url.pathname.startsWith("/how-to-play-verity-mod-xbox/") ||
      url.pathname === "/how-to-play-verity-mod-on-xbox" ||
      url.pathname.startsWith("/how-to-play-verity-mod-on-xbox/") ||
      url.pathname === "/verity-mod-ps4" ||
      url.pathname.startsWith("/verity-mod-ps4/") ||
      url.pathname === "/verity-mod-xbox" ||
      url.pathname.startsWith("/verity-mod-xbox/") ||
      url.pathname === "/verity-server-download" ||
      url.pathname.startsWith("/verity-server-download/")
    ) {
      url.pathname = "/server/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-3.4.1.jar" ||
      url.pathname.startsWith("/verity-3.4.1.jar/") ||
      url.pathname === "/verity-3.4.1-jar" ||
      url.pathname.startsWith("/verity-3.4.1-jar/") ||
      url.pathname === "/verity-341-jar" ||
      url.pathname.startsWith("/verity-341-jar/") ||
      url.pathname === "/neoforge-verity-3-4-1" ||
      url.pathname.startsWith("/neoforge-verity-3-4-1/")
    ) {
      url.pathname = "/verity-3-4-1-jar/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-5.7.3.jar" ||
      url.pathname.startsWith("/verity-5.7.3.jar/") ||
      url.pathname === "/verity-5.7.3" ||
      url.pathname.startsWith("/verity-5.7.3/") ||
      url.pathname === "/verity-5.7.3-jar" ||
      url.pathname.startsWith("/verity-5.7.3-jar/") ||
      url.pathname === "/verity-573-jar" ||
      url.pathname.startsWith("/verity-573-jar/")
    ) {
      url.pathname = "/verity-5-7-3-jar/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-6.0.0.jar" ||
      url.pathname.startsWith("/verity-6.0.0.jar/") ||
      url.pathname === "/verity-6.0.0" ||
      url.pathname.startsWith("/verity-6.0.0/") ||
      url.pathname === "/verity-6.0.0-jar" ||
      url.pathname.startsWith("/verity-6.0.0-jar/") ||
      url.pathname === "/verity-600-jar" ||
      url.pathname.startsWith("/verity-600-jar/")
    ) {
      url.pathname = "/verity-6-0-0-jar/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/pntmc-2-1-0" ||
      url.pathname.startsWith("/pntmc-2-1-0/") ||
      url.pathname === "/thatmobs-verity-2-1-0" ||
      url.pathname.startsWith("/thatmobs-verity-2-1-0/") ||
      url.pathname === "/thatmob-verity-2-1-0" ||
      url.pathname.startsWith("/thatmob-verity-2-1-0/") ||
      url.pathname === "/verity-2.1.0" ||
      url.pathname.startsWith("/verity-2.1.0/") ||
      url.pathname === "/verity-2-1-0" ||
      url.pathname.startsWith("/verity-2-1-0/") ||
      url.pathname === "/verity-2.1.0.jar" ||
      url.pathname.startsWith("/verity-2.1.0.jar/") ||
      url.pathname === "/verity-2-1-0-jar" ||
      url.pathname.startsWith("/verity-2-1-0-jar/") ||
      url.pathname === "/verity-2-1-0-java" ||
      url.pathname.startsWith("/verity-2-1-0-java/") ||
      url.pathname === "/verity-210" ||
      url.pathname.startsWith("/verity-210/")
    ) {
      url.pathname = "/pntmc-verity-2-1-0/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/pntmc-3-2-0" ||
      url.pathname.startsWith("/pntmc-3-2-0/") ||
      url.pathname === "/thatmobs-verity-3-2-0" ||
      url.pathname.startsWith("/thatmobs-verity-3-2-0/")
    ) {
      url.pathname = "/pntmc-verity-3-2-0/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/spawn-verity" ||
      url.pathname.startsWith("/spawn-verity/") ||
      url.pathname === "/verity-not-spawning" ||
      url.pathname.startsWith("/verity-not-spawning/") ||
      url.pathname === "/verity-doesnt-spawn" ||
      url.pathname.startsWith("/verity-doesnt-spawn/")
    ) {
      url.pathname = "/how-to-spawn-verity/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/lag-fix" ||
      url.pathname.startsWith("/lag-fix/") ||
      url.pathname === "/verity-lag" ||
      url.pathname.startsWith("/verity-lag/") ||
      url.pathname === "/verity-mod-lag" ||
      url.pathname.startsWith("/verity-mod-lag/")
    ) {
      url.pathname = "/verity-mod-lag-fix/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/429" ||
      url.pathname.startsWith("/429/") ||
      url.pathname === "/verity-429" ||
      url.pathname.startsWith("/verity-429/") ||
      url.pathname === "/verity-mod-429" ||
      url.pathname.startsWith("/verity-mod-429/") ||
      url.pathname === "/api-429" ||
      url.pathname.startsWith("/api-429/")
    ) {
      url.pathname = "/status-429/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/04cb9707b196d4d8b34d0f083fb95f05.txt") {
      return new Response("04cb9707b196d4d8b34d0f083fb95f05", {
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "public, max-age=300",
        },
      });
    }

    if (url.pathname === "/data/operations-log.json") {
      return notFound();
    }

    if (url.pathname.endsWith("/index.html")) {
      const routePath = url.pathname.slice(0, -10) || "/";
      if (htmlRoutes.has(routePath)) {
        url.pathname = routePath;
        url.hash = "";
        return Response.redirect(url.toString(), 301);
      }
    }

    if (!url.pathname.endsWith("/") && htmlRoutes.has(`${url.pathname}/`)) {
      url.pathname = `${url.pathname}/`;
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    const isKnownRoute = htmlRoutes.has(url.pathname);
    const isKnownRootFile = rootFiles.has(url.pathname);
    const isKnownDataFile = dataFiles.has(url.pathname);
    const isKnownAsset = url.pathname.startsWith("/assets/");

    if (!isKnownRoute && !isKnownRootFile && !isKnownDataFile && !isKnownAsset) {
      return notFound();
    }

    const assetUrl = new URL(request.url);
    if (isKnownRoute) {
      assetUrl.pathname = url.pathname === "/" ? "/index.html" : `${url.pathname}index.html`;
    }

    const assetRequest = new Request(assetUrl.toString(), request);
    const assetResponse = await env.ASSETS.fetch(assetRequest);
    const headers = new Headers(assetResponse.headers);
    const contentType = headers.get("content-type") || "";

    headers.set("permissions-policy", "camera=(), geolocation=(), microphone=()");
    headers.set("referrer-policy", "strict-origin-when-cross-origin");
    headers.set("x-content-type-options", "nosniff");
    headers.set("x-frame-options", "DENY");

    if (/^\/assets\/images\/.+-v\d+\.(?:avif|webp|png|jpe?g)$/i.test(url.pathname)) {
      headers.set("cache-control", "public, max-age=31536000, immutable");
    } else if (
      url.pathname === "/styles.css" ||
      url.pathname === "/script.js" ||
      url.pathname === "/analytics.js"
    ) {
      headers.set("cache-control", "public, max-age=3600, must-revalidate");
    } else if (
      url.pathname === "/robots.txt" ||
      url.pathname === "/sitemap.xml" ||
      url.pathname === "/feed.xml" ||
      url.pathname.startsWith("/data/") ||
      url.pathname === "/llms.txt" ||
      url.pathname === "/llms-full.txt"
    ) {
      headers.set("cache-control", "public, max-age=3600, must-revalidate");
    } else if (contentType.includes("text/html")) {
      headers.set("cache-control", "public, max-age=0, must-revalidate");
    }

    return new Response(assetResponse.body, {
      status: assetResponse.status,
      statusText: assetResponse.statusText,
      headers,
    });
  },
};
