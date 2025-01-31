import React from 'react';
import { Recycle, ShoppingBag, Lightbulb, Leaf, TreePine, Droplets, Mountain } from 'lucide-react';

const DailyActions = () => {
  return (
    <section className="py-24 bg-gray-50 mt-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Les bons gestes au quotidien
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Adoptez des habitudes écologiques pour préserver notre planète au quotidien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Recycle className="h-12 w-12 text-[#4CAF50] mb-6 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Trier ses déchets</h3>
            <p className="text-gray-600 mb-4">
              Le tri sélectif permet de recycler efficacement et de réduire notre impact écologique.
              Apprenez à bien séparer le papier, le plastique et le verre pour un meilleur recyclage.
            </p>
            <img src="https://images.unsplash.com/photo-1582408921715-18e7806365c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlY3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Recyclage" className="w-full h-48 object-cover rounded-lg" />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <ShoppingBag className="h-12 w-12 text-[#4CAF50] mb-6 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Réduire sa consommation</h3>
            <p className="text-gray-600 mb-4">
              Privilégiez les produits réutilisables, achetez en vrac et évitez le suremballage pour limiter les déchets.
            </p>
            <img src="https://images.unsplash.com/photo-1546260357-734c06422ec6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Réduction consommation" className="w-full h-48 object-cover rounded-lg" />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Lightbulb className="h-12 w-12 text-[#4CAF50] mb-6 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Économiser l'énergie</h3>
            <p className="text-gray-600 mb-4">
              Utilisez des ampoules LED, éteignez les lumières inutiles et adoptez des équipements basse consommation.
            </p>
            <img src="https://images.unsplash.com/photo-1597837375884-66855c7a65ce?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg" alt="Économie d'énergie" className="w-full h-48 object-cover rounded-lg" />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Droplets className="h-12 w-12 text-[#4CAF50] mb-6 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Économiser l'eau</h3>
            <p className="text-gray-600 mb-4">
              Réduisez votre consommation d’eau en prenant des douches courtes et en réparant les fuites.
            </p>
            <img src="https://images.unsplash.com/photo-1549273091-7ffa3280e3a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Économie d'eau" className="w-full h-48 object-cover rounded-lg" />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Leaf className="h-12 w-12 text-[#4CAF50] mb-6 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Favoriser les transports écologiques</h3>
            <p className="text-gray-600 mb-4">
              Privilégiez les transports en commun, le vélo ou la marche pour réduire les émissions de CO₂.
            </p>
            <img src="https://images.unsplash.com/photo-1548013759-dbf491716275?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Transport écologique" className="w-full h-48 object-cover rounded-lg" />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <TreePine className="h-12 w-12 text-[#4CAF50] mb-6 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Planter des arbres</h3>
            <p className="text-gray-600 mb-4">
              Les arbres absorbent le CO₂, produisent de l'oxygène et améliorent la biodiversité. Plantez-en pour un avenir plus vert !
            </p>
            <img src="https://plus.unsplash.com/premium_photo-1664301311322-e778de6426f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Planter des arbres" className="w-full h-48 object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DailyActions;
