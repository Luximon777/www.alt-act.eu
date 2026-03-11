# ALT&ACT - Product Requirements Document

## Original Problem Statement
Site web institutionnel pour ALT&ACT, une association d'intérêt général dédiée à l'insertion professionnelle et au développement des compétences. Déployé sur GitHub Pages.

## Current State (Feb 2026)
Application React (Create React App, TailwindCSS) avec HashRouter + Backend FastAPI:
- Navigation globale complète sur toutes les pages avec 6 menus déroulants
- Pages de contenu institutionnel complètes
- Pages RE'ACTIF PRO (Présentation, Mission, Actions) avec contenu fourni par l'utilisateur
- Pages Contact et Devenir Membre avec formulaires fonctionnels (envoi email via SMTP OVH)
- Page Membres avec gouvernance complète
- Page Espace Ubuntoo avec formulaire de connexion (visuel uniquement)
- Backend FastAPI avec endpoints VSI, RE'ACTIF PRO et envoi d'emails

## What's Been Implemented

### Session Feb 2026 (current)
- **Formulaires Contact et Devenir Membre fonctionnels** :
  - Backend: endpoints POST `/api/contact` et POST `/api/adhesion` avec envoi SMTP via OVH (ssl0.ovh.net:465)
  - Emails envoyés à: alt-act@outlook.fr et ck.luximon@alt-act.eu
  - Frontend: formulaires avec états loading/success/error, validation HTML5
  - Soumissions sauvegardées en base MongoDB (collection form_submissions)
  - Tests: 100% backend (15/15), 100% frontend (9/9)

### Previous Sessions
- Navigation avec 6 menus déroulants, logo corrigé pour GitHub Pages
- Pages Contact et Devenir Membre créées
- Pages RE'ACTIF PRO (Présentation, Mission, Actions, Charte IA)
- Backend VSI avec questionnaire, profils, plans d'action IA
- Thème européen sur la page d'accueil
- Logo Ubuntoo et RE'ACTIF PRO traités

## Known Issues
- Formulaire de connexion Ubuntoo non fonctionnel (visuel uniquement)
- Logo GitHub Pages: vérification utilisateur en attente

## Backlog

### P1 - Fonctionnalités importantes
- Rendre le formulaire de connexion Ubuntoo fonctionnel

### P2 - Améliorations futures
- Refactoriser les données des membres vers un fichier dédié
- Migrer vers react-i18next au lieu de Google Translate
- Nettoyage des fichiers dupliqués dans /frontend/public/

## Technical Architecture

```
/app/
├── backend/
│   ├── server.py          # FastAPI (VSI, RE'ACTIF PRO, email endpoints)
│   ├── .env               # SMTP OVH config, MongoDB, LLM key
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation.jsx
│   │   │   ├── ContactPage.jsx         # POST /api/contact
│   │   │   ├── DevenirMembrePage.jsx   # POST /api/adhesion
│   │   │   └── ...
│   │   └── App.js                      # HashRouter config
│   └── .env                            # REACT_APP_BACKEND_URL
└── memory/PRD.md
```

## Key API Endpoints
- POST /api/contact - Envoi formulaire contact (SMTP OVH)
- POST /api/adhesion - Envoi formulaire adhésion (SMTP OVH)
- POST /api/analyze - Analyse questionnaire VSI
- GET /api/questions - Questions VSI
- GET /api/vertus - Référentiel vertus
- GET /api/filieres - Filières professionnelles

## Integration Notes
- SMTP OVH (ssl0.ovh.net:465) pour l'envoi d'emails
- Emergent LLM Key pour recommandations IA (GPT-4o)
- Google Translate pour traduction
- Google Fonts (Fraunces, Manrope)
