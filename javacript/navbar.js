const navbarToggler = document.querySelector('.navbar-toggler');
const htmlElement = document.documentElement;

navbarToggler.addEventListener('click', () => {
  const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
  htmlElement.style.overflow = isExpanded ? 'hidden' : 'auto';
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {

    const htmlElement = document.documentElement;

    htmlElement.style.overflow = 'auto';

    const navCollapse = document.getElementById('navbarNavAltMarkup');

    const isNavExpanded = navCollapse.classList.contains('show');

    if (isNavExpanded) {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const bsCollapse = new bootstrap.Collapse(navCollapse, { toggle: false });
      bsCollapse.hide();
      navbarToggler.setAttribute('aria-expanded', 'false');
    }
  });
});