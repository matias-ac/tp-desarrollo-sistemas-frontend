// --- Menú Hamburguesa ---
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


// --- Generador de Rutinas ---
const ejerciciosContainer = document.querySelector('.rutina__wod-ejercicios');
const btnGenerarRutina = document.querySelector('.rutina__wod-btn');
const rutinas = [
  "AMRAP 20': 10 x KB Swings, 10 x KB Goblet Squats, 200mts x Sprint",
  "2Kb EMOM 15': 2 x Clean + 1 Press + 3 x Squat",
  "Kb Complex x 7 sets (each arm): 6 x Row, 5 x Swing, 4 x Push Press",
  "King Kong Complex + Squat: 5/5 x Kb Gorilla Row, 5/5 x Kb Clean + Squat",
  "Gimli Complex x 7 sets: 5 x Kb Swings + 4 x Kb Deadlift High Pull + 3 x Kb Goblet Squat",
  "Jordan: 100 x Kb Swings + 100 x Push Ups + 100 x Air Squats + 100 x Sit Ups"
];

btnGenerarRutina.addEventListener('click', () => {
  const indice = Math.floor(Math.random() * rutinas.length);
  ejerciciosContainer.textContent = rutinas[indice];
})
