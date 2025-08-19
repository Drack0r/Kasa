# 🏠 Kasa - Plateforme de location immobilière

Une application web moderne de location immobilière développée avec React et React Router, permettant de consulter des propriétés et leurs détails.

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

- Parcourir une galerie de propriétés
- Consulter les détails de chaque logement avec slideshow d'images
- Accéder aux informations de l'entreprise via des sections pliables
- Naviguer avec des transitions fluides

## 🛠️ Technologies

### Frontend

- **React** `^19.1.0` - Bibliothèque UI avec hooks modernes
- **React Router DOM** `^7.7.1` - Gestion du routage SPA
- **Sass** `^1.89.2` - Préprocesseur CSS avec architecture 7-1

### Build & Dev Tools

- **Vite** `^7.0.4` - Build tool rapide et dev server HMR
- **ESLint** `^9.30.1` - Linting JavaScript/React avec config moderne
- **@vitejs/plugin-react** `^4.6.0` - Support React pour Vite

### Gestion des dépendances

- **npm** - Gestionnaire de paquets

## 🚀 Installation

### Prérequis

- Node.js (version 18+ recommandée)
- npm

### Étapes d'installation

```bash
# Cloner le repository
git clone [URL_DU_REPO]
cd kasa

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start
# ou
npm run dev

# L'application sera accessible sur http://localhost:5173
```

### Scripts disponibles

```bash
npm start          # Lance le serveur de développement (alias npm run dev)
npm run build      # Build de production optimisé
npm run preview    # Prévisualise le build de production
npm run lint       # Vérifie le code avec ESLint
```

## 📁 Structure du projet

```
src/
├── 📄 main.jsx                 # Point d'entrée de l'application
├── 📄 App.jsx                  # Composant racine avec Router
├── 🖼️ assets/                  # Ressources statiques
│   ├── images/                 # Images et icônes
│   │   ├── backgrounds/        # Images de fond (hero-background-1.jpg, hero-background-2.jpg)
│   │   ├── icons/             # Icônes (chevrons, logo)
│   │   └── logo/              # Logos clair/sombre
│   └── styles/                # Architecture Sass 7-1
│       ├── main.scss          # Point d'entrée des styles
│       ├── abstracts/         # Variables, mixins, keyframes
│       ├── base/              # Reset, global, typography
│       ├── components/        # Styles des composants
│       ├── layout/            # Header, footer
│       ├── pages/             # Styles des pages
│       ├── themes/            # Thèmes (structure préparée)
│       └── vendors/           # CSS externes (structure préparée)
├── ⚛️ components/              # Composants React organisés
│   ├── cards/                 # Composants de cartes
│   │   └── ApartmentCard.jsx  # Carte de propriété avec hover
│   ├── common/                # Composants réutilisables
│   │   ├── CopyrightNotice.jsx # Notice de copyright
│   │   ├── Hero.jsx           # Bannière avec image et ombres configurables
│   │   ├── Logo.jsx           # Logo avec thème clair/sombre
│   │   ├── Navigation.jsx     # Menu de navigation responsive
│   │   └── Slideshow.jsx      # Carrousel d'images avec animations
│   ├── layout/                # Structure de mise en page
│   │   ├── Footer.jsx         # Pied de page
│   │   ├── Header.jsx         # En-tête
│   │   └── Layout.jsx         # Layout global
│   └── ui/                    # Composants d'interface
│       ├── Collapse.jsx       # Accordéon animé
│       ├── Error404.jsx       # Composant d'erreur 404
│       └── Loading.jsx        # Indicateur de chargement
├── 📑 pages/                   # Pages de l'application
│   ├── About.jsx              # Page à propos avec accordéons
│   ├── ApartmentDetails.jsx   # Détails propriété avec slideshow
│   ├── Home.jsx               # Page d'accueil avec galerie
│   └── NotFound.jsx           # Page 404 personnalisée
├── 🔧 config/                  # Configuration
│   └── api.js                 # Endpoints et timeouts API
├── 📝 constants/               # Constantes globales
│   ├── messages.js            # Messages d'interface utilisateur
│   └── routes.js              # Constantes de routes
├── 🪝 hooks/                   # Custom hooks
│   ├── useFetch.js            # Hook pour requêtes HTTP avec gestion d'erreurs
│   ├── useLoadingState.jsx    # Hook pour états de chargement
│   └── usePageClass.js        # Hook pour classes CSS de page
└── 🛣️ router/                  # Configuration du routage
    └── Router.jsx             # Routes avec React Router v7

public/
└── 📊 data/                    # Données JSON statiques
    ├── apartments.json        # Données des propriétés
    └── about-infos.json       # Contenu des sections À propos
```

## 🎨 Architecture CSS

Le projet utilise l'architecture **Sass 7-1** pour une organisation optimale des styles :

```
styles/
├── main.scss           # Import de tous les partials
├── abstracts/          # Variables, mixins, keyframes d'animation
├── base/              # Reset, éléments HTML, typographie
├── components/        # Styles des composants (collapse, gallery, slideshow...)
├── layout/           # Header, footer
├── pages/            # Styles spécifiques aux pages
├── themes/           # Structure préparée pour les thèmes
└── vendors/          # Structure préparée pour CSS externes
```

### Variables principales

```scss
// Couleurs
$white: #ffffff;
$black: #000000;
$light-gray: #f6f6f6;
$light-red: #ff6060;

// Breakpoints responsive
$breakpoint-mobile: 480px;
$breakpoint-tablet: 768px;
$breakpoint-laptop: 1279px;
```

## ⚡ Fonctionnalités

### 🏠 Page d'accueil (`/`)

- Hero section avec image de fond et ombrage configurable
- Galerie de propriétés responsive générée dynamiquement
- Cartes avec effets hover et liens vers les détails

### 📖 Page À propos (`/about`)

- Hero section avec styling adapté
- Sections pliables (accordéons) avec animations fluides
- Contenu chargé dynamiquement depuis JSON

### 🏡 Détails de propriété (`/apartment/:id`)

- **Slideshow interactif** avec animations de transition
- Navigation par flèches (masquées si une seule image)
- Indicateur de position (x/y)
- Affichage des détails complets de la propriété

### 🚫 Page 404 (`/*`)

- Page d'erreur personnalisée pour routes non trouvées
- Design cohérent avec l'identité visuelle

### 🔄 Fonctionnalités transversales

- **Navigation** : Menu responsive avec états actifs
- **Loading** : Indicateurs de chargement avec messages personnalisés
- **Error handling** : Gestion globale des erreurs de chargement
- **Custom hooks** : Logique réutilisable (useFetch, useLoadingState, usePageClass)
- **Animations CSS** : Transitions fluides et keyframes
- **Responsive design** : Mobile-first avec breakpoints définis

## 🔧 Configuration

### API Endpoints

```javascript
// config/api.js
export const API_ENDPOINTS = {
  APARTMENTS: "/data/apartments.json",
  ABOUT_INFOS: "/data/about-infos.json",
};

export const TIMEOUTS = {
  LOADING_DELAY: 300, // Délai minimum pour les loaders
};
```

### Custom Hooks

```javascript
// Hook useFetch - Gestion des requêtes
const { data, loading, error } = useFetch("/data/apartments.json");

// Hook useLoadingState - États de chargement
const { isLoading, content } = useLoadingState(loading, error, "Message...");

// Hook usePageClass - Classes CSS dynamiques
usePageClass("page-home");
```

Les hooks gèrent automatiquement :

- ✅ États de chargement et d'erreur
- ✅ Cleanup et prévention des fuites mémoire
- ✅ Messages d'erreur personnalisés
- ✅ Classes CSS conditionnelles

## 📱 Responsive Design

L'application suit une approche **desktop-first** avec 3 breakpoints principaux :

- **Desktop** : > 1280px - Layout complet
- **Tablet** : 768px - 1279px - Layout adapté tablette
- **Mobile** : < 768px - Layout mobile optimisé

### Breakpoints Sass

```scss
@media (max-width: $breakpoint-tablet) {
  /* Tablet styles */
}
@media (max-width: $breakpoint-mobile) {
  /* Mobile styles */
}
```

## 🧪 Développement

### Linting

Le projet utilise ESLint v9 avec configuration moderne :

```bash
npm run lint  # Vérifier le code avec règles React et hooks
```

### Configuration ESLint

- Support React 19 et hooks
- Règles pour variables inutilisées
- Plugins : react-hooks, react-refresh
- Globals du navigateur configurés

### Build de production

```bash
npm run build    # Build Vite optimisé
npm run preview  # Serveur de prévisualisation
```

### Structure des composants

Chaque composant suit cette structure avec **paramètres par défaut ES6** :

```jsx
// Imports
import { useState } from "react";

// Composant avec props par défaut
export default function ComponentName({
  prop1 = "defaultValue",
  prop2 = false,
}) {
  const [state, setState] = useState(initialValue);

  return <div className="component-name">{/* JSX avec gestion d'états */}</div>;
}
```

### Animations et transitions

- Slideshow avec animations `transform` hardware-accelerated
- Accordéons avec transitions CSS fluides
- Effets hover sur les cartes
- Keyframes définies dans `abstracts/_keyframes.scss`

---

**Développé avec ❤️ pour OpenClassrooms**

_Projet n°7 - Formation Intégrateur Web_
