# ALT&ACT - Document de Référence du Projet

## Description du projet
Site web institutionnel pour ALT&ACT, une association d'intérêt général française. Le site présente la mission, l'ambition et les actions de l'association dans le domaine de l'accompagnement professionnel et de l'inclusion sociale.

## Stack technique
- **Frontend**: React.js avec Tailwind CSS
- **Routing**: react-router-dom (HashRouter pour GitHub Pages)
- **Build**: Create React App avec craco
- **CI/CD**: GitHub Actions → GitHub Pages
- **Components**: Shadcn/UI, Lucide React icons

## Architecture des fichiers
```
/app/frontend/
├── public/
│   └── index.html
└── src/
    ├── components/
    │   ├── App.js (routes)
    │   ├── Navigation.jsx
    │   ├── HeroSection.jsx
    │   ├── Footer.jsx
    │   ├── NotreAction.jsx
    │   ├── NotreMission.jsx
    │   ├── NotreAmbition.jsx
    │   └── ui/ (composants Shadcn)
    └── index.js
```

## Fonctionnalités implémentées
- [x] Navigation avec menus déroulants
- [x] Page d'accueil (HeroSection)
- [x] Page Notre Mission
- [x] Page Notre Ambition
- [x] Page Notre Action
- [x] Footer
- [x] Routing HashRouter
- [x] Logo cliquable vers l'accueil
- [x] Sidebar mémo sur les pages de contenu
- [x] Accents et typographie française correcte

## Corrections effectuées (Décembre 2025)
- Restauration des accents dans NotreAction.jsx, NotreMission.jsx, NotreAmbition.jsx
- Vérification de Navigation.jsx ("Découvrir ALT&ACT", "Notre raison d'être")

## Problèmes connus
- **Logo**: Actuellement chargé via URL externe hardcodée. À améliorer avec chemin local (public/logo.png)
- **Encodage**: Attention lors du copier-coller depuis l'extérieur (risque de caractères invisibles)
- **CI/CD**: Utilise CI=false pour éviter que les warnings ESLint bloquent le build

## Backlog (P1-P2)
1. P1: Implémenter logo avec chemin local (`process.env.PUBLIC_URL + '/logo.png'`)
2. P2: Audit complet des textes pour accents manquants
3. P2: Optimisation des images et performances
