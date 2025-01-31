import React from 'react';
import { TreePine, Droplets, Mountain, Sun } from 'lucide-react';

const sections = [
  {
    title: "Préserver la biodiversité",
    text: "La biodiversité est essentielle à l'équilibre de la nature. Protéger les espèces et leurs habitats permet de maintenir des écosystèmes sains et fonctionnels.",
    icon: <TreePine className="h-12 w-12 text-white" />,
    image: "https://images.unsplash.com/photo-1635394762738-338eff919736?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-[#4CAF50]",
  },
  {
    title: "Protéger nos ressources",
    text: "L'eau, l'air et les sols sont des ressources vitales. Réduire la pollution et encourager une gestion durable permet d'assurer leur disponibilité pour les générations futures.",
    icon: <Droplets className="h-12 w-12 text-white" />,
    image: "https://www.wathi.org/wp-content/uploads/2021/08/cobalt-congo-grand-large-600x326.png",
    bgColor: "bg-[#0099CC]",
  },
  {
    title: "Réduire la pollution",
    text: "Les déchets plastiques, les émissions de CO₂ et les produits chimiques menacent notre environnement. Adopter des modes de consommation responsables réduit leur impact.",
    icon: <Mountain className="h-12 w-12 text-white" />,
    image: "https://images.unsplash.com/flagged/photo-1572213426852-0e4ed8f41ff6?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-[#8B4513]",
  },
  {
    title: "Lutter contre le changement climatique",
    text: "La montée des températures entraîne des phénomènes extrêmes. Réduire les émissions de gaz à effet de serre est crucial pour limiter les impacts du changement climatique.",
    icon: <Sun className="h-12 w-12 text-white" />,
    image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgColor: "bg-[#FF9800]",
  },
];

const WhyProtect = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi protéger l'environnement ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La protection de notre environnement est essentielle pour garantir un avenir durable aux générations futures. 
            Chaque action compte pour préserver notre planète.
          </p>
        </div>

        {sections.map((section, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center mb-16`}>
            
            <div className="lg:w-1/2 p-8">
              <div className={`${section.bgColor} rounded-full p-4 inline-block mb-4`}>
                {section.icon}
              </div>
              <h3 className="text-3xl font-semibold mb-4">{section.title}</h3>
              <p className="text-gray-600 text-lg">{section.text}</p>
            </div>
            <div className="lg:w-1/2">
              <img src={section.image} alt={section.title} className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyProtect;
