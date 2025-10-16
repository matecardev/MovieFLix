/**
 * @typedef {Object} Movie
 * @property {number} id
 * @property {string} title
 * @property {number} year
 * @property {'Película' | 'Serie'} type
 * @property {string} posterUrl
 */

/**
 * @typedef {Object} Actor
 * @property {string} name
 * @property {string} character
 * @property {string} imageUrl
 */

/**
 * @typedef {Object} Comment
 * @property {number} id
 * @property {string} username
 * @property {string} avatarUrl
 * @property {string} date
 * @property {string} text
 */

/**
 * @typedef {Object} DetailData
 * @property {number} id
 * @property {string} title
 * @property {string} originalTitle
 * @property {number} year
 * @property {number} seasons
 * @property {string} rating
 * @property {number} imdb
 * @property {Array<{name: string, logoUrl: string}>} platforms
 * @property {string[]} genres
 * @property {string} description
 * @property {string} posterUrl
 * @property {string} synopsis
 * @property {Actor[]} cast
 * @property {{general: string, keyPoints: string[]}} review
 * @property {Object<string, string>} technicalDetails
 * @property {Comment[]} comments
 */

export const MOVIES_DATA = [
  { id: 1, title: 'Dr. House', year: 2004, type: 'Serie', posterUrl: 'https://picsum.photos/seed/drhouse/400/600' },
  { id: 2, title: 'Inception', year: 2010, type: 'Película', posterUrl: 'https://picsum.photos/seed/inception/400/600' },
  { id: 3, title: 'Breaking Bad', year: 2008, type: 'Serie', posterUrl: 'https://picsum.photos/seed/breakingbad/400/600' },
  { id: 4, title: 'The Dark Knight', year: 2008, type: 'Película', posterUrl: 'https://picsum.photos/seed/darkknight/400/600' },
  { id: 5, title: 'Stranger Things', year: 2016, type: 'Serie', posterUrl: 'https://picsum.photos/seed/strangerthings/400/600' },
  { id: 6, title: 'Parasite', year: 2019, type: 'Película', posterUrl: 'https://picsum.photos/seed/parasite/400/600' },
  { id: 7, title: 'The Mandalorian', year: 2019, type: 'Serie', posterUrl: 'https://picsum.photos/seed/mandalorian/400/600' },
  { id: 8, title: 'Joker', year: 2019, type: 'Película', posterUrl: 'https://picsum.photos/seed/joker/400/600' },
  { id: 9, title: 'Game of Thrones', year: 2011, type: 'Serie', posterUrl: 'https://picsum.photos/seed/got/400/600' },
  { id: 10, title: 'The Matrix', year: 1999, type: 'Película', posterUrl: 'https://picsum.photos/seed/matrix/400/600' },
  { id: 11, title: 'Chernobyl', year: 2019, type: 'Serie', posterUrl: 'https://picsum.photos/seed/chernobyl/400/600' },
  { id: 12, title: 'Interstellar', year: 2014, type: 'Película', posterUrl: 'https://picsum.photos/seed/interstellar/400/600' },
];

const DR_HOUSE_DETAIL_DATA = {
    id: 1,
    title: 'Dr. House',
    originalTitle: 'House M.D.',
    year: 2004,
    seasons: 8,
    rating: '+16',
    imdb: 8.7,
    platforms: [
        { name: 'Prime Video', logoUrl: 'public/prime-video-logo.svg' },
        { name: 'HBO Max', logoUrl: 'public/hbo-max-logo.svg' },
    ],
    genres: ['Drama', 'Misterio', 'Médico'],
    description: 'Un médico antisocial y adicto a la vicodina lidera un equipo de diagnóstico en el Hospital Universitario Princeton-Plainsboro, resolviendo los casos médicos más complejos.',
    posterUrl: 'https://picsum.photos/seed/drhouse/400/600',
    synopsis: 'El Dr. Gregory House es un médico brillante, pero cínico y poco convencional, que se especializa en medicina diagnóstica. Lidera un equipo de élite que se enfrenta a casos desconcertantes que otros médicos no pueden resolver. Su método se basa en la lógica deductiva y en la creencia de que "todo el mundo miente", lo que a menudo lo pone en conflicto con sus colegas y pacientes.',
    cast: [
        { name: 'Hugh Laurie', character: 'Dr. Gregory House', imageUrl: 'https://picsum.photos/seed/laurie/200' },
        { name: 'Lisa Edelstein', character: 'Dr. Lisa Cuddy', imageUrl: 'https://picsum.photos/seed/edelstein/200' },
        { name: 'Robert Sean Leonard', character: 'Dr. James Wilson', imageUrl: 'https://picsum.photos/seed/leonard/200' },
        { name: 'Omar Epps', character: 'Dr. Eric Foreman', imageUrl: 'https://picsum.photos/seed/epps/200' },
    ],
    review: {
        general: 'Dr. House revolucionó el drama médico con su personaje central complejo y su enfoque en el misterio diagnóstico. La serie combina brillantemente el ingenio, el drama humano y los dilemas éticos, manteniéndose como un referente del género.',
        keyPoints: [
            'Personaje principal icónico y magnético.',
            'Guiones inteligentes y tramas de misterio bien construidas.',
            'Exploración profunda de la ética médica y la naturaleza humana.',
            'Actuaciones sobresalientes de todo el elenco.',
        ],
    },
    technicalDetails: {
        'Creador(es)': 'David Shore',
        'Fecha de Estreno': '16 de noviembre de 2004',
        'País de Origen': 'Estados Unidos',
        'Idioma Original': 'Inglés',
        'Productoras': 'Heel and Toe Films, Shore Z Productions, Bad Hat Harry Productions',
    },
    comments: [
        { id: 1, username: 'Cinefilo82', avatarUrl: 'https://picsum.photos/seed/user1/100', date: 'Hace 2 días', text: '¡La mejor serie médica de todos los tiempos! Hugh Laurie es simplemente un genio.' },
        { id: 2, username: 'Maria_G', avatarUrl: 'https://picsum.photos/seed/user2/100', date: 'Hace 1 semana', text: 'Me encanta la dinámica entre House y Wilson. Es el corazón de la serie.' },
    ],
};

export const ALL_DETAILS_DATA = [
  DR_HOUSE_DETAIL_DATA,
  ...MOVIES_DATA.filter(m => m.id !== 1).map(movie => ({
    id: movie.id,
    title: movie.title,
    originalTitle: movie.title,
    year: movie.year,
    seasons: movie.type === 'Serie' ? 1 : 0,
    rating: 'N/A',
    imdb: 0,
    platforms: [],
    genres: ['Desconocido'],
    description: `Descripción para ${movie.title} no disponible.`,
    posterUrl: movie.posterUrl,
    synopsis: `Sinopsis para ${movie.title} no disponible.`,
    cast: [],
    review: { general: 'Reseña no disponible.', keyPoints: [] },
    technicalDetails: { 'Info': 'Datos técnicos no disponibles.' },
    comments: [],
  }))
];

export const RECOMMENDATIONS_DATA = MOVIES_DATA.slice(2, 6);
