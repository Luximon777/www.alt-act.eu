# ALT&ACT Website - Product Requirements Document

## Original Problem Statement
Site web institutionnel pour l'association ALT&ACT, une organisation francaise dediee a l'insertion professionnelle et au developpement du capital humain.

## Core Requirements
1. **Accents francais corrects** - Tout le texte doit afficher correctement les accents francais
2. **Navigation globale** - Barre de navigation presente sur toutes les pages
3. **Images d'en-tete** - Pages Mission/Ambition/Action avec image d'en-tete coherente
4. **Contenu institutionnel** - Pages detaillees pour chaque section (Mission, Action, Espaces, etc.)
5. **Selecteur de langue** - Traduction via Google Translate avec menu deroulant
6. **Menu "Vos acces"** - Dropdown pour les pages Espace Employeurs/Personnel/Ubuntoo
7. **Page Membres** - Profils detailles de tous les membres de la gouvernance

## Tech Stack
- **Frontend**: React + Vite + TailwindCSS
- **Routing**: react-router-dom (HashRouter)
- **Deployment**: Netlify (continuous deployment)
- **i18n**: Google Translate API (custom integration)
- **UI Components**: Shadcn/UI

## Architecture
```
/app/frontend/
├── public/
│   └── index.html (Google Translate script)
├── src/
│   ├── components/
│   │   ├── Navigation.jsx (global nav + language switcher)
│   │   ├── App.js (routing)
│   │   ├── MembresPage.jsx (membres avec profils detailles)
│   │   ├── NotreAction.jsx
│   │   ├── NotreMission.jsx
│   │   ├── NotreAmbition.jsx
│   │   ├── EspacePersonnel.jsx
│   │   ├── EspaceEmployeurs.jsx
│   │   ├── EspaceUbuntoo.jsx
│   │   └── ContactSection.jsx
│   └── components/ui/ (Shadcn components)
├── netlify.toml
└── package.json
```

## Completed Features (December 2025)

### Session 1
- [x] Correction des accents francais sur toutes les pages
- [x] Migration de GitHub Pages vers Netlify
- [x] Navigation globale sur toutes les pages
- [x] Images d'en-tete pour pages Mission/Ambition/Action
- [x] Refonte contenu NotreAction.jsx
- [x] Refonte contenu EspacePersonnel.jsx
- [x] Suppression section reseaux sociaux dans Contact
- [x] Selecteur de langue avec Google Translate
- [x] Menu dropdown "Vos acces"

### Session 2 (Current)
- [x] Ajout Marion Perrin-Pujol au Comite de mission ethique
  - Profil executif complet
  - Vision strategique
  - Realisations
  - Signature professionnelle
  - 8 domaines d'expertise

## Page Members Structure
- **Bureau**: President, Secretaire, Tresoriere
- **Comite de direction**: 7 membres fondateurs
- **Comite de pilotage**: 2 experts consultatifs
- **Comite de mission ethique**: 5 membres consultatifs independants
  - Jean-Marc Lepain (Finances publiques)
  - Alexandra Horst (Psychologie clinique)
  - Martine Caillard-Dahl (Production culturelle)
  - Laxsounee Bhoodun (Juriste)
  - Marion Perrin-Pujol (Enfance et handicap) **NEW**

## Backlog / Future Tasks
- [ ] Migration vers react-i18next pour une meilleure gestion i18n
- [ ] Ajout de photos de profil pour les membres
- [ ] Formulaire de contact fonctionnel
- [ ] Integration backend pour les donnees dynamiques
- [ ] SEO optimization

## Deployment
- **Production URL**: Deployed on Netlify
- **Preview URL**: https://ubuntoo-login.preview.emergentagent.com
- **Config**: netlify.toml at root

## Notes
- Toutes les donnees membres sont hardcodees dans MembresPage.jsx
- Le fichier mock/altactData.js n'existe pas (donnees inline)
- Google Translate utilise une implementation custom (non react-i18next)
