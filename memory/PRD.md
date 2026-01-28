# VSI + RE'ACTIF PRO - Plateforme d'Insertion Professionnelle

## Problem Statement
Création d'une plateforme web complète pour l'insertion et reconversion professionnelle, composée de:
1. **VSI** (Valoriser Son Identité Professionnelle) - Diagnostic/questionnaire
2. **RE'ACTIF PRO** - Étape 2: Transformation du diagnostic en actions concrètes

## User Personas
- Demandeurs d'emploi (France Travail)
- Personnes en reconversion professionnelle
- Jeunes en orientation / Seniors / RQTH
- Services RH (mobilité, transition, sécurisation)
- Partenaires sociaux (missions locales, organismes formation, ESS)

## Core Requirements

### VSI (Étape 1 - Diagnostic)
- 2 portes d'entrée: "Je cherche MON job" / "Je cherche UN job"
- Questionnaire 12 questions situationnelles (MBTI/Ennéagramme)
- Génération profil: vertus, valeurs, qualités, compétences, savoirs-être
- Matching filières professionnelles
- Recommandations IA (OpenAI GPT-4o)
- Export PDF

### RE'ACTIF PRO (Étape 2 - Action)
- 3 entrées utilisateurs: Particuliers / Services RH / Partenaires sociaux
- Parcours Particuliers en 4 étapes: Comprendre → Clarifier → Consolider → Agir
- Plan d'action personnalisé 30/60/90 jours (généré par IA)
- Indicateurs d'impact (clarification, mise en action, posture, satisfaction)
- Formulaires contact RH et Partenaires

## Architecture
- **Frontend**: React + Tailwind CSS + shadcn/ui
- **Backend**: FastAPI + MongoDB
- **IA**: OpenAI GPT-4o via Emergent LLM Key
- **PDF**: jsPDF côté client

## What's Been Implemented (Jan 28, 2026)

### VSI ✅
- Page d'accueil avec 2 portes d'entrée visuelles
- Questionnaire interactif 12 questions
- Système de scoring des vertus (6 vertus Seligman & Peterson)
- Valeurs Schwartz intégrées
- Matching filières professionnelles (11 filières)
- Intégration OpenAI pour recommandations personnalisées
- Page résultats complète avec disclaimer
- Export PDF fonctionnel
- Mentions "Inspiré de Seligman, Shalom Schwartz, C.G. Jung, OMS"

### RE'ACTIF PRO ✅
- Page accueil avec 3 entrées utilisateurs
- Parcours Particuliers complet (4 étapes)
- Génération plan d'action IA (30/60/90 jours)
- Page Services RH avec formulaire contact
- Page Partenaires avec indicateurs d'impact + formulaire
- Lien fluide VSI → RE'ACTIF PRO avec profile ID
- Design cohérent avec VSI

## API Endpoints
- `/api/questions` - Questions VSI
- `/api/analyze` - Analyse questionnaire + profil
- `/api/reactif/profile/{id}` - Récupération profil
- `/api/reactif/plan-action` - Génération plan d'action
- `/api/reactif/contact` - Formulaires contact
- `/api/reactif/impact` - Statistiques d'impact

## Backlog / Future Features
- P0: Aucun item critique
- P1: Graphique radar vertus
- P1: Historique des plans d'action
- P2: Espace RH avec gestion collaborateurs
- P2: Dashboard partenaires avec données réelles
- P2: Multi-langue (EN, ES)
- P3: Intégration France Travail API
- P3: Application mobile native
