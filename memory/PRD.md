# VSI - Valoriser Son Identité Professionnelle

## Problem Statement
Création d'une plateforme web/mobile pour l'insertion et reconversion professionnelle, basée sur:
- Archéologie des compétences (Seligman, Schwartz, OMS)
- Matrice filières × compétences humaines
- Questionnaire MBTI/Ennéagramme fusionné

## User Personas
- Demandeurs d'emploi France Travail
- Personnes en reconversion professionnelle
- Jeunes en orientation
- Seniors
- Personnes RQTH
- Tout public en projet d'insertion

## Core Requirements
- 2 portes d'entrée anonymes: "Je cherche MON job" / "Je cherche UN job"
- Questionnaire 12 questions situationnelles
- Génération profil: vertus, valeurs, qualités, compétences
- Matching filières professionnelles
- Recommandations IA personnalisées
- Export PDF

## Architecture
- **Frontend**: React + Tailwind CSS + shadcn/ui
- **Backend**: FastAPI + MongoDB
- **IA**: OpenAI GPT-4o via Emergent LLM Key
- **PDF**: jsPDF côté client

## What's Been Implemented (Jan 27, 2026)
✅ Page d'accueil avec 2 portes d'entrée visuelles
✅ Questionnaire interactif 12 questions
✅ Système de scoring des vertus
✅ Matching filières professionnelles (11 filières)
✅ Intégration OpenAI pour recommandations personnalisées
✅ Page résultats complète (vertus, qualités, compétences, filières)
✅ Export PDF fonctionnel
✅ Design moderne (Fraunces + Manrope fonts)
✅ 100% anonyme

## Data Models
- 6 Vertus (Seligman & Peterson)
- Valeurs universelles (Schwartz)
- 11 Filières professionnelles avec métiers
- 12 Questions VSI situationnelles

## Backlog / Future Features
- P0: Aucun item critique restant
- P1: Graphique radar pour visualisation des vertus
- P1: Historique des profils (optionnel, avec consentement)
- P2: Mode sombre
- P2: Multi-langue (EN, ES)
- P2: Intégration France Travail API
- P3: Application mobile native
