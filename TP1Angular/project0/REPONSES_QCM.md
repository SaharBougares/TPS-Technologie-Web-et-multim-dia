# Réponses aux Questions à Choix Multiples (QCM)

**Étudiante:**  Sahar Bougares IGL3   

---

## Partie 1: Questions sur les outils de développement

### Question 1: Quelle est la principale fonction de Node.js dans le développement Angular?

**Réponse correcte: a) Un environnement d'exécution pour le code JavaScript côté serveur.**

**Justification:**
Node.js est un environnement d'exécution JavaScript qui permet d'exécuter du code JavaScript en dehors du navigateur. Dans le contexte du développement Angular:
- Il permet d'exécuter npm (Node Package Manager)
- Il fournit les outils de build et de compilation
- Il permet de lancer le serveur de développement avec `ng serve`
- Il gère les dépendances du projet

Les autres options sont incorrectes:
- b) Visual Studio Code est l'éditeur, pas Node.js
- c) npm est le gestionnaire de packages, qui s'exécute sur Node.js
- d) Angular est le framework front-end

---

### Question 2: Quelle commande permet d'installer Angular CLI globalement sur votre système?

**Réponse correcte: c) npm install -g @angular/cli**

**Justification:**
- Le flag `-g` signifie "global" (installation au niveau du système)
- `@angular/cli` est le package officiel d'Angular CLI
- Cette commande rend la commande `ng` disponible dans le terminal

Les autres options sont incorrectes:
- a) `@angular/core` est le package principal d'Angular, pas la CLI
- b) Sans `-g`, l'installation est locale au projet
- d) `ng new` crée un projet, ne l'installe pas

---

### Question 3: Parmi les éditeurs de code suivants, lequel est recommandé pour le développement Angular?

**Réponse correcte: b) Visual Studio Code**

**Justification:**
Visual Studio Code (VSCode) est l'éditeur recommandé pour Angular car:
- Excellentes extensions pour Angular et TypeScript
- Intégration native avec Git
- Débogage intégré
- Terminal intégré
- Léger et performant
- Gratuit et open-source
- Très populaire dans la communauté Angular

Les autres options:
- a) Notepad++ est un éditeur basique sans support Angular
- c) Sublime Text manque d'intégration Angular native
- d) Eclipse est plus lourd et moins adapté à Angular

---

### Question 4: Quel fichier dans un projet Angular contient les dépendances du projet?

**Réponse correcte: b) package.json**

**Justification:**
`package.json` est le fichier de configuration npm qui contient:
- Les dépendances du projet (dependencies)
- Les dépendances de développement (devDependencies)
- Les scripts npm
- Les métadonnées du projet (nom, version, description)

Les autres options:
- a) `angular.json` configure la compilation et les outils Angular
- c) `tsconfig.json` configure le compilateur TypeScript
- d) `README.md` est la documentation du projet

---

### Question 5: Quelle est la commande pour créer un nouveau projet Angular nommé "ma-app"?

**Réponse correcte: c) ng new ma-app**

**Justification:**
`ng new` est la commande Angular CLI pour créer un nouveau projet:
- Crée la structure de dossiers
- Initialise git
- Installe les dépendances
- Configure les fichiers de configuration

Les autres options:
- a) `ng create` n'existe pas
- b) `ng init` n'existe pas
- d) `ng generate app` génère une application dans un workspace existant

---

### Question 6: Quel est le rôle de la commande ng serve?

**Réponse correcte: b) Lancer un serveur de développement et recharger l'application lors des modifications.**

**Justification:**
`ng serve` fait plusieurs choses:
- Lance un serveur de développement local (par défaut sur http://localhost:4200)
- Compile le code TypeScript en JavaScript
- Active le hot reload (rechargement automatique lors des modifications)
- Permet le débogage dans le navigateur

Les autres options:
- a) `npm run build` compile en fichier exécutable
- c) `npm install` installe les dépendances
- d) `ng generate` crée de nouveaux éléments

---

## Partie 2: QCM sur la création d'un projet Angular

### Question 1: Quel répertoire contient les fichiers sources de l'application Angular?

**Réponse correcte: a) src/**

**Justification:**
Le dossier `src/` contient:
- `app/` - Les composants et modules de l'application
- `assets/` - Les images et fichiers statiques
- `environments/` - Les configurations d'environnement
- `index.html` - La page HTML principale
- `main.ts` - Le point d'entrée de l'application
- `styles.css` - Les styles globaux

Les autres options:
- b) `dist/` contient les fichiers compilés pour la production
- c) `node_modules/` contient les dépendances npm
- d) `e2e/` contient les tests end-to-end

---

### Question 2: Dans quel fichier définissez-vous les modules, composants, services?

**Réponse correcte: b) app.module.ts**

**Justification:**
`app.module.ts` (ou `app.config.ts` dans les versions récentes) est le module racine où:
- On déclare les composants
- On importe les modules nécessaires
- On configure les services
- On définit les providers

Les autres options:
- a) `main.ts` amorce l'application
- c) `index.html` est la page HTML
- d) `styles.css` contient les styles

---

### Question 3: Quel est le rôle du fichier angular.json?

**Réponse correcte: b) Définir les configurations de compilation, les entrées et sorties du projet.**

**Justification:**
`angular.json` configure:
- Les options de compilation
- Les chemins des fichiers source et de sortie
- Les configurations d'environnement
- Les options du serveur de développement
- Les configurations de build

Les autres options:
- a) `package.json` configure les dépendances npm
- c) `tslint.json` configure les règles de linting
- d) `styles.css` contient les styles

---

### Question 4: Quelle commande Angular CLI utilisez-vous pour générer un nouveau composant nommé header?

**Réponse correcte: c) ng generate component header**

**Justification:**
`ng generate component header` crée:
- Un dossier `header/`
- `header.component.ts` - La logique du composant
- `header.component.html` - Le template
- `header.component.css` - Les styles
- `header.component.spec.ts` - Les tests

Raccourci: `ng g c header`

Les autres options:
- a) `ng new` crée un nouveau projet
- b) `ng generate` seul ne suffit pas
- d) `ng create` n'existe pas

---

### Question 5: Quel est le rôle du fichier tsconfig.json?

**Réponse correcte: a) Configurer le compilateur TypeScript pour le projet.**

**Justification:**
`tsconfig.json` configure:
- Les options du compilateur TypeScript
- Les chemins des fichiers source
- Les cibles de compilation (ES5, ES6, etc.)
- Les modules à utiliser
- Les options strictes

Les autres options:
- b) `styles.css` contient les styles
- c) `karma.conf.js` configure les tests
- d) `package.json` gère les dépendances

---

## Résumé des Réponses

### Partie 1
1. **a** - Node.js est un environnement d'exécution
2. **c** - npm install -g @angular/cli
3. **b** - Visual Studio Code
4. **b** - package.json
5. **c** - ng new ma-app
6. **b** - Lancer un serveur de développement

### Partie 2
1. **a** - src/
2. **b** - app.module.ts
3. **b** - Configurations de compilation
4. **c** - ng generate component header
5. **a** - Configurer TypeScript

---

