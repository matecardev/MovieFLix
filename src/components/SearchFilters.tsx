import React from 'react';

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const FilterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);


const SearchFilters: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Buscar películas o series..."
              className="w-full bg-background-secondary border border-border-color rounded-md py-3 pl-10 pr-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition"
            />
          </div>
          <div className="flex gap-4">
             <div className="relative w-1/2 md:w-48">
                <select className="w-full appearance-none bg-background-secondary border border-border-color rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary cursor-pointer">
                    <option>Género</option>
                    <option>Acción</option>
                    <option>Comedia</option>
                    <option>Drama</option>
                    <option>Ciencia Ficción</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                   <FilterIcon />
                </div>
            </div>
            <div className="relative w-1/2 md:w-48">
                <select className="w-full appearance-none bg-background-secondary border border-border-color rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary cursor-pointer">
                    <option>Tipo</option>
                    <option>Película</option>
                    <option>Serie</option>
                </select>
                 <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                   <FilterIcon />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;
