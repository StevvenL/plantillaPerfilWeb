// Toggling Menu
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-menu');

if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('show'));
}

// Cerrar menú si la pantalla se redimensiona
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    nav.classList.remove('show');
  }
});

// Toggling Active Link
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  if (!this.classList.contains('active')) {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
  }
  nav.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Reveal
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
  });

  sr.reveal('.home-title', {});
  sr.reveal('.button', { delay: 200 });
  sr.reveal('.home-img', { delay: 400 });
  sr.reveal('.home-social', { delay: 400 });

  sr.reveal('.about-img', {});
  sr.reveal('.about-subtitle', { delay: 200 });
  sr.reveal('.about-text', { delay: 400 });

  sr.reveal('.skills-subtitle', { delay: 100 });
  sr.reveal('.skills-text', { delay: 150 });
  sr.reveal('.skills-data', { interval: 200 });
  sr.reveal('.skills-img', { delay: 400 });

  sr.reveal('.work-img', { interval: 200 });

  sr.reveal('.contact-input', { interval: 200 });
} else {
  console.warn("ScrollReveal no está definido. Asegúrate de incluir la librería.");
}
