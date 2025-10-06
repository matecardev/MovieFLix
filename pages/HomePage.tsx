
import React from 'react';
import MovieCard from '../components/MovieCard.tsx';
import SearchFilters from '../components/SearchFilters.tsx';
import { MOVIES_DATA } from '../constants/data.ts';

const HomePage: React.FC = () => {
  return (
    <div>
      <SearchFilters />
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-text-primary mb-8">Últimos Estrenos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {MOVIES_DATA.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;