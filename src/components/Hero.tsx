import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            L'écologie commence avec moi, et toi ?
          </h1>
          <p className="text-xl mb-8">
            Ensemble, préservons notre planète pour les générations futures.
            Chaque geste compte, chaque action fait la différence.
          </p>
          <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-4 rounded-full flex items-center justify-center mx-auto transition-colors">
            Agir maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;