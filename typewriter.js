(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var DEFAULT_SPEED = 55;

  function runTypewriter(el) {
    var textEl = el.querySelector('[data-typewriter-text]') || el;
    var text = (textEl.textContent || '').trim();
    if (!text) return;

    if (!el.getAttribute('aria-label')) {
      el.setAttribute('aria-label', text);
    }

    if (textEl === el) {
      el.style.minHeight = el.offsetHeight + 'px';
    }

    textEl.textContent = '';
    textEl.classList.add('is-typing');

    var i = 0;
    var speed = Number(el.getAttribute('data-typewriter-speed')) || DEFAULT_SPEED;

    function tick() {
      if (i < text.length) {
        textEl.textContent += text.charAt(i++);
        setTimeout(tick, speed);
      } else {
        textEl.classList.remove('is-typing');
        textEl.classList.add('is-typed');
      }
    }

    tick();
  }

  document.querySelectorAll('[data-typewriter]').forEach(runTypewriter);
})();
