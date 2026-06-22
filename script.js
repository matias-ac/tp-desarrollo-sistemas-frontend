const hamburguesa = document.querySelector('.menu-nav__hamburguesa');
const lista = document.querySelector('.menu-nav__lista');
const enlaces = document.querySelectorAll('.menu-nav__enlace, .menu-nav__btn-unirse');

function toggleMenu() {
  lista.classList.toggle('menu-nav__lista--abierto');
  hamburguesa.classList.toggle('menu-nav__hamburguesa--abierto');
}

hamburguesa.addEventListener('click', toggleMenu);

enlaces.forEach(enlace => {
  enlace.addEventListener('click', () => {
    if (lista.classList.contains('menu-nav__lista--abierto')) {
      toggleMenu();
    }
  });
});
