import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Crown,
  Compass,
  Shield,
  Heart,
  Briefcase,
  Mail,
  Linkedin,
  ChevronDown,
  ChevronUp,
  Award,
  Building2,
  Scale,
  Brain,
  Lightbulb,
  Lock,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ============== DONNÉES DES MEMBRES ==============
const COMITES = [
  {
    id: "bureau",
    nom: "Bureau",
    description: "Instance décisionnaire - Représentation légale",
    icon: Crown,
    color: "amber",
    membres: [
      {
        nom: "Chitrasen Luximon",
        fonction: "Président – Représentant légal",
        role: "Décisionnaire",
        soustitre: "Fondateur | Architecte de projets à impact sociétal",
        photo: null,
        bio: `Chitrasen Luximon est un dirigeant engagé dans la transformation des modèles d'insertion professionnelle et dans l'émergence de solutions structurantes face aux mutations profondes du marché du travail. Président et représentant légal de l'association ALT&ACT, il conduit une stratégie orientée vers l'intérêt général, articulant innovation sociale, sécurisation des parcours et développement du capital humain.

Son positionnement dépasse le cadre d'une gouvernance associative classique : il s'inscrit dans une logique d'ingénierie systémique visant à rapprocher les besoins des territoires, les dynamiques économiques et les trajectoires professionnelles des citoyens.`,
        vision: `Il défend une conception moderne de l'employabilité, considérée comme un levier de cohésion sociale, de compétitivité et de stabilité démocratique. Son action contribue à structurer des réponses capables d'anticiper les transformations des compétences, tout en renforçant la capacité d'adaptation des organisations et des individus.`,
        realisations: `Au cours de son parcours, Chitrasen Luximon a accompagné plus de 2 000 personnes dans leurs transitions professionnelles, contribuant à renforcer leur capacité d'action, leur estime de soi et leur inscription durable dans l'emploi. Fondateur d'une structure de conseil spécialisée dans la gestion de carrière et la formation pour adultes, il a conçu et piloté des dispositifs d'accompagnement destinés à des publics hétérogènes.`,
        signature: `Sa démarche repose sur une conviction structurante : la stabilité des sociétés repose en partie sur la capacité des individus à trouver une place reconnue et utile dans le monde professionnel. Son approche conjugue exigence méthodologique, responsabilité éthique et vision de long terme.`,
        formation: ["Master II en ingénierie de la formation et des compétences", "Accréditations en analyse des types psychologiques", "Identification des talents et dynamiques collectives"],
        expertise: ["Gouvernance et direction de projets à impact", "Stratégies d'employabilité et politiques de compétences", "Ingénierie de formation", "Lecture systémique des parcours", "Innovation sociale appliquée au travail", "Pilotage d'écosystèmes partenariaux"]
      },
      {
        nom: "Anne-Marie Schwemmer",
        fonction: "Secrétaire",
        role: "Décisionnaire",
        photo: null,
        bio: "Garante de l'organisation et de la coordination des activités associatives.",
        expertise: ["Organisation", "Coordination", "Administration"]
      },
      {
        nom: "Chitra Dorffer",
        fonction: "Trésorière",
        role: "Décisionnaire",
        photo: null,
        bio: "Responsable de la gestion financière et de la pérennité économique du dispositif.",
        expertise: ["Gestion financière", "Budget", "Contrôle"]
      }
    ]
  },
  {
    id: "direction",
    nom: "Comité de direction",
    description: "Membres fondateurs - Orientations stratégiques",
    icon: Compass,
    color: "teal",
    membres: [
      {
        nom: "Chitrasen Luximon",
        fonction: "Membre fondateur",
        role: "Décisionnaire",
        soustitre: "Architecte de projets à impact sociétal",
        photo: null,
        bio: `Initiateur du projet RE'ACTIF PRO et de la méthode VSI. Son expérience opérationnelle nourrit une lecture stratégique des enjeux liés aux tensions sur les compétences, aux transitions professionnelles accélérées, et à la nécessité de modèles d'accompagnement plus prédictifs et personnalisés.`,
        expertise: ["Innovation", "Insertion professionnelle", "Développement territorial", "Ingénierie de formation"]
      },
      {
        nom: "Chitra Dorffer",
        fonction: "Membre fondatrice",
        role: "Décisionnaire",
        photo: null,
        bio: "Co-fondatrice engagée dans l'inclusion et l'accessibilité.",
        expertise: ["Inclusion", "Accessibilité", "Gestion"]
      },
      {
        nom: "Anne-Marie Schwemmer",
        fonction: "Membre fondatrice",
        role: "Décisionnaire",
        photo: null,
        bio: "Co-fondatrice impliquée dans la structuration du dispositif.",
        expertise: ["Organisation", "Développement", "Partenariats"]
      },
      {
        nom: "Sandrine Ratolojanahary",
        fonction: "Membre fondatrice",
        role: "Décisionnaire",
        photo: null,
        bio: "Co-fondatrice apportant son expertise en accompagnement des publics.",
        expertise: ["Accompagnement", "Formation", "Médiation"]
      },
      {
        nom: "Anthony Ratolojanahary",
        fonction: "Membre fondateur",
        role: "Décisionnaire",
        photo: null,
        bio: "Co-fondateur et expert en technologies et sécurité des données.",
        expertise: ["Cybersécurité", "Technologies", "Protection des données"]
      },
      {
        nom: "Rajwantee Lepain",
        fonction: "Membre fondatrice",
        role: "Décisionnaire",
        photo: null,
        bio: "Co-fondatrice engagée dans la dimension interculturelle du projet.",
        expertise: ["Interculturalité", "Diversité", "Inclusion"]
      },
      {
        nom: "Sébastien Ehlenberger",
        fonction: "Membre fondateur",
        role: "Décisionnaire",
        photo: null,
        bio: "Co-fondateur apportant son expertise en développement et innovation.",
        expertise: ["Développement", "Innovation", "Stratégie"]
      }
    ]
  },
  {
    id: "pilotage",
    nom: "Comité de pilotage",
    description: "Instance consultative - Expertise et conseil",
    icon: Lightbulb,
    color: "purple",
    membres: [
      {
        nom: "Anthony Ratolojanahary",
        fonction: "Cybersécurité & données sensibles",
        role: "Consultatif",
        photo: null,
        bio: "Expert en cybersécurité, il veille à la protection des données personnelles et à la conformité RGPD du dispositif.",
        expertise: ["Cybersécurité", "RGPD", "Protection des données", "Architecture technique"]
      },
      {
        nom: "Dr. Stéphano Vacher",
        fonction: "Stratégie, RSE, innovation responsable",
        role: "Consultatif",
        photo: null,
        bio: "Docteur et expert en stratégie d'entreprise, il accompagne ALT&ACT dans sa démarche RSE et d'innovation responsable.",
        expertise: ["RSE", "Stratégie", "Innovation responsable", "Développement durable"]
      },
      {
        nom: "Marc Avanzo",
        fonction: "Leadership & transformation humaine",
        role: "Consultatif",
        photo: null,
        bio: "Spécialiste du leadership et de la transformation, il apporte son expertise sur l'accompagnement humain et le développement des compétences.",
        expertise: ["Leadership", "Transformation", "Coaching", "Développement personnel"]
      }
    ]
  },
  {
    id: "ethique",
    nom: "Comité de mission éthique",
    description: "Instance indépendante - Garantie éthique",
    icon: Shield,
    color: "green",
    membres: [
      {
        nom: "Jean-Marc Lepain",
        fonction: "Société civile",
        role: "Consultatif indépendant",
        photo: null,
        bio: "Représentant de la société civile, il veille à ce que le dispositif reste ancré dans les réalités sociales et réponde aux besoins des citoyens.",
        expertise: ["Société civile", "Engagement citoyen", "Éthique sociale"]
      },
      {
        nom: "Alexandra Horst",
        fonction: "Psychologue clinicienne",
        role: "Consultatif indépendant",
        photo: null,
        bio: "Psychologue clinicienne, elle apporte son expertise sur les dimensions psychologiques de l'accompagnement et veille au respect de l'intégrité des personnes.",
        expertise: ["Psychologie", "Accompagnement", "Bien-être", "Éthique clinique"]
      },
      {
        nom: "Martine Caillard-Dahl",
        fonction: "Productrice culturelle",
        role: "Consultatif indépendant",
        photo: null,
        bio: "Productrice culturelle, elle enrichit le dispositif de sa vision créative et de son expertise en médiation culturelle.",
        expertise: ["Culture", "Médiation", "Créativité", "Arts"]
      },
      {
        nom: "Laxsounee Bhoodun",
        fonction: "Juriste",
        role: "Consultatif indépendant",
        photo: null,
        bio: "Juriste spécialisée, elle garantit la conformité légale du dispositif et veille au respect des droits des bénéficiaires.",
        expertise: ["Droit", "Conformité", "Protection juridique", "Droits des personnes"]
      }
    ]
  }
];

// ============== COMPOSANT CARTE MEMBRE ==============
const MembreCard = ({ membre, color }) => {
  const [expanded, setExpanded] = useState(false);
  
  const colorClasses = {
    amber: { bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-200" },
    teal: { bg: "bg-teal-100", text: "text-teal-700", border: "border-teal-200" },
    purple: { bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-200" },
    green: { bg: "bg-green-100", text: "text-green-700", border: "border-green-200" }
  };
  
  const colors = colorClasses[color] || colorClasses.teal;
  
  // Générer initiales pour avatar
  const initials = membre.nom.split(' ').map(n => n[0]).join('').slice(0, 2);
  
  return (
    <Card className={`vsi-card hover:shadow-lg transition-all ${expanded ? 'ring-2 ring-offset-2 ring-teal-500' : ''}`}>
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className={`w-16 h-16 rounded-full ${colors.bg} flex items-center justify-center flex-shrink-0`}>
            {membre.photo ? (
              <img src={membre.photo} alt={membre.nom} className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className={`text-xl font-bold ${colors.text}`}>{initials}</span>
            )}
          </div>
          
          {/* Info */}
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-[#1C1917] text-lg">{membre.nom}</h4>
            <p className={`text-sm ${colors.text} font-medium`}>{membre.fonction}</p>
            <Badge variant="outline" className={`mt-1 text-xs ${colors.border} ${colors.text}`}>
              {membre.role}
            </Badge>
          </div>
        </div>
        
        {/* Bio & Expertise (expandable) */}
        <div className="mt-4">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-sm text-[#57534E] hover:text-[#1C1917] transition-colors"
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {expanded ? "Voir moins" : "Voir le profil"}
          </button>
          
          {expanded && (
            <div className="mt-4 space-y-4 animate-fade-in-up">
              <p className="text-sm text-[#57534E] leading-relaxed">
                {membre.bio}
              </p>
              
              <div>
                <p className="text-xs text-[#A8A29E] uppercase tracking-wider mb-2">Domaines d'expertise</p>
                <div className="flex flex-wrap gap-2">
                  {membre.expertise.map((exp, idx) => (
                    <Badge key={idx} variant="secondary" className={`${colors.bg} ${colors.text} text-xs`}>
                      {exp}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// ============== PAGE MEMBRES ==============
export const MembresPage = () => {
  const navigate = useNavigate();
  const [activeComite, setActiveComite] = useState("all");
  
  const filteredComites = activeComite === "all" 
    ? COMITES 
    : COMITES.filter(c => c.id === activeComite);
  
  const colorClasses = {
    amber: { bg: "bg-amber-500", hover: "hover:bg-amber-600", light: "bg-amber-100", text: "text-amber-700" },
    teal: { bg: "bg-teal-500", hover: "hover:bg-teal-600", light: "bg-teal-100", text: "text-teal-700" },
    purple: { bg: "bg-purple-500", hover: "hover:bg-purple-600", light: "bg-purple-100", text: "text-purple-700" },
    green: { bg: "bg-green-500", hover: "hover:bg-green-600", light: "bg-green-100", text: "text-green-700" }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9]" data-testid="membres-page">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Button variant="ghost" onClick={() => navigate("/reactif")} className="text-white hover:bg-white/20 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> RE'ACTIF PRO
          </Button>
          
          <Badge className="mb-4 bg-white/20 text-white">Gouvernance ALT&ACT</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
            Nos Membres
          </h1>
          <p className="text-teal-100 text-lg max-w-2xl">
            Découvrez les femmes et les hommes qui portent la vision d'ALT&ACT et construisent 
            ensemble un dispositif d'insertion professionnelle durable.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Filtres par comité */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <Button
            variant={activeComite === "all" ? "default" : "outline"}
            onClick={() => setActiveComite("all")}
            className={`rounded-full ${activeComite === "all" ? "bg-teal-600 hover:bg-teal-700" : ""}`}
          >
            <Users className="w-4 h-4 mr-2" />
            Tous les membres
          </Button>
          {COMITES.map((comite) => {
            const Icon = comite.icon;
            const colors = colorClasses[comite.color];
            return (
              <Button
                key={comite.id}
                variant={activeComite === comite.id ? "default" : "outline"}
                onClick={() => setActiveComite(comite.id)}
                className={`rounded-full ${activeComite === comite.id ? `${colors.bg} ${colors.hover}` : ""}`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {comite.nom}
              </Button>
            );
          })}
        </div>

        {/* Liste des comités et membres */}
        <div className="space-y-16">
          {filteredComites.map((comite) => {
            const Icon = comite.icon;
            const colors = colorClasses[comite.color];
            
            return (
              <section key={comite.id} className="animate-fade-in-up">
                {/* Header du comité */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${colors.light} flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1C1917]" style={{ fontFamily: 'Fraunces, serif' }}>
                      {comite.nom}
                    </h2>
                    <p className="text-[#57534E]">{comite.description}</p>
                  </div>
                </div>

                {/* Grille des membres */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {comite.membres.map((membre, idx) => (
                    <MembreCard key={idx} membre={membre} color={comite.color} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Section valeurs */}
        <section className="mt-20 bg-gradient-to-r from-teal-50 to-amber-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#1C1917] mb-2" style={{ fontFamily: 'Fraunces, serif' }}>
              Une gouvernance au service de notre mission
            </h3>
            <p className="text-[#57534E] max-w-2xl mx-auto">
              Version institutionnelle – statuts, règlement intérieur et communication alignés
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Éthique", desc: "Respect et intégrité au cœur de nos actions" },
              { icon: Globe, title: "Inclusion", desc: "L'insertion sans barrières pour tous" },
              { icon: Lock, title: "Confiance", desc: "Protection des données et transparence" },
              { icon: Award, title: "Excellence", desc: "Innovation responsable et qualité" }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-white shadow-md flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h4 className="font-semibold text-[#1C1917]">{value.title}</h4>
                  <p className="text-sm text-[#57534E]">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MembresPage;
