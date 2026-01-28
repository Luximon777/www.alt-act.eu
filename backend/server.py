from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional, Dict, Any
import uuid
from datetime import datetime, timezone
from emergentintegrations.llm.chat import LlmChat, UserMessage

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app
app = FastAPI(title="VSI - Valoriser Son Identité Professionnelle")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# ============== DATA MODELS ==============

# Archéologie des compétences - Référentiel
VERTUS_DATA = {
    "sagesse": {
        "nom": "Sagesse et connaissance",
        "forces": ["Créativité", "Curiosité", "Jugement", "Amour de l'apprentissage", "Perspective"],
        "valeurs": ["Autonomie", "Stimulation", "Réalisation de soi"],
        "qualites": ["Indépendance", "Créativité", "Curiosité", "Ouverture d'esprit", "Audace", "Liberté de pensée"],
        "competences_psy": ["Pensée critique", "Pensée créative", "Prise de décision"],
        "savoirs_etre": ["Faire preuve de curiosité", "Faire preuve de créativité, d'inventivité", "Prendre des initiatives et être force de proposition"],
        "color": "#D97706"
    },
    "courage": {
        "nom": "Courage",
        "forces": ["Bravoure", "Persévérance", "Honnêteté", "Enthousiasme"],
        "valeurs": ["Hédonisme", "Réalisation de soi", "Stimulation"],
        "qualites": ["Joie de vivre", "Optimisme", "Gratitude", "Ambition", "Détermination", "Passion"],
        "competences_psy": ["Gestion du stress", "Résilience", "Estime de soi"],
        "savoirs_etre": ["Faire preuve de persévérance", "Gérer son stress", "Faire preuve de réactivité"],
        "color": "#EF4444"
    },
    "humanite": {
        "nom": "Humanité",
        "forces": ["Amour", "Gentillesse", "Intelligence sociale"],
        "valeurs": ["Bienveillance", "Universalisme", "Affiliation"],
        "qualites": ["Empathie", "Gentillesse", "Générosité", "Altruisme", "Compassion", "Écoute", "Solidarité"],
        "competences_psy": ["Communication efficace", "Compétences relationnelles", "Empathie"],
        "savoirs_etre": ["Être à l'écoute", "Avoir le sens du service", "Travailler en équipe"],
        "color": "#EC4899"
    },
    "justice": {
        "nom": "Justice",
        "forces": ["Travail d'équipe", "Équité", "Leadership"],
        "valeurs": ["Égalité", "Responsabilité sociale", "Pouvoir"],
        "qualites": ["Justice", "Impartialité", "Équité", "Respect des droits", "Intégrité", "Humilité", "Charisme"],
        "competences_psy": ["Prise de décision", "Pensée critique", "Compétences relationnelles"],
        "savoirs_etre": ["Faire preuve de leadership", "Inspirer, donner du sens", "Respecter ses engagements"],
        "color": "#8B5CF6"
    },
    "temperance": {
        "nom": "Tempérance",
        "forces": ["Pardon", "Humilité", "Prudence", "Maîtrise de soi"],
        "valeurs": ["Conformité", "Sécurité", "Tradition"],
        "qualites": ["Respect des règles", "Prudence", "Stabilité", "Patience", "Humilité", "Modération"],
        "competences_psy": ["Gestion des émotions", "Estime de soi", "Résilience"],
        "savoirs_etre": ["Faire preuve de rigueur et de précision", "Organiser son travail selon les priorités"],
        "color": "#0F766E"
    },
    "transcendance": {
        "nom": "Transcendance",
        "forces": ["Appréciation de la beauté", "Gratitude", "Espoir", "Humour", "Spiritualité"],
        "valeurs": ["Universalisme", "Spiritualité", "Bienveillance"],
        "qualites": ["Tolérance", "Ouverture d'esprit", "Sagesse", "Gratitude", "Recherche de sens", "Sérénité"],
        "competences_psy": ["Pensée créative", "Gestion du stress", "Résilience"],
        "savoirs_etre": ["S'adapter aux changements", "Faire preuve d'autonomie"],
        "color": "#3B82F6"
    }
}

# Filières professionnelles
FILIERES_DATA = {
    "industrielle": {
        "nom": "Filière Industrielle",
        "code": "SI",
        "secteurs": ["Mécanique", "Électrotechnique", "Automatisme", "Génie civil", "Chimie", "Métallurgie"],
        "vertus_compatibles": ["temperance", "sagesse", "courage"],
        "description": "Environnement technique, process normés, qualité et sécurité",
        "metiers_types": ["Ingénieur mécanique", "Technicien maintenance", "Opérateur machines-outils", "Soudeur"]
    },
    "btp": {
        "nom": "Filière BTP",
        "code": "SBTP",
        "secteurs": ["Maçonnerie", "Menuiserie", "Plomberie", "Électricité du bâtiment", "Charpenterie"],
        "vertus_compatibles": ["courage", "temperance", "justice"],
        "description": "Travail physique, équipe, contraintes terrain, sécurité",
        "metiers_types": ["Maçon", "Menuisier", "Plombier", "Électricien", "Chef de chantier"]
    },
    "services_personne": {
        "nom": "Filière Services à la Personne",
        "code": "SPSC",
        "secteurs": ["Aide à domicile", "Éducation spécialisée", "Animation socio-culturelle", "Petite enfance", "Accompagnement personnes âgées"],
        "vertus_compatibles": ["humanite", "temperance", "justice"],
        "description": "Relation humaine directe, dimension émotionnelle, responsabilité morale",
        "metiers_types": ["Auxiliaire de vie", "Aide à domicile", "Animateur", "Assistant maternel"]
    },
    "sante_social": {
        "nom": "Filière Santé et Social",
        "code": "SSS",
        "secteurs": ["Infirmier(e)", "Aide-soignant(e)", "Assistant(e) de service social", "Éducateur(trice) spécialisé(e)"],
        "vertus_compatibles": ["humanite", "courage", "justice"],
        "description": "Accompagnement, soin, écoute, responsabilité humaine",
        "metiers_types": ["Infirmier", "Aide-soignant", "Éducateur spécialisé", "Assistant social"]
    },
    "commerce_vente": {
        "nom": "Filière Commerce et Vente",
        "code": "SCV",
        "secteurs": ["Vente en magasin", "Commerce international", "Négociation commerciale", "Marketing"],
        "vertus_compatibles": ["courage", "humanite", "sagesse"],
        "description": "Relation client, objectifs, dynamisme, persuasion",
        "metiers_types": ["Vendeur", "Conseiller clientèle", "Commercial", "Responsable marketing"]
    },
    "hotellerie_restauration": {
        "nom": "Filière Hôtellerie-Restauration",
        "code": "SHR",
        "secteurs": ["Cuisine", "Service en salle", "Hébergement", "Gestion hôtelière"],
        "vertus_compatibles": ["humanite", "courage", "temperance"],
        "description": "Service, rythme soutenu, créativité, accueil",
        "metiers_types": ["Cuisinier", "Serveur", "Réceptionniste", "Chef de rang"]
    },
    "agriculture_agroalimentaire": {
        "nom": "Filière Agriculture et Agroalimentaire",
        "code": "SAA",
        "secteurs": ["Production agricole", "Transformation des produits", "Agroéquipement", "Viticulture"],
        "vertus_compatibles": ["temperance", "transcendance", "courage"],
        "description": "Travail en extérieur, rythme naturel, production",
        "metiers_types": ["Agriculteur", "Ouvrier agricole", "Technicien agroalimentaire", "Viticulteur"]
    },
    "informatique_numerique": {
        "nom": "Filière Informatique et Numérique",
        "code": "SIN",
        "secteurs": ["Développement web et mobile", "Administration systèmes", "Cybersécurité", "Design numérique"],
        "vertus_compatibles": ["sagesse", "temperance", "transcendance"],
        "description": "Innovation, logique, autonomie, évolution permanente",
        "metiers_types": ["Développeur", "Administrateur systèmes", "Designer UX/UI", "Data analyst"]
    },
    "transport_logistique": {
        "nom": "Filière Transport et Logistique",
        "code": "STL",
        "secteurs": ["Conduite routière", "Logistique et gestion des transports", "Manutention"],
        "vertus_compatibles": ["temperance", "courage", "justice"],
        "description": "Flux, délais, sécurité, rigueur, travail d'équipe",
        "metiers_types": ["Cariste", "Préparateur de commandes", "Conducteur routier", "Agent logistique"]
    },
    "artisanat_art": {
        "nom": "Filière Artisanat d'Art",
        "code": "SAAT",
        "secteurs": ["Ébénisterie", "Poterie", "Ferronnerie", "Joaillerie"],
        "vertus_compatibles": ["transcendance", "sagesse", "temperance"],
        "description": "Création, précision, patrimoine, excellence manuelle",
        "metiers_types": ["Ébéniste", "Potier", "Ferronnier d'art", "Joaillier"]
    },
    "communication_medias": {
        "nom": "Filière Communication et Médias",
        "code": "SCM",
        "secteurs": ["Journalisme", "Communication d'entreprise", "Relations publiques", "Audiovisuel"],
        "vertus_compatibles": ["sagesse", "humanite", "transcendance"],
        "description": "Expression, créativité, relations, influence",
        "metiers_types": ["Journaliste", "Chargé de communication", "Community manager", "Réalisateur"]
    }
}

# Questions VSI (12 questions situationnelles)
QUESTIONS_VSI = [
    {
        "id": 1,
        "dimension": "rapport_action",
        "texte": "Vous commencez un nouveau travail. Le premier jour, vous préférez :",
        "options": [
            {"code": "A", "texte": "Observer comment les choses fonctionnent avant d'agir", "vertus": ["sagesse", "temperance"]},
            {"code": "B", "texte": "Tester rapidement par vous-même, quitte à ajuster ensuite", "vertus": ["courage", "sagesse"]},
            {"code": "C", "texte": "Poser beaucoup de questions pour bien comprendre", "vertus": ["sagesse", "humanite"]},
            {"code": "D", "texte": "Vous rendre utile immédiatement là où il y a besoin", "vertus": ["humanite", "courage"]}
        ]
    },
    {
        "id": 2,
        "dimension": "gestion_pression",
        "texte": "Face à une tâche urgente et imprévue, vous avez tendance à :",
        "options": [
            {"code": "A", "texte": "Rester calme et prioriser", "vertus": ["temperance", "sagesse"]},
            {"code": "B", "texte": "Accélérer pour répondre vite", "vertus": ["courage"]},
            {"code": "C", "texte": "Chercher de l'aide ou un avis", "vertus": ["humanite", "justice"]},
            {"code": "D", "texte": "Ressentir une pression forte mais tenir jusqu'au bout", "vertus": ["courage", "temperance"]}
        ]
    },
    {
        "id": 3,
        "dimension": "rapport_cadre",
        "texte": "Dans un environnement très réglementé, vous vous sentez plutôt :",
        "options": [
            {"code": "A", "texte": "En sécurité", "vertus": ["temperance"]},
            {"code": "B", "texte": "Bridé(e)", "vertus": ["sagesse", "transcendance"]},
            {"code": "C", "texte": "Rassuré(e) mais parfois frustré(e)", "vertus": ["temperance", "sagesse"]},
            {"code": "D", "texte": "À l'aise tant que les règles ont du sens", "vertus": ["justice", "sagesse"]}
        ]
    },
    {
        "id": 4,
        "dimension": "rapport_autorite",
        "texte": "Si une consigne vous semble inefficace, vous :",
        "options": [
            {"code": "A", "texte": "L'appliquez quand même", "vertus": ["temperance"]},
            {"code": "B", "texte": "Proposez une amélioration", "vertus": ["sagesse", "courage"]},
            {"code": "C", "texte": "L'adaptez discrètement", "vertus": ["sagesse", "transcendance"]},
            {"code": "D", "texte": "En parlez avant d'agir", "vertus": ["justice", "humanite"]}
        ]
    },
    {
        "id": 5,
        "dimension": "rapport_collectif",
        "texte": "Dans une équipe, vous êtes plutôt la personne qui :",
        "options": [
            {"code": "A", "texte": "Soutient et aide", "vertus": ["humanite"]},
            {"code": "B", "texte": "Organise et structure", "vertus": ["temperance", "justice"]},
            {"code": "C", "texte": "Fait avancer le travail", "vertus": ["courage", "sagesse"]},
            {"code": "D", "texte": "Observe et régule les tensions", "vertus": ["humanite", "temperance"]}
        ]
    },
    {
        "id": 6,
        "dimension": "empathie",
        "texte": "Lorsqu'un collègue est en difficulté, vous :",
        "options": [
            {"code": "A", "texte": "Intervenez spontanément", "vertus": ["humanite", "courage"]},
            {"code": "B", "texte": "Attendez qu'on vous sollicite", "vertus": ["temperance"]},
            {"code": "C", "texte": "Aidez si cela ne désorganise pas votre travail", "vertus": ["temperance", "justice"]},
            {"code": "D", "texte": "Ressentez fortement la situation émotionnellement", "vertus": ["humanite", "transcendance"]}
        ]
    },
    {
        "id": 7,
        "dimension": "motivation",
        "texte": "Vous êtes plus motivé(e) par un travail qui :",
        "options": [
            {"code": "A", "texte": "A du sens humain", "vertus": ["humanite", "transcendance"]},
            {"code": "B", "texte": "Est utile concrètement", "vertus": ["temperance", "justice"]},
            {"code": "C", "texte": "Offre de la stabilité", "vertus": ["temperance"]},
            {"code": "D", "texte": "Permet d'évoluer ou de se dépasser", "vertus": ["courage", "sagesse"]}
        ]
    },
    {
        "id": 8,
        "dimension": "routine",
        "texte": "Quand un travail devient répétitif, vous :",
        "options": [
            {"code": "A", "texte": "Vous adaptez", "vertus": ["temperance", "transcendance"]},
            {"code": "B", "texte": "Vous lassez vite", "vertus": ["sagesse", "courage"]},
            {"code": "C", "texte": "Cherchez à améliorer", "vertus": ["sagesse", "transcendance"]},
            {"code": "D", "texte": "Continuez par sens du devoir", "vertus": ["temperance", "justice"]}
        ]
    },
    {
        "id": 9,
        "dimension": "rapport_erreur",
        "texte": "Face à l'erreur, vous avez tendance à :",
        "options": [
            {"code": "A", "texte": "Vous remettre en question", "vertus": ["sagesse", "humanite"]},
            {"code": "B", "texte": "Minimiser et avancer", "vertus": ["courage"]},
            {"code": "C", "texte": "Ressentir de la culpabilité", "vertus": ["humanite", "temperance"]},
            {"code": "D", "texte": "Chercher à comprendre avant tout", "vertus": ["sagesse", "temperance"]}
        ]
    },
    {
        "id": 10,
        "dimension": "stress",
        "texte": "Quand la pression augmente, vous :",
        "options": [
            {"code": "A", "texte": "Vous repliez", "vertus": ["temperance"]},
            {"code": "B", "texte": "Tenez coûte que coûte", "vertus": ["courage"]},
            {"code": "C", "texte": "Demandez du soutien", "vertus": ["humanite", "justice"]},
            {"code": "D", "texte": "Rationalisez la situation", "vertus": ["sagesse", "temperance"]}
        ]
    },
    {
        "id": 11,
        "dimension": "projection",
        "texte": "Vous vous projetez plus facilement dans un travail :",
        "options": [
            {"code": "A", "texte": "Manuel et concret", "vertus": ["temperance", "courage"]},
            {"code": "B", "texte": "Relationnel", "vertus": ["humanite"]},
            {"code": "C", "texte": "Structuré et organisé", "vertus": ["temperance", "justice"]},
            {"code": "D", "texte": "Créatif ou évolutif", "vertus": ["sagesse", "transcendance"]}
        ]
    },
    {
        "id": 12,
        "dimension": "satisfaction",
        "texte": "À la fin d'une journée de travail réussie, vous vous dites surtout :",
        "options": [
            {"code": "A", "texte": "« J'ai été utile »", "vertus": ["humanite", "justice"]},
            {"code": "B", "texte": "« J'ai fait de mon mieux »", "vertus": ["courage", "temperance"]},
            {"code": "C", "texte": "« Tout était bien organisé »", "vertus": ["temperance", "sagesse"]},
            {"code": "D", "texte": "« J'ai appris quelque chose »", "vertus": ["sagesse", "transcendance"]}
        ]
    }
]


# ============== PYDANTIC MODELS ==============

class QuestionnaireResponse(BaseModel):
    model_config = ConfigDict(extra="ignore")
    birth_date: Optional[str] = None
    answers: Dict[str, str]  # {"1": "A", "2": "B", ...}
    entry_type: str  # "mon_job" ou "un_job"
    target_job: Optional[str] = None  # Pour "un_job"

class ProfileResult(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    timestamp: str
    vertus_scores: Dict[str, float]
    vertus_dominantes: List[str]
    valeurs: List[str]
    qualites_humaines: List[str]
    competences_psychosociales: List[str]
    savoirs_etre: List[str]
    filieres_compatibles: List[Dict[str, Any]]
    recommandations_ia: Optional[str] = None
    entry_type: str
    target_job: Optional[str] = None

class JobMatchRequest(BaseModel):
    job_name: str
    profile_id: str


# ============== HELPER FUNCTIONS ==============

def calculate_profile(answers: Dict[str, str]) -> Dict[str, Any]:
    """Calculate vertu scores from questionnaire answers"""
    vertus_count = {v: 0 for v in VERTUS_DATA.keys()}
    
    for q_id_str, answer_code in answers.items():
        q_id = int(q_id_str)
        question = next((q for q in QUESTIONS_VSI if q["id"] == q_id), None)
        if question:
            option = next((o for o in question["options"] if o["code"] == answer_code), None)
            if option:
                for vertu in option["vertus"]:
                    vertus_count[vertu] += 1
    
    # Normalize scores to percentages
    total = sum(vertus_count.values()) or 1
    vertus_scores = {v: round((c / total) * 100, 1) for v, c in vertus_count.items()}
    
    # Get top 3 vertus
    sorted_vertus = sorted(vertus_scores.items(), key=lambda x: x[1], reverse=True)
    vertus_dominantes = [v[0] for v in sorted_vertus[:3]]
    
    # Collect qualities, competences, savoirs-etre, valeurs from dominant vertus
    qualites = []
    competences = []
    savoirs_etre = []
    valeurs = []
    
    for vertu in vertus_dominantes:
        data = VERTUS_DATA[vertu]
        qualites.extend(data["qualites"][:3])
        competences.extend(data["competences_psy"])
        savoirs_etre.extend(data["savoirs_etre"])
        valeurs.extend(data["valeurs"])
    
    # Remove duplicates while preserving order
    qualites = list(dict.fromkeys(qualites))[:8]
    competences = list(dict.fromkeys(competences))[:6]
    savoirs_etre = list(dict.fromkeys(savoirs_etre))[:6]
    valeurs = list(dict.fromkeys(valeurs))[:6]
    
    return {
        "vertus_scores": vertus_scores,
        "vertus_dominantes": vertus_dominantes,
        "valeurs": valeurs,
        "qualites_humaines": qualites,
        "competences_psychosociales": competences,
        "savoirs_etre": savoirs_etre
    }


def get_compatible_filieres(vertus_dominantes: List[str]) -> List[Dict[str, Any]]:
    """Get compatible professional sectors based on dominant virtues"""
    filiere_scores = []
    
    for filiere_id, filiere in FILIERES_DATA.items():
        score = 0
        for vertu in vertus_dominantes:
            if vertu in filiere["vertus_compatibles"]:
                # Higher score for first position in vertus_compatibles
                idx = filiere["vertus_compatibles"].index(vertu)
                score += (3 - idx)
        
        if score > 0:
            filiere_scores.append({
                "id": filiere_id,
                "nom": filiere["nom"],
                "code": filiere["code"],
                "description": filiere["description"],
                "secteurs": filiere["secteurs"],
                "metiers_types": filiere["metiers_types"],
                "score": score
            })
    
    # Sort by score and return top 5
    filiere_scores.sort(key=lambda x: x["score"], reverse=True)
    return filiere_scores[:5]


async def generate_ai_recommendations(profile: Dict[str, Any], entry_type: str, target_job: Optional[str] = None) -> str:
    """Generate personalized AI recommendations using OpenAI"""
    try:
        api_key = os.environ.get('EMERGENT_LLM_KEY')
        if not api_key:
            return "Recommandations IA non disponibles."
        
        chat = LlmChat(
            api_key=api_key,
            session_id=f"vsi-{uuid.uuid4()}",
            system_message="""Tu es un conseiller en orientation professionnelle bienveillant et expert.
Tu analyses les profils de personnalité et compétences pour donner des conseils personnalisés.
Tu t'exprimes en français, de manière chaleureuse et encourageante.
Tu ne typologies jamais les personnes mais tu valorises leurs forces.
Tes recommandations sont concrètes et actionnables."""
        ).with_model("openai", "gpt-4o")
        
        vertus_names = [VERTUS_DATA[v]["nom"] for v in profile["vertus_dominantes"]]
        
        if entry_type == "mon_job":
            prompt = f"""Analyse ce profil professionnel et donne des recommandations personnalisées (3-4 paragraphes max):

**Vertus dominantes:** {', '.join(vertus_names)}
**Qualités humaines:** {', '.join(profile['qualites_humaines'])}
**Compétences psychosociales:** {', '.join(profile['competences_psychosociales'])}
**Savoirs-être professionnels:** {', '.join(profile['savoirs_etre'])}
**Filières compatibles:** {', '.join([f['nom'] for f in profile.get('filieres_compatibles', [])[:3]])}

Donne:
1. Une synthèse valorisante de l'identité professionnelle
2. Les environnements de travail où cette personne s'épanouira
3. Des conseils concrets pour la recherche d'emploi
4. Un point de vigilance bienveillant"""
        else:
            prompt = f"""Cette personne vise le métier de: {target_job}

Son profil:
**Vertus dominantes:** {', '.join(vertus_names)}
**Qualités humaines:** {', '.join(profile['qualites_humaines'])}
**Compétences:** {', '.join(profile['competences_psychosociales'])}

Analyse l'adéquation entre le profil et ce métier (3-4 paragraphes):
1. Points d'appui (ce qui correspond bien)
2. Points de vigilance (ce qui peut demander un effort d'adaptation)
3. Conseils pour réussir dans ce métier
4. Alternatives si le métier ne correspond pas parfaitement"""
        
        user_message = UserMessage(text=prompt)
        response = await chat.send_message(user_message)
        return response
        
    except Exception as e:
        logging.error(f"Error generating AI recommendations: {e}")
        return "Recommandations IA temporairement indisponibles."


# ============== API ROUTES ==============

@api_router.get("/")
async def root():
    return {"message": "VSI API - Valoriser Son Identité Professionnelle"}

@api_router.get("/questions")
async def get_questions():
    """Get all VSI questionnaire questions"""
    return {"questions": QUESTIONS_VSI}

@api_router.get("/vertus")
async def get_vertus():
    """Get all vertus reference data"""
    return {"vertus": VERTUS_DATA}

@api_router.get("/filieres")
async def get_filieres():
    """Get all professional sectors"""
    return {"filieres": FILIERES_DATA}

@api_router.post("/analyze", response_model=ProfileResult)
async def analyze_questionnaire(data: QuestionnaireResponse):
    """Analyze questionnaire responses and generate profile"""
    
    # Calculate profile from answers
    profile = calculate_profile(data.answers)
    
    # Get compatible sectors
    filieres = get_compatible_filieres(profile["vertus_dominantes"])
    profile["filieres_compatibles"] = filieres
    
    # Generate AI recommendations
    recommendations = await generate_ai_recommendations(
        profile, 
        data.entry_type, 
        data.target_job
    )
    
    # Create result
    result = ProfileResult(
        timestamp=datetime.now(timezone.utc).isoformat(),
        vertus_scores=profile["vertus_scores"],
        vertus_dominantes=profile["vertus_dominantes"],
        qualites_humaines=profile["qualites_humaines"],
        competences_psychosociales=profile["competences_psychosociales"],
        savoirs_etre=profile["savoirs_etre"],
        filieres_compatibles=filieres,
        recommandations_ia=recommendations,
        entry_type=data.entry_type,
        target_job=data.target_job
    )
    
    # Save to database (anonymously)
    doc = result.model_dump()
    await db.vsi_profiles.insert_one(doc)
    
    return result

@api_router.get("/metiers/{filiere_id}")
async def get_metiers_by_filiere(filiere_id: str):
    """Get jobs for a specific sector"""
    filiere = FILIERES_DATA.get(filiere_id)
    if not filiere:
        raise HTTPException(status_code=404, detail="Filière non trouvée")
    
    return {
        "filiere": filiere["nom"],
        "metiers": filiere["metiers_types"],
        "secteurs": filiere["secteurs"]
    }

@api_router.get("/stats")
async def get_stats():
    """Get anonymous usage statistics"""
    total_profiles = await db.vsi_profiles.count_documents({})
    mon_job_count = await db.vsi_profiles.count_documents({"entry_type": "mon_job"})
    un_job_count = await db.vsi_profiles.count_documents({"entry_type": "un_job"})
    
    return {
        "total_profiles": total_profiles,
        "mon_job": mon_job_count,
        "un_job": un_job_count
    }


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
