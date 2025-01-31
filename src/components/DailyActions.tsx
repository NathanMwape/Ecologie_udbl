import React from 'react';
import { Recycle, ShoppingBag, Lightbulb } from 'lucide-react';

const DailyActions = () => {
  return (
    <section className="py-20 bg-gray-50" id="gestes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Les bons gestes au quotidien
          </h2>
          <p className="text-xl text-gray-600">
            Des actions simples pour un impact durable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Recycle className="h-12 w-12 text-[#4CAF50] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Trier ses déchets</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Séparer le plastique, le verre et le papier</li>
              <li>• Composter les déchets organiques</li>
              <li>• Utiliser les points de collecte appropriés</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <ShoppingBag className="h-12 w-12 text-[#4CAF50] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Réduire sa consommation</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Privilégier les produits réutilisables</li>
              <li>• Éviter le suremballage</li>
              <li>• Acheter en vrac quand possible</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <Lightbulb className="h-12 w-12 text-[#4CAF50] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Économiser l'énergie</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Éteindre les lumières inutiles</li>
              <li>• Utiliser des ampoules LED</li>
              <li>• Privilégier les appareils économes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DailyActions;