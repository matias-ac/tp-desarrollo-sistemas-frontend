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
const rutinas = [
  "AMRAP 20': 10 x KB Swings, 10 x KB Goblet Squats, 200mts x Sprint",
  "2Kb EMOM 15': 2 x Clean + 1 Press + 3 x Squat",
  "Kb Complex x 7 sets (each arm): 6 x Row, 5 x Swing, 4 x Push Press",
  "King Kong Complex + Squat: 5/5 x Kb Gorilla Row, 5/5 x Kb Clean + Squat",
  "Gimli Complex x 7 sets: 5 x Kb Swings + 4 x Kb Deadlift High Pull + 3 x Kb Goblet Squat",
  "Jordan: 100 x Kb Swings + 100 x Push Ups + 100 x Air Squats + 100 x Sit Ups"
];

const ejerciciosContainer = document.querySelector('.rutina__wod-ejercicios');
const btnGenerarRutina = document.querySelector('.rutina__wod-btn');

const asignarRutinaAleatoria = () => {
  const indice = Math.floor(Math.random() * rutinas.length);
  ejerciciosContainer.textContent = rutinas[indice];
};

btnGenerarRutina.addEventListener('click', asignarRutinaAleatoria);


// --- Validación del Formulario ---
const formulario = document.querySelector('.contacto__form');
const inputNombre = formulario.querySelector('#nombre');
const inputEmail = formulario.querySelector('#email');
const textareaMensaje = formulario.querySelector('#mensaje');
const mensajeValidacion = formulario.querySelector('.contacto__validacion');
const btnSubmit = formulario.querySelector('.contacto__btn');

const mostrarMensaje = (tipo, mensaje) => {
  mensajeValidacion.style.display = 'block';
  if (tipo === 'error') {
    mensajeValidacion.style.color = 'red';
  } else {
    mensajeValidacion.style.color = 'green';
  }

  mensajeValidacion.textContent = mensaje;
  formulario.insertBefore(mensajeValidacion, btnSubmit);
};

const validarCamposCompletos = (nombre, email, mensaje) => {
  if (!nombre || !email || !mensaje) {
    mostrarMensaje('error', 'Por favor completá todos los campos.');
    return false;
  }
  return true;
};

const validarNombreIngresado = (nombre) => {
  const nombreValidoPattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/;
  if (!nombreValidoPattern.test(nombre)) {
    mostrarMensaje('error', 'El nombre solo puede contener letras.');
    return false;
  }
  if (nombre.length < 2 || nombre.length > 100) {
    mostrarMensaje('error', 'El nombre debe tener entre 2 y 100 caracteres.');
    return false;
  }
  return true;
};

const validarEmailIngresado = (email) => {
  const emailValidoPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValidoPattern.test(email)) {
    mostrarMensaje('error', 'Ingresá un email válido.');
    return false;
  }
  return true;
};

const validarMensajeIngresado = (mensaje) => {
  if (mensaje.length < 5 || mensaje.length > 500) {
    mostrarMensaje('error', 'El mensaje debe tener entre 5 y 500 caracteres.');
    return false;
  }
  return true;
};

const procesarFormulario = () => {
  event.preventDefault();
  mensajeValidacion.style.display = 'none';

  const nombre = inputNombre.value.trim();
  const email = inputEmail.value.trim();
  const mensaje = textareaMensaje.value.trim();

  if (!validarCamposCompletos(nombre, email, mensaje)) return;
  if (!validarNombreIngresado(nombre)) return;
  if (!validarEmailIngresado(email)) return;
  if (!validarMensajeIngresado(mensaje)) return;

  mostrarMensaje('confirmación', '¡Gracias por escribirnos! Te contactaremos a la brevedad.');
};

formulario.addEventListener('submit', procesarFormulario);
