
import React, { useState } from 'react';
import { DETAIL_DATA, RECOMMENDATIONS_DATA } from '../constants/data';
import MovieCard from '../components/MovieCard';
import type { Actor, Comment } from '../types';

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const DetailPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('synopsis');
  const data = DETAIL_DATA;

  const renderTabs = () => {
    const tabs = [
      { id: 'synopsis', label: 'Sinopsis y Reparto' },
      { id: 'review', label: 'Análisis y Reseña' },
      { id: 'details', label: 'Detalles Técnicos' },
    ];

    return (
      <div className="border-b border-border-color mb-8">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
                ${activeTab === tab.id
                  ? 'border-accent-primary text-accent-primary'
                  : 'border-transparent text-text-secondary hover:text-text-primary hover:border-gray-500'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    );
  };
  
  const ActorCard: React.FC<{ actor: Actor }> = ({ actor }) => (
    <div className="text-center">
      <img src={actor.imageUrl} alt={actor.name} className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-border-color" />
      <h4 className="mt-2 text-text-primary font-medium">{actor.name}</h4>
      <p className="text-text-secondary text-sm">{actor.character}</p>
    </div>
  );

  const CommentCard: React.FC<{ comment: Comment }> = ({ comment }) => (
    <div className="flex items-start space-x-4 p-4 bg-background-secondary rounded-lg border border-border-color">
      <img className="w-12 h-12 rounded-full object-cover" src={comment.avatarUrl} alt={comment.username} />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span className="font-bold text-text-primary">{comment.username}</span>
          <span className="text-xs text-text-secondary">{comment.date}</span>
        </div>
        <p className="mt-1 text-text-primary">{comment.text}</p>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 flex-shrink-0">
            <img src={data.posterUrl} alt={`Póster de ${data.title}`} className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-4xl lg:text-5xl font-display text-text-primary">{data.title}</h1>
            <h2 className="text-2xl text-text-secondary font-display mt-1">{data.originalTitle}</h2>
            <div className="flex items-center space-x-3 text-text-secondary mt-4">
              <span>{data.year}</span>
              <span>•</span>
              <span>{data.seasons} Temporadas</span>
              <span>•</span>
              <span className="border border-text-secondary px-2 py-0.5 rounded text-sm">{data.rating}</span>
            </div>
            <div className="flex items-center space-x-2 mt-4">
                <span className="flex items-center bg-yellow-500 text-black text-sm font-bold px-3 py-1 rounded">
                    <StarIcon /> <span className="ml-1">IMDb {data.imdb}</span>
                </span>
            </div>
            <div className="mt-4">
              <p className="text-text-secondary mb-2">Disponible en:</p>
              <div className="flex items-center space-x-4">
                 {data.platforms.map(platform => (
                    <div key={platform.name} className="h-8 px-4 bg-gray-700 rounded flex items-center justify-center text-sm">{platform.name}</div>
                 ))}
              </div>
            </div>
            <div className="mt-6">
                {data.genres.map(genre => (
                    <span key={genre} className="inline-block border border-accent-primary text-accent-primary text-xs font-semibold mr-2 mb-2 px-2.5 py-1 rounded-full">{genre}</span>
                ))}
            </div>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">{data.description}</p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="mb-12">
        {renderTabs()}
        <div>
          {activeTab === 'synopsis' && (
            <div>
              <h3 className="text-2xl font-display text-text-primary mb-4">Sinopsis</h3>
              <p className="text-text-secondary leading-loose mb-8">{data.synopsis}</p>
              <h3 className="text-2xl font-display text-text-primary mb-6">Reparto Principal</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {data.cast.map(actor => <ActorCard key={actor.name} actor={actor} />)}
              </div>
            </div>
          )}
          {activeTab === 'review' && (
            <div>
              <h3 className="text-2xl font-display text-text-primary mb-4">Reseña General</h3>
              <p className="text-text-secondary leading-loose mb-8">{data.review.general}</p>
              <h3 className="text-2xl font-display text-text-primary mb-4">Puntos Clave</h3>
              <ul className="space-y-3">
                {data.review.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-accent-primary mr-3 mt-1">★</span>
                        <span className="text-text-secondary">{point}</span>
                    </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === 'details' && (
            <div>
              <h3 className="text-2xl font-display text-text-primary mb-4">Detalles Técnicos</h3>
              <div className="bg-background-secondary p-6 rounded-lg border border-border-color">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    {Object.entries(data.technicalDetails).map(([key, value]) => (
                        <div key={key}>
                            <dt className="text-sm font-medium text-text-secondary">{key}</dt>
                            <dd className="mt-1 text-text-primary">{value}</dd>
                        </div>
                    ))}
                </dl>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Comments Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-display text-text-primary mb-6">Comentarios</h2>
        <div className="mb-8">
            <form>
                <textarea 
                    rows={4} 
                    className="w-full p-4 bg-background-secondary border border-border-color rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary" 
                    placeholder="Escribe tu comentario..."
                ></textarea>
                <button type="submit" className="mt-4 px-6 py-2 bg-accent-primary text-background-primary font-bold rounded-lg hover:bg-opacity-90 transition-colors">
                    Publicar Comentario
                </button>
            </form>
        </div>
        <div className="space-y-4">
            {data.comments.map(comment => <CommentCard key={comment.id} comment={comment}/>)}
        </div>
      </section>

      {/* Recommendations Section */}
      <section>
        <h2 className="text-3xl font-display text-text-primary mb-8">También te podría gustar</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {RECOMMENDATIONS_DATA.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DetailPage;