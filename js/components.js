import { MOVIES_DATA, ALL_DETAILS_DATA, RECOMMENDATIONS_DATA } from './data.js';

/**
 * Renderiza el header de la aplicación
 */
export function renderHeader() {
    const headerContainer = document.getElementById('header-container');
    headerContainer.innerHTML = `
        <header class="bg-background-secondary/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-border-color">
            <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                        <a href="#/" class="text-accent-primary font-display text-2xl font-bold">
                            MovieFlix
                        </a>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a href="#/" class="text-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
                            <a href="#" class="text-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium">Películas</a>
                            <a href="#" class="text-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium">Series</a>
                            <a href="#" class="text-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium">Géneros</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    `;
}

/**
 * Renderiza el footer de la aplicación
 */
export function renderFooter() {
    const footerContainer = document.getElementById('footer-container');
    footerContainer.innerHTML = `
        <footer class="bg-background-secondary border-t border-border-color mt-12">
            <div class="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-text-secondary">
                <p>&copy; ${new Date().getFullYear()} MovieFlix. Todos los derechos reservados.</p>
                <p class="text-sm mt-1">Desarrollado con pasión por el cine.</p>
            </div>
        </footer>
    `;
}

/**
 * Renderiza una tarjeta de película
 * @param {Object} movie - Objeto de película
 */
export function renderMovieCard(movie) {
    return `
        <a href="#/detail/${movie.id}" class="block group">
            <div class="bg-background-secondary rounded-lg overflow-hidden border border-border-color transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-accent-primary/10">
                <img src="${movie.posterUrl}" alt="Póster de ${movie.title}" class="w-full h-auto object-cover aspect-[2/3]" />
                <div class="p-4">
                    <h5 class="font-display text-text-primary text-lg truncate group-hover:text-accent-primary transition-colors">${movie.title}</h5>
                    <p class="text-text-secondary text-sm mt-1">${movie.year} • ${movie.type}</p>
                </div>
            </div>
        </a>
    `;
}

/**
 * Renderiza los filtros de búsqueda
 */
export function renderSearchFilters() {
    return `
        <section class="py-8">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="relative flex-grow">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Buscar películas o series..."
                            class="w-full bg-background-secondary border border-border-color rounded-md py-3 pl-10 pr-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition"
                        />
                    </div>
                    <div class="flex gap-4">
                        <div class="relative w-1/2 md:w-48">
                            <select class="w-full appearance-none bg-background-secondary border border-border-color rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary cursor-pointer">
                                <option>Género</option>
                                <option>Acción</option>
                                <option>Comedia</option>
                                <option>Drama</option>
                                <option>Ciencia Ficción</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                        <div class="relative w-1/2 md:w-48">
                            <select class="w-full appearance-none bg-background-secondary border border-border-color rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary cursor-pointer">
                                <option>Tipo</option>
                                <option>Película</option>
                                <option>Serie</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

/**
 * Renderiza la página principal
 */
export function renderHomePage() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div>
            ${renderSearchFilters()}
            <section class="pb-12">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl font-display text-text-primary mb-8">Últimos Estrenos</h2>
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                        ${MOVIES_DATA.map(movie => renderMovieCard(movie)).join('')}
                    </div>
                </div>
            </section>
        </div>
    `;
}

/**
 * Renderiza una tarjeta de actor
 * @param {Object} actor - Objeto de actor
 */
function renderActorCard(actor) {
    return `
        <div class="text-center">
            <img src="${actor.imageUrl}" alt="${actor.name}" class="w-24 h-24 rounded-full mx-auto object-cover border-2 border-border-color" />
            <h4 class="mt-2 text-text-primary font-medium">${actor.name}</h4>
            <p class="text-text-secondary text-sm">${actor.character}</p>
        </div>
    `;
}

/**
 * Renderiza una tarjeta de comentario
 * @param {Object} comment - Objeto de comentario
 */
function renderCommentCard(comment) {
    return `
        <div class="flex items-start space-x-4 p-4 bg-background-secondary rounded-lg border border-border-color">
            <img class="w-12 h-12 rounded-full object-cover" src="${comment.avatarUrl}" alt="${comment.username}" />
            <div class="flex-1">
                <div class="flex items-center justify-between">
                    <span class="font-bold text-text-primary">${comment.username}</span>
                    <span class="text-xs text-text-secondary">${comment.date}</span>
                </div>
                <p class="mt-1 text-text-primary">${comment.text}</p>
            </div>
        </div>
    `;
}

/**
 * Renderiza los tabs de la página de detalles
 * @param {string} activeTab - Tab activo
 */
function renderTabs(activeTab) {
    const tabs = [
        { id: 'synopsis', label: 'Sinopsis y Reparto' },
        { id: 'review', label: 'Análisis y Reseña' },
        { id: 'details', label: 'Detalles Técnicos' },
    ];

    return `
        <div class="border-b border-border-color mb-8">
            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                ${tabs.map(tab => `
                    <button
                        data-tab="${tab.id}"
                        class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
                        ${activeTab === tab.id
                            ? 'border-accent-primary text-accent-primary'
                            : 'border-transparent text-text-secondary hover:text-text-primary hover:border-gray-500'
                        }"
                    >
                        ${tab.label}
                    </button>
                `).join('')}
            </nav>
        </div>
    `;
}

/**
 * Renderiza el contenido de los tabs
 * @param {Object} data - Datos de la película/serie
 * @param {string} activeTab - Tab activo
 */
function renderTabContent(data, activeTab) {
    switch (activeTab) {
        case 'synopsis':
            return `
                <div>
                    <h3 class="text-2xl font-display text-text-primary mb-4">Sinopsis</h3>
                    <p class="text-text-secondary leading-loose mb-8">${data.synopsis}</p>
                    <h3 class="text-2xl font-display text-text-primary mb-6">Reparto Principal</h3>
                    ${data.cast.length > 0 ? `
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            ${data.cast.map(actor => renderActorCard(actor)).join('')}
                        </div>
                    ` : '<p class="text-text-secondary">Información de reparto no disponible.</p>'}
                </div>
            `;
        case 'review':
            return `
                <div>
                    <h3 class="text-2xl font-display text-text-primary mb-4">Reseña General</h3>
                    <p class="text-text-secondary leading-loose mb-8">${data.review.general}</p>
                    ${data.review.keyPoints.length > 0 ? `
                        <h3 class="text-2xl font-display text-text-primary mb-4">Puntos Clave</h3>
                        <ul class="space-y-3">
                            ${data.review.keyPoints.map(point => `
                                <li class="flex items-start">
                                    <span class="text-accent-primary mr-3 mt-1">★</span>
                                    <span class="text-text-secondary">${point}</span>
                                </li>
                            `).join('')}
                        </ul>
                    ` : ''}
                </div>
            `;
        case 'details':
            return `
                <div>
                    <h3 class="text-2xl font-display text-text-primary mb-4">Detalles Técnicos</h3>
                    <div class="bg-background-secondary p-6 rounded-lg border border-border-color">
                        <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                            ${Object.entries(data.technicalDetails).map(([key, value]) => `
                                <div>
                                    <dt class="text-sm font-medium text-text-secondary">${key}</dt>
                                    <dd class="mt-1 text-text-primary">${value}</dd>
                                </div>
                            `).join('')}
                        </dl>
                    </div>
                </div>
            `;
        default:
            return '';
    }
}

/**
 * Renderiza la página de detalles
 * @param {number} id - ID de la película/serie
 */
export function renderDetailPage(id) {
    const data = ALL_DETAILS_DATA.find(d => d.id === parseInt(id, 10));
    
    if (!data) {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = `
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                <h1 class="text-4xl font-display text-text-primary">404 - Contenido No Encontrado</h1>
                <p class="mt-4 text-text-secondary">La película o serie que buscas no existe o no tiene una página de detalles.</p>
            </div>
        `;
        return;
    }

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- Hero Section -->
            <section class="mb-12">
                <div class="flex flex-col md:flex-row gap-8">
                    <div class="md:w-1/3 flex-shrink-0">
                        <img src="${data.posterUrl}" alt="Póster de ${data.title}" class="w-full rounded-lg shadow-lg" />
                    </div>
                    <div class="md:w-2/3">
                        <h1 class="text-4xl lg:text-5xl font-display text-text-primary">${data.title}</h1>
                        <h2 class="text-2xl text-text-secondary font-display mt-1">${data.originalTitle}</h2>
                        <div class="flex items-center space-x-3 text-text-secondary mt-4">
                            <span>${data.year}</span>
                            ${data.seasons > 0 ? `<span>•</span><span>${data.seasons} Temporadas</span>` : ''}
                            <span>•</span>
                            <span class="border border-text-secondary px-2 py-0.5 rounded text-sm">${data.rating}</span>
                        </div>
                        ${data.imdb > 0 ? `
                            <div class="flex items-center space-x-2 mt-4">
                                <span class="flex items-center bg-yellow-500 text-black text-sm font-bold px-3 py-1 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span class="ml-1">IMDb ${data.imdb}</span>
                                </span>
                            </div>
                        ` : ''}
                        ${data.platforms.length > 0 ? `
                            <div class="mt-4">
                                <p class="text-text-secondary mb-2">Disponible en:</p>
                                <div class="flex items-center space-x-4">
                                    ${data.platforms.map(platform => `
                                        <img key="${platform.name}" src="${platform.logoUrl}" alt="${platform.name} logo" class="h-8 object-contain" title="${platform.name}" />
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                        <div class="mt-6">
                            ${data.genres.map(genre => `
                                <span class="inline-block border border-accent-primary text-accent-primary text-xs font-semibold mr-2 mb-2 px-2.5 py-1 rounded-full">${genre}</span>
                            `).join('')}
                        </div>
                        <p class="mt-6 text-lg text-text-secondary leading-relaxed">${data.description}</p>
                    </div>
                </div>
            </section>

            <!-- Tabs Section -->
            <section class="mb-12">
                <div id="tabs-container">
                    ${renderTabs('synopsis')}
                    <div id="tab-content">
                        ${renderTabContent(data, 'synopsis')}
                    </div>
                </div>
            </section>
            
            <!-- Comments Section -->
            <section class="mb-12">
                <h2 class="text-3xl font-display text-text-primary mb-6">Comentarios</h2>
                <div class="mb-8">
                    <form>
                        <textarea 
                            rows="4" 
                            class="w-full p-4 bg-background-secondary border border-border-color rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary" 
                            placeholder="Escribe tu comentario..."
                        ></textarea>
                        <button type="submit" class="mt-4 px-6 py-2 bg-accent-primary text-background-primary font-bold rounded-lg hover:bg-opacity-90 transition-colors">
                            Publicar Comentario
                        </button>
                    </form>
                </div>
                <div class="space-y-4">
                    ${data.comments.length > 0 ? 
                        data.comments.map(comment => renderCommentCard(comment)).join('') : 
                        '<p class="text-text-secondary">No hay comentarios aún. ¡Sé el primero!</p>'
                    }
                </div>
            </section>

            <!-- Recommendations Section -->
            <section>
                <h2 class="text-3xl font-display text-text-primary mb-8">También te podría gustar</h2>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                    ${RECOMMENDATIONS_DATA.map(movie => renderMovieCard(movie)).join('')}
                </div>
            </section>
        </div>
    `;

    // Agregar event listeners para los tabs
    setupTabListeners(data);
}

/**
 * Configura los event listeners para los tabs
 * @param {Object} data - Datos de la película/serie
 */
function setupTabListeners(data) {
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabContent = document.getElementById('tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Actualizar botones activos
            tabButtons.forEach(btn => {
                btn.classList.remove('border-accent-primary', 'text-accent-primary');
                btn.classList.add('border-transparent', 'text-text-secondary');
            });
            button.classList.remove('border-transparent', 'text-text-secondary');
            button.classList.add('border-accent-primary', 'text-accent-primary');
            
            // Actualizar contenido
            tabContent.innerHTML = renderTabContent(data, tabId);
        });
    });
}
