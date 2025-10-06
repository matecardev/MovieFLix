
import React from 'react';
import type { Movie } from '../types.ts';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/detail/${movie.id}`} className="block group">
      <div className="bg-background-secondary rounded-lg overflow-hidden border border-border-color transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-accent-primary/10">
        <img src={movie.posterUrl} alt={`Póster de ${movie.title}`} className="w-full h-auto object-cover aspect-[2/3]" />
        <div className="p-4">
          <h5 className="font-display text-text-primary text-lg truncate group-hover:text-accent-primary transition-colors">{movie.title}</h5>
          <p className="text-text-secondary text-sm mt-1">{movie.year} • {movie.type}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;