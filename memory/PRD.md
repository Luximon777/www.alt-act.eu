# ALT&ACT - Product Requirements Document

## Original Problem Statement
Site web institutionnel pour ALT&ACT, une association d'intérêt général dédiée à l'insertion professionnelle et au développement des compétences. Déployé sur GitHub Pages.

## Current State (February 2025)
Application React (Create React App, TailwindCSS) avec HashRouter déployée sur GitHub Pages:
- Navigation globale complète sur toutes les pages
- Pages de contenu institutionnel
- Page Membres avec gouvernance complète
- Page Espace Ubuntoo avec formulaire de connexion (visuel uniquement)
- Thème européen sur la page d'accueil

## What's Been Implemented

### Session du 13/02/2025
- **Correction des liens Contact et Devenir membre**
  - Modifié `scrollToSection` dans `Navigation.jsx` pour gérer la navigation depuis n'importe quelle page
  - Ajouté le composant `Navigation` à toutes les pages du site (10 pages modifiées)
  - Les liens fonctionnent maintenant depuis n'importe quelle page du site

### Pages modifiées pour inclure Navigation:
- `VisionMethode.jsx`
- `CharteEthique.jsx`
- `MembresPage.jsx`
- `MotPresident.jsx`
- `GouvernanceConsultative.jsx`
- `ConseilsAccompagnement.jsx`
- `EspacePersonnel.jsx`
- `EspaceUbuntoo.jsx`
- `MentionsLegales.jsx`
- `PolitiqueConfidentialite.jsx`

### Sessions précédentes
- Ajout de Marc Avanzo au Comité de pilotage
- Thème européen sur la page d'accueil (badge + étoiles animées)
- Correction du logo sur la page d'accueil
- Correction des polices Google Fonts

## Known Issues

### P2 - Logo Ubuntoo (URL externe)
- **Problème**: Le logo utilise une URL externe temporaire
- **Cause**: Espace dans le nom du fichier (`logo ubuntoo.png`)
- **Solution**: Renommer en `logo-ubuntoo.png` et mettre à jour le chemin dans `EspaceUbuntoo.jsx`

## Backlog

### P1 - Fonctionnalités importantes
- Rendre le formulaire de connexion Ubuntoo fonctionnel (backend requis)

### P2 - Améliorations futures
- Corriger le chemin du logo Ubuntoo (renommer fichier)
- Refactoriser les données des membres vers `altactData.js`
- Migrer vers une bibliothèque i18n (react-i18next) au lieu de Google Translate

## Technical Architecture

```
/app/frontend/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx     # Barre de navigation globale
│   │   ├── MembresPage.jsx    # Page des membres
│   │   ├── EspaceUbuntoo.jsx  # Page Ubuntoo avec login visuel
│   │   ├── ContactSection.jsx # Section contact (#contact, #membre)
│   │   └── ...
│   └── App.js                  # HashRouter config
├── public/
│   ├── logo.png               # Logo principal
│   └── logo ubuntoo.png       # À renommer
└── package.json
```

## Key Files
- `frontend/src/components/Navigation.jsx` - Navigation avec menus déroulants et scrollToSection amélioré
- `frontend/src/components/ContactSection.jsx` - Contient les sections #contact et #membre
- `frontend/src/App.js` - Configuration des routes avec HashRouter

## Integration Notes
- Google Translate pour traduction (pas de clé API requise)
- Google Fonts pour les polices (Fraunces, Manrope)
- Toutes les données sont hardcodées dans les composants React
- Déploiement sur GitHub Pages (utiliser `process.env.PUBLIC_URL` pour les assets)
