import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText, Mail, Clock, Users, Database, CheckCircle, AlertTriangle, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

const PolitiqueConfidentialite = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackHome = () => {
    navigate('/');
  };

  const TableRow = ({ cells, isHeader }) => (
    <tr className={isHeader ? 'bg-[#0b2a55] text-white' : 'border-b border-gray-200 hover:bg-gray-50'}>
      {cells.map((cell, i) => (
        isHeader 
          ? <th key={i} className="px-4 py-3 text-left text-sm font-semibold">{cell}</th>
          : <td key={i} className="px-4 py-3 text-sm text-gray-700">{cell}</td>
      ))}
    </tr>
  );

  return (
    <div className="min-h-screen bg-gray-50" data-testid="politique-confidentialite">
      <Navigation />
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] text-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={handleBackHome}
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-10 h-10" />
            <h1 className="text-3xl md:text-4xl font-bold">Politique de confidentialit&eacute;</h1>
          </div>
          <p className="text-blue-200 text-lg">ALT&ACT - Protection de vos donn&eacute;es personnelles</p>
          <p className="text-blue-300 text-sm mt-2">Derni&egrave;re mise &agrave; jour : 30 juin 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10">
          
          {/* 1. Introduction */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              L'association ALT&ACT s'engage &agrave; prot&eacute;ger les donn&eacute;es personnelles de ses membres, prospects et partenaires, conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es (RGPD) et &agrave; la loi fran&ccedil;aise Informatique et Libert&eacute;s.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Cette politique explique quelles donn&eacute;es nous collectons, comment nous les utilisons, et quels sont vos droits.
            </p>
          </section>

          {/* 2. Quelles données collectons-nous ? */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">2. Quelles donn&eacute;es collectons-nous ?</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous collectons les donn&eacute;es suivantes, selon les cas :
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full">
                <thead>
                  <TableRow isHeader cells={["Type de donn\u00e9es", "Exemples", "Finalit\u00e9", "Base l\u00e9gale"]} />
                </thead>
                <tbody>
                  <TableRow cells={["Donn\u00e9es d'identification", "Nom, pr\u00e9nom, email, t\u00e9l\u00e9phone", "Gestion des adh\u00e9sions, envoi d'informations sur RE'ACTIF PRO.", "Consentement ou ex\u00e9cution d'un contrat"]} />
                  <TableRow cells={["Donn\u00e9es de connexion", "Adresse IP, cookies (si site web)", "Am\u00e9lioration de l'exp\u00e9rience utilisateur, statistiques anonymes.", "Int\u00e9r\u00eat l\u00e9gitime (avec opt-out)"]} />
                  <TableRow cells={["Donn\u00e9es de paiement", "IBAN, num\u00e9ro de carte (via HelloAsso)", "Gestion des cotisations et dons.", "Ex\u00e9cution d'un contrat"]} />
                  <TableRow cells={["Donn\u00e9es professionnelles", "CV, comp\u00e9tences, parcours", "Accompagnement dans le cadre de RE'ACTIF PRO.", "Consentement explicite"]} />
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Pourquoi collectons-nous ces données ? */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">3. Pourquoi collectons-nous ces donn&eacute;es ?</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nos traitements de donn&eacute;es ont les finalit&eacute;s suivantes :
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full">
                <thead>
                  <TableRow isHeader cells={["Finalit\u00e9", "Base l\u00e9gale", "Dur\u00e9e de conservation"]} />
                </thead>
                <tbody>
                  <TableRow cells={["Gestion des adh\u00e9sions", "Ex\u00e9cution d'un contrat", "Dur\u00e9e de l'adh\u00e9sion + 1 an"]} />
                  <TableRow cells={["Envoi de newsletters et informations", "Consentement", "Jusqu'au retrait du consentement"]} />
                  <TableRow cells={["Organisation d'ateliers", "Consentement", "6 mois apr\u00e8s l'atelier"]} />
                  <TableRow cells={["R\u00e9ponse aux demandes de contact", "Int\u00e9r\u00eat l\u00e9gitime", "3 ans (ou jusqu'\u00e0 suppression)"]} />
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Qui a accès à vos données ? */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">4. Qui a acc&egrave;s &agrave; vos donn&eacute;es ?</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-2">ALT&ACT</h3>
                <p className="text-gray-700 text-sm">Seuls les membres du bureau autoris&eacute;s ont acc&egrave;s &agrave; vos donn&eacute;es.</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-2">Sous-traitants conformes au RGPD</h3>
                <ul className="text-gray-700 text-sm space-y-1 ml-4 list-disc">
                  <li><strong>H&eacute;bergement web :</strong> OVH (serveurs en UE)</li>
                  <li><strong>Email :</strong> Gmail (Google LLC, clauses contractuelles UE-US)</li>
                  <li><strong>Paiements :</strong> HelloAsso (h&eacute;bergement en France)</li>
                  <li><strong>Newsletters :</strong> Mailchimp (The Rocket Science Group, clauses contractuelles UE-US)</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-2">Autorit&eacute;s l&eacute;gales</h3>
                <p className="text-gray-700 text-sm">Vos donn&eacute;es peuvent &ecirc;tre communiqu&eacute;es &agrave; une autorit&eacute; comp&eacute;tente (ex: CNIL, justice) si la loi l'exige.</p>
              </div>
            </div>
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-800 text-sm font-medium">Nous ne vendons, ne louons ni ne partageons vos donn&eacute;es avec des tiers &agrave; des fins commerciales.</p>
            </div>
          </section>

          {/* 5. Combien de temps conservons-nous vos données ? */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">5. Combien de temps conservons-nous vos donn&eacute;es ?</h2>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full">
                <thead>
                  <TableRow isHeader cells={["Type de donn\u00e9es", "Dur\u00e9e de conservation", "Justification"]} />
                </thead>
                <tbody>
                  <TableRow cells={["Donn\u00e9es des prospects", "3 ans \u00e0 compter du dernier contact", "D\u00e9lai raisonnable pour le d\u00e9marchage."]} />
                  <TableRow cells={["Donn\u00e9es des membres", "Dur\u00e9e de l'adh\u00e9sion + 1 an", "Obligation l\u00e9gale (comptabilit\u00e9)."]} />
                  <TableRow cells={["Donn\u00e9es des ateliers", "6 mois apr\u00e8s l'\u00e9v\u00e9nement", "Finalit\u00e9 \u00e9ph\u00e9m\u00e8re."]} />
                  <TableRow cells={["Donn\u00e9es de paiement", "10 ans (obligation l\u00e9gale)", "Loi fran\u00e7aise sur la comptabilit\u00e9."]} />
                </tbody>
              </table>
            </div>
          </section>

          {/* 6. Quels sont vos droits ? */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">6. Quels sont vos droits ?</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conform&eacute;ment au RGPD, vous disposez des droits suivants :
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full">
                <thead>
                  <TableRow isHeader cells={["Droit", "Description", "Comment l'exercer"]} />
                </thead>
                <tbody>
                  <TableRow cells={["Droit d'acc\u00e8s", "Obtenir une copie de vos donn\u00e9es.", "Envoyez un email \u00e0 rgpd@alt-act.eu avec une pi\u00e8ce d'identit\u00e9."]} />
                  <TableRow cells={["Droit de rectification", "Corriger ou mettre \u00e0 jour vos informations.", "R\u00e9pondez \u00e0 nos emails ou contactez-nous."]} />
                  <TableRow cells={["Droit \u00e0 l'effacement", "Supprimer vos donn\u00e9es (sauf obligation l\u00e9gale de conservation).", "Envoyez un email \u00e0 rgpd@alt-act.eu."]} />
                  <TableRow cells={["Droit \u00e0 la limitation", "Limiter le traitement de vos donn\u00e9es.", "Cliquez sur \"Se d\u00e9sabonner\" en bas de nos emails."]} />
                  <TableRow cells={["Droit \u00e0 la portabilit\u00e9", "R\u00e9cup\u00e9rer vos donn\u00e9es dans un format structur\u00e9 (ex: CSV).", "Demandez par email \u00e0 rgpd@alt-act.eu."]} />
                  <TableRow cells={["Droit d'opposition", "Refuser que vos donn\u00e9es soient utilis\u00e9es pour le d\u00e9marchage.", "Cliquez sur \"Se d\u00e9sabonner\" en bas de chaque email."]} />
                  <TableRow cells={["Droit de r\u00e9tractation", "Retirer votre consentement \u00e0 tout moment.", "R\u00e9pondez \u00e0 un email avec la mention \"RETIRER MON CONSENTEMENT\"."]} />
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-800 text-sm"><strong>D&eacute;lai de r&eacute;ponse :</strong> Nous nous engageons &agrave; r&eacute;pondre &agrave; votre demande sous 1 mois (d&eacute;lai l&eacute;gal RGPD).</p>
            </div>
          </section>

          {/* 7. Comment protégeons-nous vos données ? */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">7. Comment prot&eacute;geons-nous vos donn&eacute;es ?</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous mettons en oeuvre les mesures suivantes pour s&eacute;curiser vos donn&eacute;es :
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "Chiffrement", desc: "Vos donn\u00e9es sont chiffr\u00e9es en transit (HTTPS) et au repos (si h\u00e9berg\u00e9es en UE)." },
                { title: "Acc\u00e8s restreint", desc: "Seuls les membres autoris\u00e9s du bureau peuvent acc\u00e9der \u00e0 vos donn\u00e9es." },
                { title: "Sauvegardes", desc: "Vos donn\u00e9es sont sauvegard\u00e9es quotidiennement et prot\u00e9g\u00e9es contre les pertes." },
                { title: "Sous-traitants conformes", desc: "Nous ne travaillons qu'avec des prestataires conformes au RGPD (h\u00e9bergement en UE, clauses contractuelles)." },
                { title: "Formation", desc: "Les membres de l'association sont form\u00e9s aux bonnes pratiques RGPD." }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Contact */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">8. Contact</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour toute question relative &agrave; la protection de vos donn&eacute;es, contactez notre Responsable RGPD :
            </p>
            <div className="bg-[#0b2a55] text-white rounded-xl p-6">
              <p className="mb-2"><strong>Nom :</strong> Chitrasen LUXIMON</p>
              <p className="mb-2"><strong>Email :</strong> <a href="mailto:rgpd@alt-act.eu" className="text-cyan-300 hover:underline">rgpd@alt-act.eu</a></p>
            </div>
          </section>

          {/* 9. Modifications */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">9. Modifications de cette politique</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Cette politique peut &ecirc;tre mise &agrave; jour pour refl&eacute;ter des changements dans nos pratiques ou la l&eacute;gislation. Nous vous informerons de toute modification significative par email ou via notre site web.
            </p>
          </section>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Derni&egrave;re mise &agrave; jour : 30 juin 2026
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PolitiqueConfidentialite;
