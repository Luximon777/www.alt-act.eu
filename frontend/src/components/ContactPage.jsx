import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Smartphone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import Navigation from './Navigation';
import Footer from './Footer';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const ContactPage = () => {
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    const form = e.target;
    const payload = {
      nom: form.fullName.value,
      email: form.email.value,
      sujet: form.subject.value || null,
      message: form.message.value,
    };
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Erreur serveur');
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg("Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" data-testid="contact-page">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#0b2a55] via-[#1a4280] to-[#0b2a55] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
            <Mail className="w-4 h-4 text-amber-300" />
            <span className="text-amber-300 text-sm font-semibold">NOUS CONTACTER</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Restons en contact
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Une question, une idée, un projet ? Notre équipe est à votre écoute pour vous accompagner.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment nous joindre</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Vous pouvez nous contacter par email, téléphone ou en remplissant le formulaire ci-contre. Nous nous engageons à vous répondre dans les meilleurs délais.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-[#0b2a55]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0b2a55]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:contact@alt-act.eu" className="text-[#0b2a55] hover:underline font-medium" data-testid="contact-email-link">contact@alt-act.eu</a>
                    <p className="text-sm text-gray-500 mt-1">Réponse sous 24-48h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-[#0b2a55]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#0b2a55]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Téléphone fixe</p>
                    <a href="tel:+33960510882" className="text-[#0b2a55] hover:underline font-medium" data-testid="contact-phone-link">09 60 51 08 82</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-[#0b2a55]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-[#0b2a55]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Téléphone mobile</p>
                    <a href="tel:+33658165883" className="text-[#0b2a55] hover:underline font-medium" data-testid="contact-mobile-link">06 58 16 58 83</a>
                    <p className="text-sm text-gray-500 mt-1">Du lundi au vendredi, 9h-18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-[#0b2a55]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0b2a55]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Localisation</p>
                    <p className="text-gray-700 font-medium">Grand Est - Strasbourg</p>
                    <p className="text-sm text-gray-500 mt-1">Sur rendez-vous uniquement</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-[#0b2a55]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#0b2a55]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Horaires d'ouverture</p>
                    <div className="flex justify-between gap-8 mt-1">
                      <span className="text-gray-700">Lundi - Vendredi</span>
                      <span className="text-gray-900 font-medium">9h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-gray-700">Samedi - Dimanche</span>
                      <span className="text-gray-900 font-medium">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center" data-testid="contact-success">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                  <p className="text-gray-600 mb-6">Nous vous répondrons dans les meilleurs délais.</p>
                  <Button onClick={() => setStatus(null)} className="bg-[#0b2a55] hover:bg-[#1a4280] text-white" data-testid="contact-new-message">
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form className="space-y-6" data-testid="contact-form" onSubmit={handleSubmit}>
                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl" data-testid="contact-error">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-red-700 text-sm">{errorMsg}</p>
                    </div>
                  )}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Nom complet <span className="text-red-500">*</span></label>
                    <input type="text" id="fullName" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all" placeholder="Votre nom complet" data-testid="contact-fullname" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                    <input type="email" id="email" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all" placeholder="votre@email.com" data-testid="contact-email" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                    <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all" placeholder="Sujet de votre message" data-testid="contact-subject" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
                    <textarea id="message" rows={6} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0b2a55] focus:border-transparent transition-all resize-none" placeholder="Votre message..." data-testid="contact-message"></textarea>
                  </div>
                  <Button type="submit" disabled={status === 'loading'} className="w-full bg-[#0b2a55] hover:bg-[#1a4280] text-white py-4 text-lg rounded-xl disabled:opacity-60" data-testid="contact-submit">
                    {status === 'loading' ? (
                      <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Envoi en cours...</>
                    ) : (
                      <><Send className="w-5 h-5 mr-2" /> Envoyer le message</>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
