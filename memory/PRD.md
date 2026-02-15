# ALT&ACT - Product Requirements Document

## Original Problem Statement
Fix navigation issues on the ALT&ACT website where "Contact" and "Devenir membre" links were not accessible from all pages. This evolved into creating dedicated pages for Contact and Devenir Membre with proper navigation structure, plus ongoing improvements to homepage content focusing on diversity, inclusion, and ethics.

## What's Been Implemented

### December 2025 (Latest Session)
- **Complete rewrite of PresentationSection.jsx** with new philosophical content:
  - Section 1: "Notre Raison d'Être" - Construire une Europe où chacun peut contribuer
  - Section 2: "Principe Fondamental" - Reconnaissance de la capacité de contribution
  - Section 3: "De l'assistance à l'activation" - 4 étapes (Reconnaître, Comprendre, Se situer, Agir)
  - Section 4: "Responsabilité partagée" - Double action (Personnes + Organisations)
  - Section 5: "Notre Vision" - Société fondée sur la contribution et la dignité
- **New photos**: 
  - Hero: Équipe de travailleurs collaborant (gilets jaunes, casques)
  - Section Personnes: Groupe célébrant ensemble (high five)
  - Section Organisations: Équipe diverse en réunion stratégique
- **RE'ACTIF PRO section created**: 3 new pages with navigation integration
  - ReActifProPresentation.jsx
  - ReActifProMission.jsx  
  - ReActifProActions.jsx

### Previous Sessions
- **Created ContactPage.jsx**: Full page with hero image header (email/communication themed), contact form, and contact information cards
- **Created DevenirMembrePage.jsx**: Full page with hero image header (teamwork/hands together themed), benefits section, and membership form
- **Updated App.js**: Added routes `/contact` and `/devenir-membre`
- **Updated Navigation.jsx**: 
  - Changed Contact dropdown links from anchor scrolls to page routes
  - Fixed logo path to use `process.env.PUBLIC_URL`
  - Both desktop and mobile navigation updated
  - Added RE'ACTIF PRO dropdown menu
- **Restored PresentationSection.jsx content**: Added full "Laboratoire d'innovation sociale et technologique" text with 4 structured blocks
- **Added scroll animations**: Fade-in and slide-up animations on scroll using IntersectionObserver

## Current Architecture

```
/app/frontend/src/
├── App.js                    # Main routes configuration
├── components/
│   ├── Navigation.jsx        # Main navigation with dropdowns
│   ├── ContactPage.jsx       # Contact page with form
│   ├── DevenirMembrePage.jsx # Membership page with form
│   ├── PresentationSection.jsx # Homepage - diversity section (photos only)
│   ├── ReActifProPresentation.jsx # RE'ACTIF PRO landing
│   ├── ReActifProMission.jsx # RE'ACTIF PRO mission
│   ├── ReActifProActions.jsx # RE'ACTIF PRO actions
│   ├── Footer.jsx
│   └── ... (other pages)
```

## Key Routes
- `/` - Homepage
- `/contact` - Contact page
- `/devenir-membre` - Membership page
- `/notre-mission`, `/notre-ambition`, `/notre-action` - Mission pages
- `/vision-methode`, `/mot-president`, `/membres` - Presentation pages
- `/charte-ethique`, `/gouvernance-consultative` - Ethics pages
- `/conseils-accompagnement`, `/espace-personnel`, `/espace-ubuntoo` - Spaces
- `/reactif-pro/presentation`, `/reactif-pro/mission`, `/reactif-pro/actions` - RE'ACTIF PRO section

## P0 - Completed
- [x] Contact and Devenir membre as dedicated pages
- [x] Header images on new pages
- [x] Navigation updated to route to pages
- [x] Logo fixed with PUBLIC_URL
- [x] Homepage photos updated (no illustrations, diverse team photos)
- [x] RE'ACTIF PRO section created with 3 pages

## P1 - Pending
- [ ] Logo Ubuntoo - rename file to remove space (`logo ubuntoo.png` → `logo-ubuntoo.png`)
- [ ] Make Ubuntoo login form functional

## P2 - Future/Backlog
- [ ] Refactor COMITES data to separate mock data file
- [ ] Replace Google Translate with proper i18n library (react-i18next)
- [ ] Email integration for contact/membership forms

## Technical Notes
- App uses HashRouter for GitHub Pages compatibility
- Assets paths must use `process.env.PUBLIC_URL` for proper deployment
- Forms are currently frontend-only (mock submission)
