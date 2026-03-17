(() => {
  /**
   * Lightweight, per-page VWO tag SmartCode injector.
   *
   * Each page defines a JSON config:
   * <script id="vwo-config" type="application/json">
   *   {"accountId": 1055484, "useEdge": false}
   * </script>
   *
   * Then includes:
   * <script src="/vwo/vwo-smartcode.js"></script>
   */

  const cfgEl = document.getElementById("vwo-config");
  if (!cfgEl) return;

  let cfg;
  try {
    cfg = JSON.parse(cfgEl.textContent || "{}");
  } catch {
    return;
  }

  const accountId = Number(cfg.accountId);
  if (!Number.isFinite(accountId) || accountId <= 0) return;

  const useEdge = !!cfg.useEdge;
  const base = useEdge ? "https://edge.visualwebsiteoptimizer.com" : "https://dev.visualwebsiteoptimizer.com";
  const src = `${base}/tag/${accountId}.js`;

  // If already present, do nothing.
  if (document.getElementById("vwoCode")) return;

  // Optional kill-switch (mirrors VWO behavior).
  if (document.URL.indexOf("__vwo_disable__") > -1) return;

  const s = document.createElement("script");
  s.id = "vwoCode";
  s.referrerPolicy = "no-referrer-when-downgrade";
  s.src = src;
  document.head.appendChild(s);
})();

