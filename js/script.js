// fade-in animation
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.overview, .about, .works, .work-panel, .skills, .contact, .line-divider').forEach(el => {
    observer.observe(el);
  });
});

// responsive class toggle
function updateResponsiveClass() {
  const elements = [
    '.lander', '.title', '.comment', '.line-divider', '.about-wrapper',
    '.overview', '.overview-text', '.about', '.about-text',
    '.works', '.work-panel', '.skills', '.contact'
  ];

  elements.forEach(selector => {
    const el = document.querySelector(selector);
    if (!el) return;
    if (window.innerWidth < 1200) {
      el.classList.add('small-screen');
    } else {
      el.classList.remove('small-screen');
    }
  });

  console.log(window.innerWidth < 1200 ? 'small-screen enabled' : 'small-screen disabled');
}
window.addEventListener('resize', updateResponsiveClass);
document.addEventListener('DOMContentLoaded', updateResponsiveClass);

// twemoji
document.addEventListener("DOMContentLoaded", () => {
  twemoji.parse(document.body);
});

// lenis scroll
const lenis = new Lenis({ lerp: 0.06, smooth: true });
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  const html = document.documentElement;
  const body = document.body;
  const scroller = document.scrollingElement || html || body;

  lenis.stop();
  lenis.scrollTo(0, { immediate: true });
  scroller.scrollTop = 0;
  window.scrollTo(0, 0);

  html.style.position = 'fixed';
  html.style.top = '0';
  html.style.left = '0';
  html.style.width = '100%';
  html.style.height = '100%';
  html.style.overflow = 'hidden';
  body.style.overflow = 'hidden';

  setTimeout(() => {
    html.style.position = '';
    html.style.top = '';
    html.style.left = '';
    html.style.width = '';
    html.style.height = '';
    html.style.overflow = '';
    body.style.overflow = '';
    lenis.start();
  }, 3000);
});

async function runSecretCode() {
  const userCode = prompt("Enter the secret code:");
  const response = await fetch("/trigger", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_code: userCode })
  });

  const result = await response.text();
  alert(result);
}
