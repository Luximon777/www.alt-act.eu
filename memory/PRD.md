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


## 2026-06 — Ajout Marie-Josée Assa
- Ajoutée au Comité de pilotage (MembresPage.jsx) comme Directrice Ressources Humaines (DRH), profil complet (bio, réalisations, vision, signature, formation, expertise) rédigé à partir de son CV.
- Rappel : le routage est en HashRouter → URL de la page membres : `/#/membres`.


## 2026-06 — Réajustement éditorial (Dossier V1) — Priorités 1 + 2 LIVRÉES
Choix utilisateur : slogan « Permettre à chacun d'agir et de contribuer. » ; menu à réorganiser plus tard ; page Connaissance & ressources attendra les contenus.
- Données centralisées : `src/data/reperes.js` (repères, missions, 6 profils « Je suis… », signature).
- Accueil : HeroSection (signature, intro innovation sociale, 3 CTA, 4 repères, encart éthique conservé), PresentationSection (raison d'être, 4 facettes), ReperesSection, AgirAvecSection (Agir avec pas à la place + 4 missions), JeSuisSection (+ teaser prévention).
- Nouvelles pages : `/agir-avec-vous` (6 profils, ancres #personne…), `/prevenir-les-ruptures` (prévention, limites, orientation).
- Navigation : 2 liens ajoutés dans dropdown Mission (desktop + mobile). Footer + ContactSection vocabulaire révisé.
- Testé : iteration_3.json — tout passé.

### Reste à faire (Dossier V1)
- P3 : Repositionner RE'ACTIF PRO (§11), frise « Notre manière d'agir » dans Vision & Méthode (§12), innovation sociale (§13), réorganisation menu (§17, décision utilisateur en attente).
- P4 : Page Connaissance & ressources (contenus à fournir par l'utilisateur), coopérations territoriales par fiches (§15), mesure d'impact.


## 2026-06 — Priorité 3 (+ une partie P4) LIVRÉE
Choix utilisateur : fiches coopérations par catégorie (génériques, à préciser) ; témoignages illustratifs anonymisés signalés comme exemples ; placement accueil + page /cooperations ; anciennes entrées « Vos accès » dans « Agir avec vous ».
- Menu réorganisé (data-driven `src/data/menu.js`, rendu `Navigation.jsx`) : Qui sommes-nous ? / Agir avec vous / Nos actions / Nos projets / Coopérer. data-testid : `<groupId>-dropdown`, items `<testid>` desktop, `mobile-<testid>` mobile.
- RE'ACTIF PRO (`ReactifProPresentation.jsx`) : intro §11 (innovation de l'écosystème ALT&ACT) + frise `ManiereAgirFrise.jsx` (7 étapes). Admin toggle logo conservé.
- Coopérations : `CooperationsSection.jsx` (accueil, 3 fiches + FicheCooperation export), page `/cooperations` (`Cooperations.jsx` : 5 fiches, manière d'agir, témoignages, CTA Devenir partenaire / Proposer une expérimentation / Contribuer).
- Témoignages : `TemoignagesSection.jsx` (4 témoignages fictifs, mention explicite) sur accueil + /cooperations. Données dans `src/data/reperes.js` (maniereAgir, cooperations, temoignages).
- Footer réaligné (lien mort /notre-vision supprimé).
- Testé : iteration_4.json — tout passé.

### Reste à faire (Dossier V1)
- P4 : Page Connaissance & ressources (en attente des contenus utilisateur) ; remplacer les témoignages fictifs par de vrais ; préciser les fiches coopérations avec les partenaires réels ; mesure d'impact.
- Option : intégrer la frise « Notre manière d'agir » dans Vision & Méthode.

## 2026-06 — Boussole des repères
- `BoussoleReperes.jsx` monté une fois dans App.js (bas gauche, fixe) : 4 points colorés = repères incarnés par la page courante (mapping route → repères) ; sur l accueil, suit la section visible via IntersectionObserver (ids top/presentation/reperes/agir-avec/je-suis/cooperer/ils-contribuent/contact). Clic → panneau détaillé. Masquée sur les pages légales. Vérifié par screenshot.
