import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  return (
    <div className="pt-16">
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Actualités</h1>
          <p className="text-xl text-gray-600">
            Restez informé des dernières nouvelles et événements écologiques
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Article 1 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Nettoyage plage"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>15 Mars 2024</span>
              </div>
              <h2 className="text-xl font-bold mb-4">Grande opération de nettoyage des plages</h2>
              <p className="text-gray-600 mb-4">
                Rejoignez-nous pour une journée dédiée à la préservation de nos littoraux.
                Plus de 500 bénévoles sont attendus pour cette action collective.
              </p>
              <button className="text-[#4CAF50] font-semibold flex items-center hover:text-green-600">
                Lire la suite <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </article>

          {/* Article 2 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Énergie renouvelable"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>12 Mars 2024</span>
              </div>
              <h2 className="text-xl font-bold mb-4">Nouveau parc éolien en construction</h2>
              <p className="text-gray-600 mb-4">
                Un projet ambitieux qui permettra d'alimenter en électricité verte
                plus de 50 000 foyers dans la région.
              </p>
              <button className="text-[#4CAF50] font-semibold flex items-center hover:text-green-600">
                Lire la suite <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </article>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#4CAF50] text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors">
            Voir plus d'actualités
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;