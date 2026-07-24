(() => {
  if (window.__verityOutboundTracking) return;
  window.__verityOutboundTracking = true;

  function trackEvent(name, parameters) {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, parameters);
    }
  }

  function projectName(destination) {
    const path = destination.pathname.toLowerCase();
    if (path.includes("verity-bedrock-edition")) return "PnTMC Verity Bedrock";
    if (path.includes("verity-be")) return "Verity BE";
    if (path.includes("verity-je") || path.includes("verity-je-official")) return "Verity JE";
    return "External reference";
  }

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest("a[href]");
    if (!link) return;

    try {
      const destination = new URL(link.href, window.location.href);
      if (destination.hostname === window.location.hostname) return;

      const host = destination.hostname.replace(/^www\./, "");
      const isProjectRoute = host === "curseforge.com" || host === "modrinth.com";
      const section = link.closest("section");
      const linkArea = section?.id ||
        (link.closest("footer") ? "footer" : link.closest("header") ? "header" : "content");

      trackEvent(isProjectRoute ? "verity_outbound_project_click" : "verity_outbound_reference_click", {
        destination_host: destination.hostname,
        destination_path: destination.pathname,
        link_text: link.textContent.trim().slice(0, 80),
        project_name: projectName(destination),
        source_page: window.location.pathname,
        link_area: linkArea,
        transport_type: "beacon"
      });
    } catch {
      // Normal navigation should continue when a malformed URL cannot be measured.
    }
  });
})();
