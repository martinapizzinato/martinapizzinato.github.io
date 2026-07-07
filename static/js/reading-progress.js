(function () {
  const root = document.body;
  function set() {
    const h = document.documentElement;
    const sc = h.scrollTop || document.body.scrollTop;
    const max = (h.scrollHeight - h.clientHeight) || 1;
    root.style.setProperty('--scroll', `${(sc / max) * 100}%`);
  }
  addEventListener('scroll', set, { passive: true });
  addEventListener('resize', set);
  set();
})();
