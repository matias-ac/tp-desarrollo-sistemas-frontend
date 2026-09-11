# TP Integrador - Desarrollo de Sistemas Web Front-End

Landing page para **K&R Club** (Kettlebell & Run Club), un centro de entrenamiento funcional que combina clases de kettlebell (pesas rusas) y running técnico. Proyecto académico de la materia Desarrollo de Sistemas Web Front-End.

## Tecnologías utilizadas

| Categoría | Tecnología |
|---|---|
| Lenguaje | HTML5 (semántico), CSS3, JavaScript (ES6+) |
| Fuentes | Google Fonts (Archivo Narrow, Inter) |
| Metodología CSS | BEM (Block Element Modifier) |
| Diseño responsive | Media Queries (768px, 480px) |
| Servidor de desarrollo | live-server (via Makefile) |
| Testing | Node.js (script.test.js) |

## Estructura del proyecto

```
tp-integrador/
├── index.html          # Página principal (single-page)
├── style.css           # Estilos CSS con breakpoints responsive
├── script.js           # JavaScript: menú, generador de WOD, validación de formularios
├── Makefile            # Tareas: servidor, IP local, tests unitarios
├── uso_ia.txt          # Declaración de uso de IA (requisito académico)
└── img/                # Assets de imágenes (íconos, productos, fondo hero)
```

## Secciones de la página

### Navegación
- Barra de navegación fija con logo y enlaces: Inicio, Clases, Horarios, Tienda, Blog
- Botón "Unirse" con llamado a la acción
- Menú hamburguesa animado para dispositivos móviles y tablets (se activa a 768px)

### Hero
- Sección principal con imagen de fondo y frase: "Forja tu potencia, domina el asfalto"
- Dos botones de llamado a la acción

### Clases
- Tres tarjetas de programas: Kettlebell Flow, Running Técnico, Hybrid Training

### Horarios
- Tabla semanal con horarios de lunes a sábado (7:00 a 22:00)

### Tienda
- Grid de 6 productos (remeras, kettlebells, botellas, etc.)
- Botón de contacto por WhatsApp

### Blog
- Tres artículos: técnica de carrera, kettlebell swing, nutrición peri-entrenamiento

### Rutinas
- Calendario semanal de entrenamientos (lunes a viernes)
- **Generador de WOD** (Workout of the Day): 6 rutinas predefinidas que se seleccionan aleatoriamente

### Contacto
- Formulario con validación en JavaScript (nombre, email, objetivo)
- Validación de campos requeridos, formato de email y longitud de texto

### Footer
- Links a redes sociales: YouTube, WhatsApp, Instagram

## Cómo ejecutar el proyecto

### Requisitos previos
- Node.js instalado
- `live-server` instalado globalmente:
  ```bash
  npm install -g live-server
  ```

### Opción 1: Usar el Makefile (recomendado)
```bash
make server          # Inicia live-server en 0.0.0.0 (accesible en la red local)
make get-ip          # Muestra las IPs de la red local (útil para probar en celular)
make test-unit       # Ejecuta los tests unitarios (node script.test.js)
```

### Opción 2: Manual
```bash
live-server          # Sirve index.html con recarga automática
```

### Opción 3: Abrir directamente
Abrir `index.html` en un navegador (sin servidor de desarrollo).

## Diseño

- **Tema oscuro** con color de acento `#ff5722` (naranja-rojo)
- Fondos oscuros (`#121212`, `#0e0e0e`) con textos cálidos (`#ffdcb5`, `#ffb5a0`)
- **Responsive**: tres breakpoints - desktop (por defecto), tablet (max-width: 768px), mobile (max-width: 480px)

## Convención de nombres CSS (BEM)

Se utiliza la metodología **BEM** para nombrar las clases CSS:

- **Bloque** (`.componente`): el contenedor principal (ej. `.tarjeta`, `.menu`)
- **Elemento** (`.componente__elemento`): un hijo dentro del contenedor (ej. `.tarjeta__titulo`)
- **Modificador** (`.componente--modificador`): una variante de estilo o estado (ej. `.tarjeta--destacada`)
