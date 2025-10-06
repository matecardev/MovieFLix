
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-secondary border-t border-border-color mt-12">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-text-secondary">
        <p>&copy; {new Date().getFullYear()} MovieFlix. Todos los derechos reservados.</p>
        <p className="text-sm mt-1">Creado por un desarrollador experto.</p>
      </div>
    </footer>
  );
};

export default Footer;
