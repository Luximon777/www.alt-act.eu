import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Users, Building, Heart, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://formspree.io/f/xgolzajz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-4">
            <Mail className="w-4 h-4 text-[#0b2a55]" />
            <span className="text-[#0b2a55] text-sm font-semibold">CONTACT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Parlons de votre projet</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Que vous soyez un particulier en recherche d'accompagnement ou une organisation souhaitant transformer ses pratiques, nous sommes à votre écoute.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                <p className="text-gray-600">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all" placeholder="Votre prénom" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all" placeholder="Votre nom" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all" placeholder="votre@email.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                  <select id="subject" name="subject" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all">
                    <option value="">Choisir un sujet</option>
                    <option value="particulier">Accompagnement personnel</option>
                    <option value="entreprise">Partenariat entreprise</option>
                    <option value="membre">Devenir membre</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all resize-none" placeholder="Décrivez votre projet ou votre demande..."></textarea>
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-[#0b2a55] hover:bg-[#1a4280] text-white py-4 text-lg rounded-xl transition-all duration-200">
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Nos coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Adresse</p>
                    <p className="text-blue-200">Grand Est - Strasbourg</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:contact@alt-act.eu" className="text-blue-200 hover:text-white transition-colors">contact@alt-act.eu</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Téléphone fixe</p>
                    <a href="tel:+33960510882" className="text-blue-200 hover:text-white transition-colors">09 60 51 08 82</a>
                    <p className="font-semibold mb-1 mt-3">Téléphone mobile</p>
                    <a href="tel:+33658165883" className="text-blue-200 hover:text-white transition-colors">06 58 16 58 83</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-amber-600 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Particuliers</h4>
                <p className="text-gray-600 text-sm">Accompagnement personnalisé pour votre parcours professionnel</p>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100 hover:shadow-lg transition-shadow">
                <Building className="w-10 h-10 text-teal-600 mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Entreprises</h4>
                <p className="text-gray-600 text-sm">Partenariats pour des pratiques RH responsables</p>
              </div>
            </div>

            <div id="membre" className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-orange-500" />
                <h4 className="text-xl font-bold text-gray-900">Devenir membre</h4>
              </div>
              <p className="text-gray-600 mb-6">Rejoignez ALT&ACT et participez à la construction d'une société plus inclusive et plus humaine.</p>
              <Button onClick={() => navigate('/devenir-membre')} className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl">En savoir plus sur l'adhésion</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
