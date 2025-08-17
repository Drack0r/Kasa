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
- Consulter les détails de chaque logement
- Accéder aux informations de l'entreprise

## 🛠️ Technologies

### Frontend

- **React** `^19.1.0` - Bibliothèque UI
- **React Router DOM** `^7.7.1` - Gestion du routage
- **Sass** `^1.89.2` - Préprocesseur CSS

### Build & Dev Tools

- **Vite** `^7.0.4` - Build tool et dev server
- **ESLint** `^9.30.1` - Linting JavaScript/React
- **@vitejs/plugin-react** - Support React pour Vite

### Gestion des dépendances

- **npm** - Gestionnaire de paquets

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
# ou
npm run dev

# L'application sera accessible sur http://localhost:5173
```

### Scripts disponibles

```bash
npm start          # Lance le serveur de développement
npm run build      # Build de production
npm run preview    # Prévisualise le build de production
npm run lint       # Vérifie le code avec ESLint
```

## 📁 Structure du projet

```
src/
├── 📄 main.jsx                 # Point d'entrée de l'application
├── 🖼️ assets/                  # Ressources statiques
│   ├── images/                 # Images et icônes
│   │   ├── backgrounds/        # Images de fond
│   │   ├── icons/             # Icônes
│   │   └── logo/              # Logos
│   └── styles/                # Styles Sass
│       ├── main.scss          # Point d'entrée des styles
│       ├── abstracts/         # Variables, mixins, keyframes
│       ├── base/              # Reset, global, typography
│       ├── components/        # Styles des composants
│       ├── layout/            # Header, footer
│       └── pages/             # Styles des pages
├── ⚛️ components/              # Composants React réutilisables
│   ├── Collapse.jsx          # Composant accordéon
│   ├── Hero.jsx               # Bannière avec image de fond
│   ├── Loading.jsx            # Indicateur de chargement
│   ├── Logo.jsx               # Logo avec thème clair/sombre
│   ├── Navigation.jsx         # Menu de navigation
│   └── PropertyCard.jsx       # Carte de propriété
├── 📑 pages/                   # Pages de l'application
│   ├── Home.jsx               # Page d'accueil
│   ├── About.jsx              # Page à propos
│   ├── PropertyDetails.jsx    # Détails d'une propriété
│   └── NotFound.jsx           # Page 404
├── 🔧 config/                  # Configuration
│   └── api.js                 # Endpoints et timeouts
├── 📝 constants/               # Constantes globales
│   └── messages.js            # Messages d'interface
├── 🪝 hooks/                   # Custom hooks
│   └── useFetch.js            # Hook pour les requêtes HTTP
└── 🛣️ router/                  # Configuration du routage
    └── Router.jsx             # Routes de l'application

public/
└── 📊 data/                    # Données JSON
    ├── logements.json         # Données des propriétés
    └── collapse.json          # Contenu des sections pliables
```

## 🎨 Architecture CSS

Le projet utilise l'architecture **Sass 7-1** pour une organisation optimale des styles :

```
styles/
├── main.scss           # Import de tous les partials
├── abstracts/          # Variables, mixins, fonctions
├── base/              # Reset, éléments HTML de base
├── components/        # Styles des composants
├── layout/           # Header, footer, navigation
├── pages/            # Styles spécifiques aux pages
├── themes/           # Thèmes (si applicable)
└── vendors/          # CSS de bibliothèques tierces
```

### Variables principales

```scss
// Couleurs
$white: #ffffff;
$black: #000000;
$light-gray: #f6f6f6;
$light-red: #ff6060;

// Breakpoints responsive
$breakpoint-mobile: 606px;
$breakpoint-tablet: 856px;
$breakpoint-desktop: 1240px;
```

## ⚡ Fonctionnalités

### 🏠 Page d'accueil (`/`)

- Hero section avec image de fond et message d'accueil
- Galerie de propriétés générée dynamiquement
- Cartes cliquables menant aux détails des propriétés

### 📖 Page À propos (`/about`)

- Hero section avec styling adapté
- Sections pliables (accordéons) avec informations sur l'entreprise
- Animations fluides pour l'ouverture/fermeture des sections

### 🏡 Détails de propriété (`/property/:id`)

- Affichage des détails complets d'une propriété
- Navigation par ID via l'URL
- Gestion des propriétés inexistantes

### 🚫 Page 404 (`/*`)

- Page d'erreur pour les routes non trouvées
- Design cohérent avec le reste de l'application

### 🔄 Fonctionnalités transversales

- **Navigation** : Menu responsive avec liens actifs
- **Loading** : Indicateurs de chargement pendant les requêtes
- **Error handling** : Gestion des erreurs de chargement
- **Lazy loading** : Chargement asynchrone des pages
- **Responsive design** : Adaptation mobile, tablette, desktop

## 🔧 Configuration

### API Endpoints

```javascript
// config/api.js
export const API_ENDPOINTS = {
  PROPERTIES: "/data/logements.json",
  COLLAPSE_DATA: "/data/collapse.json",
};

export const TIMEOUTS = {
  LOADING_DELAY: 300, // Délai minimum pour les loaders
};
```

### Custom Hook useFetch

```javascript
// Utilisation du hook
const { data, loading, error } = useFetch("/data/logements.json");
```

Le hook gère automatiquement :

- ✅ États de chargement
- ✅ Gestion d'erreurs
- ✅ Prévention des fuites mémoire
- ✅ Cleanup des requêtes

## 📱 Responsive Design

L'application est entièrement responsive avec 3 breakpoints principaux :

- **Desktop** : > 1280px - Layout Desktop complet
- **Laptop** : 769px - 1279px - Layout Laptop optimisé
- **Tablet** : 481px - 768px - Layout tablette optimisé
- **Mobile** : < 480px - Layout mobile optimisé

### Breakpoints Sass

```scss
@media (max-width: $breakpoint-tablet) {
  /* Tablet */
}
@media (max-width: $breakpoint-mobile) {
  /* Mobile */
}
```

## 🧪 Développement

### Linting

Le projet utilise ESLint avec des règles adaptées à React :

```bash
npm run lint  # Vérifier le code
```

### Build de production

```bash
npm run build    # Créer le build
npm run preview  # Prévisualiser le build
```

### Structure des composants

Chaque composant suit cette structure :

```jsx
// Imports
import PropTypes from "prop-types";

// Composant
export default function ComponentName({ prop1, prop2 }) {
  return <div className="component-name">{/* JSX */}</div>;
}
```

---

**Développé avec ❤️ pour OpenClassrooms**

_Projet n°7 - Formation Intégrateur Web_
