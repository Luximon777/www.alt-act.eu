import React, { useEffect, useState } from 'react';
import { ArrowLeft, Heart, Eye, Shield, Users, Target, Database, Scale, Building, Handshake, Rocket, CheckCircle, ChevronRight, Scroll, UserCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const CharteEthique = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('manifeste');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['manifeste', 'principe-1', 'principe-2', 'principe-3', 'principe-4', 'principe-5', 'principe-6', 'principe-7', 'principe-8', 'principe-9', 'principe-10', 'engagement', 'gouvernance', 'portee'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackHome = () => {
    navigate('/');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const memoItems = [
    { id: 'manifeste', icon: Heart, title: 'Manifeste', summary: 'Notre conviction fondatrice', color: 'bg-[#0b2a55]' },
    { id: 'principe-1', icon: Eye, title: '1. Voir le potentiel', summary: 'Avant le manque', color: 'bg-amber-500' },
    { id: 'principe-2', icon: Shield, title: '2. Identité professionnelle', summary: 'Facteur de stabilité', color: 'bg-teal-500' },
    { id: 'principe-3', icon: Rocket, title: '3. Innovation responsable', summary: 'Protéger l\'humain', color: 'bg-purple-500' },
    { id: 'principe-4', icon: Target, title: '4. Agir sur les causes', summary: 'Pas les symptômes', color: 'bg-blue-500' },
    { id: 'principe-5', icon: CheckCircle, title: '5. Responsabilité sociétale', summary: 'Impact mesurable', color: 'bg-green-500' },
    { id: 'principe-6', icon: Database, title: '6. Éthique des données', summary: 'Protection absolue', color: 'bg-red-500' },
    { id: 'principe-7', icon: Scale, title: '7. Indépendance', summary: 'Protéger les publics', color: 'bg-indigo-500' },
    { id: 'principe-8', icon: Building, title: '8. Gouvernance', summary: 'Anticiper l\'avenir', color: 'bg-slate-500' },
    { id: 'principe-9', icon: Handshake, title: '9. Coopérations', summary: 'Élever les pratiques', color: 'bg-orange-500' },
    { id: 'principe-10', icon: Rocket, title: '10. Futur du travail', summary: 'Lucidité et action', color: 'bg-cyan-500' },
    { id: 'gouvernance', icon: Users, title: 'Gouvernance', summary: 'Sociocratie', color: 'bg-rose-500' },
  ];

  const sections = [
    { id: "principe-1", number: "1", title: "Voir le potentiel avant le manque", icon: Eye, color: "amber", intro: "Nous refusons les approches qui réduisent une personne à ses freins, à ses ruptures de parcours ou à ses vulnérabilités.", responsibility: "Notre responsabilité est de :", points: ["détecter les ressources souvent invisibles", "rendre lisibles les compétences réelles", "transformer l'expérience en valeur professionnelle", "restaurer la capacité de projection"], conclusion: "Nous ne réparons pas des trajectoires. Nous révélons des dynamiques d'avenir." },
    { id: "principe-2", number: "2", title: "Faire de l'identité professionnelle un facteur de stabilité sociale", icon: Shield, color: "teal", intro: "Une société se fragilise lorsque les individus ne trouvent plus leur place.", responsibility: "C'est pourquoi ALT&ACT donne la priorité au travail de structuration de l'identité professionnelle, considérée comme :", points: ["un repère dans les périodes de transition", "un levier de confiance", "un facteur de sécurisation des parcours", "un socle d'engagement durable"], conclusion: "Avant de chercher à insérer, nous cherchons à aligner." },
    { id: "principe-3", number: "3", title: "Assumer une innovation responsable", icon: Rocket, color: "purple", intro: "L'innovation n'a de valeur que si elle protège l'humain.", responsibility: "À travers RE'ACTIF PRO, nous développons des outils destinés à :", points: ["éclairer sans enfermer", "orienter sans prédéterminer", "objectiver sans déshumaniser"], conclusion: "Nous affirmons une vigilance constante : aucune technologie ne doit produire de nouvelles formes d'exclusion." },
    { id: "principe-4", number: "4", title: "Agir sur les causes plutôt que sur les symptômes", icon: Target, color: "blue", intro: "Les réponses superficielles créent des insertions fragiles.", responsibility: "ALT&ACT privilégie une lecture profonde des situations afin de :", points: ["comprendre les mécanismes de rupture", "prévenir les désengagements professionnels", "sécuriser les transitions", "favoriser des trajectoires durables"], conclusion: "Notre ambition n'est pas de générer des sorties rapides, mais des équilibres solides." },
    { id: "principe-5", number: "5", title: "Porter une responsabilité sociétale mesurable", icon: CheckCircle, color: "green", intro: "L'utilité sociale doit pouvoir se démontrer.", responsibility: "Nous nous engageons à :", points: ["évaluer l'impact réel de nos actions", "rechercher des améliorations continues", "partager nos enseignements", "contribuer aux réflexions sur l'évolution du travail"], conclusion: "Notre crédibilité repose sur les transformations observables." },
    { id: "principe-6", number: "6", title: "Garantir une éthique irréprochable de la donnée", icon: Database, color: "red", intro: "Les informations confiées traduisent des parcours de vie.", responsibility: "ALT&ACT s'engage à :", points: ["protéger rigoureusement les données personnelles", "assurer une transparence complète sur leur usage", "exclure toute exploitation contraire à l'intérêt des individus", "appliquer les standards les plus élevés en matière de sécurité"], conclusion: "La confiance se construit par des pratiques irréprochables." },
    { id: "principe-7", number: "7", title: "Cultiver une indépendance qui protège l'intérêt des publics", icon: Scale, color: "indigo", intro: "Notre liberté d'action est une condition de notre intégrité.", responsibility: "Nous veillons à :", points: ["maintenir une autonomie dans nos orientations", "refuser les logiques contraires à notre mission", "prévenir tout conflit d'intérêts", "agir avec clarté auprès de nos partenaires"], conclusion: "Aucune performance ne justifie un renoncement éthique." },
    { id: "principe-8", number: "8", title: "Installer une gouvernance qui anticipe plutôt qu'elle ne réagit", icon: Building, color: "slate", intro: "Dans un environnement professionnel instable, la responsabilité des organisations est d'éclairer l'avenir.", responsibility: "ALT&ACT structure sa gouvernance pour :", points: ["encourager la réflexion stratégique", "intégrer la vigilance éthique dans les décisions", "croiser les expertises", "inscrire ses actions dans le temps long"], conclusion: "Le comité de mission constitue le garant actif de cette exigence." },
    { id: "principe-9", number: "9", title: "Construire des coopérations qui élèvent les pratiques", icon: Handshake, color: "orange", intro: "Nous choisissons des partenaires pour leur conception de la responsabilité sociale.", responsibility: "Nos collaborations reposent sur :", points: ["la réciprocité", "la cohérence des engagements", "la recherche d'impact", "le respect des personnes"], conclusion: "Coopérer n'est pas juxtaposer des actions — c'est renforcer une ambition commune." },
    { id: "principe-10", number: "10", title: "Préparer le futur du travail avec lucidité", icon: Rocket, color: "cyan", intro: "Les mutations professionnelles redessinent déjà les équilibres sociaux.", responsibility: "ALT&ACT fait le choix de :", points: ["développer des approches anticipatrices", "contribuer à la compréhension des compétences émergentes", "soutenir l'adaptabilité des individus", "favoriser une économie plus inclusive"], conclusion: "Préparer l'avenir n'est pas une option. C'est une responsabilité." }
  ];

  const governanceBodies = [
    { name: "Assemblée Générale", description: "Organe souverain composé de l'ensemble des membres. Prend les décisions stratégiques par consentement sociocratique.", icon: Users, color: "bg-[#0b2a55]" },
    { name: "Comité Directeur", description: "Organe d'administration composé de 3 à 9 membres élus pour 3 ans. Assure la gestion courante et la mise en œuvre des décisions.", icon: Shield, color: "bg-teal-500" },
    { name: "Comité Éthique", description: "Garant des valeurs de l'association, de son intégrité et de la conformité éthique. Dispose d'un droit d'alerte et de recommandation.", icon: Scale, color: "bg-rose-500" },
    { name: "Comité de Mission", description: "Organe indépendant assurant la cohérence entre les activités menées et la mission d'intérêt général.", icon: Target, color: "bg-amber-500" }
  ];

  const sociocracyPrinciples = ["Équivalence", "Consentement", "Organisation en cercles", "Double lien", "Élection sans candidat", "Responsabilité collective", "Transparence", "Intelligence collective"];

  const colorClasses = { amber: "bg-amber-100 text-amber-700 border-amber-200", teal: "bg-teal-100 text-teal-700 border-teal-200", purple: "bg-purple-100 text-purple-700 border-purple-200", blue: "bg-blue-100 text-blue-700 border-blue-200", green: "bg-green-100 text-green-700 border-green-200", red: "bg-red-100 text-red-700 border-red-200", indigo: "bg-indigo-100 text-indigo-700 border-indigo-200", slate: "bg-slate-100 text-slate-700 border-slate-200", orange: "bg-orange-100 text-orange-700 border-orange-200", cyan: "bg-cyan-100 text-cyan-700 border-cyan-200" };
  const iconBgClasses = { amber: "bg-amber-500", teal: "bg-teal-500", purple: "bg-purple-500", blue: "bg-blue-500", green: "bg-green-500", red: "bg-red-500", indigo: "bg-indigo-500", slate: "bg-slate-500", orange: "bg-orange-500", cyan: "bg-cyan-500" };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=srgb&fm=jpg&w=1920')" }}></div>
        <div className="absolute inset-0 bg-[#0b2a55]/70"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" onClick={handleBackHome} className="text-white hover:bg-white/20 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour
          </Button>
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Engagement ALT&ACT</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Charte éthique et gouvernance</h1>
          <p className="text-xl text-blue-100">Pour une société où chacun peut se sentir utile</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block lg:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] px-4 py-4">
                  <h3 className="text-white font-bold text-base flex items-center gap-2"><Scroll className="w-5 h-5" />Navigation</h3>
                </div>
                <div className="p-2 max-h-[60vh] overflow-y-auto">
                  {memoItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button key={item.id} onClick={() => scrollToSection(item.id)} className={`w-full text-left p-2 rounded-lg mb-1 transition-all duration-300 group ${isActive ? 'bg-[#0b2a55]/10 border-l-3 border-[#0b2a55]' : 'hover:bg-gray-50'}`}>
                        <div className="flex items-center gap-2">
                          <div className={`w-7 h-7 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0 ${isActive ? 'scale-110' : 'group-hover:scale-105'} transition-transform duration-200`}>
                            <Icon className="w-3.5 h-3.5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`font-semibold text-xs ${isActive ? 'text-[#0b2a55]' : 'text-gray-700'}`}>{item.title}</p>
                            <p className="text-[10px] text-gray-500 truncate">{item.summary}</p>
                          </div>
                          <ChevronRight className={`w-3 h-3 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isActive ? 'translate-x-0.5 text-[#0b2a55]' : ''}`} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            <div id="manifeste" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#0b2a55] flex items-center justify-center"><Heart className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">Manifeste</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Nous considérons que l'insertion professionnelle ne se limite pas à l'accès à un emploi. Elle engage la place de la personne dans la société, sa capacité à contribuer, à évoluer et à construire un parcours porteur de sens.</p>
                <p className="text-lg font-medium text-[#0b2a55]">ALT&ACT est née d'une conviction forte : l'utilité sociale d'une personne ne se décrète pas — elle se révèle, se structure et se sécurise.</p>
                <p>Notre action consiste à créer les conditions permettant à chacun de retrouver un pouvoir d'agir durable dans un monde du travail en mutation.</p>
                <p className="italic border-l-4 border-orange-500 pl-4 bg-orange-50 py-3 rounded-r-lg">Cette charte exprime un positionnement volontairement exigeant. Elle dépasse une logique réglementaire pour affirmer une responsabilité sociétale.</p>
              </div>
            </div>

            <div className="space-y-8">
              {sections.map((section, idx) => {
                const Icon = section.icon;
                return (
                  <div id={section.id} key={idx} className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={"w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 " + iconBgClasses[section.color]}><Icon className="w-7 h-7 text-white" /></div>
                      <div>
                        <span className={"text-sm font-semibold px-3 py-1 rounded-full " + colorClasses[section.color]}>Principe {section.number}</span>
                        <h3 className="text-xl font-bold text-gray-900 mt-2">{section.title}</h3>
                      </div>
                    </div>
                    <div className="space-y-4 text-gray-700">
                      <p className="leading-relaxed">{section.intro}</p>
                      <p className="font-medium text-[#0b2a55]">{section.responsibility}</p>
                      <ul className="space-y-2 ml-4">
                        {section.points.map((point, pidx) => (<li key={pidx} className="flex items-start gap-2"><span className={"w-2 h-2 rounded-full mt-2 flex-shrink-0 " + iconBgClasses[section.color]}></span><span>{point}</span></li>))}
                      </ul>
                      <p className="font-medium italic text-gray-800 border-l-4 border-[#0b2a55] pl-4 bg-gray-50 py-3 rounded-r-lg">{section.conclusion}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div id="engagement" className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-2xl shadow-lg p-8 md:p-12 mt-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Notre engagement fondamental</h2>
              <p className="mb-6 text-blue-100">Nous croyons qu'une société plus stable se construit lorsque chacun peut :</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {["identifier sa valeur", "exercer ses capacités", "contribuer utilement", "envisager l'avenir avec confiance"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/10 rounded-lg p-4"><CheckCircle className="w-5 h-5 text-orange-400" /><span>{item}</span></div>
                ))}
              </div>
              <p className="text-lg font-medium">ALT&ACT agit pour que l'insertion professionnelle devienne un espace de reconnaissance, de structuration et de projection.</p>
            </div>

            {/* Section Gouvernance */}
            <div id="gouvernance" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center"><Users className="w-6 h-6 text-white" /></div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Gouvernance</h2>
                  <p className="text-gray-600">Une organisation démocratique et participative</p>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">ALT&ACT s'inscrit dans une gouvernance démocratique, éthique et participative, <strong className="text-[#0b2a55]">inspirée des principes de la sociocratie</strong>.</p>
                
                <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl p-6 border border-rose-100">
                  <h3 className="font-bold text-gray-900 mb-4">Principes sociocratiques</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {sociocracyPrinciples.map((principle, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm">
                        <CheckCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        <span className="text-sm font-medium">{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 text-xl mt-8 mb-4">Nos organes de gouvernance</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {governanceBodies.map((body, idx) => {
                    const Icon = body.icon;
                    return (
                      <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-xl ${body.color} flex items-center justify-center flex-shrink-0`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 mb-2">{body.name}</h4>
                              <p className="text-sm text-gray-600">{body.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>

            <div id="portee" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Portée de la charte</h2>
              <p className="text-gray-700 mb-4">Cette charte :</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                {["oriente nos décisions", "structure nos pratiques", "engage nos dirigeants", "éclaire nos partenaires", "protège les publics"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /><span>{item}</span></li>
                ))}
              </ul>
              <p className="italic text-gray-600 border-l-4 border-orange-500 pl-4 bg-orange-50 py-3 rounded-r-lg">Elle constitue une référence vivante, appelée à évoluer pour rester à la hauteur des transformations du monde du travail.</p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button onClick={handleBackHome} variant="outline" className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />Retour
              </Button>
              <span className="text-gray-500 text-sm">Association ALT&ACT</span>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CharteEthique;
