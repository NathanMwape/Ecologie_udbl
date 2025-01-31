import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-16">
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact</h1>
          <p className="text-xl text-gray-600">
            Une question ? N'hésitez pas à nous contacter
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Nom complet</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Sujet</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Sujet de votre message"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={6}
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#4CAF50] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#4CAF50] mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Adresse</h3>
                  <p className="text-gray-600">
                    123 Avenue de l'Écologie<br />
                    Lubumbashi - RDC
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#4CAF50] mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Téléphone</h3>
                  <p className="text-gray-600">+243 123 456 789</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#4CAF50] mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">contact@ecologie-moi.org</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">FAQ</h3>
              <div className="space-y-4">
                <details className="bg-gray-50 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer">
                    Comment puis-je m'impliquer ?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Vous pouvez participer à nos événements, devenir bénévole ou faire un don pour soutenir nos actions.
                  </p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg">
                  <summary className="font-semibold cursor-pointer">
                    Organisez-vous des événements ?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Oui, nous organisons régulièrement des actions de nettoyage et des ateliers de sensibilisation.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;