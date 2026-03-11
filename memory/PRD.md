# ALT&ACT - Product Requirements Document

## Original Problem Statement
Site web institutionnel pour ALT&ACT, une association d'intérêt général dédiée à l'insertion professionnelle et au développement des compétences. Déployé sur GitHub Pages.

## Current State (March 2026)
Application React (Create React App, TailwindCSS) avec HashRouter déployée sur GitHub Pages:
- Navigation globale complète sur toutes les pages avec 6 menus déroulants
- Pages de contenu institutionnel complètes
- Pages RE'ACTIF PRO (Présentation, Mission, Actions) avec contenu fourni par l'utilisateur
- Pages Contact et Devenir Membre séparées
- Page Membres avec gouvernance complète
- Page Espace Ubuntoo avec formulaire de connexion (visuel uniquement)
- Thème européen sur la page d'accueil

## What's Been Implemented

### Session du 11/03/2026
- **Pages Contact et Devenir Membre** : Créées comme pages séparées avec Navigation et Footer
  - `ContactPage.jsx` : Formulaire de contact, coordonnées, info particuliers/entreprises
  - `DevenirMembrePage.jsx` : 4 avantages, 3 types d'adhésion, CTA
- **Pages RE'ACTIF PRO** : 3 nouvelles pages avec le contenu texte fourni par l'utilisateur
  - `ReactifProPresentation.jsx` : Présentation du dispositif, coffre-fort numérique, tiers de confiance
  - `ReactifProMission.jsx` : 5 missions (révéler, sécuriser, faciliter, intelligence collective, éthique)
  - `ReactifProActions.jsx` : 5 actions + section vision
- **Navigation mise à jour** :
  - Ajout du dropdown RE'ACTIF PRO (Présentation, Missions, Actions)
  - Contact et Devenir Membre pointent vers des pages séparées (plus d'ancres)
  - Logo corrigé avec `process.env.PUBLIC_URL + '/logo.png'` pour GitHub Pages
  - Suppression du bouton Espace Employeurs du nav (simplifié)
  - Menu mobile mis à jour avec toutes les sections
- **Logo Ubuntoo** : Remplacé par un rendu texte (fichier image inexistant)
- **App.js** : 5 nouvelles routes ajoutées

### Session du 13/02/2025
- Correction des liens Contact et Devenir membre (scrollToSection)
- Ajout du composant Navigation à toutes les pages (10 pages modifiées)
- Ajout de Marc Avanzo au Comité de pilotage
- Thème européen sur la page d'accueil
- Correction du logo et des polices Google Fonts

## Known Issues
- Formulaire de contact non fonctionnel (visuel uniquement, pas de backend email)
- Formulaire de connexion Ubuntoo non fonctionnel (visuel uniquement)

## Backlog

### P1 - Fonctionnalités importantes
- Rendre le formulaire de connexion Ubuntoo fonctionnel (backend requis)
- Rendre le formulaire de contact fonctionnel (intégration email)

### P2 - Améliorations futures
- Refactoriser les données des membres vers `altactData.js`
- Migrer vers une bibliothèque i18n (react-i18next) au lieu de Google Translate
- Nettoyage des fichiers dupliqués dans `/frontend/public/` (copies de composants)

## Technical Architecture

```
/app/frontend/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # Barre de navigation globale (6 dropdowns)
│   │   ├── ContactPage.jsx         # Page contact séparée
│   │   ├── DevenirMembrePage.jsx   # Page devenir membre séparée
│   │   ├── ReactifProPresentation.jsx  # RE'ACTIF PRO - Présentation
│   │   ├── ReactifProMission.jsx       # RE'ACTIF PRO - Missions
│   │   ├── ReactifProActions.jsx       # RE'ACTIF PRO - Actions
│   │   ├── MembresPage.jsx        # Page des membres
│   │   ├── EspaceUbuntoo.jsx      # Page Ubuntoo avec login visuel
│   │   ├── ContactSection.jsx     # Section contact sur homepage
│   │   └── ...
│   └── App.js                     # HashRouter config (19 routes)
├── public/
│   └── logo.png                   # Logo principal
└── package.json
```

## Key Files
- `frontend/src/components/Navigation.jsx` - Navigation avec 6 menus déroulants, logo corrigé
- `frontend/src/App.js` - Configuration des 19 routes avec HashRouter
- `frontend/src/components/ContactPage.jsx` - Page contact dédiée
- `frontend/src/components/DevenirMembrePage.jsx` - Page adhésion dédiée
- `frontend/src/components/ReactifProPresentation.jsx` - Présentation RE'ACTIF PRO
- `frontend/src/components/ReactifProMission.jsx` - Missions RE'ACTIF PRO
- `frontend/src/components/ReactifProActions.jsx` - Actions RE'ACTIF PRO

## Integration Notes
- Google Translate pour traduction (pas de clé API requise)
- Google Fonts pour les polices (Fraunces, Manrope)
- Toutes les données sont hardcodées dans les composants React
- Déploiement sur GitHub Pages (utiliser `process.env.PUBLIC_URL` pour les assets)
