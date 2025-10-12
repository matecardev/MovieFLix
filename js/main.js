import { renderHeader, renderFooter, renderHomePage, renderDetailPage } from './components.js';

/**
 * Router principal de la aplicación SPA
 */
class Router {
    constructor() {
        this.routes = {
            '/': renderHomePage,
            '/detail/:id': this.renderDetailPage.bind(this)
        };
        this.init();
    }

    /**
     * Inicializa el router
     */
    init() {
        // Renderizar header y footer una sola vez
        renderHeader();
        renderFooter();
        
        // Manejar navegación inicial
        this.handleRoute();
        
        // Escuchar cambios en la URL
        window.addEventListener('hashchange', () => this.handleRoute());
        
        // Escuchar clics en enlaces internos
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#/"]');
            if (link) {
                e.preventDefault();
                const href = link.getAttribute('href');
                if (href) {
                    window.location.hash = href.substring(1);
                }
            }
        });
    }

    /**
     * Maneja el cambio de ruta
     */
    handleRoute() {
        const hash = window.location.hash.substring(1) || '/';
        const path = this.parsePath(hash);
        
        if (path.route === '/') {
            renderHomePage();
        } else if (path.route === '/detail/:id') {
            renderDetailPage(path.params.id);
        } else {
            this.render404();
        }
    }

    /**
     * Parsea la ruta y extrae parámetros
     * @param {string} path - Ruta a parsear
     * @returns {Object} - Objeto con route y params
     */
    parsePath(path) {
        if (path === '/') {
            return { route: '/', params: {} };
        }
        
        const detailMatch = path.match(/^\/detail\/(\d+)$/);
        if (detailMatch) {
            return { 
                route: '/detail/:id', 
                params: { id: detailMatch[1] } 
            };
        }
        
        return { route: path, params: {} };
    }

    /**
     * Renderiza página 404
     */
    render404() {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = `
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                <h1 class="text-4xl font-display text-text-primary">404 - Página No Encontrada</h1>
                <p class="mt-4 text-text-secondary">La página que buscas no existe.</p>
                <a href="#/" class="mt-6 inline-block px-6 py-2 bg-accent-primary text-background-primary font-bold rounded-lg hover:bg-opacity-90 transition-colors">
                    Volver al Inicio
                </a>
            </div>
        `;
    }
}

/**
 * Inicializa la aplicación cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar router
    new Router();
    
    // Configurar smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

/**
 * Maneja el estado de carga de la página
 */
window.addEventListener('load', () => {
    // Ocultar cualquier indicador de carga si existe
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }
    
    // Mostrar la aplicación
    const app = document.getElementById('app');
    if (app) {
        app.style.display = 'block';
    }
});

/**
 * Maneja errores globales de JavaScript
 */
window.addEventListener('error', (event) => {
    console.error('Error en la aplicación:', event.error);
    
    // Mostrar mensaje de error amigable al usuario
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = `
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                <h1 class="text-4xl font-display text-text-primary text-red-400">Error en la Aplicación</h1>
                <p class="mt-4 text-text-secondary">Ha ocurrido un error inesperado. Por favor, recarga la página.</p>
                <button onclick="window.location.reload()" class="mt-6 px-6 py-2 bg-accent-primary text-background-primary font-bold rounded-lg hover:bg-opacity-90 transition-colors">
                    Recargar Página
                </button>
            </div>
        `;
    }
});

/**
 * Utilidades globales para la aplicación
 */
window.MovieFlix = {
    /**
     * Navega a una ruta específica
     * @param {string} route - Ruta a navegar
     */
    navigateTo: (route) => {
        window.location.hash = route;
    },
    
    /**
     * Obtiene la ruta actual
     * @returns {string} - Ruta actual
     */
    getCurrentRoute: () => {
        return window.location.hash.substring(1) || '/';
    },
    
    /**
     * Verifica si una ruta está activa
     * @param {string} route - Ruta a verificar
     * @returns {boolean} - True si la ruta está activa
     */
    isActiveRoute: (route) => {
        const current = window.MovieFlix.getCurrentRoute();
        return current === route || current.startsWith(route + '/');
    }
};
