import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Écologie, c'est moi</h4>
            <p className="text-gray-400">
              Ensemble pour un avenir plus vert et plus durable.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Accueil</a></li>
              <li><a href="/pourquoi" className="text-gray-400 hover:text-white">Pourquoi</a></li>
              <li><a href="/gestes" className="text-gray-400 hover:text-white">Bons Gestes</a></li>
              <li><a href="/communaute" className="text-gray-400 hover:text-white">Communauté</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span className="text-gray-400">contact@ecologie-moi.fr</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Écologie, c'est moi. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;