const header = document.getElementById('main-header');

// Mobile menu toggle with accessibility updates
const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('nav-menu');

if(hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
    document.body.classList.toggle("menu-open");
  });

  // Close menu when clicking a link (mobile)
  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove("menu-open");
    });
  });
}
