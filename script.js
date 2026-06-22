const hamburguesa = document.querySelector('.menu-nav__hamburguesa');
const lista = document.querySelector('.menu-nav__lista');

hamburguesa.addEventListener('click', () => {
  lista.classList.toggle('menu-nav__lista--abierto');
});
