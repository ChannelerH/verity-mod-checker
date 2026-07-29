const htmlRoutes = new Set([
  "/",
  "/ai-model/",
  "/api-connection-failed/",
  "/apk/",
  "/bedrock/",
  "/commands/",
  "/creators/",
  "/curseforge/",
  "/download/",
  "/error-no-purpose/",
  "/faq/",
  "/fabric/",
  "/falsity-mod/",
  "/horror-mod/",
  "/how-to-get-verity-mod/",
  "/how-to-spawn-verity/",
  "/how-to-talk-to-verity/",
  "/is-verity-real/",
  "/java/",
  "/java-vs-bedrock/",
  "/link/",
  "/mcpedl/",
  "/minecraft-verity-mod/",
  "/not-working/",
  "/play/",
  "/pntmc-verity-2-1-0/",
  "/pntmc-verity-3-2-0/",
  "/pocket-edition/",
  "/real-verity-mod-updated/",
  "/real-verity-mod/",
  "/routes/",
  "/server/",
  "/source-map/",
  "/status-401/",
  "/status-429/",
  "/taken-down/",
  "/updates/",
  "/verity-1-0-0-jar/",
  "/verity-mod-wiki/",
  "/verity-mod-downloads/",
  "/verity-pack/",
  "/verity-world/",
  "/verity-souls/",
  "/verity-groq-api-key/",
  "/verity-map/",
  "/verity-3-4-1-jar/",
  "/verity-5-7-3-jar/",
  "/verity-6-jar/",
  "/verity-6-0-0-jar/",
  "/verity-6-0-1-jar/",
  "/verity-doesnt-respond/",
  "/verity-dweller/",
  "/verity-monster-form/",
  "/verity-be/",
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
  "/data/falsity-releases.json",
  "/data/falsity-releases.schema.json",
  "/data/verity-app-claims.json",
  "/data/verity-app-claims.schema.json",
  "/data/verity-legacy-files.json",
  "/data/verity-legacy-files.schema.json",
  "/data/verity-modpacks.json",
  "/data/verity-modpacks.schema.json",
  "/data/verity-rumors.json",
  "/data/verity-rumors.schema.json",
  "/data/verity-lookalikes.json",
  "/data/verity-lookalikes.schema.json",
  "/data/verity-releases.json",
  "/data/verity-releases.schema.json",
  "/data/verity-source-map.csv",
  "/data/verity-source-map.json",
  "/data/verity-source-map.schema.json",
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

    if (
      url.pathname === "/talk-to-verity-without-microphone" ||
      url.pathname.startsWith("/talk-to-verity-without-microphone/") ||
      url.pathname === "/verity-mod-no-microphone" ||
      url.pathname.startsWith("/verity-mod-no-microphone/")
    ) {
      url.pathname = "/how-to-talk-to-verity/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/mcpe" || url.pathname.startsWith("/mcpe/")) {
      url.pathname = "/pocket-edition/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/app" ||
      url.pathname.startsWith("/app/") ||
      url.pathname === "/verity-mod-app" ||
      url.pathname.startsWith("/verity-mod-app/") ||
      url.pathname === "/verity-mod-apk" ||
      url.pathname.startsWith("/verity-mod-apk/") ||
      url.pathname === "/verity-apk" ||
      url.pathname.startsWith("/verity-apk/") ||
      url.pathname === "/verity-mod-google-play" ||
      url.pathname.startsWith("/verity-mod-google-play/") ||
      url.pathname === "/verity-mod-play-store" ||
      url.pathname.startsWith("/verity-mod-play-store/") ||
      url.pathname === "/verity-mod-android-app" ||
      url.pathname.startsWith("/verity-mod-android-app/") ||
      url.pathname === "/verity-mod-for-minecraft-pe-app" ||
      url.pathname.startsWith("/verity-mod-for-minecraft-pe-app/")
    ) {
      url.pathname = "/apk/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-mod-commands" ||
      url.pathname.startsWith("/verity-mod-commands/") ||
      url.pathname === "/verity-commands" ||
      url.pathname.startsWith("/verity-commands/") ||
      url.pathname === "/verity-command" ||
      url.pathname.startsWith("/verity-command/") ||
      url.pathname === "/minecraft-verity-command" ||
      url.pathname.startsWith("/minecraft-verity-command/") ||
      url.pathname === "/minecraft-verity-commands" ||
      url.pathname.startsWith("/minecraft-verity-commands/") ||
      url.pathname === "/verity-mod-command" ||
      url.pathname.startsWith("/verity-mod-command/") ||
      url.pathname === "/script-debugger-connect-verity" ||
      url.pathname.startsWith("/script-debugger-connect-verity/") ||
      url.pathname === "/verity-debugger-connect" ||
      url.pathname.startsWith("/verity-debugger-connect/") ||
      url.pathname === "/verity-language-command" ||
      url.pathname.startsWith("/verity-language-command/") ||
      url.pathname === "/verity-language" ||
      url.pathname.startsWith("/verity-language/") ||
      url.pathname === "/verity-give-ball" ||
      url.pathname.startsWith("/verity-give-ball/") ||
      url.pathname === "/verity-give_ball" ||
      url.pathname.startsWith("/verity-give_ball/") ||
      url.pathname === "/verity-event-prophecy" ||
      url.pathname.startsWith("/verity-event-prophecy/") ||
      url.pathname === "/verity-event-anomaly" ||
      url.pathname.startsWith("/verity-event-anomaly/") ||
      url.pathname === "/verity-status-command" ||
      url.pathname.startsWith("/verity-status-command/") ||
      url.pathname === "/verity-summon-command" ||
      url.pathname.startsWith("/verity-summon-command/") ||
      url.pathname === "/verity-command-block" ||
      url.pathname.startsWith("/verity-command-block/") ||
      url.pathname === "/verity-command-blocks" ||
      url.pathname.startsWith("/verity-command-blocks/")
    ) {
      url.pathname = "/commands/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/route-index" ||
      url.pathname.startsWith("/route-index/") ||
      url.pathname === "/all-routes" ||
      url.pathname.startsWith("/all-routes/") ||
      url.pathname === "/verity-routes" ||
      url.pathname.startsWith("/verity-routes/") ||
      url.pathname === "/verity-mod-routes" ||
      url.pathname.startsWith("/verity-mod-routes/") ||
      url.pathname === "/verity-mod-route-index" ||
      url.pathname.startsWith("/verity-mod-route-index/")
    ) {
      url.pathname = "/routes/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-source-map" ||
      url.pathname.startsWith("/verity-source-map/") ||
      url.pathname === "/verity-mod-source-map" ||
      url.pathname.startsWith("/verity-mod-source-map/") ||
      url.pathname === "/verity-mod-data" ||
      url.pathname.startsWith("/verity-mod-data/")
    ) {
      url.pathname = "/source-map/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/verity-mod-csv" || url.pathname.startsWith("/verity-mod-csv/")) {
      url.pathname = "/data/verity-source-map.csv";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-exe-remastered" ||
      url.pathname.startsWith("/verity-exe-remastered/") ||
      url.pathname === "/verity.exe-remastered" ||
      url.pathname.startsWith("/verity.exe-remastered/") ||
      url.pathname === "/modrinth-verity-exe-remastered" ||
      url.pathname.startsWith("/modrinth-verity-exe-remastered/") ||
      url.pathname === "/verity-remastered" ||
      url.pathname.startsWith("/verity-remastered/")
    ) {
      url.pathname = "/verity-exe/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/the-verity-dweller" ||
      url.pathname.startsWith("/the-verity-dweller/") ||
      url.pathname === "/verity-dweller-mod" ||
      url.pathname.startsWith("/verity-dweller-mod/") ||
      url.pathname === "/verity-mod-dweller" ||
      url.pathname.startsWith("/verity-mod-dweller/") ||
      url.pathname === "/horrorland-with-verity" ||
      url.pathname.startsWith("/horrorland-with-verity/") ||
      url.pathname === "/horrorland-verity" ||
      url.pathname.startsWith("/horrorland-verity/") ||
      url.pathname === "/modrinth-verity-dweller" ||
      url.pathname.startsWith("/modrinth-verity-dweller/")
    ) {
      url.pathname = "/verity-dweller/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/monster-form" ||
      url.pathname.startsWith("/monster-form/") ||
      url.pathname === "/verity-monster" ||
      url.pathname.startsWith("/verity-monster/") ||
      url.pathname === "/verity-mod-monster-form" ||
      url.pathname.startsWith("/verity-mod-monster-form/") ||
      url.pathname === "/verity-all-phases" ||
      url.pathname.startsWith("/verity-all-phases/") ||
      url.pathname === "/verity-body-overhaul" ||
      url.pathname.startsWith("/verity-body-overhaul/") ||
      url.pathname === "/verity-may-be" ||
      url.pathname.startsWith("/verity-may-be/") ||
      url.pathname === "/veritycraft" ||
      url.pathname.startsWith("/veritycraft/")
    ) {
      url.pathname = "/verity-monster-form/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-souls-mod" ||
      url.pathname.startsWith("/verity-souls-mod/") ||
      url.pathname === "/verity-souls-download" ||
      url.pathname.startsWith("/verity-souls-download/") ||
      url.pathname === "/verity-souls-minecraft" ||
      url.pathname.startsWith("/verity-souls-minecraft/") ||
      url.pathname === "/is-verity-souls-real" ||
      url.pathname.startsWith("/is-verity-souls-real/") ||
      url.pathname === "/official-verity-souls" ||
      url.pathname.startsWith("/official-verity-souls/") ||
      url.pathname === "/what-is-verity-souls" ||
      url.pathname.startsWith("/what-is-verity-souls/")
    ) {
      url.pathname = "/verity-souls/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-1.0.0.jar" ||
      url.pathname.startsWith("/verity-1.0.0.jar/") ||
      url.pathname === "/verity-1-0-0" ||
      url.pathname.startsWith("/verity-1-0-0/") ||
      url.pathname === "/verity-1.0.0" ||
      url.pathname.startsWith("/verity-1.0.0/") ||
      url.pathname === "/verity-mod-1-0-0" ||
      url.pathname.startsWith("/verity-mod-1-0-0/") ||
      url.pathname === "/verity-mod-1.0.0" ||
      url.pathname.startsWith("/verity-mod-1.0.0/") ||
      url.pathname === "/verity-1-0-0-download" ||
      url.pathname.startsWith("/verity-1-0-0-download/") ||
      url.pathname === "/verity-1-0-0-jar-download" ||
      url.pathname.startsWith("/verity-1-0-0-jar-download/") ||
      url.pathname === "/verity-google-drive" ||
      url.pathname.startsWith("/verity-google-drive/") ||
      url.pathname === "/verity-drive-link" ||
      url.pathname.startsWith("/verity-drive-link/") ||
      url.pathname === "/verity-mod-drive-link" ||
      url.pathname.startsWith("/verity-mod-drive-link/") ||
      url.pathname === "/verity-forge-1-20-1" ||
      url.pathname.startsWith("/verity-forge-1-20-1/") ||
      url.pathname === "/verity-geckolib" ||
      url.pathname.startsWith("/verity-geckolib/") ||
      url.pathname === "/19n7S-TVD4Nzeu6fTGlxMYIO_LsXEzlOO" ||
      url.pathname.toLowerCase() === "/19n7s-tvd4nzeu6ftglxmyio_lsxezloo" ||
      url.pathname.toLowerCase().startsWith("/19n7s-tvd4nzeu6ftglxmyio_lsxezloo/")
    ) {
      url.pathname = "/verity-1-0-0-jar/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/minecraft-verity-mod-download" ||
      url.pathname.startsWith("/minecraft-verity-mod-download/") ||
      url.pathname === "/verity-minecraft-download" ||
      url.pathname.startsWith("/verity-minecraft-download/") ||
      url.pathname === "/minecraft-verity-download" ||
      url.pathname.startsWith("/minecraft-verity-download/") ||
      url.pathname === "/verity-mod-for-minecraft-download" ||
      url.pathname.startsWith("/verity-mod-for-minecraft-download/")
    ) {
      url.pathname = "/download/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-mod-download-count" ||
      url.pathname.startsWith("/verity-mod-download-count/") ||
      url.pathname === "/verity-mod-downloads-count" ||
      url.pathname.startsWith("/verity-mod-downloads-count/") ||
      url.pathname === "/how-many-downloads-does-verity-mod-have" ||
      url.pathname.startsWith("/how-many-downloads-does-verity-mod-have/") ||
      url.pathname === "/verity-mod-4-9-million" ||
      url.pathname.startsWith("/verity-mod-4-9-million/") ||
      url.pathname === "/verity-mod-4-9-million-downloads" ||
      url.pathname.startsWith("/verity-mod-4-9-million-downloads/") ||
      url.pathname === "/verity-mod-viral" ||
      url.pathname.startsWith("/verity-mod-viral/") ||
      url.pathname === "/verity-viral-mod" ||
      url.pathname.startsWith("/verity-viral-mod/") ||
      url.pathname === "/viral-verity-mod" ||
      url.pathname.startsWith("/viral-verity-mod/") ||
      url.pathname === "/verity-mod-viral-downloads" ||
      url.pathname.startsWith("/verity-mod-viral-downloads/")
    ) {
      url.pathname = "/verity-mod-downloads/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-minecraft" ||
      url.pathname.startsWith("/verity-minecraft/") ||
      url.pathname === "/verity-minecraft-mod" ||
      url.pathname.startsWith("/verity-minecraft-mod/") ||
      url.pathname === "/minecraft-verity" ||
      url.pathname.startsWith("/minecraft-verity/") ||
      url.pathname === "/verity-mod-for-minecraft" ||
      url.pathname.startsWith("/verity-mod-for-minecraft/") ||
      url.pathname === "/minecraft-verity-mod-guide" ||
      url.pathname.startsWith("/minecraft-verity-mod-guide/") ||
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
      url.pathname === "/verity-be-download" ||
      url.pathname.startsWith("/verity-be-download/") ||
      url.pathname === "/verity-be-bedrock" ||
      url.pathname.startsWith("/verity-be-bedrock/") ||
      url.pathname === "/verity-be-official" ||
      url.pathname.startsWith("/verity-be-official/") ||
      url.pathname === "/official-verity-be" ||
      url.pathname.startsWith("/official-verity-be/") ||
      url.pathname === "/verity-be-8506198" ||
      url.pathname.startsWith("/verity-be-8506198/") ||
      url.pathname === "/verity-be-1-1-0" ||
      url.pathname.startsWith("/verity-be-1-1-0/") ||
      url.pathname === "/verity-be-duplicate-package" ||
      url.pathname.startsWith("/verity-be-duplicate-package/") ||
      url.pathname === "/verity-duplicate-package" ||
      url.pathname.startsWith("/verity-duplicate-package/") ||
      url.pathname === "/verity-mod-duplicate-package" ||
      url.pathname.startsWith("/verity-mod-duplicate-package/") ||
      url.pathname === "/bedrock-duplicate-package" ||
      url.pathname.startsWith("/bedrock-duplicate-package/") ||
      url.pathname === "/mcaddon-duplicate-package" ||
      url.pathname.startsWith("/mcaddon-duplicate-package/") ||
      url.pathname === "/vertiy-be" ||
      url.pathname.startsWith("/vertiy-be/")
    ) {
      url.pathname = "/verity-be/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/error-no-purpose" ||
      (url.pathname.startsWith("/error-no-purpose/") && url.pathname !== "/error-no-purpose/") ||
      url.pathname === "/verity-no-purpose" ||
      url.pathname.startsWith("/verity-no-purpose/") ||
      url.pathname === "/verity-be-no-purpose" ||
      url.pathname.startsWith("/verity-be-no-purpose/") ||
      url.pathname === "/verity-mod-no-purpose" ||
      url.pathname.startsWith("/verity-mod-no-purpose/") ||
      url.pathname === "/verity-error-no-purpose" ||
      url.pathname.startsWith("/verity-error-no-purpose/") ||
      url.pathname === "/verity-be-error-no-purpose" ||
      url.pathname.startsWith("/verity-be-error-no-purpose/") ||
      url.pathname === "/no-purpose-error" ||
      url.pathname.startsWith("/no-purpose-error/") ||
      url.pathname === "/no-purpose-verity" ||
      url.pathname.startsWith("/no-purpose-verity/") ||
      url.pathname === "/verity-purpose-error" ||
      url.pathname.startsWith("/verity-purpose-error/")
    ) {
      url.pathname = "/error-no-purpose/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-map" ||
      (url.pathname.startsWith("/verity-map/") && url.pathname !== "/verity-map/") ||
      url.pathname === "/verity-minecraft-map" ||
      url.pathname.startsWith("/verity-minecraft-map/") ||
      url.pathname === "/minecraft-verity-map" ||
      url.pathname.startsWith("/minecraft-verity-map/") ||
      url.pathname === "/verity-map-minecraft" ||
      url.pathname.startsWith("/verity-map-minecraft/") ||
      url.pathname === "/verity-map-download" ||
      url.pathname.startsWith("/verity-map-download/") ||
      url.pathname === "/verity-map-bedrock" ||
      url.pathname.startsWith("/verity-map-bedrock/") ||
      url.pathname === "/verity-server-map" ||
      url.pathname.startsWith("/verity-server-map/") ||
      url.pathname === "/verity-minecraft-world" ||
      url.pathname.startsWith("/verity-minecraft-world/")
    ) {
      url.pathname = "/verity-map/";
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
      url.pathname === "/bedrock-vs-java" ||
      url.pathname.startsWith("/bedrock-vs-java/") ||
      url.pathname === "/verity-mod-java-vs-bedrock" ||
      url.pathname.startsWith("/verity-mod-java-vs-bedrock/") ||
      url.pathname === "/verity-mod-bedrock-vs-java" ||
      url.pathname.startsWith("/verity-mod-bedrock-vs-java/") ||
      url.pathname === "/which-verity-mod" ||
      url.pathname.startsWith("/which-verity-mod/") ||
      url.pathname === "/which-verity-download" ||
      url.pathname.startsWith("/which-verity-download/")
    ) {
      url.pathname = "/java-vs-bedrock/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/fabric" ||
      url.pathname === "/verity-fabric" ||
      url.pathname.startsWith("/verity-fabric/") ||
      url.pathname === "/verity-mod-fabric" ||
      url.pathname.startsWith("/verity-mod-fabric/") ||
      url.pathname === "/fabric-verity-mod" ||
      url.pathname.startsWith("/fabric-verity-mod/") ||
      url.pathname === "/minecraft-verity-fabric" ||
      url.pathname.startsWith("/minecraft-verity-fabric/")
    ) {
      url.pathname = "/fabric/";
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
      url.pathname.startsWith("/curseforge-verity-mod/") ||
      url.pathname === "/curseforge-verity-mod-download" ||
      url.pathname.startsWith("/curseforge-verity-mod-download/") ||
      url.pathname === "/curseforge-verity-download" ||
      url.pathname.startsWith("/curseforge-verity-download/") ||
      url.pathname === "/verity-curseforge" ||
      url.pathname.startsWith("/verity-curseforge/") ||
      url.pathname === "/verity-mod-curseforge" ||
      url.pathname.startsWith("/verity-mod-curseforge/") ||
      url.pathname === "/verity-mod-curseforge-download" ||
      url.pathname.startsWith("/verity-mod-curseforge-download/")
    ) {
      url.pathname = "/curseforge/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/falsity" ||
      url.pathname.startsWith("/falsity/") ||
      url.pathname === "/falsity-mod" ||
      url.pathname === "/minecraft-falsity" ||
      url.pathname.startsWith("/minecraft-falsity/") ||
      url.pathname === "/minecraft-falsity-mod" ||
      url.pathname.startsWith("/minecraft-falsity-mod/") ||
      url.pathname === "/falsity-minecraft" ||
      url.pathname.startsWith("/falsity-minecraft/") ||
      url.pathname === "/falsity-minecraft-mod" ||
      url.pathname.startsWith("/falsity-minecraft-mod/") ||
      url.pathname === "/falsity-smiley" ||
      url.pathname.startsWith("/falsity-smiley/") ||
      url.pathname === "/falsity-smiley-mod" ||
      url.pathname.startsWith("/falsity-smiley-mod/") ||
      url.pathname === "/falsity-smiley-archive" ||
      url.pathname.startsWith("/falsity-smiley-archive/") ||
      url.pathname === "/falsity-bedrock" ||
      url.pathname.startsWith("/falsity-bedrock/") ||
      url.pathname === "/falsity-mcpe" ||
      url.pathname.startsWith("/falsity-mcpe/") ||
      url.pathname === "/falsity-addon" ||
      url.pathname.startsWith("/falsity-addon/") ||
      url.pathname === "/falsity-mcaddon" ||
      url.pathname.startsWith("/falsity-mcaddon/") ||
      url.pathname === "/falsity-remake" ||
      url.pathname.startsWith("/falsity-remake/") ||
      url.pathname === "/falsity-commands" ||
      url.pathname.startsWith("/falsity-commands/") ||
      url.pathname === "/falsity-command" ||
      url.pathname.startsWith("/falsity-command/") ||
      url.pathname === "/connectfalsity" ||
      url.pathname.startsWith("/connectfalsity/") ||
      url.pathname === "/falsitysetup" ||
      url.pathname.startsWith("/falsitysetup/") ||
      url.pathname === "/falsityconfig" ||
      url.pathname.startsWith("/falsityconfig/") ||
      url.pathname === "/falsity-modrinth" ||
      url.pathname.startsWith("/falsity-modrinth/") ||
      url.pathname === "/modrinth-falsity" ||
      url.pathname.startsWith("/modrinth-falsity/") ||
      url.pathname === "/falsity-9-0" ||
      url.pathname.startsWith("/falsity-9-0/") ||
      url.pathname === "/falsity-9-0-jar" ||
      url.pathname.startsWith("/falsity-9-0-jar/") ||
      url.pathname === "/verity-falsity" ||
      url.pathname.startsWith("/verity-falsity/") ||
      url.pathname === "/verity-vs-falsity" ||
      url.pathname.startsWith("/verity-vs-falsity/") ||
      url.pathname === "/verity-mod-falsity" ||
      url.pathname.startsWith("/verity-mod-falsity/") ||
      url.pathname === "/survive-from-verity-or-falsity" ||
      url.pathname.startsWith("/survive-from-verity-or-falsity/") ||
      url.pathname === "/survive-verity-falsity" ||
      url.pathname.startsWith("/survive-verity-falsity/") ||
      url.pathname === "/verity-or-falsity" ||
      url.pathname.startsWith("/verity-or-falsity/")
    ) {
      url.pathname = "/falsity-mod/";
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
      url.pathname === "/wiki" ||
      url.pathname.startsWith("/wiki/") ||
      url.pathname === "/verity-wiki" ||
      url.pathname.startsWith("/verity-wiki/") ||
      url.pathname === "/minecraft-verity-wiki" ||
      url.pathname.startsWith("/minecraft-verity-wiki/")
    ) {
      url.pathname = "/verity-mod-wiki/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/what-is-verity" ||
      url.pathname.startsWith("/what-is-verity/") ||
      url.pathname === "/what-is-verity-minecraft" ||
      url.pathname.startsWith("/what-is-verity-minecraft/") ||
      url.pathname === "/what-is-verity-in-minecraft" ||
      url.pathname.startsWith("/what-is-verity-in-minecraft/") ||
      url.pathname === "/what-is-the-verity-mod" ||
      url.pathname.startsWith("/what-is-the-verity-mod/") ||
      url.pathname === "/who-is-verity" ||
      url.pathname.startsWith("/who-is-verity/") ||
      url.pathname === "/who-is-verity-minecraft" ||
      url.pathname.startsWith("/who-is-verity-minecraft/")
    ) {
      url.pathname = "/what-is-verity-mod/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/who-created-verity-mod" ||
      url.pathname.startsWith("/who-created-verity-mod/") ||
      url.pathname === "/who-made-verity-mod" ||
      url.pathname.startsWith("/who-made-verity-mod/") ||
      url.pathname === "/who-is-the-creator-of-verity-mod" ||
      url.pathname.startsWith("/who-is-the-creator-of-verity-mod/") ||
      url.pathname === "/verity-mod-creator" ||
      url.pathname.startsWith("/verity-mod-creator/") ||
      url.pathname === "/verity-creator" ||
      url.pathname.startsWith("/verity-creator/") ||
      url.pathname === "/thatmob-verity-creator" ||
      url.pathname.startsWith("/thatmob-verity-creator/")
    ) {
      url.pathname = "/creators/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/real-verity-mod-updated" ||
      url.pathname === "/the-real-verity-mod-updated" ||
      url.pathname.startsWith("/the-real-verity-mod-updated/") ||
      url.pathname === "/updated-real-verity-mod" ||
      url.pathname.startsWith("/updated-real-verity-mod/") ||
      url.pathname === "/verity-mod-updated" ||
      url.pathname.startsWith("/verity-mod-updated/") ||
      url.pathname === "/verity-mod-latest-update" ||
      url.pathname.startsWith("/verity-mod-latest-update/")
    ) {
      url.pathname = "/real-verity-mod-updated/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/real-verity-mod-download" ||
      url.pathname.startsWith("/real-verity-mod-download/") ||
      url.pathname === "/real-verity-mod-java" ||
      url.pathname.startsWith("/real-verity-mod-java/") ||
      url.pathname === "/real-verity-mod-bedrock" ||
      url.pathname.startsWith("/real-verity-mod-bedrock/") ||
      url.pathname === "/real-verity-mod-minecraft" ||
      url.pathname.startsWith("/real-verity-mod-minecraft/") ||
      url.pathname === "/real-verity-mod-minecraft-download" ||
      url.pathname.startsWith("/real-verity-mod-minecraft-download/") ||
      url.pathname === "/real-verity-minecraft-mod" ||
      url.pathname.startsWith("/real-verity-minecraft-mod/") ||
      url.pathname === "/the-real-verity-mod-in-minecraft" ||
      url.pathname.startsWith("/the-real-verity-mod/") ||
      url.pathname.startsWith("/the-real-verity-mod-in-minecraft/") ||
      url.pathname === "/the-real-verity-mod"
    ) {
      url.pathname = "/real-verity-mod/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
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

    if (
      url.pathname === "/how-to-install" ||
      url.pathname.startsWith("/how-to-install/") ||
      url.pathname === "/how-to-download-verity-mod" ||
      url.pathname.startsWith("/how-to-download-verity-mod/") ||
      url.pathname === "/how-to-download-and-install-verity-mod" ||
      url.pathname.startsWith("/how-to-download-and-install-verity-mod/") ||
      url.pathname === "/how-to-download-verity-mod-in-minecraft" ||
      url.pathname.startsWith("/how-to-download-verity-mod-in-minecraft/") ||
      url.pathname === "/how-to-download-and-install-verity-for-minecraft" ||
      url.pathname.startsWith("/how-to-download-and-install-verity-for-minecraft/")
    ) {
      url.pathname = "/how-to-get-verity-mod/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-world" ||
      url.pathname === "/verityworld" ||
      url.pathname.startsWith("/verityworld/") ||
      url.pathname === "/verity-world-modpack" ||
      url.pathname.startsWith("/verity-world-modpack/") ||
      url.pathname === "/verity-world-ai-horror-adventure" ||
      url.pathname.startsWith("/verity-world-ai-horror-adventure/") ||
      url.pathname === "/verity-falsity-modpack" ||
      url.pathname.startsWith("/verity-falsity-modpack/") ||
      url.pathname === "/curseforge-verity-falsity" ||
      url.pathname.startsWith("/curseforge-verity-falsity/") ||
      url.pathname === "/voxelcore-verity-world" ||
      url.pathname.startsWith("/voxelcore-verity-world/")
    ) {
      url.pathname = "/verity-world/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-pack" ||
      url.pathname === "/veritypack" ||
      url.pathname.startsWith("/veritypack/") ||
      url.pathname === "/verity-beta" ||
      url.pathname.startsWith("/verity-beta/") ||
      url.pathname === "/curseforge-verity-pack" ||
      url.pathname.startsWith("/curseforge-verity-pack/") ||
      url.pathname === "/veritypack-realistic" ||
      url.pathname.startsWith("/veritypack-realistic/")
    ) {
      url.pathname = "/verity-pack/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity.exe" ||
      url.pathname.startsWith("/verity.exe/") ||
      url.pathname === "/verityexe" ||
      url.pathname.startsWith("/verityexe/") ||
      url.pathname === "/verity-exe-download" ||
      url.pathname.startsWith("/verity-exe-download/") ||
      url.pathname === "/verity-exe-modpack" ||
      url.pathname.startsWith("/verity-exe-modpack/") ||
      url.pathname === "/verity-exe-api-key" ||
      url.pathname.startsWith("/verity-exe-api-key/") ||
      url.pathname === "/verity-exe-groq" ||
      url.pathname.startsWith("/verity-exe-groq/") ||
      url.pathname === "/verity-exe-not-talking" ||
      url.pathname.startsWith("/verity-exe-not-talking/") ||
      url.pathname === "/verity-exe-voicechat" ||
      url.pathname.startsWith("/verity-exe-voicechat/") ||
      url.pathname === "/verity-exe-voice-chat" ||
      url.pathname.startsWith("/verity-exe-voice-chat/") ||
      url.pathname === "/what-is-verity-exe" ||
      url.pathname.startsWith("/what-is-verity-exe/") ||
      url.pathname === "/verity-exe-curseforge" ||
      url.pathname.startsWith("/verity-exe-curseforge/")
    ) {
      url.pathname = "/verity-exe/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/how-to-play" ||
      url.pathname.startsWith("/how-to-play/") ||
      url.pathname === "/how-to-play-verity-mod" ||
      url.pathname.startsWith("/how-to-play-verity-mod/") ||
      url.pathname === "/how-to-play-verity-mod-in-minecraft" ||
      url.pathname.startsWith("/how-to-play-verity-mod-in-minecraft/") ||
      url.pathname === "/how-to-play-verity-mod-java" ||
      url.pathname.startsWith("/how-to-play-verity-mod-java/") ||
      url.pathname === "/how-to-play-verity-mod-bedrock" ||
      url.pathname.startsWith("/how-to-play-verity-mod-bedrock/") ||
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
      url.pathname === "/how-to-use-verity-mod-in-minecraft" ||
      url.pathname.startsWith("/how-to-use-verity-mod-in-minecraft/") ||
      url.pathname === "/how-to-use-the-verity-mod" ||
      url.pathname.startsWith("/how-to-use-the-verity-mod/") ||
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
      url.pathname.startsWith("/verity-573-jar/") ||
      url.pathname === "/verity.jar" ||
      url.pathname.startsWith("/verity.jar/") ||
      url.pathname === "/verity-jar" ||
      url.pathname.startsWith("/verity-jar/") ||
      url.pathname === "/verity-java-download" ||
      url.pathname.startsWith("/verity-java-download/") ||
      url.pathname === "/verity-download-java" ||
      url.pathname.startsWith("/verity-download-java/") ||
      url.pathname === "/verity-mod-java-download-free" ||
      url.pathname.startsWith("/verity-mod-java-download-free/") ||
      url.pathname === "/verity-mod-minecraft-java-download" ||
      url.pathname.startsWith("/verity-mod-minecraft-java-download/") ||
      url.pathname === "/mod-verity-1-20-1" ||
      url.pathname.startsWith("/mod-verity-1-20-1/") ||
      url.pathname === "/verity-mod-1-20-1" ||
      url.pathname.startsWith("/verity-mod-1-20-1/") ||
      url.pathname === "/verity-mod-1.20.1" ||
      url.pathname.startsWith("/verity-mod-1.20.1/") ||
      url.pathname === "/forge-verity" ||
      url.pathname.startsWith("/forge-verity/") ||
      url.pathname === "/verity-forge" ||
      url.pathname.startsWith("/verity-forge/") ||
      url.pathname === "/verity-je-mod-download" ||
      url.pathname.startsWith("/verity-je-mod-download/")
    ) {
      url.pathname = "/verity-5-7-3-jar/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-6.jar" ||
      url.pathname.startsWith("/verity-6.jar/") ||
      url.pathname === "/verity-6" ||
      url.pathname.startsWith("/verity-6/") ||
      url.pathname === "/verity-6-jar" ||
      url.pathname === "/verity-je-6" ||
      url.pathname.startsWith("/verity-je-6/") ||
      url.pathname === "/verity-je-version-6" ||
      url.pathname.startsWith("/verity-je-version-6/") ||
      url.pathname === "/verity-je-6-download" ||
      url.pathname.startsWith("/verity-je-6-download/") ||
      url.pathname === "/verity-mod-6" ||
      url.pathname.startsWith("/verity-mod-6/") ||
      url.pathname === "/verity-mod-version-6" ||
      url.pathname.startsWith("/verity-mod-version-6/") ||
      url.pathname === "/modrinth-verity-6" ||
      url.pathname.startsWith("/modrinth-verity-6/")
    ) {
      url.pathname = "/verity-6-jar/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-6.0.1-all.jar" ||
      url.pathname.startsWith("/verity-6.0.1-all.jar/") ||
      url.pathname === "/verity-6.0.1.jar" ||
      url.pathname.startsWith("/verity-6.0.1.jar/") ||
      url.pathname === "/verity-6.0.1" ||
      url.pathname.startsWith("/verity-6.0.1/") ||
      url.pathname === "/verity-6.0.1-jar" ||
      url.pathname.startsWith("/verity-6.0.1-jar/") ||
      url.pathname === "/verity-601-jar" ||
      url.pathname.startsWith("/verity-601-jar/")
    ) {
      url.pathname = "/verity-6-0-1-jar/";
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
      url.pathname === "/how-to-talk-to-verity-mod" ||
      url.pathname.startsWith("/how-to-talk-to-verity-mod/") ||
      url.pathname === "/how-to-talk-to-verity-in-minecraft" ||
      url.pathname.startsWith("/how-to-talk-to-verity-in-minecraft/") ||
      url.pathname === "/talk-to-verity" ||
      url.pathname.startsWith("/talk-to-verity/") ||
      url.pathname === "/talk-to-verity-mod" ||
      url.pathname.startsWith("/talk-to-verity-mod/") ||
      url.pathname === "/talk-to-verity-without-microphone" ||
      url.pathname.startsWith("/talk-to-verity-without-microphone/") ||
      url.pathname === "/how-to-talk-to-verity-without-microphone" ||
      url.pathname.startsWith("/how-to-talk-to-verity-without-microphone/") ||
      url.pathname === "/how-to-use-microphone-in-verity-mod" ||
      url.pathname.startsWith("/how-to-use-microphone-in-verity-mod/") ||
      url.pathname === "/how-to-use-voice-chat-in-verity-mod" ||
      url.pathname.startsWith("/how-to-use-voice-chat-in-verity-mod/") ||
      url.pathname === "/verity-mod-microphone" ||
      url.pathname.startsWith("/verity-mod-microphone/") ||
      url.pathname === "/verity-microphone" ||
      url.pathname.startsWith("/verity-microphone/") ||
      url.pathname === "/verity-mod-no-microphone" ||
      url.pathname.startsWith("/verity-mod-no-microphone/") ||
      url.pathname === "/verity-without-microphone" ||
      url.pathname.startsWith("/verity-without-microphone/") ||
      url.pathname === "/verity-mod-voice-chat" ||
      url.pathname.startsWith("/verity-mod-voice-chat/") ||
      url.pathname === "/verity-voice-chat" ||
      url.pathname.startsWith("/verity-voice-chat/")
    ) {
      url.pathname = "/how-to-talk-to-verity/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-mod-voice-not-working" ||
      url.pathname.startsWith("/verity-mod-voice-not-working/") ||
      url.pathname === "/verity-voice-not-working" ||
      url.pathname.startsWith("/verity-voice-not-working/") ||
      url.pathname === "/verity-mod-no-voice" ||
      url.pathname.startsWith("/verity-mod-no-voice/") ||
      url.pathname === "/verity-no-voice" ||
      url.pathname.startsWith("/verity-no-voice/") ||
      url.pathname === "/verity-mod-no-sound" ||
      url.pathname.startsWith("/verity-mod-no-sound/") ||
      url.pathname === "/verity-no-sound" ||
      url.pathname.startsWith("/verity-no-sound/") ||
      url.pathname === "/verity-chat-works-no-voice" ||
      url.pathname.startsWith("/verity-chat-works-no-voice/") ||
      url.pathname === "/verity-text-works-no-voice" ||
      url.pathname.startsWith("/verity-text-works-no-voice/") ||
      url.pathname === "/simple-voice-chat-verity-not-working" ||
      url.pathname.startsWith("/simple-voice-chat-verity-not-working/") ||
      url.pathname === "/simple-voice-chat-verity" ||
      url.pathname.startsWith("/simple-voice-chat-verity/") ||
      url.pathname === "/verity-mod-tts-not-working" ||
      url.pathname.startsWith("/verity-mod-tts-not-working/") ||
      url.pathname === "/verity-tts-not-working" ||
      url.pathname.startsWith("/verity-tts-not-working/")
    ) {
      url.pathname = "/voice-not-working/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-doesnt-respond" ||
      url.pathname === "/verity-mod-doesnt-respond" ||
      url.pathname.startsWith("/verity-mod-doesnt-respond/") ||
      url.pathname === "/verity-not-responding" ||
      url.pathname.startsWith("/verity-not-responding/") ||
      url.pathname === "/verity-mod-not-responding" ||
      url.pathname.startsWith("/verity-mod-not-responding/") ||
      url.pathname === "/verity-ai-not-responding" ||
      url.pathname.startsWith("/verity-ai-not-responding/") ||
      url.pathname === "/verity-no-reply" ||
      url.pathname.startsWith("/verity-no-reply/") ||
      url.pathname === "/verity-not-replying" ||
      url.pathname.startsWith("/verity-not-replying/") ||
      url.pathname === "/verity-not-talking" ||
      url.pathname.startsWith("/verity-not-talking/") ||
      url.pathname === "/verity-doesnt-talk" ||
      url.pathname.startsWith("/verity-doesnt-talk/") ||
      url.pathname === "/verity-wont-talk" ||
      url.pathname.startsWith("/verity-wont-talk/") ||
      url.pathname === "/verity-only-says-dots" ||
      url.pathname.startsWith("/verity-only-says-dots/") ||
      url.pathname === "/verity-pocket-edition-not-responding" ||
      url.pathname.startsWith("/verity-pocket-edition-not-responding/") ||
      url.pathname === "/verity-pocket-edition-daily-limit" ||
      url.pathname.startsWith("/verity-pocket-edition-daily-limit/") ||
      url.pathname === "/verity-cloudflare-workers-limit" ||
      url.pathname.startsWith("/verity-cloudflare-workers-limit/") ||
      url.pathname === "/verity-cloudflare-limit" ||
      url.pathname.startsWith("/verity-cloudflare-limit/")
    ) {
      url.pathname = "/verity-doesnt-respond/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/verity-groq-api-key" ||
      url.pathname === "/groq-api-key" ||
      url.pathname.startsWith("/groq-api-key/") ||
      url.pathname === "/grok-api-key" ||
      url.pathname.startsWith("/grok-api-key/") ||
      url.pathname === "/verity-api-key" ||
      url.pathname.startsWith("/verity-api-key/") ||
      url.pathname === "/verity-groq" ||
      url.pathname.startsWith("/verity-groq/") ||
      url.pathname === "/verity-grok" ||
      url.pathname.startsWith("/verity-grok/") ||
      url.pathname === "/verity-grok-api-key" ||
      url.pathname.startsWith("/verity-grok-api-key/") ||
      url.pathname === "/verity-openrouter-api-key" ||
      url.pathname.startsWith("/verity-openrouter-api-key/") ||
      url.pathname === "/openrouter-api-key" ||
      url.pathname.startsWith("/openrouter-api-key/") ||
      url.pathname === "/verity-ai-setup" ||
      url.pathname.startsWith("/verity-ai-setup/") ||
      url.pathname === "/verity-mod-ai-setup" ||
      url.pathname.startsWith("/verity-mod-ai-setup/") ||
      url.pathname === "/verity-groq-setup" ||
      url.pathname.startsWith("/verity-groq-setup/") ||
      url.pathname === "/verity-mod-groq-setup" ||
      url.pathname.startsWith("/verity-mod-groq-setup/") ||
      url.pathname === "/verity-mod-voice-tts-setup" ||
      url.pathname.startsWith("/verity-mod-voice-tts-setup/") ||
      url.pathname === "/verity-voice-tts-setup" ||
      url.pathname.startsWith("/verity-voice-tts-setup/") ||
      url.pathname === "/how-to-set-up-verity-mod-ai-groq-api-key-voice-tts-setup" ||
      url.pathname.startsWith("/how-to-set-up-verity-mod-ai-groq-api-key-voice-tts-setup/")
    ) {
      url.pathname = "/verity-groq-api-key/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/best-ai-model-for-verity-mod" ||
      url.pathname.startsWith("/best-ai-model-for-verity-mod/") ||
      url.pathname === "/verity-mod-ai-model" ||
      url.pathname.startsWith("/verity-mod-ai-model/") ||
      url.pathname === "/verity-ai-model" ||
      url.pathname.startsWith("/verity-ai-model/") ||
      url.pathname === "/verity-mod-ollama-model" ||
      url.pathname.startsWith("/verity-mod-ollama-model/") ||
      url.pathname === "/verity-ollama-model" ||
      url.pathname.startsWith("/verity-ollama-model/") ||
      url.pathname === "/verity-3b" ||
      url.pathname.startsWith("/verity-3b/") ||
      url.pathname === "/verity-3b-ollama" ||
      url.pathname.startsWith("/verity-3b-ollama/") ||
      url.pathname === "/timheinrich2011-verity-3b" ||
      url.pathname.startsWith("/timheinrich2011-verity-3b/") ||
      url.pathname === "/verity-je-only-one-word" ||
      url.pathname.startsWith("/verity-je-only-one-word/") ||
      url.pathname === "/verity-only-says-one-word" ||
      url.pathname.startsWith("/verity-only-says-one-word/") ||
      url.pathname === "/verity-says-one-word" ||
      url.pathname.startsWith("/verity-says-one-word/") ||
      url.pathname === "/verity-mod-one-word" ||
      url.pathname.startsWith("/verity-mod-one-word/") ||
      url.pathname === "/verity-je-dumb" ||
      url.pathname.startsWith("/verity-je-dumb/") ||
      url.pathname === "/verity-mod-dumb" ||
      url.pathname.startsWith("/verity-mod-dumb/") ||
      url.pathname === "/verity-bad-ai-replies" ||
      url.pathname.startsWith("/verity-bad-ai-replies/") ||
      url.pathname === "/verity-poor-ai-replies" ||
      url.pathname.startsWith("/verity-poor-ai-replies/")
    ) {
      url.pathname = "/ai-model/";
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
      url.pathname === "/invalid-api-key" ||
      url.pathname.startsWith("/invalid-api-key/") ||
      url.pathname === "/verity-invalid-api-key" ||
      url.pathname.startsWith("/verity-invalid-api-key/") ||
      url.pathname === "/verity-mod-invalid-api-key" ||
      url.pathname.startsWith("/verity-mod-invalid-api-key/") ||
      url.pathname === "/verity-api-key-invalid" ||
      url.pathname.startsWith("/verity-api-key-invalid/") ||
      url.pathname === "/verity-mod-api-error-invalid-api-key" ||
      url.pathname.startsWith("/verity-mod-api-error-invalid-api-key/") ||
      url.pathname === "/verity-change-api-key" ||
      url.pathname.startsWith("/verity-change-api-key/") ||
      url.pathname === "/verity-mod-change-api-key" ||
      url.pathname.startsWith("/verity-mod-change-api-key/") ||
      url.pathname === "/verity-ai-connection-error-change-api-key" ||
      url.pathname.startsWith("/verity-ai-connection-error-change-api-key/")
    ) {
      url.pathname = "/status-401/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/401" ||
      url.pathname.startsWith("/401/") ||
      url.pathname === "/verity-401" ||
      url.pathname.startsWith("/verity-401/") ||
      url.pathname === "/verity-mod-401" ||
      url.pathname.startsWith("/verity-mod-401/") ||
      url.pathname === "/api-401" ||
      url.pathname.startsWith("/api-401/") ||
      url.pathname === "/api-connection-401" ||
      url.pathname.startsWith("/api-connection-401/") ||
      url.pathname === "/api-connection-failed-401" ||
      url.pathname.startsWith("/api-connection-failed-401/") ||
      url.pathname === "/verity-api-connection-failed-401" ||
      url.pathname.startsWith("/verity-api-connection-failed-401/") ||
      url.pathname === "/verity-error-401" ||
      url.pathname.startsWith("/verity-error-401/") ||
      url.pathname === "/verity-groq-401" ||
      url.pathname.startsWith("/verity-groq-401/") ||
      url.pathname === "/groq-401" ||
      url.pathname.startsWith("/groq-401/")
    ) {
      url.pathname = "/status-401/";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname === "/403" ||
      url.pathname.startsWith("/403/") ||
      url.pathname === "/verity-403" ||
      url.pathname.startsWith("/verity-403/") ||
      url.pathname === "/verity-mod-403" ||
      url.pathname.startsWith("/verity-mod-403/") ||
      url.pathname === "/api-403" ||
      url.pathname.startsWith("/api-403/") ||
      url.pathname === "/api-connection-403" ||
      url.pathname.startsWith("/api-connection-403/") ||
      url.pathname === "/api-connection-failed-403" ||
      url.pathname.startsWith("/api-connection-failed-403/") ||
      url.pathname === "/verity-api-connection-failed-403" ||
      url.pathname.startsWith("/verity-api-connection-failed-403/") ||
      url.pathname === "/verity-error-403" ||
      url.pathname.startsWith("/verity-error-403/") ||
      url.pathname === "/verity-mod-api-connection-failed-403" ||
      url.pathname.startsWith("/verity-mod-api-connection-failed-403/") ||
      url.pathname === "/verity-mod-api-error-403" ||
      url.pathname.startsWith("/verity-mod-api-error-403/")
    ) {
      url.pathname = "/api-connection-failed/";
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
      url.pathname.startsWith("/api-429/") ||
      url.pathname === "/verity-je-broken" ||
      url.pathname.startsWith("/verity-je-broken/") ||
      url.pathname === "/verity-je-429" ||
      url.pathname.startsWith("/verity-je-429/") ||
      url.pathname === "/verity-mod-status-429" ||
      url.pathname.startsWith("/verity-mod-status-429/") ||
      url.pathname === "/verity-works-then-fails" ||
      url.pathname.startsWith("/verity-works-then-fails/") ||
      url.pathname === "/verity-works-for-one-minute" ||
      url.pathname.startsWith("/verity-works-for-one-minute/") ||
      url.pathname === "/verity-429-glitch" ||
      url.pathname.startsWith("/verity-429-glitch/")
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

    const assetResponse = await env.ASSETS.fetch(request);
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
      headers.set("cache-control", "public, max-age=0, must-revalidate");
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
