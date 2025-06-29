# Site Vitrine - Développeur Freelance

Un site vitrine moderne et professionnel pour développeur freelance, construit avec React + Vite et SCSS.

## 🚀 Fonctionnalités

- **Design moderne et professionnel** avec une palette de couleurs soigneusement choisie
- **Animations fluides** avec Framer Motion
- **Responsive design** optimisé pour tous les appareils
- **Performance optimisée** avec Vite
- **Code modulaire et maintenable** avec des composants React réutilisables
- **SEO optimisé** avec les bonnes métadonnées
- **Accessibilité** respectée avec les bonnes pratiques

## 📋 Sections du site

1. **Header** - Navigation fixe avec menu mobile
2. **Hero** - Section d'accroche avec slogan impactant et statistiques
3. **Services** - Cartes animées présentant les services
4. **Pourquoi me choisir** - Arguments de vente avec témoignages
5. **Contact** - Formulaire de contact et informations
6. **Footer** - Liens et informations complémentaires

## 🛠️ Technologies utilisées

- **React 18** - Framework JavaScript
- **Vite** - Build tool rapide
- **SCSS** - Préprocesseur CSS avec variables et mixins
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes

## 📦 Installation

1. Clonez le repository :
```bash
git clone <votre-repo>
cd mon-site-vitrine
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

## 🎨 Personnalisation

### Couleurs et variables

Modifiez le fichier `src/styles/variables.scss` pour changer :
- La palette de couleurs
- Les espacements
- Les tailles de police
- Les bordures et ombres

### Contenu

Modifiez le fichier `src/data/siteData.json` pour personnaliser :
- Les textes et slogans
- Les services proposés
- Les informations de contact
- Les liens sociaux

### Composants

Chaque composant est dans son propre dossier avec :
- Le fichier JSX du composant
- Le fichier SCSS pour les styles
- Une structure BEM pour les classes CSS

## 📱 Responsive Design

Le site est optimisé pour :
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (767px et moins)

## 🚀 Déploiement

### Build de production

```bash
npm run build
```

### Déploiement sur Vercel

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement que c'est un projet Vite
3. Le site sera déployé automatiquement à chaque push

### Déploiement sur Netlify

1. Connectez votre repository GitHub à Netlify
2. Configurez la commande de build : `npm run build`
3. Configurez le dossier de publication : `dist`

## 📁 Structure du projet

```
src/
├── components/          # Composants React
│   ├── Header/         # Navigation
│   ├── Hero/           # Section d'accroche
│   ├── Services/       # Services proposés
│   ├── WhyChooseMe/    # Arguments de vente
│   ├── Contact/        # Formulaire de contact
│   └── Footer/         # Pied de page
├── data/               # Données du site
│   └── siteData.json   # Contenu principal
├── styles/             # Styles globaux
│   ├── variables.scss  # Variables CSS
│   └── global.scss     # Styles globaux
├── App.jsx             # Composant principal
└── main.jsx           # Point d'entrée
```

## 🎯 Optimisations

- **Lazy loading** des composants
- **Code splitting** automatique avec Vite
- **Images optimisées** et responsive
- **Cache optimisé** pour les performances
- **SEO on-page** avec les bonnes métadonnées

## 🔧 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint

## 📝 Personnalisation avancée

### Ajouter de nouveaux services

1. Modifiez `src/data/siteData.json`
2. Ajoutez un nouvel objet dans le tableau `services`
3. Le composant Services s'actualisera automatiquement

### Modifier les animations

1. Modifiez les `variants` dans les composants
2. Ajustez les `transition` pour personnaliser les durées
3. Utilisez les hooks de Framer Motion pour des animations avancées

### Ajouter de nouvelles sections

1. Créez un nouveau dossier dans `src/components/`
2. Ajoutez le composant dans `src/App.jsx`
3. Créez les styles correspondants

## 🤝 Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.

---

**Développé avec ❤️ en France**
