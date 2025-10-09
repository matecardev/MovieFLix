import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-background-secondary/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-border-color">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-accent-primary font-display text-2xl font-bold">
              MovieFlix
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium">Inicio</Link>
              <a href="#" className="text-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium">Películas</a>
              <a href="#" className="text-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium">Series</a>
              <a href="#" className="text-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium">Géneros</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
