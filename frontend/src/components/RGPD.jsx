import React, { useEffect } from 'react';
import { ArrowLeft, Shield, FileText, Users, Clock, Lock, Mail, Database, CheckCircle, AlertTriangle, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

const RGPD = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

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
    <div className="min-h-screen bg-gray-50" data-testid="rgpd-page">
      <Navigation />
      <header className="bg-gradient-to-r from-[#0b2a55] to-[#1a4280] text-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" onClick={() => navigate('/')} className="text-white hover:bg-white/20 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />Retour
          </Button>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-10 h-10" />
            <h1 className="text-3xl md:text-4xl font-bold">RGPD</h1>
          </div>
          <p className="text-blue-200 text-lg">Protection des donn&eacute;es et conformit&eacute; r&eacute;glementaire</p>
          <p className="text-blue-300 text-sm mt-2">Derni&egrave;re mise &agrave; jour : 30 juin 2026</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10">

          {/* Introduction */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">Engagement RGPD d'ALT&ACT</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              ALT&ACT s'engage pleinement dans une d&eacute;marche de conformit&eacute; au R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es (RGPD) et &agrave; la loi fran&ccedil;aise Informatique et Libert&eacute;s. Cette page d&eacute;taille nos pratiques en mati&egrave;re de conservation des donn&eacute;es, vos droits, ainsi que nos processus internes de documentation.
            </p>
          </section>

          {/* Durée de conservation */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">1. Dur&eacute;e de conservation des donn&eacute;es</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conform&eacute;ment aux recommandations de la CNIL, ALT&ACT applique des dur&eacute;es de conservation proportionn&eacute;es &agrave; la finalit&eacute; de chaque traitement.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
              <table className="w-full">
                <thead><TableRow isHeader cells={["Contexte", "Dur\u00e9e de conservation"]} /></thead>
                <tbody>
                  <TableRow cells={["Prospects (non-membres)", "3 ans \u00e0 compter du dernier contact, puis suppression automatique. Si la personne devient membre, les donn\u00e9es sont conserv\u00e9es pendant la dur\u00e9e de l'adh\u00e9sion + 1 an."]} />
                  <TableRow cells={["Membres actifs", "Dur\u00e9e de l'adh\u00e9sion + 2 ans pour des statistiques anonymis\u00e9es, conform\u00e9ment aux obligations l\u00e9gales."]} />
                  <TableRow cells={["Donn\u00e9es de paiement", "10 ans (obligation l\u00e9gale comptable fran\u00e7aise)."]} />
                  <TableRow cells={["Participants aux ateliers", "6 mois apr\u00e8s l'\u00e9v\u00e9nement."]} />
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-800 text-sm font-semibold">R&egrave;gles appliqu&eacute;es :</p>
              </div>
              <ul className="text-gray-700 text-sm ml-7 space-y-1 list-disc">
                <li>Aucune donn&eacute;e n'est conserv&eacute;e ind&eacute;finiment.</li>
                <li>3 ans pour le d&eacute;marchage associatif (recommandation CNIL).</li>
                <li>Dur&eacute;e de l'adh&eacute;sion + 1 an pour la gestion administrative.</li>
                <li>Suppression automatis&eacute;e &agrave; l'issue de chaque p&eacute;riode.</li>
              </ul>
            </div>
          </section>

          {/* Droits RGPD */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">2. Vos droits RGPD</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es, vous disposez des droits suivants sur vos donn&eacute;es personnelles :
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full">
                <thead><TableRow isHeader cells={["Droit", "Description", "Comment l'exercer"]} /></thead>
                <tbody>
                  <TableRow cells={["Droit d'acc\u00e8s", "Demander une copie de vos donn\u00e9es trait\u00e9es par ALT&ACT.", "Envoyez un email \u00e0 rgpd@alt-act.eu avec une pi\u00e8ce d'identit\u00e9."]} />
                  <TableRow cells={["Droit de rectification", "Corriger ou mettre \u00e0 jour vos informations (ex: changement d'email).", "R\u00e9pondez \u00e0 nos emails ou contactez-nous."]} />
                  <TableRow cells={["Droit \u00e0 l'effacement", "Supprimer vos donn\u00e9es de nos syst\u00e8mes (sauf obligation l\u00e9gale).", "Envoyez un email \u00e0 rgpd@alt-act.eu."]} />
                  <TableRow cells={["Droit \u00e0 la limitation", "Limiter le traitement de vos donn\u00e9es (ex: suspendre les envois d'emails).", "Cliquez sur \"Se d\u00e9sabonner\" en bas de nos emails."]} />
                  <TableRow cells={["Droit \u00e0 la portabilit\u00e9", "R\u00e9cup\u00e9rer vos donn\u00e9es dans un format structur\u00e9 (CSV, JSON).", "Demandez par email \u00e0 rgpd@alt-act.eu."]} />
                  <TableRow cells={["Droit d'opposition", "Refuser que vos donn\u00e9es soient utilis\u00e9es pour le d\u00e9marchage.", "Cliquez sur \"Se d\u00e9sabonner\" en bas de chaque email."]} />
                  <TableRow cells={["Droit de r\u00e9tractation", "Retirer votre consentement \u00e0 tout moment.", "R\u00e9pondez \u00e0 un email avec la mention \"RETIRER MON CONSENTEMENT\"."]} />
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-800 text-sm"><strong>D&eacute;lai de r&eacute;ponse :</strong> ALT&ACT s'engage &agrave; r&eacute;pondre &agrave; votre demande sous 1 mois (d&eacute;lai l&eacute;gal RGPD).</p>
                <p className="text-gray-800 text-sm mt-1"><strong>Contact RGPD :</strong> <a href="mailto:rgpd@alt-act.eu" className="text-[#0b2a55] hover:underline">rgpd@alt-act.eu</a></p>
              </div>
            </div>
          </section>

          {/* Registre des traitements */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">3. Registre des traitements</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conform&eacute;ment &agrave; l'article 30 du RGPD, ALT&ACT tient un registre de l'ensemble de ses traitements de donn&eacute;es personnelles.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-[#0b2a55] text-white">
                    <th className="px-3 py-2 text-left font-semibold">Traitement</th>
                    <th className="px-3 py-2 text-left font-semibold">Finalit&eacute;</th>
                    <th className="px-3 py-2 text-left font-semibold">Base l&eacute;gale</th>
                    <th className="px-3 py-2 text-left font-semibold">Donn&eacute;es</th>
                    <th className="px-3 py-2 text-left font-semibold">Dur&eacute;e</th>
                    <th className="px-3 py-2 text-left font-semibold">Sous-traitants</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2">Collecte d'emails RE'ACTIF PRO</td>
                    <td className="px-3 py-2">Recontacter les personnes int&eacute;ress&eacute;es</td>
                    <td className="px-3 py-2">Consentement (Art. 6.1.a)</td>
                    <td className="px-3 py-2">Nom, pr&eacute;nom, email</td>
                    <td className="px-3 py-2">3 ans ou jusqu'au d&eacute;sabonnement</td>
                    <td className="px-3 py-2">Gmail, Mailchimp</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2">Gestion des adh&eacute;sions</td>
                    <td className="px-3 py-2">Enregistrer les membres et g&eacute;rer les cotisations</td>
                    <td className="px-3 py-2">Ex&eacute;cution d'un contrat (Art. 6.1.b)</td>
                    <td className="px-3 py-2">Nom, pr&eacute;nom, email, adresse, t&eacute;l&eacute;phone</td>
                    <td className="px-3 py-2">Adh&eacute;sion + 1 an</td>
                    <td className="px-3 py-2">HelloAsso</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2">Envoi de newsletters</td>
                    <td className="px-3 py-2">Informer des actualit&eacute;s RE'ACTIF PRO</td>
                    <td className="px-3 py-2">Consentement (Art. 6.1.a)</td>
                    <td className="px-3 py-2">Email, pr&eacute;nom</td>
                    <td className="px-3 py-2">Jusqu'au d&eacute;sabonnement</td>
                    <td className="px-3 py-2">Mailchimp</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2">Organisation d'ateliers</td>
                    <td className="px-3 py-2">G&eacute;rer inscriptions et participation</td>
                    <td className="px-3 py-2">Consentement (Art. 6.1.a)</td>
                    <td className="px-3 py-2">Nom, pr&eacute;nom, email, t&eacute;l&eacute;phone</td>
                    <td className="px-3 py-2">6 mois apr&egrave;s l'atelier</td>
                    <td className="px-3 py-2">Google Forms</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm italic">Responsable des traitements : Chitrasen LUXIMON. Registre mis &agrave; jour le 30 juin 2026.</p>
          </section>

          {/* Contact RGPD */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">4. Contact RGPD</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour toute question relative &agrave; la protection de vos donn&eacute;es personnelles, contactez notre responsable RGPD :
            </p>
            <div className="bg-[#0b2a55] text-white rounded-xl p-6 space-y-2">
              <p><strong>Responsable RGPD :</strong> Chitrasen LUXIMON</p>
              <p><strong>Email :</strong> <a href="mailto:rgpd@alt-act.eu" className="text-cyan-300 hover:underline">rgpd@alt-act.eu</a></p>
              <p><strong>T&eacute;l&eacute;phone :</strong> <a href="tel:+33658165883" className="text-cyan-300 hover:underline">06 58 16 58 83</a></p>
            </div>
          </section>

          {/* Publication des documents */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">5. Publication des documents</h2>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full">
                <thead><TableRow isHeader cells={["Document", "O\u00f9 le consulter", "Format"]} /></thead>
                <tbody>
                  <TableRow cells={["Registre des traitements", "Document interne (partag\u00e9 avec le bureau, non public).", "Excel, Google Sheets, PDF"]} />
                  <TableRow cells={["Politique de confidentialit\u00e9", "Public : cette page, lien dans les emails, mentions l\u00e9gales.", "Page web, PDF t\u00e9l\u00e9chargeable"]} />
                  <TableRow cells={["Preuves de consentement", "Interne : dossier s\u00e9curis\u00e9 \u00e0 acc\u00e8s restreint.", "PDF, base de donn\u00e9es"]} />
                </tbody>
              </table>
            </div>
          </section>

          {/* Ressources */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-[#0b2a55]" />
              <h2 className="text-2xl font-bold text-gray-900">6. Ressources utiles</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <a href="https://www.cnil.fr/fr/rgpd-par-ou-commencer" target="_blank" rel="noopener noreferrer" className="bg-blue-50 rounded-xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors block">
                <h4 className="font-semibold text-[#0b2a55] mb-1">Guide CNIL pour les associations</h4>
                <p className="text-gray-600 text-sm">Conseils pratiques pour la mise en conformit&eacute; RGPD.</p>
              </a>
              <a href="https://www.cnil.fr/fr/RGDP-le-registre-des-activites-de-traitement" target="_blank" rel="noopener noreferrer" className="bg-blue-50 rounded-xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors block">
                <h4 className="font-semibold text-[#0b2a55] mb-1">Mod&egrave;le de registre CNIL</h4>
                <p className="text-gray-600 text-sm">T&eacute;l&eacute;chargez le mod&egrave;le officiel de registre des traitements.</p>
              </a>
            </div>
          </section>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-gray-500 text-sm">Derni&egrave;re mise &agrave; jour : 30 juin 2026</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RGPD;
