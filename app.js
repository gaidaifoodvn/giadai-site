/* ============================================================
   GIA DAI — shared interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---- inline SVG icons (replaces emoji) ---- */
  var ICONS = {
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    snowflake: '<path d="M2 12h20M12 2v20"/><path d="m20 16-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
    scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/>',
    truck: '<path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
    clipboard: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    factory: '<path d="M2 20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8l-7 5V8l-7 5V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"/><path d="M17 18h.01M12 18h.01M7 18h.01"/>',
    package: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/>',
    handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
    anchor: '<circle cx="12" cy="5" r="3"/><path d="M12 22V8M5 12H2a10 10 0 0 0 20 0h-3"/>',
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>'
  };
  document.querySelectorAll('[data-icon]').forEach(function (el) {
    var n = el.getAttribute('data-icon');
    if (ICONS[n]) {
      el.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[n] + '</svg>';
    }
  });

  /* ---- mobile nav ---- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  /* ---- scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- hero carousel ---- */
  var hero = document.querySelector('[data-hero]');
  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll('.hero-slide'));
    var dotsWrap = hero.querySelector('.hero-dots');
    var i = 0, timer;

    slides.forEach(function (_, idx) {
      var d = document.createElement('button');
      d.setAttribute('aria-label', 'Go to slide ' + (idx + 1));
      if (idx === 0) d.classList.add('on');
      d.addEventListener('click', function () { go(idx); reset(); });
      if (dotsWrap) dotsWrap.appendChild(d);
    });
    var dots = dotsWrap ? Array.prototype.slice.call(dotsWrap.children) : [];

    function go(n) {
      slides[i].classList.remove('on');
      if (dots[i]) dots[i].classList.remove('on');
      i = (n + slides.length) % slides.length;
      slides[i].classList.add('on');
      if (dots[i]) dots[i].classList.add('on');
    }
    function next() { go(i + 1); }
    function prev() { go(i - 1); }
    function reset() {
      clearInterval(timer);
      if (slides.length > 1) timer = setInterval(next, 6000);
    }

    var nextBtn = hero.querySelector('[data-hero-next]');
    var prevBtn = hero.querySelector('[data-hero-prev]');
    if (nextBtn) nextBtn.addEventListener('click', function () { next(); reset(); });
    if (prevBtn) prevBtn.addEventListener('click', function () { prev(); reset(); });
    reset();
  }

  /* ---- brands rail ---- */
  var rail = document.querySelector('[data-rail]');
  if (rail) {
    var track = rail.querySelector('.brands-track');
    var cells = track ? track.querySelectorAll('.brand-cell') : [];
    var page = 0;

    function perView() {
      if (window.matchMedia('(max-width:520px)').matches) return 2;
      if (window.matchMedia('(max-width:880px)').matches) return 3;
      return 5;
    }
    function maxPage() { return Math.max(0, Math.ceil(cells.length / perView()) - 1); }
    function apply() {
      page = Math.min(page, maxPage());
      track.style.transform = 'translateX(' + (-page * 100) + '%)';
    }
    var nb = rail.querySelector('[data-rail-next]');
    var pb = rail.querySelector('[data-rail-prev]');
    if (nb) nb.addEventListener('click', function () { page = page >= maxPage() ? 0 : page + 1; apply(); });
    if (pb) pb.addEventListener('click', function () { page = page <= 0 ? maxPage() : page - 1; apply(); });
    window.addEventListener('resize', apply);
    apply();
  }

  /* ---- forms: submit to Web3Forms (emails giadaifoodvn@gmail.com) ---- */
  document.querySelectorAll('form[data-web3form]').forEach(function (form) {
    var note = form.querySelector('[data-form-note]');
    var btn = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      /* basic required-field check */
      if (!form.checkValidity()) { form.reportValidity(); return; }

      var btnText = btn ? btn.innerHTML : '';
      if (btn) { btn.disabled = true; btn.innerHTML = 'Sending…'; }

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data && data.success) {
            if (note) {
              note.hidden = false;
              note.style.color = '#2ea44f';
              note.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            form.reset();
          } else {
            showErr();
          }
        })
        .catch(showErr)
        .finally(function () { if (btn) { btn.disabled = false; btn.innerHTML = btnText; } });

      function showErr() {
        if (note) {
          note.hidden = false;
          note.style.color = '#c0392b';
          note.textContent = 'Sorry, something went wrong. Please email us directly at giadaifoodvn@gmail.com.';
          note.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  });
})();
