import React, { useEffect } from 'react';
import { Shield, Scale, Eye, UserCheck, FileCheck, AlertTriangle, Lightbulb, Heart, Users, Lock, BarChart3, Settings, Globe, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const CharteEthiqueIA = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispositions = [
    { icon: AlertTriangle, title: "Classification des risques", text: "Les systèmes d'IA sont classés selon leur niveau de risque : inacceptable, haut risque, risque limité et risque minimal. RE'ACTIF PRO s'engage à respecter les normes les plus strictes.", color: "amber" },
    { icon: Eye, title: "Transparence et explicabilité", text: "Les utilisateurs doivent être informés lorsqu'ils interagissent avec une IA. Les décisions doivent être explicables et compréhensibles.", color: "blue" },
    { icon: UserCheck, title: "Supervision humaine", text: "Les systèmes d'IA doivent permettre une intervention humaine à tout moment, avec des mécanismes pour contester les décisions automatisées.", color: "green" },
    { icon: FileCheck, title: "Conformité et audits", text: "Mise en place de systèmes de gestion des risques, audits réguliers et documentation complète des processus d'IA.", color: "purple" },
  ];

  const engagements = [
    "Auditer régulièrement ses systèmes d'IA pour évaluer leur niveau de risque",
    "Former ses équipes aux exigences éthiques et réglementaires",
    "Mettre en place des processus de conformité documentés",
    "Garantir une supervision humaine effective sur tous les systèmes",
    "Planifier des évaluations continues pour maintenir la conformité",
  ];

  const importanceItems = [
    { icon: Shield, title: "Protection des droits", text: "L'AI Act protège les citoyens contre les abus et les biais des systèmes d'IA en imposant des normes strictes de transparence et d'explicabilité." },
    { icon: Lightbulb, title: "Innovation responsable", text: "En offrant un cadre clair, l'AI Act permet aux développeurs de savoir exactement quelles sont les attentes, réduisant les incertitudes juridiques." },
    { icon: Heart, title: "Confiance des utilisateurs", text: "Les organisations conformes renforcent la confiance de leurs partenaires et des personnes accompagnées." },
    { icon: Globe, title: "Compétitivité européenne", text: "Des standards communs facilitent la compétitivité des entreprises européennes sur la scène internationale." },
  ];

  const articles = [
    { num: 1, title: "Finalité exclusive d'accompagnement humain", text: "Les technologies d'intelligence artificielle développées dans RE'ACTIF PRO ont pour seule finalité de soutenir l'accompagnement des personnes dans leur développement professionnel.", items: ["Automatiser des décisions affectant le parcours d'une personne", "Exclure, filtrer ou discriminer des individus", "Exercer un contrôle ou une surveillance des personnes"], itemsPrefix: "Elles ne peuvent en aucun cas être utilisées pour :", footer: "L'intelligence artificielle est un outil d'assistance et non un système décisionnel autonome." },
    { num: 2, title: "Responsabilité de conception éthique", text: "RE'ACTIF PRO assume la responsabilité éthique dès la phase de conception des systèmes. Cela implique de concevoir des technologies qui :", items: ["Respectent la dignité humaine", "Préservent la liberté de choix", "Soutiennent l'autonomie des personnes", "Évitent les effets de déterminisme ou d'enfermement"], footer: "Les choix techniques doivent toujours être compatibles avec ces principes." },
    { num: 3, title: "Supervision humaine obligatoire", text: "Tous les systèmes d'intelligence artificielle développés et exploités dans RE'ACTIF PRO sont soumis à une supervision humaine effective.", footer: "Aucune décision impactant le parcours d'une personne ne peut être prise exclusivement par un système automatisé. La responsabilité des décisions demeure humaine." },
    { num: 4, title: "Transparence des systèmes développés", text: "RE'ACTIF PRO garantit que les utilisateurs des technologies développées sont informés :", items: ["De l'utilisation de l'intelligence artificielle", "De sa finalité", "De son rôle", "De ses limites"], footer: "Les systèmes sont conçus pour produire des résultats compréhensibles et explicables." },
    { num: 5, title: "Maîtrise humaine des technologies", text: "Les systèmes développés doivent permettre :", items: ["L'intervention humaine à tout moment", "La correction des résultats", "La suspension du système si nécessaire"], footer: "L'intelligence artificielle doit rester sous contrôle humain permanent." },
    { num: 6, title: "Prévention des biais et équité des systèmes", text: "RE'ACTIF PRO s'engage à concevoir des systèmes visant à réduire les biais et les discriminations. Cela implique :", items: ["Une vigilance dans la conception", "Une évaluation régulière des effets des systèmes", "La correction des effets indésirables identifiés"], footer: "Les technologies doivent favoriser l'équité et l'inclusion." },
    { num: 7, title: "Robustesse, sécurité et fiabilité technique", text: "RE'ACTIF PRO garantit que les systèmes développés répondent à des exigences élevées de :", items: ["Fiabilité", "Sécurité", "Stabilité"], footer: "Des mécanismes de contrôle, de test et d'évaluation sont intégrés dans le cycle de développement." },
    { num: 8, title: "Protection des données et respect de la vie privée", text: "Les technologies développées respectent les principes de :", items: ["Minimisation des données", "Limitation des finalités", "Protection des informations"], footer: "Les données sont utilisées uniquement dans le cadre de l'accompagnement." },
    { num: 9, title: "Traçabilité et auditabilité des systèmes", text: "RE'ACTIF PRO met en place des mécanismes permettant de :", items: ["Documenter le fonctionnement des systèmes", "Tracer les recommandations produites", "Permettre leur évaluation et leur audit"], footer: "Cela garantit la responsabilité et la transparence." },
    { num: 10, title: "Responsabilité continue du concepteur", text: "RE'ACTIF PRO assume la responsabilité continue des technologies développées, y compris après leur déploiement. Cela implique de :", items: ["Surveiller les effets des systèmes", "Corriger les dysfonctionnements", "Améliorer les dispositifs"], footer: "La responsabilité du concepteur ne s'arrête pas à la mise en service." },
    { num: 11, title: "Gouvernance éthique des technologies", text: "RE'ACTIF PRO met en place une gouvernance éthique encadrant :", items: ["La conception", "Le déploiement", "L'utilisation"], footer: "Cette gouvernance garantit le respect permanent des principes de la présente charte." },
    { num: 12, title: "Principe fondamental de primauté humaine", text: "Les technologies développées dans RE'ACTIF PRO doivent toujours rester au service de l'humain. L'IA ne peut se substituer :", items: ["Ni à la conscience humaine", "Ni à la responsabilité humaine", "Ni à la liberté humaine"], footer: "Elle constitue un outil destiné à renforcer la capacité d'agir des personnes." },
  ];

  const lifecycle = ["Conception", "Développement", "Déploiement", "Utilisation", "Évaluation", "Amélioration continue"];

  const colorMap = { amber: "bg-amber-500", blue: "bg-blue-500", green: "bg-green-500", purple: "bg-purple-500" };

  return (
    <div className="min-h-screen bg-gray-50" data-testid="charte-ethique-ia-page">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0b2a55] via-[#1a4280] to-[#0b2a55] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15]">
          <img src="https://images.unsplash.com/photo-1698191310487-9fc33b0e266a?crop=entropy&cs=srgb&fm=jpg&w=1400" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full mb-6">
            <Shield className="w-4 h-4 text-cyan-300" />
            <span className="text-cyan-300 text-sm font-semibold">RE'ACTIF PRO - CHARTE IA</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Charte éthique de l'intelligence artificielle
          </h1>
          <p className="text-base md:text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Conforme au Règlement européen sur l'IA (AI Act) — Règlement (UE) 2024/1689
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <div className="hidden lg:block flex-shrink-0 sticky top-28 self-start">
              <img src={process.env.PUBLIC_URL + '/logo-reactif-pro.png'} alt="RE'ACTIF PRO" className="w-52 rounded-xl shadow-lg" />
            </div>
            <div className="flex-1">

          {/* AI Act Introduction */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border-l-4 border-blue-500 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">L'AI Act : un cadre pionnier pour une IA responsable</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              L'Union européenne a franchi une étape décisive dans la régulation de l'intelligence artificielle avec l'<strong>AI Act</strong>. Publiée au Journal officiel de l'UE, cette législation pionnière est entrée en vigueur le <strong>1er août 2024</strong>, avec une application progressive prévue entre 2025 et 2030.
            </p>
            <p className="text-gray-700 leading-relaxed">
              RE'ACTIF PRO s'inscrit pleinement dans ce cadre réglementaire et s'engage à respecter les plus hautes exigences en matière d'éthique, de transparence et de protection des personnes.
            </p>
          </div>

          {/* Quote Vestager */}
          <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-2xl p-8 text-white mb-12">
            <p className="text-lg italic text-blue-100 leading-relaxed mb-4">
              "Le cadre réglementaire de l'AI Act est une avancée majeure pour garantir que l'intelligence artificielle soit utilisée de manière responsable et éthique. Il s'agit d'une législation cruciale pour protéger les utilisateurs et promouvoir une IA bénéfique pour tous."
            </p>
            <p className="text-amber-300 font-semibold">— Margrethe Vestager, Vice-présidente exécutive de la Commission européenne</p>
          </div>

          {/* Principales dispositions */}
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Principales dispositions de l'AI Act</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {dispositions.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border-t-4 hover:shadow-xl transition-shadow" style={{ borderTopColor: item.color === 'amber' ? '#f59e0b' : item.color === 'blue' ? '#3b82f6' : item.color === 'green' ? '#22c55e' : '#a855f7' }} data-testid={`disposition-${i}`}>
                  <div className={`w-12 h-12 rounded-xl ${colorMap[item.color]} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>

          {/* Engagement RE'ACTIF PRO */}
          <div className="bg-cyan-50 rounded-3xl p-8 md:p-10 border-l-4 border-cyan-500 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">L'engagement de RE'ACTIF PRO</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              En tant que développeur et exploitant de technologies d'IA dans le domaine de l'insertion professionnelle, RE'ACTIF PRO anticipe ces exigences et s'engage à :
            </p>
            <ul className="space-y-3">
              {engagements.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pourquoi l'AI Act est-il important ? */}
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pourquoi l'AI Act est-il important ?</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {importanceItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <Icon className="w-10 h-10 text-[#0b2a55] mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>

          {/* Quote Wozniak */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 mb-12">
            <p className="text-lg italic text-gray-700 leading-relaxed mb-4">
              "Nous avons désespérément besoin d'un cadre politique pour l'IA qui tienne les êtres humains responsables et aide à empêcher les mauvaises personnes d'utiliser cette technologie incroyable pour faire des choses horribles."
            </p>
            <p className="text-amber-700 font-semibold">— Steve Wozniak, co-fondateur d'Apple</p>
          </div>

          {/* Préambule */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Préambule</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              RE'ACTIF PRO conçoit, développe et exploite des technologies d'intelligence artificielle destinées à soutenir l'accompagnement professionnel, l'orientation, le développement des compétences et la capacité d'agir des personnes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dans ce cadre, RE'ACTIF PRO assume la <strong>responsabilité directe</strong> de la création opérationnelle des systèmes, des dispositifs et des outils utilisant l'intelligence artificielle.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cette responsabilité implique une <strong>exigence renforcée</strong> en matière d'éthique, de sécurité, de transparence et de protection des personnes, conformément aux dispositions du Règlement européen sur l'intelligence artificielle (AI Act).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              La présente charte établit les principes qui encadrent l'ensemble du cycle de vie des systèmes d'intelligence artificielle :
            </p>
            <div className="flex flex-wrap gap-3">
              {lifecycle.map((step, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-4 py-2 bg-[#0b2a55]/10 text-[#0b2a55] rounded-full text-sm font-medium">
                  {step}
                </span>
              ))}
            </div>
          </div>

          {/* 12 Articles */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Les 12 articles de la charte</h2>
          <div className="space-y-6 mb-12">
            {articles.map((article) => (
              <div key={article.num} className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow" data-testid={`article-${article.num}`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0b2a55] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{article.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 pt-2">{article.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">{article.text}</p>
                {article.itemsPrefix && <p className="text-gray-700 font-medium mb-2">{article.itemsPrefix}</p>}
                {article.items && (
                  <ul className="space-y-2 mb-3 ml-4">
                    {article.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#0b2a55] mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {article.footer && <p className="text-gray-600 italic">{article.footer}</p>}
              </div>
            ))}
          </div>

          {/* Engagement du concepteur */}
          <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-12 text-white mb-12">
            <h2 className="text-2xl font-bold mb-6">Engagement du concepteur et de l'organisation</h2>
            <p className="text-blue-100 leading-relaxed mb-4">
              En concevant et exploitant des technologies d'intelligence artificielle, RE'ACTIF PRO s'engage à respecter les exigences éthiques, techniques et humaines définies dans cette charte, ainsi que le cadre réglementaire européen applicable.
            </p>
            <p className="text-blue-100 leading-relaxed">
              Cet engagement s'applique à l'ensemble des technologies, dispositifs et systèmes développés dans le cadre de ses activités.
            </p>
          </div>

          {/* Quote Voss */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 mb-12">
            <p className="text-lg italic text-gray-700 leading-relaxed mb-4">
              "L'AI Act représente une opportunité pour les entreprises de montrer leur engagement envers des pratiques éthiques en matière d'IA. En se conformant à cette législation, elles peuvent non seulement éviter des sanctions, mais aussi gagner la confiance des consommateurs."
            </p>
            <p className="text-amber-700 font-semibold">— Axel Voss, Député européen et rapporteur sur l'intelligence artificielle</p>
          </div>

          {/* Statut de la charte */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Statut de la charte</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cette charte constitue le <strong>cadre de référence éthique</strong> applicable à l'ensemble des activités de conception, de développement et d'exploitation des technologies d'intelligence artificielle de RE'ACTIF PRO.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Elle s'inscrit dans le respect du <strong>Règlement (UE) 2024/1689</strong> (AI Act) et sera mise à jour pour intégrer les évolutions réglementaires futures.
            </p>

            {/* Timeline */}
            <h3 className="text-lg font-bold text-gray-900 mb-4">Calendrier d'application de l'AI Act</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm font-bold text-[#0b2a55]">2024</span>
                <div className="flex-1 bg-blue-100 rounded-lg px-4 py-2 text-sm text-gray-700">Entrée en vigueur (1er août)</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm font-bold text-amber-600">2025</span>
                <div className="flex-1 bg-amber-100 rounded-lg px-4 py-2 text-sm text-gray-700">Interdiction des pratiques à risque inacceptable</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm font-bold text-green-600">2026-30</span>
                <div className="flex-1 bg-green-100 rounded-lg px-4 py-2 text-sm text-gray-700">Application progressive des autres dispositions</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button onClick={() => navigate('/charte-ethique')} className="bg-[#0b2a55] hover:bg-[#1a4280] text-white px-8 py-6 text-lg rounded-full" data-testid="cta-charte-ethique">
                Charte éthique ALT&ACT
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button onClick={() => navigate('/reactif-pro/presentation')} variant="outline" className="border-[#0b2a55] text-[#0b2a55] hover:bg-[#0b2a55] hover:text-white px-8 py-6 text-lg rounded-full" data-testid="cta-presentation">
                Retour à RE'ACTIF PRO
              </Button>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CharteEthiqueIA;
