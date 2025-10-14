# MovieFlix - Catálogo de Películas y Series

Una aplicación web moderna para explorar películas y series, construida con **Vanilla JavaScript** (HTML/CSS/JS puro).

## 🎬 Características

- **SPA (Single Page Application)** con navegación fluida
- **Diseño responsive** que se adapta a todos los dispositivos
- **Interfaz moderna** con Tailwind CSS
- **Página de detalles** con tabs interactivos
- **Sistema de búsqueda y filtros**
- **Sección de comentarios**
- **Recomendaciones personalizadas**

## 🚀 Cómo ejecutar la aplicación

### Opción 1: Servidor HTTP simple (Recomendado)

```bash
# Usando Python 3
python -m http.server 8000

# Usando Python 2
python -m SimpleHTTPServer 8000

# Usando Node.js (si tienes http-server instalado)
npx http-server

# Usando PHP
php -S localhost:8000
```

Luego abre tu navegador en: `http://localhost:8000`

### Opción 2: Abrir directamente

Simplemente abre el archivo `index.html` en tu navegador web.

## 📁 Estructura del proyecto

```
MovieFlix/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos personalizados
├── js/
│   ├── main.js             # Router SPA y lógica principal
│   ├── components.js       # Funciones de renderizado
│   └── data.js             # Datos de películas y series
├── public/                 # Recursos estáticos
│   ├── favicon.svg
│   ├── hbo-max-logo.svg
│   └── prime-video-logo.svg
└── README.md
```

## 🛠️ Tecnologías utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados y animaciones
- **JavaScript ES6+** - Lógica de la aplicación
- **Tailwind CSS** - Framework de utilidades CSS (vía CDN)
- **Google Fonts** - Tipografías (Poppins, Lato)

## 🎨 Características de diseño

- **Tema oscuro** con colores personalizados
- **Animaciones suaves** y transiciones
- **Efectos hover** interactivos
- **Scrollbar personalizado**
- **Responsive design** para móviles y tablets
- **Accesibilidad** mejorada

## 🔧 Funcionalidades

### Navegación
- Router SPA con hash-based navigation (`#/`, `#/detail/1`)
- Navegación fluida sin recarga de página
- Manejo de rutas 404

### Página principal
- Grid responsive de películas y series
- Filtros de búsqueda por género y tipo
- Barra de búsqueda funcional

### Página de detalles
- Información completa de la película/serie
- Tabs interactivos (Sinopsis, Análisis, Detalles técnicos)
- Sección de reparto con fotos
- Comentarios de usuarios
- Recomendaciones relacionadas

## 🌐 Compatibilidad

- **Navegadores modernos** (Chrome, Firefox, Safari, Edge)
- **Dispositivos móviles** (iOS, Android)
- **Tablets** y pantallas táctiles
- **Accesibilidad** mejorada para lectores de pantalla

## 📱 Responsive Design

La aplicación se adapta perfectamente a:
- **Móviles** (320px+)
- **Tablets** (768px+)
- **Desktop** (1024px+)
- **Pantallas grandes** (1440px+)

## 🎯 Próximas mejoras

- [ ] Implementar funcionalidad de búsqueda real
- [ ] Añadir más filtros (año, rating, etc.)
- [ ] Sistema de favoritos
- [ ] Modo offline con Service Workers
- [ ] Integración con APIs de películas reales

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Desarrollado por

Desarrollado con ❤️ para los amantes del cine.

---

**Nota**: Esta aplicación fue convertida de React/TypeScript a Vanilla JavaScript para demostrar las capacidades del desarrollo web puro sin frameworks.