/* ============================================================
   PureFreeCV — Shared nav + footer inject
   Usage: <script src="/_shared.js"></script>
   Place ONE empty div each:
     <div id="site-nav"></div>   ← at top of <body>
     <div id="site-footer"></div> ← at bottom of <body>
============================================================ */
(function () {
  const NAV_HTML = `
<nav class="site-nav">
  <div class="nav-inner">
    <a href="/" class="nav-logo">
      <span class="logo-mark">⬡</span>
      <span class="logo-text">PureFreeCV</span>
    </a>
    <ul class="nav-links">
      <li><a href="/resume-templates/">Templates</a></li>
      <li><a href="/resume-tips/">Resume Tips</a></li>
      <li><a href="/faq/">FAQ</a></li>
      <li><a href="/contact/">Contact</a></li>
    </ul>
    <a href="/" class="btn-nav-cta">Build My CV — Free</a>
    <button class="nav-burger" aria-label="Menu" onclick="document.querySelector('.nav-links').classList.toggle('open')">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

  const FOOTER_HTML = `
<footer class="site-footer-block">
  <div class="footer-inner">
    <div class="footer-brand">
      <a href="/" class="nav-logo">
        <span class="logo-mark">⬡</span>
        <span class="logo-text">PureFreeCV</span>
      </a>
      <p>100% free CV builder. No sign-up, no paywalls, no nonsense.</p>
    </div>
    <div class="footer-cols">
      <div>
        <h4>Tool</h4>
        <a href="/">CV Builder</a>
        <a href="/resume-templates/">Templates</a>
        <a href="/resume-tips/">Resume Tips</a>
        <a href="/faq/">FAQ</a>
      </div>
      <div>
        <h4>Legal</h4>
        <a href="/cookies/">Cookie Policy</a>
        <a href="/disclaimer/">Disclaimer</a>
        <a href="/contact/">Contact</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© ${new Date().getFullYear()} PureFreeCV. All rights reserved.</p>
  </div>
</footer>`;

  const SHARED_CSS = `
<style>
/* ── Shared Nav ── */
.site-nav{position:sticky;top:0;z-index:900;background:#fff;border-bottom:1px solid #e2ddd4;box-shadow:0 1px 8px rgba(0,0,0,0.06);}
.nav-inner{max-width:1100px;margin:0 auto;padding:0 24px;height:60px;display:flex;align-items:center;gap:32px;}
.nav-logo{display:flex;align-items:center;gap:8px;text-decoration:none;font-family:'Inter',sans-serif;font-weight:700;font-size:1.05rem;color:#1a1714;}
.logo-mark{color:#c8900a;font-size:1.3rem;}
.nav-links{display:flex;gap:6px;list-style:none;margin:0;padding:0;margin-left:auto;}
.nav-links a{font-family:'Inter',sans-serif;font-size:0.875rem;font-weight:500;color:#5a5550;text-decoration:none;padding:6px 12px;border-radius:7px;transition:all 0.15s;}
.nav-links a:hover{background:#f5f4f0;color:#1a1714;}
.nav-links a.active{color:#c8900a;background:#fff8e6;}
.btn-nav-cta{font-family:'Inter',sans-serif;font-weight:600;font-size:0.8rem;padding:8px 16px;background:#c8900a;color:#fff;border:none;border-radius:7px;cursor:pointer;text-decoration:none;white-space:nowrap;transition:all 0.15s;}
.btn-nav-cta:hover{background:#b07a08;}
.nav-burger{display:none;flex-direction:column;gap:4px;background:none;border:none;cursor:pointer;padding:4px;}
.nav-burger span{display:block;width:22px;height:2px;background:#5a5550;border-radius:2px;}
@media(max-width:700px){
  .nav-links{display:none;position:absolute;top:60px;left:0;right:0;background:#fff;flex-direction:column;padding:12px 24px 20px;border-bottom:1px solid #e2ddd4;box-shadow:0 8px 24px rgba(0,0,0,0.1);}
  .nav-links.open{display:flex;}
  .nav-burger{display:flex;}
  .btn-nav-cta{display:none;}
}
/* ── Shared Footer ── */
.site-footer-block{background:#1a1714;color:#9a9490;margin-top:80px;}
.footer-inner{max-width:1100px;margin:0 auto;padding:48px 24px 32px;display:grid;grid-template-columns:1fr auto;gap:40px;}
.footer-brand p{font-size:0.85rem;margin-top:10px;max-width:260px;line-height:1.6;}
.footer-brand .nav-logo{color:#f5f4f0;}
.footer-brand .logo-mark{color:#c8900a;}
.footer-cols{display:flex;gap:48px;}
.footer-cols h4{font-family:'Inter',sans-serif;font-size:0.75rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#f5f4f0;margin-bottom:12px;}
.footer-cols a{display:block;font-size:0.875rem;color:#9a9490;text-decoration:none;margin-bottom:8px;transition:color 0.15s;}
.footer-cols a:hover{color:#f5f4f0;}
.footer-bottom{border-top:1px solid #2d2926;text-align:center;padding:16px 24px;font-size:0.8rem;}
@media(max-width:700px){.footer-inner{grid-template-columns:1fr;}.footer-cols{gap:32px;}}
</style>`;

  // Inject CSS into <head>
  document.head.insertAdjacentHTML('beforeend', SHARED_CSS);

  // Inject nav
  const navEl = document.getElementById('site-nav');
  if (navEl) navEl.innerHTML = NAV_HTML;

  // Inject footer
  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  // Mark active nav link
  const path = window.location.pathname.replace(/\/?$/, '/');
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/?$/, '/');
    if (href === path) a.classList.add('active');
  });
})();
