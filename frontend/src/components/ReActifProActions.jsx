import React from 'react';
import { Zap, Users, ArrowRight, Shield, Eye, Scale, Building, FileCheck, CheckCircle, Target, UserCheck, ClipboardList, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const ReActifProActions = () => {
  const navigate = useNavigate();

  const axes = [
    {
      number: 1,
      title: "Garantir la transparence et la compréhension",
      icon: Eye,
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      measures: [
        {
          number: 1,
          title: "Information systématique des usagers",
          description: "Mise en place d'un module d'information expliquant : le rôle de l'intelligence artificielle, ses objectifs, ses limites, son caractère non décisionnel.",
          indicator: "100 % des usagers informés lors de leur entrée dans le dispositif."
        },
        {
          number: 2,
          title: "Recueil du consentement éclairé",
          description: "Mise en place d'un processus de consentement explicite avant toute utilisation de l'IA.",
          indicator: "100 % des usagers ayant validé leur consentement."
        },
        {
          number: 3,
          title: "Restitution compréhensible des résultats",
          description: "Conception d'interfaces utilisant un langage accessible, non déterministe et non enfermant.",
          indicator: "100 % des restitutions validées selon les critères éthiques définis."
        }
      ]
    },
    {
      number: 2,
      title: "Garantir la supervision humaine",
      icon: UserCheck,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      measures: [
        {
          number: 4,
          title: "Validation systématique par un professionnel",
          description: "Aucune recommandation ne peut être appliquée sans validation humaine.",
          indicator: "100 % des accompagnements incluant une supervision humaine."
        },
        {
          number: 5,
          title: "Maintien de la décision finale par l'usager",
          description: "L'usager conserve la liberté totale d'accepter, refuser ou nuancer les recommandations.",
          indicator: "100 % des usagers conservent leur pouvoir de décision."
        },
        {
          number: 6,
          title: "Utilisation de l'IA comme support de dialogue",
          description: "Les résultats de l'IA sont utilisés comme support d'échange entre le conseiller et l'usager.",
          indicator: "Intégration dans 100 % des accompagnements RE'ACTIF PRO."
        }
      ]
    },
    {
      number: 3,
      title: "Prévenir les biais et garantir l'équité",
      icon: Scale,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      measures: [
        {
          number: 7,
          title: "Conception orientée vers l'élargissement des possibles",
          description: "L'IA propose plusieurs options et perspectives, sans restriction automatique.",
          indicator: "Pluralité systématique des pistes proposées."
        },
        {
          number: 8,
          title: "Évaluation régulière de l'équité du système",
          description: "Analyse périodique des résultats pour détecter d'éventuels biais.",
          indicator: "Audit annuel réalisé."
        }
      ]
    },
    {
      number: 4,
      title: "Assurer la gouvernance éthique",
      icon: Building,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      measures: [
        {
          number: 9,
          title: "Création d'un comité éthique IA au sein d'ALT&ACT",
          description: "Ce comité supervise : les usages, les impacts, les évolutions.",
          indicator: "Comité opérationnel et réunions régulières."
        },
        {
          number: 10,
          title: "Mise en place d'une charte éthique IA RE'ACTIF PRO",
          description: "Charte engageant : l'organisation, les professionnels, les partenaires.",
          indicator: "Charte adoptée et appliquée."
        }
      ]
    },
    {
      number: 5,
      title: "Garantir la responsabilité et la traçabilité",
      icon: ClipboardList,
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      measures: [
        {
          number: 11,
          title: "Documentation et traçabilité des recommandations",
          description: "Conservation des éléments permettant de comprendre les recommandations.",
          indicator: "Traçabilité complète des accompagnements."
        },
        {
          number: 12,
          title: "Formation obligatoire des professionnels",
          description: "Formation des conseillers à l'usage éthique et responsable de l'IA.",
          indicator: "100 % des professionnels formés."
        }
      ]
    }
  ];

  const expectedResults = [
    "Conforme aux exigences européennes",
    "Éthique dans sa conception",
    "Protecteur des personnes",
    "Transparent dans son fonctionnement",
    "Responsable dans ses usages"
  ];

  const strategicPositioning = [
    "Acteur européen de référence en IA éthique appliquée à l'accompagnement professionnel",
    "Dispositif conforme aux normes européennes",
    "Modèle reproductible à l'échelle européenne"
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="reactif-actions-page">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative pt-20 h-[45vh] min-h-[350px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_b9667b3b-f143-44c0-a669-48155a9ec421/artifacts/fmab74oi_Carrieres_bleu.jpg')`
          }}
        />
        {/* Gradient Overlay - darker at top for navigation readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2a55]/90 via-[#1e3a8a]/60 to-[#3730a3]/40" />
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Zap className="w-4 h-4 text-amber-300" />
              <span className="text-amber-200 text-sm font-semibold">RE'ACTIF PRO - ACTIONS</span>
            </div>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Des interventions concrètes pour transformer l'insertion professionnelle et créer de la valeur partagée.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Logo RE'ACTIF PRO en début de partie blanche */}
          <div className="flex flex-col items-center mb-12">
            <img
              src="https://customer-assets.emergentagent.com/job_98207846-a739-4cf9-bf2a-0022ee971933/artifacts/uvdaganz_40.png"
              alt="RE'ACTIF PRO - Intelligence Professionnelle"
              className="h-28 md:h-36 w-auto mb-4"
              data-testid="reactif-pro-logo"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">L'intelligence professionnelle en action</h1>
          </div>

          {/* Plan opérationnel - ENCART PRINCIPAL */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-[#0b2a55] via-[#1e3a8a] to-[#3730a3] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center">
                    <FileCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/20 rounded-full mb-2">
                      <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider">Plan opérationnel</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      Conformité et usage éthique de l'intelligence artificielle
                    </h2>
                    <p className="text-blue-200 mt-1">RE'ACTIF PRO – ALT&ACT</p>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
                <p className="text-blue-100 leading-relaxed">
                  Ce plan garantit que l'intelligence artificielle utilisée dans RE'ACTIF PRO respecte les principes de <strong className="text-white">supervision humaine</strong>, de <strong className="text-white">transparence</strong>, d'<strong className="text-white">équité</strong> et de <strong className="text-white">protection des droits fondamentaux</strong>, conformément au cadre défini par l'Union européenne.
                </p>
              </div>

              {/* 5 Axes */}
              <div className="space-y-6">
                {axes.map((axe) => {
                  const Icon = axe.icon;
                  return (
                    <div key={axe.number} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      {/* Axe Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-br ${axe.color} rounded-xl flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-amber-400 font-bold">AXE {axe.number}</span>
                          <h3 className="text-xl font-bold text-white">{axe.title}</h3>
                        </div>
                      </div>

                      {/* Mesures */}
                      <div className="space-y-4">
                        {axe.measures.map((measure) => (
                          <div key={measure.number} className="bg-white/5 rounded-xl p-4 border border-white/10">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-amber-300 font-bold text-sm">{measure.number}</span>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-white mb-2">{measure.title}</h4>
                                <p className="text-blue-200 text-sm mb-3">{measure.description}</p>
                                <div className="flex items-center gap-2 bg-green-500/20 rounded-lg px-3 py-2">
                                  <Target className="w-4 h-4 text-green-400" />
                                  <span className="text-green-300 text-sm"><strong>Indicateur :</strong> {measure.indicator}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Résultat attendu */}
              <div className="mt-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-400/30">
                <h3 className="text-xl font-bold text-green-300 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Résultat attendu
                </h3>
                <p className="text-blue-100 mb-4">
                  Ce plan garantit que RE'ACTIF PRO constitue un dispositif :
                </p>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {expectedResults.map((result, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-white text-sm font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traduction stratégique */}
              <div className="mt-6 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl p-6 border border-amber-400/30">
                <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center gap-2">
                  <Globe className="w-6 h-6" />
                  Traduction stratégique pour ALT&ACT
                </h3>
                <p className="text-blue-100 mb-4">
                  Ce plan permet de positionner ALT&ACT et RE'ACTIF PRO comme :
                </p>
                <div className="space-y-3">
                  {strategicPositioning.map((position, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                      <div className="w-8 h-8 bg-amber-400/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-300 font-bold">{index + 1}</span>
                      </div>
                      <span className="text-white font-medium">{position}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dimension européenne */}
          <div className="bg-gradient-to-r from-[#1e3a8a] via-[#3730a3] to-[#4f46e5] rounded-3xl p-8 md:p-12 text-white mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Dimension européenne</h2>
            </div>
            <p className="text-indigo-100 text-lg leading-relaxed mb-6">
              RE'ACTIF PRO s'inscrit pleinement dans les orientations européennes en matière d'emploi et d'inclusion sociale.
              Notre approche est alignée avec les objectifs du <strong className="text-white">Pilier européen des droits sociaux</strong>
              et contribue à la <strong className="text-white">Stratégie européenne pour l'emploi</strong>.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Socle européen des droits sociaux",
                "Stratégie européenne pour l'emploi",
                "Économie sociale et solidaire"
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <p className="text-white font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Prêt à rejoindre le mouvement ?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Que vous soyez une personne en recherche d'accompagnement ou une organisation souhaitant
              s'engager pour l'inclusion, RE'ACTIF PRO vous accompagne.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/espace-personnel')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center gap-2"
              >
                Espace Personnel
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/conseils-accompagnement')}
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center gap-2"
              >
                Espace Employeurs
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/reactif-pro/presentation')}
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-full font-medium transition-colors"
              >
                Retour à la présentation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReActifProActions;
