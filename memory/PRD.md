# ALT&ACT - Site Web Associatif

## Description du projet
Site web de l'association ALT&ACT - "L'insertion sans barrières". Une association d'intérêt général qui œuvre pour une société où chaque personne peut révéler son potentiel et contribuer pleinement à la collectivité.

## Architecture technique
- **Frontend**: React.js avec HashRouter
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI (`/app/frontend/src/components/ui/`)
- **Icons**: lucide-react
- **Build**: CRACO (Create React App Configuration Override)

## Structure des routes

### Pages principales
- `/` - Page d'accueil (HomePage)
- `/notre-mission` - Notre mission
- `/notre-vision` - Notre vision  
- `/notre-action` - Notre action

### Présentation
- `/vision-methode` - Vision et méthode
- `/mot-president` - Le mot du fondateur
- `/membres` - Nos membres

### Charte éthique
- `/charte-ethique` - Charte éthique (10 principes)
- `/gouvernance-consultative` - Gouvernance consultative

### Espaces
- `/conseils-accompagnement` - Espace Employeurs
- `/espace-personnel` - Espace Personnel
- `/espace-ubuntoo` - Espace Ubuntoo

### Pages légales
- `/mentions-legales` - Mentions légales
- `/confidentialite` - Politique de confidentialité

## Structure de navigation

### Menu principal (desktop)
1. **Présentation** (dropdown)
   - Vision et méthode
   - Le mot du fondateur
   - Nos membres

2. **Mission** (dropdown) ✅ NOUVEAU
   - Notre mission
   - Notre vision
   - Notre action

3. **Charte éthique** (dropdown)
   - Charte éthique
   - Gouvernance consultative

4. **Contact** (dropdown)
   - Contact
   - Devenir membre

### Boutons d'accès rapide
- Espace Employeurs (teal)
- Espace Personnel (bleu marine)
- Espace Ubuntoo (vert foncé)

## Fichiers clés

### Composants principaux
- `/app/frontend/src/App.js` - Configuration des routes
- `/app/frontend/src/components/Navigation.jsx` - Navigation avec dropdowns
- `/app/frontend/src/components/HeroSection.jsx` - Section héro
- `/app/frontend/src/components/Footer.jsx` - Pied de page

### Pages Mission (CRÉÉES - 09/12/2025)
- `/app/frontend/src/components/NotreMission.jsx`
- `/app/frontend/src/components/NotreVision.jsx`
- `/app/frontend/src/components/NotreAction.jsx`

## Contenu des pages Mission

### Notre Mission
- Révéler les capacités humaines
- Structurer le pouvoir d'agir
- Permettre à chacun de contribuer pleinement à la société
- Le travail comme espace d'expression, d'apprentissage et de responsabilité
- **Travail comme acte de service à la communauté**
- **Alignement sur les directives européennes**

### Notre Vision
- Une société plus juste et durable
- Le développement humain comme fondement
- Le travail comme lieu de contribution, dignité et progrès partagé
- Organisations conciliant performance et responsabilité
- Référence au Socle européen des droits sociaux

### Notre Action
- Accompagner les trajectoires professionnelles
- Développer les compétences (processus continu)
- S'adapter à la diversité des parcours
- Transformer les organisations
- Favoriser l'équité et prévenir les discriminations
- Alignement sur la stratégie européenne pour l'emploi

## Changelog

### 09/12/2025 - Restructuration Mission/Vision/Action
- ✅ Création des 3 nouvelles pages (NotreMission, NotreVision, NotreAction)
- ✅ Ajout du menu dropdown "Mission" dans la navigation
- ✅ Suppression de "Actions & Impact" du menu
- ✅ Intégration du contenu fourni par l'utilisateur
- ✅ Accent sur le travail comme service à la communauté
- ✅ Références aux directives européennes
- ✅ Tests frontend passés (100% - 16/16)

## Tâches futures
- Aucune tâche définie actuellement

## Notes techniques
- L'application utilise HashRouter (`#/`) pour la navigation
- Les composants utilisent les data-testid pour les tests automatisés
- Les imports UI proviennent de `./ui/` (Shadcn components)
