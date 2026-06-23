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


// --- Validación del Formulario ---
const formulario = document.querySelector('.contacto__form');
const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const textareaMensaje = document.querySelector('#mensaje');

const mensajeError = document.createElement('p');
mensajeError.style.color = '#ff5722';
mensajeError.style.fontFamily = "'Archivo Narrow', sans-serif";
mensajeError.style.fontSize = '0.9rem';
mensajeError.style.margin = '0';
formulario.insertBefore(mensajeError, formulario.querySelector('.contacto__btn'));

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  mensajeError.textContent = '';

  const nombre = inputNombre.value.trim();
  const email = inputEmail.value.trim();
  const mensaje = textareaMensaje.value.trim();

  if (!nombre || !email || !mensaje) {
    mensajeError.textContent = 'Completá todos los campos.';
    return;
  }

  if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/.test(nombre)) {
    mensajeError.textContent = 'El nombre solo puede contener letras.';
    return;
  }

  if (nombre.length < 2 || nombre.length > 100) {
    mensajeError.textContent = 'El nombre debe tener entre 2 y 100 caracteres.';
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    mensajeError.textContent = 'Ingresá un email válido.';
    return;
  }

  if (mensaje.length < 5 || mensaje.length > 500) {
    mensajeError.textContent = 'El mensaje debe tener entre 5 y 500 caracteres.';
    return;
  }

  mensajeError.style.color = '#4caf50';
  mensajeError.textContent = 'Solicitud enviada correctamente. Te contactaremos pronto.';
});
