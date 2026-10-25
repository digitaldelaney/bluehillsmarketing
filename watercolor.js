/*
  Katherine Delaney — scroll bloom for watercolor washes.
  Any element with a data-wash attribute starts small and turned, then spreads to full size
  (overshooting a little, like wet paint) the first time its parent section scrolls into view.
  Plays once per wash. Skipped entirely for visitors who prefer reduced motion.
*/
(function () {
  function bloom() {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var els = [].slice.call(document.querySelectorAll('[data-wash]'));
    els.forEach(function (el, k) {
      var r = (k % 2 ? 1 : -1) * (8 + (k * 7) % 12);
      el.style.transition = 'none';
      el.style.transformOrigin = '50% 50%';
      el.style.opacity = '0';
      el.style.transform = 'scale(.15) rotate(' + r + 'deg)';
    });
    function reveal(el) {
      if (el.dataset.bloomed) return; el.dataset.bloomed = '1';
      var d = Math.random() * 250;
      requestAnimationFrame(function () { requestAnimationFrame(function () {
        el.style.transition = 'transform 2s cubic-bezier(.16,1.3,.3,1) ' + d + 'ms, opacity 1.4s ease-out ' + d + 'ms';
        el.style.opacity = '1'; el.style.transform = 'none';
      }); });
    }
    function check() {
      var vh = window.innerHeight;
      els.forEach(function (el) { var s = el.parentElement.getBoundingClientRect(); if (s.top < vh * 0.8 && s.bottom > vh * 0.1) reveal(el); });
    }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); reveal(e.target._wash); } });
      }, { rootMargin: '0px 0px -20% 0px' });
      els.forEach(function (el) { el.parentElement._wash = el; io.observe(el.parentElement); });
    }
    var raf = 0;
    function tick() { if (raf) return; raf = requestAnimationFrame(function () { raf = 0; check(); }); }
    ['scroll', 'resize'].forEach(function (ev) { window.addEventListener(ev, tick, { passive: true }); });
    requestAnimationFrame(check);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bloom);
  else bloom();
})();
