import React, { useEffect } from 'react';
import { ArrowLeft, User, Shield, Heart, Compass, Scale, Brain, Phone, FileText, CheckCircle, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const EspacePersonnel = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackHome = () => {
    navigate('/');
  };

  const services = [
    { id: 1, title: "Conseil et protection juridique", subtitle: "Vos droits, notre priorité", icon: Scale, color: "blue", description: "Nous vous accompagnons dans la compréhension et la défense de vos droits en matière de droit du travail, de discrimination, de harcèlement ou de rupture de contrat.", points: ["Information sur vos droits et obligations", "Accompagnement dans vos démarches administratives", "Orientation vers des professionnels du droit si nécessaire", "Médiation et résolution de conflits"], benefice: "Ne restez plus seul face aux difficultés juridiques" },
    { id: 2, title: "Soutien psychologique", subtitle: "Prendre soin de vous", icon: Brain, color: "rose", description: "Le bien-être mental est essentiel. Nous proposons un espace d'écoute et d'accompagnement pour traverser les moments difficiles liés au travail.", points: ["Écoute active et bienveillante", "Gestion du stress et de l'anxiété professionnelle", "Accompagnement en cas de burn-out ou épuisement", "Reconstruction de la confiance en soi"], benefice: "Un espace sécurisé pour retrouver votre équilibre" },
    { id: 3, title: "(Ré)orientation professionnelle", subtitle: "Devenir auteur de votre trajectoire", icon: Compass, color: "teal", description: "Que vous souhaitiez évoluer, changer de métier ou rebondir après une rupture, nous vous aidons à révéler votre potentiel et construire votre avenir.", points: ["Bilan de compétences et de valeurs", "Exploration des possibles et des aspirations", "Construction d'un projet professionnel aligné", "Accompagnement dans la mise en oeuvre"], benefice: "Trouvez votre voie et donnez du sens à votre parcours" },
    { id: 4, title: "Accompagnement RSE et sens au travail", subtitle: "Aligner vos valeurs et votre travail", icon: Heart, color: "green", description: "Vous souhaitez que votre travail ait du sens et soit en accord avec vos valeurs ? Nous vous aidons à trouver ou créer cet alignement.", points: ["Réflexion sur vos valeurs et motivations profondes", "Identification d'employeurs engagés", "Accompagnement vers des métiers à impact", "Développement de votre engagement citoyen au travail"], benefice: "Travaillez en accord avec qui vous êtes vraiment" }
  ];

  const colorClasses = {
    blue: { bg: "bg-blue-600", light: "bg-blue-100", text: "text-blue-700" },
    rose: { bg: "bg-rose-500", light: "bg-rose-100", text: "text-rose-700" },
    teal: { bg: "bg-teal-500", light: "bg-teal-100", text: "text-teal-700" },
    green: { bg: "bg-green-600", light: "bg-green-100", text: "text-green-700" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=srgb&fm=jpg&w=1200" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" onClick={handleBackHome} className="text-white hover:bg-white/20 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour
          </Button>
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-white/20 text-white border-white/30"><User className="w-3 h-3 mr-1" />Pour vous</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Espace Personnel</h1>
          <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">Un accompagnement <strong className="text-white">sur mesure</strong> pour vous aider à traverser les transitions, défendre vos droits et révéler votre potentiel.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[{ value: "100%", label: "Confidentiel" }, { value: "4", label: "Domaines d'aide" }, { value: "24h", label: "Réponse rapide" }, { value: "0", label: "Jugement" }].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-orange-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 border border-orange-100">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center flex-shrink-0"><Shield className="w-7 h-7 text-white" /></div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vous n'êtes pas seul</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Que vous soyez en poste, en transition ou en recherche d'un nouveau départ, ALT&ACT est à vos côtés. Notre approche <strong>humaniste et bienveillante</strong> place votre bien-être et votre épanouissement au centre de tout.</p>
              <p className="text-gray-700 leading-relaxed">Nous croyons que chaque personne porte en elle une <strong>capacité unique de contribution</strong>. Notre rôle est de vous aider à la révéler et à la déployer.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos accompagnements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Quatre axes pour vous soutenir dans toutes les dimensions de votre vie professionnelle</p>
        </div>
        <div className="space-y-8">
          {services.map((service) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color];
            return (
              <Card key={service.id} className="overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3">
                    <div className={`${colors.bg} p-8 text-white flex flex-col justify-center`}>
                      <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6"><Icon className="w-8 h-8" /></div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-sm opacity-90">{service.subtitle}</p>
                    </div>
                    <div className="md:col-span-2 p-8">
                      <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Ce que nous proposons</h4>
                        <ul className="space-y-3">
                          {service.points.map((point, idx) => (<li key={idx} className="flex items-start gap-3"><CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} /><span className="text-gray-700">{point}</span></li>))}
                        </ul>
                      </div>
                      <div className={`${colors.light} rounded-xl p-4`}><p className={`font-medium ${colors.text}`}>{service.benefice}</p></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      <section className="bg-gradient-to-r from-orange-500 to-amber-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Besoin d'aide ?</h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">Contactez-nous en toute confidentialité. Un premier échange gratuit pour comprendre votre situation et vous orienter.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleBackHome} className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg"><MessageCircle className="w-5 h-5 mr-2" />Nous contacter</Button>
            <Button variant="outline" onClick={() => navigate('/charte-ethique')} className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-6 text-lg">Notre engagement éthique</Button>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12"><h2 className="text-2xl font-bold text-gray-900 mb-4">Nos garanties</h2></div>
        <div className="grid md:grid-cols-4 gap-6">
          {[{ icon: Shield, title: "Confidentialité", desc: "Vos échanges restent privés" }, { icon: Heart, title: "Bienveillance", desc: "Écoute sans jugement" }, { icon: User, title: "Sur mesure", desc: "Adapté à votre situation" }, { icon: Sparkles, title: "Humanisme", desc: "Vous au centre de tout" }].map((value, idx) => {
            const Icon = value.icon;
            return (<div key={idx} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors"><div className="w-14 h-14 mx-auto rounded-2xl bg-orange-500 flex items-center justify-center mb-4"><Icon className="w-7 h-7 text-white" /></div><h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4><p className="text-sm text-gray-600">{value.desc}</p></div>);
          })}
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200">
          <Button onClick={handleBackHome} variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"><ArrowLeft className="w-4 h-4 mr-2" />Retour</Button>
          <span className="text-gray-500 text-sm">Association ALT&ACT</span>
        </div>
      </div>
    </div>
  );
};

export default EspacePersonnel;
