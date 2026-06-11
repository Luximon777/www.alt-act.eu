# ALT&ACT Website - PRD

## Problem Statement
Site associatif ALT&ACT (www.alt-act.eu) hébergé sur OVH, code source sur GitHub (https://github.com/Luximon777/www.alt-act.eu, branche main pour déploiement).

## Architecture
- **Frontend**: React.js avec HashRouter, Tailwind CSS, shadcn/ui
- **Backend**: FastAPI (Python) avec MongoDB
- **Database**: MongoDB (admin_settings collection pour les toggles)
- **Hosting**: OVH (production via GitHub Pages), Emergent (preview)
- **Déploiement**: GitHub Actions (deploy.yml) sur push main

## What's Been Implemented
- **Jan 2026**: Site initial créé
- **Apr 15, 2026**: 
  - Modification texte EspacePersonnel.jsx : "Accordez vous un premier échange..."
  - Titre onglet changé : "Alt&Act | Altérité & Action"
  - Meta description mise à jour
  - Restauration complète depuis commit original main (178ca52)
  - Recréation du deploy.yml pour GitHub Actions
  - **Bouton admin Activer/Désactiver** sur page RE'ACTIF PRO pour le lien du logo central
    - Icône engrenage discrète en haut à droite
    - Popup mot de passe admin (Choukette@777)
    - Toggle Activé/Désactivé pour rendre le logo cliquable ou non
    - État persisté en MongoDB

## Admin Credentials
- Page RE'ACTIF PRO toggle: mot de passe `Choukette@777`

## Backlog
- P1: Déployer les changements en production (Save to GitHub → main → Force Push → Run workflow manuellement)

## Next Tasks
- Push final vers GitHub et déclencher le workflow de déploiement
