# Kaisen Empresarial - Sitio Web Corporativo

## 1. Descripción
Este repositorio contiene el código fuente del sitio web corporativo de **Kaisen Empresarial**.
El sitio es una Landing Page moderna, responsiva y optimizada, diseñada para presentar los servicios de la empresa, mostrar clientes destacados y facilitar el contacto a través de un formulario seguro y botones de acción directa (WhatsApp).

## 2. Tecnologías Utilizadas

### Frontend
*   **HTML5:** Estructura semántica del sitio.
*   **CSS3:** Estilos personalizados (`dist/css/style.css`) y normalización (`dist/css/normalize.css`).
*   **Bootstrap 5:** Framework CSS para el sistema de rejillas, componentes responsivos (Navbar, Cards, Modales) y utilidades.
*   **JavaScript (ES6):** Lógica de interacción (`dist/js/main.js`).
*   **ScrollReveal.js:** Biblioteca para animaciones de aparición al hacer scroll.
*   **Bootstrap Icons:** Iconografía vectorial.
*   **Google Fonts:** Tipografía "Poppins".

### Backend & Integraciones
*   **PHP:** Procesamiento del formulario de contacto (`enviar.php`) y envío de correos electrónicos.
*   **Google reCAPTCHA v2:** Protección contra spam en el formulario de contacto.
*   **Google Maps Embed:** Visualización de la ubicación de la empresa.

## 3. Estructura del Proyecto

```text
/
├── index.html              # Página principal
├── enviar.php              # Script PHP para procesar el formulario
├── images/                 # Imágenes y logotipos (Referenciados en HTML/CSS)
├── dist/
│   ├── css/
│   │   ├── style.css       # Estilos personalizados principales
│   │   └── normalize.css   # Reset CSS
│   └── js/
│       ├── main.js         # Lógica del navbar y configuración de ScrollReveal
│       └── scrollreveal.min.js # Librería de animaciones
└── README.md               # Documentación del proyecto
```

## 4. Funcionalidades Clave

1.  **Navegación Dinámica:** Barra de navegación que cambia de estilo (transparente a sólido con desenfoque) al hacer scroll.
2.  **Slider de Clientes:** Carrusel infinito (CSS Animation) para mostrar logotipos de clientes.
3.  **Formulario de Contacto Seguro:**
    *   Validación de campos requeridos en HTML5.
    *   Validación de reCAPTCHA v2 (Google) en el cliente y verificación en el servidor (`enviar.php`).
    *   Envío de correos mediante la función `mail()` de PHP.
4.  **Animaciones:** Efectos de entrada (Fade Up, Left, Right) en secciones clave utilizando ScrollReveal.
5.  **Botón Flotante:** Acceso directo a WhatsApp fijo en la esquina inferior.

## 5. Instalación y Despliegue

### Requisitos Previos
*   Un servidor web (Apache/Nginx) con soporte para **PHP**.
*   Para desarrollo local: XAMPP, MAMP, Laragon o similar.

### Pasos
1.  **Clonar el repositorio** o descargar los archivos en la carpeta pública de tu servidor (`htdocs`, `www`, `public_html`).
2.  **Configurar reCAPTCHA:**
    *   Abre `index.html` y busca el `div` con la clase `g-recaptcha`. Reemplaza `data-sitekey` con tu clave de sitio pública.
    *   Abre `enviar.php` y reemplaza la variable `$secret` con tu clave secreta de Google reCAPTCHA.
3.  **Configurar Correo:**
    *   En `enviar.php`, modifica la variable `$to` con la dirección de correo donde deseas recibir los mensajes del formulario.
    *   *Nota:* Para que `mail()` funcione en local, necesitas configurar un servidor SMTP en tu `php.ini` o usar una librería como PHPMailer si vas a producción en un entorno que bloquee la función nativa `mail()`.

## 6. Personalización

*   **Colores:** Los colores principales (como el azul `#0D2242`) están definidos directamente en `dist/css/style.css`. Busca `.btn-kaisen`, `.scroll-header .nav-link`, etc.
*   **Imágenes:** Reemplaza los archivos en la carpeta `images/` manteniendo los nombres o actualiza las rutas en el `index.html`.
*   **Textos:** Todo el contenido textual se encuentra directamente en `index.html`.

## 7. Créditos
Diseñado y desarrollado para Kaisen Empresarial por Crisanta Dalila en Agencia Creativa Luminel