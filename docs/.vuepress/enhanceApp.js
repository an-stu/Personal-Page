function ensureScript(id, src) {
  let script = document.getElementById(id);
  if (script) {
    return script;
  }

  script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = true;
  document.body.appendChild(script);
  return script;
}

function mountVisitorCounter() {
  if (document.getElementById("site-visitor-counter")) {
    return;
  }

  const box = document.createElement("div");
  box.id = "site-visitor-counter";
  box.className = "site-visitor-counter";
  box.setAttribute("aria-label", "访客统计");
  box.innerHTML = `
    <div class="counter-title">访问统计</div>
    <div class="counter-line" id="busuanzi_container_site_pv">
      总访问量 <span id="busuanzi_value_site_pv">0</span>
    </div>
    <div class="counter-line" id="busuanzi_container_site_uv">
      访客人数 <span id="busuanzi_value_site_uv">0</span>
    </div>
  `;

  document.body.appendChild(box);
}

function initLive2D() {
  if (window.__live2dInited) {
    return;
  }

  const run = () => {
    if (!window.L2Dwidget || window.__live2dInited) {
      return;
    }

    window.__live2dInited = true;
    window.L2Dwidget.init({
      model: {
        jsonPath:
          "https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json"
      },
      display: {
        position: "right",
        width: 150,
        height: 300,
        hOffset: 0,
        vOffset: -20
      },
      mobile: {
        show: true,
        scale: 0.7
      },
      react: {
        opacityDefault: 0.92,
        opacityOnHover: 1
      }
    });
  };

  if (window.L2Dwidget) {
    run();
    return;
  }

  ensureScript(
    "live2d-widget-script",
    "https://unpkg.com/live2d-widget@3.1.4/lib/L2Dwidget.min.js"
  ).addEventListener("load", run, { once: true });
}

function refreshBusuanzi() {
  if (window.BUSUANZI && typeof window.BUSUANZI.fetch === "function") {
    window.BUSUANZI.fetch();
  }
}

function boot() {
  mountVisitorCounter();
  ensureScript(
    "busuanzi-script",
    "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
  );
  initLive2D();
  setTimeout(refreshBusuanzi, 200);
}

export default ({ router, isServer }) => {
  if (isServer) {
    return;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }

  router.afterEach(() => {
    setTimeout(() => {
      mountVisitorCounter();
      refreshBusuanzi();
    }, 150);
  });
};
