/* ============================================================
   Nadja & Julius — shared interactions
   Requires: styles.css
   ============================================================ */

(function () {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const touch   = !window.matchMedia('(hover: hover)').matches;

  /* ── helpers ─────────────────────────────────────────────── */
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return [...(root || document).querySelectorAll(sel)]; }
  function lerp(a, b, t) { return a + (b - a) * t; }

  /* ── 1. Film grain ───────────────────────────────────────── */
  function initGrain() {
    if (reduced) return;
    const canvas = document.createElement('canvas');
    canvas.id = 'grain';
    const W = canvas.width  = 220;
    const H = canvas.height = 220;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let frame = 0;

    function draw() {
      const img = ctx.createImageData(W, H);
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() * 255 | 0;
        d[i] = d[i+1] = d[i+2] = v;
        d[i+3] = 255;
      }
      ctx.putImageData(img, 0, 0);
    }

    // Tile the canvas as a CSS background on the overlay div
    const overlay = document.createElement('div');
    overlay.className = 'vignette'; // reuse grain slot
    overlay.id = 'grain-overlay';
    overlay.style.cssText = `
      pointer-events:none;
      position:fixed;inset:0;z-index:500;
      opacity:.055;
      background-size:220px 220px;
    `;
    document.body.prepend(overlay);

    // Animate grain by offsetting background position
    let ox = 0, oy = 0;
    function tick() {
      if (frame++ % 2 === 0) {
        draw();
        ox = Math.random() * 220 | 0;
        oy = Math.random() * 220 | 0;
        overlay.style.backgroundPosition = ox + 'px ' + oy + 'px';
        overlay.style.backgroundImage = 'url(' + canvas.toDataURL() + ')';
      }
      requestAnimationFrame(tick);
    }
    tick();

    // Vignette (separate layer)
    const vignette = document.createElement('div');
    vignette.className = 'vignette';
    document.body.prepend(vignette);
  }

  /* ── 2. Custom cursor ────────────────────────────────────── */
  function initCursor() {
    if (reduced || touch) return;
    const dot = document.createElement('div');
    dot.id = 'cursor';
    document.body.appendChild(dot);

    let mx = -100, my = -100, cx = -100, cy = -100;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    // Hover state on interactive elements
    document.addEventListener('mouseover', e => {
      if (e.target.closest('a, button, .btn, input, textarea, .attend-card, .accom-glass-card')) {
        dot.classList.add('hover');
      }
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest('a, button, .btn, input, textarea, .attend-card, .accom-glass-card')) {
        dot.classList.remove('hover');
      }
    });

    function frame() {
      cx = lerp(cx, mx, .18);
      cy = lerp(cy, my, .18);
      dot.style.transform = `translate(calc(${cx}px - 50%), calc(${cy}px - 50%))`;
      requestAnimationFrame(frame);
    }
    frame();
  }

  /* ── 3. Scroll progress bar ──────────────────────────────── */
  function initProgress() {
    const bar = document.createElement('div');
    bar.id = 'progress';
    document.body.appendChild(bar);

    function update() {
      const h = document.documentElement;
      const pct = h.scrollTop / (h.scrollHeight - h.clientHeight) * 100;
      bar.style.width = Math.min(100, pct) + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ── 4. Sticky nav ───────────────────────────────────────── */
  function initNav() {
    const head = qs('.site-head');
    if (!head) return;

    function update() {
      head.classList.toggle('scrolled', window.scrollY > 60);
    }
    window.addEventListener('scroll', update, { passive: true });
    update();

    // hamburger
    const btn  = qs('#hamburger');
    const body = document.body;
    if (!btn) return;
    btn.addEventListener('click', () => {
      const open = body.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open);
    });
    qsa('#main-nav a').forEach(a => {
      a.addEventListener('click', () => {
        body.classList.remove('nav-open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── 5. Kinetic heading (letter-by-letter) ───────────────── */
  function initKinetic() {
    qsa('.kinetic').forEach(el => {
      // Use textContent only — never touch child HTML elements
      const text = el.textContent;
      el.innerHTML = [...text].map(ch =>
        `<span class="kinetic-letter" aria-hidden="true">${ch === ' ' ? '&nbsp;' : ch}</span>`
      ).join('');
      el.setAttribute('aria-label', text); // restore accessible label

      function fire() {
        qsa('.kinetic-letter', el).forEach((l, i) => {
          setTimeout(() => l.classList.add('in'), i * 44 + 80);
        });
      }

      if (reduced) {
        qsa('.kinetic-letter', el).forEach(l => l.classList.add('in'));
      } else if (el.closest('.hero, .page-hero')) {
        setTimeout(fire, 180);
      } else {
        const obs = new IntersectionObserver(entries => {
          entries.forEach(e => { if (e.isIntersecting) { fire(); obs.unobserve(el); } });
        }, { threshold: .25 });
        obs.observe(el);
      }
    });
  }

  /* ── 6. Scroll reveals ───────────────────────────────────── */
  function initReveals() {
    document.body.classList.add('js-ready');

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });

    qsa('.reveal, .reveal-clip').forEach(el => obs.observe(el));
  }

  /* ── 7. Parallax / scroll zoom on images ────────────────── */
  function initParallax() {
    if (reduced) return;
    const items = qsa('.parallax-img');
    if (!items.length) return;

    let ticking = false;
    function update() {
      items.forEach(img => {
        const rect = img.parentElement.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const progress = (window.innerHeight / 2 - center) / window.innerHeight;
        img.style.transform = `translateY(${progress * 28}px)`;
      });
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ── 8. Magnetic buttons ─────────────────────────────────── */
  function initMagnetic() {
    if (reduced || touch) return;
    qsa('.btn').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width  - .5) * 10;
        const y = ((e.clientY - r.top)  / r.height - .5) * 7;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /* ── 9. Countdown — subtle digit animation ───────────────── */
  function initCountdown() {
    const dEl = qs('#cd-days');
    const hEl = qs('#cd-hours');
    const mEl = qs('#cd-mins');
    const sEl = qs('#cd-secs');
    const grid = qs('#cd-grid');
    const over = qs('#cd-over');
    if (!dEl) return;

    const target = new Date('2027-06-10T15:00:00+02:00').getTime();

    // Wrap each element's content in a .digit span for animation
    [dEl, hEl, mEl, sEl].forEach(el => {
      el.innerHTML = '<span class="digit">--</span>';
    });

    function p(n) { return (n < 10 ? '0' : '') + n; }

    function setDigit(el, val) {
      const span = qs('.digit', el);
      if (!span || span.textContent === String(val)) return;
      if (reduced) { span.textContent = val; return; }

      // Fade out → swap text → fade in. No overlap, no error feel.
      span.classList.add('changing');
      setTimeout(() => {
        span.textContent = val;
        span.style.transform = 'translateY(4px)';
        span.classList.remove('changing');
        requestAnimationFrame(() => {
          requestAnimationFrame(() => { span.style.transform = ''; });
        });
      }, 190);
    }

    function tick() {
      const diff = target - Date.now();
      if (diff <= 0) {
        if (grid) grid.style.display = 'none';
        if (over) over.style.display = '';
        return;
      }
      setDigit(dEl, Math.floor(diff / 86400000));
      setDigit(hEl, p(Math.floor(diff % 86400000 / 3600000)));
      setDigit(mEl, p(Math.floor(diff % 3600000 / 60000)));
      setDigit(sEl, p(Math.floor(diff % 60000 / 1000)));
      setTimeout(tick, 1000);
    }
    tick();
  }

  /* ── 10. Horizontal pinned gallery ──────────────────────── */
  function initGalleryPin() {
    const section = qs('.gallery-pin');
    const sticky  = qs('.gallery-pin-sticky');
    const track   = qs('.gallery-pin-track');
    if (!section || !track) return;

    // On mobile: no pinning — skip
    if (window.innerWidth <= 768) return;

    function setup() {
      const trackW = track.scrollWidth;
      const vw     = window.innerWidth;
      const scroll = trackW - vw + 2 * parseFloat(getComputedStyle(document.documentElement)
        .getPropertyValue('--pad') || '64');
      // section height = viewport height + scroll distance
      section.style.height = (window.innerHeight + scroll) + 'px';
      section.style.setProperty('--gallery-h', (window.innerHeight + scroll) + 'px');
    }

    let ticking = false;
    function update() {
      const rect = section.getBoundingClientRect();
      const trackW = track.scrollWidth;
      const vw = window.innerWidth;
      const maxScroll = trackW - vw;
      const progress = Math.max(0, Math.min(1, -rect.top / (section.offsetHeight - window.innerHeight)));
      track.style.transform = `translateX(${-progress * maxScroll}px)`;
      ticking = false;
    }

    setup();
    window.addEventListener('resize', () => { setup(); update(); });
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ── 11. Timeline — draw gold line on scroll ─────────────── */
  function initTimeline() {
    const tl = qs('.timeline');
    if (!tl) return;

    if (reduced) { tl.style.setProperty('--tl-progress', '1'); return; }

    // Use CSS transform scaleY driven by scroll
    let ticking = false;
    function update() {
      const rect = tl.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1,
        (window.innerHeight - rect.top) / (rect.height + window.innerHeight)
      ));
      tl.style.setProperty('--tl-progress', progress);
      tl.querySelector('::before'); // trigger repaint hint
      // Drive via inline style on a pseudo element via a wrapper
      tl.style.setProperty('--tl-scale', progress);
      tl.firstElementChild && (tl.style.cssText += ''); // force repaint

      // Use a real element for the line instead of ::before (easier to animate)
      const line = qs('.tl-line', tl);
      if (line) line.style.transform = `scaleY(${progress}) translateX(-50%)`;

      // Show dots as they pass
      qsa('.t-item', tl).forEach(item => {
        const ir = item.getBoundingClientRect();
        if (ir.top < window.innerHeight * .8) item.classList.add('tl-visible');
      });

      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });

    // Insert real line element (at center, covers ::before)
    const line = document.createElement('div');
    line.className = 'tl-line';
    line.style.cssText = `
      position:absolute;left:50%;top:0;bottom:0;width:1px;
      background:var(--accent);opacity:.55;
      transform:scaleY(0) translateX(-50%);transform-origin:top;
      transition:none;pointer-events:none;
    `;
    tl.style.position = 'relative';
    tl.prepend(line);

    update();
  }

  /* ── 12. Hero video ──────────────────────────────────────── */
  function initHeroVideo() {
    const v = qs('#heroVideo');
    if (!v) return;
    v.play().catch(() => {});
  }

  /* ── Boot ────────────────────────────────────────────────── */
  function init() {
    initGrain();
    initCursor();
    initProgress();
    initNav();
    initKinetic();
    initReveals();
    initParallax();
    initMagnetic();
    initCountdown();
    initGalleryPin();
    initTimeline();
    initHeroVideo();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
