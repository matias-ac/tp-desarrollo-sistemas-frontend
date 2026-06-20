# TP Integrador - Desarrollo de Sistemas Web Front-End

## Idea del proyecto

- el desarrollo será una landing page con navegación interna, con uso de HTML semántico y distintas secciones
- contendrá un menú de navegación, convertible a menú hamburguesa para dispositivos móviles
- la temática del TP es para un centro de entrenamiento funcional con kettlebells (pesas rusas) y clases de running
- las secciones que incluye son:
  - horarios de las clases
  - fotos de cómo son las clases
  - sección tipo blog para mostrar artículos sobre fitness, enseñar ejercicios (ej.: explicar el kettlebell swing) y tips de salud y alimentación saludable
  - sección para mostrar rutinas con kettlebell y de running
  - sección mostrando la ubicación con un mapa
  - formulario de contacto

## Convención de nombres para CSS

- se usará BEM

BEM divide los nombres de las clases en tres partes:

- Bloque (.componente): el contenedor principal (ej. .tarjeta, .menu, .formulario)
- Elemento (.componente__elemento): es un elemento dentro del contenedor principal y que no está suelto por fuera (se usa doble guión bajo __)(ej. .tarjeta__titulo, .tarjeta__boton)
- Modificador (.componente--modificador): es una variante de estado o estilo de un elemento (se usa doble guión medio --) (ej. .tarjeta--destacada, .boton--error)
