import { MOVIES_DATA, ALL_DETAILS_DATA, RECOMMENDATIONS_DATA } from './data.js';

/**
 * Renderiza el header de la aplicación
 */
export function renderHeader() {
    const headerContainer = document.getElementById('header-container');
    headerContainer.innerHTML = '';
    const tpl = document.getElementById('tpl-header');
    if (tpl) {
        const clone = tpl.content.cloneNode(true);
        headerContainer.appendChild(clone);
    }
}

/**
 * Renderiza el footer de la aplicación
 */
export function renderFooter() {
    const footerContainer = document.getElementById('footer-container');
    footerContainer.innerHTML = '';
    const tpl = document.getElementById('tpl-footer');
    if (tpl) {
        const clone = tpl.content.cloneNode(true);
        // set the year
        const yearSpan = clone.querySelector('[data-year] span');
        if (yearSpan) yearSpan.textContent = new Date().getFullYear();
        footerContainer.appendChild(clone);
    }
}

/**
 * Renderiza una tarjeta de película
 * @param {Object} movie - Objeto de película
 */
export function renderMovieCard(movie) {
    const tpl = document.getElementById('tpl-movie-card');
    if (!tpl) {
        // fallback to string if template not present
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

    const clone = tpl.content.cloneNode(true);
    const anchor = clone.querySelector('a');
    if (anchor) anchor.href = `#/detail/${movie.id}`;
    const img = clone.querySelector('[data-movie-poster]');
    if (img) {
        img.src = movie.posterUrl || '';
        img.alt = `Póster de ${movie.title}`;
    }
    const title = clone.querySelector('[data-movie-title]');
    if (title) title.textContent = movie.title;
    const meta = clone.querySelector('[data-movie-meta]');
    if (meta) meta.textContent = `${movie.year} • ${movie.type}`;

    return clone;
}

/**
 * Renderiza los filtros de búsqueda
 */
export function renderSearchFilters() {
    const tpl = document.getElementById('tpl-search-filters');
    if (!tpl) return null;
    return tpl.content.cloneNode(true);
}

/**
 * Renderiza la página principal
 */
export function renderHomePage() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    // Search filters
    const filtersNode = renderSearchFilters();
    if (filtersNode) mainContent.appendChild(filtersNode);

    // Section wrapper
    const section = document.createElement('section');
    section.className = 'pb-12';
    const container = document.createElement('div');
    container.className = 'container mx-auto px-4 sm:px-6 lg:px-8';
    const h2 = document.createElement('h2');
    h2.className = 'text-3xl font-display text-text-primary mb-8';
    h2.textContent = 'Últimos Estrenos';
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6';

    MOVIES_DATA.forEach(movie => {
        const card = renderMovieCard(movie);
        if (typeof card === 'string') {
            // fallback: append as HTML
            const wrapper = document.createElement('div');
            wrapper.innerHTML = card;
            // append children of wrapper
            Array.from(wrapper.children).forEach(c => grid.appendChild(c));
        } else {
            grid.appendChild(card);
        }
    });

    container.appendChild(h2);
    container.appendChild(grid);
    section.appendChild(container);
    mainContent.appendChild(section);
}

/**
 * Renderiza una tarjeta de actor
 * @param {Object} actor - Objeto de actor
 */
function renderActorCard(actor) {
    const tpl = document.getElementById('tpl-actor-card');
    if (!tpl) {
        return `
            <div class="text-center">
                <img src="${actor.imageUrl}" alt="${actor.name}" class="w-24 h-24 rounded-full mx-auto object-cover border-2 border-border-color" />
                <h4 class="mt-2 text-text-primary font-medium">${actor.name}</h4>
                <p class="text-text-secondary text-sm">${actor.character}</p>
            </div>
        `;
    }

    const clone = tpl.content.cloneNode(true);
    const img = clone.querySelector('[data-actor-image]');
    if (img) {
        img.src = actor.imageUrl || '';
        img.alt = actor.name;
    }
    const name = clone.querySelector('[data-actor-name]');
    if (name) name.textContent = actor.name;
    const character = clone.querySelector('[data-actor-character]');
    if (character) character.textContent = actor.character;

    return clone;
}

/**
 * Renderiza una tarjeta de comentario
 * @param {Object} comment - Objeto de comentario
 */
function renderCommentCard(comment) {
    const tpl = document.getElementById('tpl-comment-card');
    if (!tpl) {
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

    const clone = tpl.content.cloneNode(true);
    const avatar = clone.querySelector('[data-comment-avatar]');
    if (avatar) {
        avatar.src = comment.avatarUrl || '';
        avatar.alt = comment.username;
    }
    const username = clone.querySelector('[data-comment-username]');
    if (username) username.textContent = comment.username;
    const date = clone.querySelector('[data-comment-date]');
    if (date) date.textContent = comment.date;
    const text = clone.querySelector('[data-comment-text]');
    if (text) text.textContent = comment.text;

    return clone;
}

/**
 * Renderiza los tabs de la página de detalles
 * @param {string} activeTab - Tab activo
 */
function renderTabs(activeTab) {
    const tpl = document.getElementById('tpl-tabs');
    if (!tpl) return '';
    const clone = tpl.content.cloneNode(true);
    // adjust active class
    const buttons = clone.querySelectorAll('[data-tab]');
    buttons.forEach(btn => {
        const id = btn.getAttribute('data-tab');
        if (id === activeTab) {
            btn.classList.remove('border-transparent', 'text-text-secondary');
            btn.classList.add('border-accent-primary', 'text-accent-primary');
        } else {
            btn.classList.remove('border-accent-primary', 'text-accent-primary');
            btn.classList.add('border-transparent', 'text-text-secondary');
        }
    });

    return clone;
}

/**
 * Renderiza el contenido de los tabs
 * @param {Object} data - Datos de la película/serie
 * @param {string} activeTab - Tab activo
 */
function renderTabContent(data, activeTab) {
    const fragment = document.createDocumentFragment();
    switch (activeTab) {
        case 'synopsis': {
            const wrapper = document.createElement('div');
            const h3 = document.createElement('h3');
            h3.className = 'text-2xl font-display text-text-primary mb-4';
            h3.textContent = 'Sinopsis';
            const p = document.createElement('p');
            p.className = 'text-text-secondary leading-loose mb-8';
            p.textContent = data.synopsis;
            wrapper.appendChild(h3);
            wrapper.appendChild(p);

            const h3c = document.createElement('h3');
            h3c.className = 'text-2xl font-display text-text-primary mb-6';
            h3c.textContent = 'Reparto Principal';
            wrapper.appendChild(h3c);

            if (data.cast.length > 0) {
                const grid = document.createElement('div');
                grid.className = 'grid grid-cols-2 sm:grid-cols-4 gap-6';
                data.cast.forEach(actor => {
                    const node = renderActorCard(actor);
                    if (typeof node === 'string') {
                        const tmp = document.createElement('div');
                        tmp.innerHTML = node;
                        Array.from(tmp.children).forEach(c => grid.appendChild(c));
                    } else {
                        grid.appendChild(node);
                    }
                });
                wrapper.appendChild(grid);
            } else {
                const noInfo = document.createElement('p');
                noInfo.className = 'text-text-secondary';
                noInfo.textContent = 'Información de reparto no disponible.';
                wrapper.appendChild(noInfo);
            }

            fragment.appendChild(wrapper);
            break;
        }
        case 'review': {
            const wrapper = document.createElement('div');
            const h3 = document.createElement('h3');
            h3.className = 'text-2xl font-display text-text-primary mb-4';
            h3.textContent = 'Reseña General';
            const p = document.createElement('p');
            p.className = 'text-text-secondary leading-loose mb-8';
            p.textContent = data.review.general;
            wrapper.appendChild(h3);
            wrapper.appendChild(p);

            if (data.review.keyPoints.length > 0) {
                const h3k = document.createElement('h3');
                h3k.className = 'text-2xl font-display text-text-primary mb-4';
                h3k.textContent = 'Puntos Clave';
                wrapper.appendChild(h3k);
                const ul = document.createElement('ul');
                ul.className = 'space-y-3';
                data.review.keyPoints.forEach(point => {
                    const li = document.createElement('li');
                    li.className = 'flex items-start';
                    li.innerHTML = `<span class="text-accent-primary mr-3 mt-1">★</span><span class="text-text-secondary">${point}</span>`;
                    ul.appendChild(li);
                });
                wrapper.appendChild(ul);
            }

            fragment.appendChild(wrapper);
            break;
        }
        case 'details': {
            const wrapper = document.createElement('div');
            const h3 = document.createElement('h3');
            h3.className = 'text-2xl font-display text-text-primary mb-4';
            h3.textContent = 'Detalles Técnicos';
            wrapper.appendChild(h3);

            const box = document.createElement('div');
            box.className = 'bg-background-secondary p-6 rounded-lg border border-border-color';
            const dl = document.createElement('dl');
            dl.className = 'grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4';
            Object.entries(data.technicalDetails).forEach(([key, value]) => {
                const div = document.createElement('div');
                div.innerHTML = `<dt class="text-sm font-medium text-text-secondary">${key}</dt><dd class="mt-1 text-text-primary">${value}</dd>`;
                dl.appendChild(div);
            });
            box.appendChild(dl);
            wrapper.appendChild(box);

            fragment.appendChild(wrapper);
            break;
        }
        default:
            break;
    }

    return fragment;
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
    mainContent.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'container mx-auto px-4 sm:px-6 lg:px-8 py-8';

    // Hero section
    const heroSection = document.createElement('section');
    heroSection.className = 'mb-12';
    const heroInner = document.createElement('div');
    heroInner.className = 'flex flex-col md:flex-row gap-8';

    const posterWrap = document.createElement('div');
    posterWrap.className = 'md:w-1/3 flex-shrink-0';
    const poster = document.createElement('img');
    poster.src = data.posterUrl;
    poster.alt = `Póster de ${data.title}`;
    poster.className = 'w-full rounded-lg shadow-lg';
    posterWrap.appendChild(poster);

    const info = document.createElement('div');
    info.className = 'md:w-2/3';
    const h1 = document.createElement('h1');
    h1.className = 'text-4xl lg:text-5xl font-display text-text-primary';
    h1.textContent = data.title;
    const h2 = document.createElement('h2');
    h2.className = 'text-2xl text-text-secondary font-display mt-1';
    h2.textContent = data.originalTitle;

    const metaRow = document.createElement('div');
    metaRow.className = 'flex items-center space-x-3 text-text-secondary mt-4';
    const spanYear = document.createElement('span');
    spanYear.textContent = data.year;
    metaRow.appendChild(spanYear);
    if (data.seasons > 0) {
        const dot = document.createElement('span'); dot.textContent = '•';
        metaRow.appendChild(dot);
        const seasons = document.createElement('span'); seasons.textContent = `${data.seasons} Temporadas`;
        metaRow.appendChild(seasons);
    }
    const dot2 = document.createElement('span'); dot2.textContent = '•';
    metaRow.appendChild(dot2);
    const rating = document.createElement('span');
    rating.className = 'border border-text-secondary px-2 py-0.5 rounded text-sm';
    rating.textContent = data.rating;
    metaRow.appendChild(rating);

    info.appendChild(h1);
    info.appendChild(h2);
    info.appendChild(metaRow);

    if (data.imdb > 0) {
        const imdbWrap = document.createElement('div');
        imdbWrap.className = 'flex items-center space-x-2 mt-4';
        imdbWrap.innerHTML = `<span class="flex items-center bg-yellow-500 text-black text-sm font-bold px-3 py-1 rounded"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg><span class="ml-1">IMDb ${data.imdb}</span></span>`;
        info.appendChild(imdbWrap);
    }

    if (data.platforms.length > 0) {
        const platformsWrap = document.createElement('div');
        platformsWrap.className = 'mt-4';
        const p = document.createElement('p'); p.className = 'text-text-secondary mb-2'; p.textContent = 'Disponible en:';
        platformsWrap.appendChild(p);
        const logos = document.createElement('div'); logos.className = 'flex items-center space-x-4';
        data.platforms.forEach(platform => {
            const img = document.createElement('img');
            img.src = platform.logoUrl; img.alt = `${platform.name} logo`;
            img.className = 'h-8 object-contain';
            img.title = platform.name;
            logos.appendChild(img);
        });
        platformsWrap.appendChild(logos);
        info.appendChild(platformsWrap);
    }

    const genresWrap = document.createElement('div'); genresWrap.className = 'mt-6';
    data.genres.forEach(genre => {
        const span = document.createElement('span');
        span.className = 'inline-block border border-accent-primary text-accent-primary text-xs font-semibold mr-2 mb-2 px-2.5 py-1 rounded-full';
        span.textContent = genre;
        genresWrap.appendChild(span);
    });
    info.appendChild(genresWrap);

    const desc = document.createElement('p'); desc.className = 'mt-6 text-lg text-text-secondary leading-relaxed'; desc.textContent = data.description;
    info.appendChild(desc);

    heroInner.appendChild(posterWrap);
    heroInner.appendChild(info);
    heroSection.appendChild(heroInner);
    container.appendChild(heroSection);

    // Tabs section
    const tabsSection = document.createElement('section'); tabsSection.className = 'mb-12';
    const tabsContainer = document.createElement('div'); tabsContainer.id = 'tabs-container';

    const tabsNodes = renderTabs('synopsis');
    if (typeof tabsNodes === 'string') {
        tabsContainer.innerHTML += tabsNodes;
    } else if (tabsNodes) {
        tabsContainer.appendChild(tabsNodes);
    }

    const tabContent = document.createElement('div'); tabContent.id = 'tab-content';
    const tabInitial = renderTabContent(data, 'synopsis');
    if (typeof tabInitial === 'string') {
        tabContent.innerHTML = tabInitial;
    } else if (tabInitial) {
        tabContent.appendChild(tabInitial);
    }

    tabsContainer.appendChild(tabContent);
    tabsSection.appendChild(tabsContainer);
    container.appendChild(tabsSection);

    // Comments section
    const commentsSection = document.createElement('section'); commentsSection.className = 'mb-12';
    const commentsTitle = document.createElement('h2'); commentsTitle.className = 'text-3xl font-display text-text-primary mb-6'; commentsTitle.textContent = 'Comentarios';
    commentsSection.appendChild(commentsTitle);

    const formWrap = document.createElement('div'); formWrap.className = 'mb-8';
    formWrap.innerHTML = `<form><textarea rows="4" class="w-full p-4 bg-background-secondary border border-border-color rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary" placeholder="Escribe tu comentario..."></textarea><button type="submit" class="mt-4 px-6 py-2 bg-accent-primary text-background-primary font-bold rounded-lg hover:bg-opacity-90 transition-colors">Publicar Comentario</button></form>`;
    commentsSection.appendChild(formWrap);

    const commentsList = document.createElement('div'); commentsList.className = 'space-y-4';
    if (data.comments.length > 0) {
        data.comments.forEach(comment => {
            const node = renderCommentCard(comment);
            if (typeof node === 'string') {
                const tmp = document.createElement('div'); tmp.innerHTML = node; Array.from(tmp.children).forEach(c => commentsList.appendChild(c));
            } else {
                commentsList.appendChild(node);
            }
        });
    } else {
        const p = document.createElement('p'); p.className = 'text-text-secondary'; p.textContent = 'No hay comentarios aún. ¡Sé el primero!'; commentsList.appendChild(p);
    }
    commentsSection.appendChild(commentsList);
    container.appendChild(commentsSection);

    // Recommendations
    const recSection = document.createElement('section');
    const recTitle = document.createElement('h2'); recTitle.className = 'text-3xl font-display text-text-primary mb-8'; recTitle.textContent = 'También te podría gustar';
    recSection.appendChild(recTitle);
    const recGrid = document.createElement('div'); recGrid.className = 'grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6';
    RECOMMENDATIONS_DATA.forEach(movie => {
        const card = renderMovieCard(movie);
        if (typeof card === 'string') {
            const tmp = document.createElement('div'); tmp.innerHTML = card; Array.from(tmp.children).forEach(c => recGrid.appendChild(c));
        } else {
            recGrid.appendChild(card);
        }
    });
    recSection.appendChild(recGrid);
    container.appendChild(recSection);

    mainContent.appendChild(container);

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
