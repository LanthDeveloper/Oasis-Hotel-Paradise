const navbarToggler = document.querySelector('.navbar-toggler');
const htmlElement = document.documentElement;

navbarToggler.addEventListener('click', () => {
  const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
  htmlElement.style.overflow = isExpanded ? 'hidden' : 'auto';
});

// Obtener todos los enlaces de navegación
const navLinks = document.querySelectorAll('.nav-link');

// Agregar un evento de clic a cada enlace
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Obtener el elemento HTML
    const htmlElement = document.documentElement;

    // Establecer overflow: auto en el elemento HTML
    htmlElement.style.overflow = 'auto';

    // Obtener el elemento del menú de navegación
    const navCollapse = document.getElementById('navbarNavAltMarkup');

    // Verificar si el menú está expandido
    const isNavExpanded = navCollapse.classList.contains('show');

    // Si el menú está expandido, ocultarlo
    if (isNavExpanded) {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const bsCollapse = new bootstrap.Collapse(navCollapse, { toggle: false });
      bsCollapse.hide();
      navbarToggler.setAttribute('aria-expanded', 'false');
    }
  });
});