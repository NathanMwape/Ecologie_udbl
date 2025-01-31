import React from 'react';
import { ArrowRight, Leaf, Users, Globe2, Award, ArrowDownCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section avec image de fond */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Nature background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative min-h-screen flex items-center justify-center text-center text-white px-4 pt-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Ensemble, préservons notre environnement
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed">
              Chaque geste compte. Chaque action fait la différence.
              Rejoignez-nous dans la protection de notre environnement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/gestes" 
                className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-4 rounded-full flex items-center justify-center transition-colors"
              >
                Agir maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pourquoi" 
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-full flex items-center justify-center transition-colors"
              >
                En savoir plus
              </Link>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowDownCircle className="h-10 w-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">8M+</div>
              <p className="text-gray-600">Tonnes de déchets évités</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">50K+</div>
              <p className="text-gray-600">Membres actifs</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">100+</div>
              <p className="text-gray-600">Projets réalisés</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#4CAF50] mb-2">25+</div>
              <p className="text-gray-600">Partenaires engagés</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Notre Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nos actions collectives contribuent à la préservation de l'environnement
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Leaf className="h-12 w-12 text-[#4CAF50] mb-6" />
              <h3 className="text-xl font-semibold mb-4">Biodiversité Préservée</h3>
              <p className="text-gray-600">Protection active des espèces menacées et restauration des habitats naturels.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-[#4CAF50] mb-6" />
              <h3 className="text-xl font-semibold mb-4">Communauté Engagée</h3>
              <p className="text-gray-600">Réseau grandissant de citoyens engagés pour un avenir plus durable.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Globe2 className="h-12 w-12 text-[#4CAF50] mb-6" />
              <h3 className="text-xl font-semibold mb-4">Impact Global</h3>
              <p className="text-gray-600">Actions locales aux répercussions mondiales pour notre planète.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dernières Réalisations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Dernières Réalisations</h2>
            <p className="text-xl text-gray-600">Découvrez nos projets récents et leur impact positif</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://www.formes.ca/content/cache/991x540/douala-3_cr--dit-ville-de-douala-cud.jpg"
                alt="Nettoyage plage"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Nettoyage des plages</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://worldbank.scene7.com/is/image/worldbankprod/Chad-Tremeau-780x439?wid=780&hei=439&qlt=85,0&resMode=sharp"
                alt="Énergie renouvelable"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Énergies renouvelables</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="https://leblob.fr/sites/default/files/styles/full_width_big/public/2021-05/enquete_arbre_OK.jpg?h=2beb1939&itok=c7ggWntD"
                alt="Plantation arbres"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Reforestation urbaine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#4CAF50]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Prêt à faire la différence ?
          </h2>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Rejoignez notre communauté et participez à la construction d'un avenir plus durable
          </p>
          <Link
            to="/communaute"
            className="bg-white text-[#4CAF50] px-8 py-4 rounded-full inline-flex items-center hover:bg-gray-100 transition-colors"
          >
            Rejoindre la communauté
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;