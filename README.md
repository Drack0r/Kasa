# 🏠 Kasa - Plateforme de location immobilière

Une application web moderne de location immobilière développée avec React et React Router, permettant de consulter des propriétés et leurs détails avec une interface élégante et responsive.

## 📋 Table des matières

- [🎯 Aperçu](#-aperçu)
- [🛠️ Technologies](#-technologies)
- [🚀 Installation](#-installation)
- [📁 Structure du projet](#-structure-du-projet)
- [🎨 Architecture CSS](#-architecture-css)
- [⚡ Fonctionnalités](#-fonctionnalités)
- [🔧 Configuration](#-configuration)
- [📱 Responsive Design](#-responsive-design)
- [🧪 Développement](#-développement)

## 🎯 Aperçu

Kasa est une plateforme de location d'appartements entre particuliers. Cette application single-page permet aux utilisateurs de :

- Parcourir une galerie de propriétés avec affichage adaptatif
- Consulter les détails de chaque logement avec slideshow interactif
- Découvrir les valeurs de l'entreprise via des sections pliables animées
- Naviguer avec des transitions fluides et optimisées

## 🛠️ Technologies

### Frontend

- **React** `^19.1.0` - Bibliothèque UI avec hooks modernes et JSDoc
- **React Router DOM** `^7.7.1` - Gestion du routage SPA avec lazy loading
- **Sass** `^1.89.2` - Préprocesseur CSS avec architecture 7-1

### Build & Dev Tools

- **Vite** `^7.0.4` - Build tool rapide avec HMR et optimisations
- **ESLint** `^9.30.1` - Linting JavaScript/React avec configuration moderne
- **@vitejs/plugin-react** `^4.6.0` - Support React optimisé pour Vite

### Optimisations

- **Lazy Loading** - Chargement différé des pages
- **Custom Hooks** - Logique métier réutilisable
- **JSDoc** - Documentation complète du code

## 🚀 Installation

### Prérequis

- Node.js (version 18+ recommandée)
- npm ou yarn

### Étapes d'installation

```bash
# Cloner le repository
git clone [URL_DU_REPO]
cd kasa

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start

# L'application sera accessible sur http://localhost:5173
```

### Scripts disponibles

```bash
npm start          # Lance le serveur de développement (Vite)
npm run build      # Build de production optimisé
npm run preview    # Prévisualise le build de production
npm run lint       # Vérifie le code avec ESLint
```

## 📁 Structure du projet

```
src/
├── 📄 main.jsx                 # Point d'entrée avec BrowserRouter
├── 📄 App.jsx                  # Composant racine avec Layout
├── 🖼️ assets/                  # Ressources statiques organisées
│   ├── images/                 # Images et icônes optimisées
│   │   ├── backgrounds/        # Images hero (hero-background-1/2.jpg)
│   │   ├── icons/             # Icônes UI (chevrons, étoiles, logo)
│   │   └── logo/              # Logos thématiques (clair/sombre)
│   └── styles/                # Architecture Sass 7-1 complète
│       ├── main.scss          # Point d'entrée centralisé
│       ├── abstracts/         # Variables, mixins, keyframes
│       ├── base/              # Reset, global, typography
│       ├── components/        # Styles composants modulaires
│       ├── layout/            # Header, footer responsive
│       └── pages/             # Styles spécifiques aux pages
├── ⚛️ components/              # Composants React documentés
│   ├── cards/                 # Composants de cartes
│   │   └── ApartmentCard.jsx  # Carte propriété avec navigation
│   ├── common/                # Composants réutilisables
│   │   ├── CopyrightNotice.jsx # Notice copyright dynamique
│   │   ├── Hero.jsx           # Bannière configurable (ombres, texte)
│   │   ├── Logo.jsx           # Logo adaptatif (thème clair/sombre)
│   │   ├── Navigation.jsx     # Menu avec états actifs
│   │   └── Slideshow.jsx      # Carrousel avec animations fluides
│   ├── layout/                # Structure mise en page
│   │   ├── Footer.jsx         # Pied de page avec logo sombre
│   │   ├── Header.jsx         # En-tête avec navigation
│   │   └── Layout.jsx         # Layout global avec classes dynamiques
│   └── ui/                    # Composants d'interface
│       ├── Collapse.jsx       # Accordéon animé (texte/liste)
│       ├── Error404.jsx       # Page erreur personnalisée
│       ├── Loading.jsx        # Indicateur de chargement
│       ├── Owner.jsx          # Informations propriétaire
│       ├── Rating.jsx         # Système d'étoiles (1-5)
│       └── Tag.jsx            # Tags de propriétés
├── 📑 pages/                   # Pages avec lazy loading
│   ├── About.jsx              # Page à propos avec accordéons
│   ├── ApartmentDetails.jsx   # Détails complets avec slideshow
│   ├── Home.jsx               # Accueil avec galerie adaptive
│   └── NotFound.jsx           # Page 404 avec redirection
├── 🔧 config/                  # Configuration centralisée
│   └── api.js                 # Endpoints et timeouts
├── 📝 constants/               # Constantes typées
│   ├── messages.js            # Messages UI personnalisables
│   └── routes.js              # Routes et classes CSS de page
├── 🪝 hooks/                   # Custom hooks documentés
│   ├── useFetch.js            # Hook requêtes avec gestion d'erreurs
│   ├── useLoadingState.jsx    # Hook états de chargement
│   └── usePageClass.js        # Hook classes CSS dynamiques
└── 🛣️ router/                  # Configuration routage
    └── Router.jsx             # Routes avec Suspense et fallbacks

public/
├── 📊 data/                    # Données JSON statiques
│   ├── apartments.json        # Base de données des propriétés
│   └── about-infos.json       # Contenu sections À propos
└── 📄 index.html               # Template HTML avec polices
```

## 🎨 Architecture CSS

### Structure Sass 7-1 optimisée

```
styles/
├── main.scss           # Import centralisé avec @use
├── abstracts/
│   ├── _variables.scss # Couleurs, breakpoints, polices
│   ├── _mixins.scss   # Flexbox, layouts réutilisables
│   └── _keyframes.scss # Animations (rotation loader)
├── base/
│   ├── _reset.scss    # Reset CSS moderne
│   ├── _global.scss   # Styles globaux (body, #app)
│   └── _typography.scss # Configuration typographique
├── components/        # Styles modulaires
│   ├── _collapse.scss  # Accordéons avec animations
│   ├── _gallery.scss   # Grille responsive adaptative
│   ├── _slideshow.scss # Carrousel avec transitions
│   ├── _rating.scss    # Système d'étoiles responsive
│   ├── _tags.scss      # Tags avec design moderne
│   ├── _owner.scss     # Profil propriétaire adaptatif
│   ├── _loading.scss   # Spinner avec keyframes
│   ├── _error-404.scss # Page erreur stylisée
│   └── _hero.scss      # Bannières avec ombres configurables
├── layout/
│   ├── _header.scss    # En-tête responsive avec navigation
│   └── _footer.scss    # Pied de page avec logo adapté
└── pages/
    ├── _home.scss      # Page accueil avec gap responsive
    ├── _about.scss     # Page à propos avec espacement
    ├── _apartment-details.scss # Page détails avec layout complexe
    └── _not-found.scss # Page 404 avec centrage
```

### Variables et tokens design

```scss
// Couleurs système
$white: #ffffff;
$black: #000000;
$light-gray: #f6f6f6;
$light-red: #ff6060;
$red: #f03636;

// Breakpoints responsive mobile-first
$breakpoint-mobile: 480px;
$breakpoint-tablet: 768px;
$breakpoint-laptop: 1279px;

// Typographie
$font-family-primary: "Montserrat", sans-serif;

// Effets visuels
$box-shadow-primary: 0 4px 4px rgba($black, 0.25);
$linear-gradient-card: linear-gradient(
  180deg,
  transparent 0%,
  rgba(0, 0, 0, 0.5) 100%
);
```

## ⚡ Fonctionnalités

### 🏠 Page d'accueil (`/`)

- **Hero section** avec image de fond et ombrage configurable
- **Galerie adaptative** générée dynamiquement depuis JSON
- **Cartes interactives** avec hover effects et transitions

### 📖 Page À propos (`/about`)

- **Hero section** sans texte avec styling adapté
- **Accordéons animés** avec contenu chargé dynamiquement
- **Transitions fluides** d'ouverture/fermeture

### 🏡 Détails de propriété (`/apartment/:id`)

- **Slideshow avancé** avec navigation par flèches
- **Animations de transition** entre les images
- **Navigation conditionnelle** (masquée si une seule image)
- **Indicateur de position** dynamique (x/y)
- **Informations complètes** : titre, localisation, description
- **Tags visuels** des caractéristiques
- **Profil propriétaire** avec avatar
- **Système de notation** en étoiles (1-5)
- **Sections pliables** pour description et équipements

### 🚫 Page 404 (`/*` et redirections)

- **Page d'erreur personnalisée** avec design cohérent
- **Redirection automatique** pour IDs d'appartements invalides
- **Lien de retour** vers la page d'accueil

### 🔄 Fonctionnalités transversales

- **Navigation intelligente** avec états actifs automatiques
- **Lazy loading** des pages pour optimiser les performances
- **Gestion d'erreurs** globale avec messages personnalisés
- **Loading states** avec spinners animés
- **Classes CSS dynamiques** selon la page courante
- **Responsive design** desktop-first avec breakpoints optimisés
- **Animations CSS** fluides avec transitions et keyframes

## 🔧 Configuration

### API et données

```javascript
// config/api.js
export const API_ENDPOINTS = {
  APARTMENTS: "/data/apartments.json",
  ABOUT_DATA: "/data/about-infos.json",
};

export const TIMEOUTS = {
  LOADING_DELAY: 1000, // Délai pour visualiser les loaders
};
```

### Messages et constantes

```javascript
// constants/messages.js
export const LOADING_MESSAGES = {
  APARTMENTS: "Chargement des propriétés...",
  APARTMENT: "Chargement de la propriété...",
  ABOUT: "Chargement des informations...",
};

// constants/routes.js
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  APARTMENT_PREFIX: "/apartment/",
};

export const PAGE_CLASSES = {
  HOME: "homepage",
  ABOUT: "about-page",
  APARTMENT: "apartment-page",
  NOT_FOUND: "not-found-page",
};
```

### Custom Hooks

```javascript
// Hook useFetch - Requêtes avec gestion d'erreurs
const { data, loading, error } = useFetch(API_ENDPOINTS.APARTMENTS);

// Hook useLoadingState - États de chargement unifiés
const { isLoading, content } = useLoadingState(loading, error, "Message...");

// Hook usePageClass - Classes CSS dynamiques
const pageClass = usePageClass(); // Retourne la classe selon la route
```

## 📱 Responsive Design

### Breakpoints et approche

- **Desktop-first** : Design adaptatif commençant par desktop
- **Breakpoints optimisés** : 480px (mobile), 768px (tablet), 1279px (laptop)
- **Navigation responsive** : Menu compact avec texte transformé
- **Images adaptatives** : Tailles ajustées selon l'écran

### Optimisations mobile

- **Touch-friendly** : Boutons et liens dimensionnés pour le tactile
- **Performance** : Lazy loading et optimisation des images
- **Lisibilité** : Typographie responsive avec tailles adaptées
- **Navigation** : Menu simplifié avec états visuels clairs

## 🧪 Développement

### Bonnes pratiques implémentées

- **JSDoc complète** : Documentation de tous les composants
- **Conventional Commits** : Messages de commit standardisés
- **ESLint** : Linting avec configuration moderne
- **Architecture modulaire** : Séparation des responsabilités
- **Custom hooks** : Logique métier réutilisable
- **Gestion d'erreurs** : Handling unifié des erreurs
- **Optimisations** : Lazy loading, memoization, transitions optimisées

### Structure de développement

```bash
# Lancement en mode développement
npm start           # Vite dev server avec HMR

# Vérification du code
npm run lint        # ESLint avec auto-fix

# Build et déploiement
npm run build       # Build optimisé pour production
npm run preview     # Test du build de production
```

### Points d'amélioration futurs

- Tests unitaires avec React Testing Library
- Tests e2e avec Playwright ou Cypress
- Optimisation SEO avec meta tags dynamiques
- Système d'authentification
- Backend API avec base de données
- Système de réservation
- Filtres avancés de recherche

---

**Développé avec ❤️ pour OpenClassrooms**

_*Projet n°7 - Formation Intégrateur Web*_
