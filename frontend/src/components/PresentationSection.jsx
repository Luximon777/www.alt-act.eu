import React from 'react';
import { Heart, Users, Globe, Target, Lightbulb, ArrowRight, Building2, UserCheck, Sparkles } from 'lucide-react';

const PresentationSection = () => {
  return (
    <section id="presentation" className="py-20 bg-white" data-testid="presentation-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Notre Raison d'Être */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0b2a55]/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#0b2a55]" />
            <span className="text-[#0b2a55] text-sm font-semibold tracking-wide">NOTRE RAISON D'ÊTRE</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Construire une Europe où chacun peut<br className="hidden md:block" />
            <span className="text-[#0b2a55]">contribuer au progrès collectif</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Chez ALT&ACT, nous refusons l'idée que des talents restent inexploités ou que des personnes 
            soient laissées au bord du chemin. Nous partons d'une conviction profonde : <strong className="text-gray-900">toute personne 
            possède une capacité de contribution à la société</strong>, indépendamment de sa situation.
          </p>
        </div>

        {/* Section 2: Image Hero + Principe Fondamental */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://customer-assets.emergentagent.com/job_685a9b1f-a3b7-4dd9-8465-63ecb4591e28/artifacts/aop7cquw_labor-union-members-working-together.jpg"
                  alt="Personnes travaillant ensemble en équipe"
                  className="w-full h-80 md:h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-5 rounded-2xl shadow-xl hidden md:flex items-center gap-3">
                <Target className="w-7 h-7" />
                <span className="font-semibold">Pouvoir d'agir</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full">
                <Lightbulb className="w-4 h-4 text-teal-600" />
                <span className="text-teal-700 text-sm font-semibold">PRINCIPE FONDAMENTAL</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                La reconnaissance de la capacité de contribution de chaque personne
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cette capacité existe indépendamment de la situation professionnelle, sociale ou personnelle. 
                Elle peut être latente, en développement ou entravée par des facteurs structurels, mais elle 
                constitue une <strong className="text-[#0b2a55]">réalité fondamentale</strong> qui doit être reconnue, 
                soutenue et valorisée.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                L'accompagnement repose ainsi sur une vision de la personne non comme bénéficiaire d'une 
                assistance, mais comme <strong className="text-teal-600">acteur en devenir</strong> et 
                <strong className="text-teal-600"> contributeur potentiel</strong> au progrès collectif.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: De l'Assistance à l'Activation */}
        <div className="mb-24 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-slate-200">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
              <ArrowRight className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-semibold">NOTRE APPROCHE</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              De l'assistance à l'activation
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              L'accompagnement n'est pas un processus de prise en charge, mais un processus 
              d'<strong className="text-purple-600">activation</strong>, de <strong className="text-purple-600">structuration</strong> et 
              de <strong className="text-purple-600">déploiement du pouvoir d'agir</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#0b2a55] rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Reconnaître</h4>
              <p className="text-gray-600 text-sm">Ses propres compétences et son potentiel</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Comprendre</h4>
              <p className="text-gray-600 text-sm">Son environnement professionnel et social</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Se situer</h4>
              <p className="text-gray-600 text-sm">Dans les dynamiques existantes</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Agir</h4>
              <p className="text-gray-600 text-sm">De manière autonome et responsable</p>
            </div>
          </div>
        </div>

        {/* Section 4: Double Responsabilité */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Une responsabilité partagée
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La responsabilité de l'adaptation ne repose pas uniquement sur les individus, 
              mais également sur les <strong className="text-gray-900">structures</strong>, les <strong className="text-gray-900">organisations</strong> et les <strong className="text-gray-900">systèmes</strong>.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Auprès des Personnes */}
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-8 border border-teal-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center">
                  <UserCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-teal-600 text-sm font-semibold">AUPRÈS DES</span>
                  <h4 className="text-xl font-bold text-gray-900">Personnes</h4>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://customer-assets.emergentagent.com/job_685a9b1f-a3b7-4dd9-8465-63ecb4591e28/artifacts/6c9cn6t8_h1.webp"
                  alt="Collaboration professionnelle inclusive avec collègue en fauteuil roulant"
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-gray-600 leading-relaxed">
                Nous développons des dispositifs qui <strong className="text-teal-700">valorisent les parcours réels</strong>, 
                renforcent la capacité d'action et permettent à chacun de devenir acteur de sa trajectoire, 
                sans orientation prescriptive.
              </p>
            </div>

            {/* Auprès des Organisations */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#0b2a55] rounded-2xl flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-[#0b2a55] text-sm font-semibold">AUPRÈS DES</span>
                  <h4 className="text-xl font-bold text-gray-900">Organisations</h4>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://customer-assets.emergentagent.com/job_685a9b1f-a3b7-4dd9-8465-63ecb4591e28/artifacts/ql4b0ko4_people-joining-hands-volunteers-wearing-mask-new-normal.jpg"
                  alt="Mains diverses unies symbolisant l'unité dans la diversité"
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-gray-600 leading-relaxed">
                Nous accompagnons les entreprises, collectivités et structures vers des 
                <strong className="text-[#0b2a55]"> pratiques plus éthiques et inclusives</strong>. 
                Nous les aidons à rendre leurs environnements plus accessibles et leurs modèles plus responsables.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Vision */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] rounded-3xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <Globe className="w-12 h-12 mx-auto mb-6 text-amber-400" />
            <h3 className="text-xl md:text-2xl font-bold mb-4">Notre Vision</h3>
            <p className="text-lg md:text-xl leading-relaxed text-blue-100 mb-6">
              Contribuer à l'émergence d'un modèle de société dans lequel chaque personne est 
              reconnue comme un <strong className="text-white">acteur capable de contribuer au progrès collectif</strong>.
            </p>
            <p className="text-blue-200 italic">
              "Le travail et l'activité humaine comme expressions de la dignité, de la responsabilité 
              et de la participation à la construction du bien commun."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PresentationSection;
