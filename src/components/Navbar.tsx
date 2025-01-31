import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#4CAF50] text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Écologie, c'est moi</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md ${isActive('/') ? 'bg-green-600' : 'hover:bg-green-600'}`}
              >
                Accueil
              </Link>
              <Link 
                to="/pourquoi" 
                className={`px-3 py-2 rounded-md ${isActive('/pourquoi') ? 'bg-green-600' : 'hover:bg-green-600'}`}
              >
                Pourquoi
              </Link>
              <Link 
                to="/gestes" 
                className={`px-3 py-2 rounded-md ${isActive('/gestes') ? 'bg-green-600' : 'hover:bg-green-600'}`}
              >
                Bons Gestes
              </Link>
              <Link 
                to="/actualites" 
                className={`px-3 py-2 rounded-md ${isActive('/actualites') ? 'bg-green-600' : 'hover:bg-green-600'}`}
              >
                Actualités
              </Link>
              <Link 
                to="/communaute" 
                className={`px-3 py-2 rounded-md ${isActive('/communaute') ? 'bg-green-600' : 'hover:bg-green-600'}`}
              >
                Communauté
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-md ${isActive('/contact') ? 'bg-green-600' : 'hover:bg-green-600'}`}
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md ${isActive('/') ? 'bg-green-600' : 'hover:bg-green-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/pourquoi" 
              className={`block px-3 py-2 rounded-md ${isActive('/pourquoi') ? 'bg-green-600' : 'hover:bg-green-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Pourquoi
            </Link>
            <Link 
              to="/gestes" 
              className={`block px-3 py-2 rounded-md ${isActive('/gestes') ? 'bg-green-600' : 'hover:bg-green-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Bons Gestes
            </Link>
            <Link 
              to="/actualites" 
              className={`block px-3 py-2 rounded-md ${isActive('/actualites') ? 'bg-green-600' : 'hover:bg-green-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Actualités
            </Link>
            <Link 
              to="/communaute" 
              className={`block px-3 py-2 rounded-md ${isActive('/communaute') ? 'bg-green-600' : 'hover:bg-green-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Communauté
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-md ${isActive('/contact') ? 'bg-green-600' : 'hover:bg-green-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;