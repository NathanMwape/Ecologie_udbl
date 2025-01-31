import React from 'react';
import { TreePine, Droplets, Mountain } from 'lucide-react';

const WhyProtect = () => {
  return (
    <section className="py-20 bg-white" id="pourquoi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi protéger l'environnement ?
          </h2>
          <p className="text-xl text-gray-600">
            La protection de notre environnement est cruciale pour l'avenir de notre planète.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-[#4CAF50] rounded-full p-4 inline-block mb-4">
              <TreePine className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Préserver la biodiversité</h3>
            <p className="text-gray-600">
              La biodiversité est essentielle pour maintenir l'équilibre de nos écosystèmes.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#0099CC] rounded-full p-4 inline-block mb-4">
              <Droplets className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Protéger nos ressources</h3>
            <p className="text-gray-600">
              L'eau et l'air purs sont vitaux pour notre survie et celle des générations futures.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#8B4513] rounded-full p-4 inline-block mb-4">
              <Mountain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Réduire la pollution</h3>
            <p className="text-gray-600">
              La réduction des déchets est cruciale pour préserver nos paysages naturels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyProtect;