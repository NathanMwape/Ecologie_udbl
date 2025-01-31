import React from 'react';
import { Users, Heart, Share2 } from 'lucide-react';

const Community = () => {
  return (
    <section className="py-20 bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Rejoignez notre communauté
          </h2>
          <p className="text-xl text-gray-600">
            Ensemble, nous sommes plus forts pour protéger notre environnement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-[#4CAF50] mr-4" />
              <h3 className="text-2xl font-semibold">Témoignages</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-gray-600 mb-4">
                  "Depuis que j'ai rejoint la communauté, j'ai appris tellement de nouvelles façons de réduire mon impact environnemental."
                </p>
                <p className="font-semibold">- Marie D.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-gray-600 mb-4">
                  "Les initiatives locales de nettoyage ont créé un véritable esprit d'équipe dans notre quartier."
                </p>
                <p className="font-semibold">- Pierre L.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-[#4CAF50] mr-4" />
              <h3 className="text-2xl font-semibold">Rejoignez-nous</h3>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Votre email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="email@exemple.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Votre message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={4}
                  placeholder="Partagez vos idées..."
                ></textarea>
              </div>
              <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;