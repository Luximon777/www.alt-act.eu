# ALT&ACT - Product Requirements Document

## Original Problem Statement
Site web institutionnel pour ALT&ACT, une association d'intérêt général dédiée à l'insertion professionnelle et au développement des compétences.

## Current State (December 2024)
Application React (Vite, TailwindCSS) déployée sur Netlify avec:
- Navigation globale
- Pages de contenu institutionnel
- Page Membres avec gouvernance complète
- Page Espace Ubuntoo avec formulaire de connexion (visuel uniquement)

## What's Been Implemented

### Session du 13/12/2024
- **Ajout de Marc Avanzo** au Comité de pilotage dans `MembresPage.jsx`
  - Profil complet avec bio, vision stratégique, réalisations, signature professionnelle
  - Formation : Supélec, INSEAD MBA, ICF PCC, Communication Non Violente
  - Domaines d'expertise : Leadership transformationnel, Coaching exécutif, Facilitation de gouvernance

### Sessions précédentes
- Ajout de Marion Perrin-Pujol au Comité de mission éthique
- Mise à jour des profils de Stephano Vacher et Alexandra Horst
- Correction des accents français sur MembresPage.jsx
- Ajout du logo Ubuntoo sur EspaceUbuntoo.jsx (URL externe temporaire)
- Ajout du formulaire de connexion visuel sur EspaceUbuntoo.jsx
- Ajout de la bannière sur MembresPage.jsx

## Known Issues

### P0 - Logo Ubuntoo (URL externe)
- **Problème**: Le logo utilise une URL externe temporaire
- **Cause**: Espace dans le nom du fichier (`logo ubuntoo.png`)
- **Solution**: Renommer en `logo-ubuntoo.png` et mettre à jour le chemin

## Backlog

### P0 - À faire immédiatement
- Corriger le chemin du logo Ubuntoo (renommer fichier)

### P1 - Fonctionnalités importantes
- Rendre le formulaire de connexion Ubuntoo fonctionnel (backend requis)
- Refactoriser les données des membres vers `altactData.js`

### P2 - Améliorations futures
- Migrer vers une bibliothèque i18n (react-i18next) au lieu de Google Translate

## Technical Architecture

```
/app/frontend/
├── src/
│   ├── components/
│   │   ├── MembresPage.jsx    # Page des membres (données hardcodées)
│   │   ├── EspaceUbuntoo.jsx  # Page Ubuntoo avec login visuel
│   │   └── ...
│   └── App.js                  # HashRouter config
├── public/
│   └── logo ubuntoo.png        # À renommer
└── netlify.toml
```

## Key Files Modified
- `frontend/src/components/MembresPage.jsx` - Membres et gouvernance
- `frontend/src/components/EspaceUbuntoo.jsx` - Espace communautaire

## Integration Notes
- Google Translate pour traduction (pas de clé API requise)
- Toutes les données sont hardcodées dans les composants React
