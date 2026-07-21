export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "www.veritymodchecker.online") {
      url.hostname = "veritymodchecker.online";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/verity-je" || url.pathname.startsWith("/verity-je/")) {
      url.pathname = "/java/";
      url.hash = "versions";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/mcpe" || url.pathname.startsWith("/mcpe/")) {
      url.pathname = "/bedrock/";
      url.hash = "mcpe";
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
      return new Response("Not found", {
        status: 404,
        headers: {
          "cache-control": "no-store",
          "content-type": "text/plain; charset=utf-8",
          "x-content-type-options": "nosniff",
        },
      });
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
    } else if (url.pathname === "/styles.css" || url.pathname === "/script.js") {
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
