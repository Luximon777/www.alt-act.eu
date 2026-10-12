import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Handshake, ArrowRight, FlaskConical, UserPlus, Mail } from 'lucide-react';
import { Button } from './ui/button';
import Navigation from './Navigation';
import Footer from './Footer';
import ManiereAgirFrise from './ManiereAgirFrise';
import TemoignagesSection from './TemoignagesSection';
import { FicheCooperation } from './CooperationsSection';
import { cooperations } from '../data/reperes';

const Cooperations = () => {
  const navigate = useNavigate();
  const go = (path) => { navigate(path); window.scrollTo(0, 0); };

  return (
    <div className="min-h-screen bg-gray-50" data-testid="cooperations-page">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920&h=600&fit=crop" alt="Coopération entre acteurs" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0b2a55]/85"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-6">
            <Handshake className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-semibold">COOPÉRER</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">Relier plutôt que fragmenter</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            ALT&ACT est un espace de coopération et de mise en relation entre des acteurs qui travaillent trop souvent séparément.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos coopérations</h2>
            <p className="text-gray-600 text-lg">Par catégorie de partenaire : ce que nous construisons, l'objectif poursuivi et ce que nous en apprenons. Ces fiches se précisent au fil des coopérations engagées.</p>
          </div>
          <div className="space-y-6">
            {cooperations.map((coop) => <FicheCooperation key={coop.id} coop={coop} />)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0b2a55]" data-testid="maniere-agir-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
              <FlaskConical className="w-4 h-4 text-amber-300" />
              <span className="text-amber-300 text-sm font-semibold">NOTRE MANIÈRE D'AGIR</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Innover, c'est d'abord mieux écouter et mieux coopérer</h2>
            <p className="text-blue-100 text-lg leading-relaxed">Pour ALT&ACT, innover ne signifie pas nécessairement ajouter un nouvel outil. L'innovation peut consister à rendre une ressource plus accessible, reconnaître des capacités jusque-là invisibles, rapprocher des acteurs qui travaillaient séparément — ou utiliser la technologie lorsqu'elle apporte une réelle valeur humaine et sociale.</p>
          </div>
          <ManiereAgirFrise dark />
        </div>
      </section>

      <TemoignagesSection compact />

      <section id="proposer" className="py-20 bg-white" data-testid="proposer-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Coopérer avec nous</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Handshake, title: 'Devenir partenaire', text: 'Entreprise, institution, association : construisons une coopération à partir de vos enjeux réels.', cta: 'Nous écrire', path: '/contact', tid: 'cta-partenaire' },
              { icon: FlaskConical, title: 'Proposer une expérimentation', text: 'Une idée à tester, un terrain à ouvrir, une évaluation à mener ensemble.', cta: 'Proposer', path: '/contact', tid: 'cta-experimentation' },
              { icon: UserPlus, title: 'Contribuer', text: 'Rejoindre ALT&ACT comme membre, personne ressource ou bénévole.', cta: 'Devenir membre', path: '/devenir-membre', tid: 'cta-contribuer' }
            ].map(({ icon: Icon, title, text, cta, path, tid }) => (
              <div key={title} className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex flex-col">
                <div className="w-12 h-12 bg-[#0b2a55] rounded-xl flex items-center justify-center mb-5"><Icon className="w-6 h-6 text-white" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{text}</p>
                <Button onClick={() => go(path)} className="bg-[#0b2a55] hover:bg-[#1a4280] text-white rounded-xl w-fit" data-testid={tid}>{cta} <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-500 text-sm flex items-center gap-2"><Mail className="w-4 h-4" /> Ou simplement : <a href="mailto:contact@alt-act.eu" className="text-[#0b2a55] font-medium hover:underline">contact@alt-act.eu</a></p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cooperations;
