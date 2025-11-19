# TP2 Angular - Structure d'un Projet et Création de Composants

## 📋 Description

Ce projet est une implémentation complète du **TP2 Angular** qui couvre les concepts fondamentaux d'Angular :
- Structure d'un projet Angular
- Création et intégration de composants
- Liaison de données bidirectionnelle avec `ngModel`
- Utilisation du `FormsModule`
- Déclaration des composants
- Pipes et formatage des données

## 🚀 Démarrage Rapide

### Prérequis
- Node.js (v18+)
- Angular CLI (v20+)

### Installation et Exécution

```bash
# 1. Installer les dépendances
npm install

# 2. Démarrer le serveur de développement
ng serve -o
```

L'application s'ouvrira automatiquement sur `http://localhost:4200/`

## 📁 Structure du Projet

```
src/
├── app/
│   ├── app.ts                          # Composant racine
│   ├── app.html                        # Template principal
│   ├── app.css                         # Styles globaux
│   ├── etudiant/
│   │   ├── etudiant.ts                 # Composant Étudiant
│   │   ├── etudiant.html               # Template avec pipes et ngModel
│   │   ├── etudiant.css                # Styles du composant
│   │   └── TypeStudent.ts              # Interface Student
│   ├── profil/
│   │   ├── profil.ts                   # Composant Profil
│   │   ├── profil.html                 # Formulaire avec liaison bidirectionnelle
│   │   └── profil.css                  # Styles du formulaire
│   ├── utilisateur/
│   │   ├── utilisateur.ts              # Composant Utilisateur
│   │   ├── utilisateur.html            # Template simple
│   │   └── utilisateur.css             # Styles
│   └── composants/adresse/
│       ├── adresse.component.ts        # Composant créé manuellement
│       ├── adresse.component.html      # Template
│       └── adresse.component.css       # Styles
├── styles.css                          # Styles globaux de l'application
├── index.html                          # Point d'entrée HTML
└── main.ts                             # Point d'entrée TypeScript
```

## 🎯 Activités Implémentées

### Activité 1 : Exploration de la Structure
- ✅ Structure complète d'un projet Angular
- ✅ Rôle de chaque fichier documenté

### Activité 2 : Génération de Composants
- ✅ Composant `utilisateur` généré avec Angular CLI
- ✅ Propriété `nom` avec interpolation de données

### Activité 3 : Formulaire avec Liaison Bidirectionnelle
- ✅ Composant `profil` avec `FormsModule`
- ✅ Champs `prenom` et `age` avec `[(ngModel)]`
- ✅ Affichage en temps réel des valeurs

### Activité 4 : Rôle du FormsModule
- ✅ Démonstration de l'importance du `FormsModule`
- ✅ Gestion des modules dans `AppModule`

### Activité 5 : Déclaration Manuelle de Composants
- ✅ Composant `adresse` créé manuellement
- ✅ Démonstration de la nécessité de déclarer les composants

## 💡 Concepts Clés Couverts

### 1. **Interpolation de Données**
```html
<h2>{{ etudiant.name }}</h2>
```

### 2. **Liaison Bidirectionnelle (Two-Way Binding)**
```html
<input [(ngModel)]="etudiant.name" placeholder="name"/>
```

### 3. **Pipes**
```html
<p>{{ etudiant.name | uppercase }}</p>
<p>{{ etudiant.average | number:'1.2-2' }}%</p>
```

### 4. **Interfaces TypeScript**
```typescript
export interface Student {
  id: number;
  name: string;
  classe?: string;
  lastname?: string;
  average?: number;
}
```

### 5. **Composants Standalone**
```typescript
@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
```

## 🔧 Commandes Utiles

```bash
# Générer un nouveau composant
ng generate component nom-composant

# Générer un service
ng generate service nom-service

# Générer une directive
ng generate directive nom-directive

# Générer un pipe
ng generate pipe nom-pipe

# Compiler pour la production
ng build --configuration production

# Exécuter les tests
ng test
```

## 📚 Ressources

- [Documentation Angular Officielle](https://angular.dev)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## ✨ Fonctionnalités

- ✅ Composants réutilisables
- ✅ Liaison de données bidirectionnelle
- ✅ Formatage des données avec pipes
- ✅ Gestion des formulaires
- ✅ Interface utilisateur moderne et responsive
- ✅ Styles professionnels avec CSS Grid

## 📝 Notes

- Le projet utilise la structure **standalone components** (Angular 14+)
- `FormsModule` est importé pour utiliser `ngModel`
- Les composants sont déclarés dans leurs propres fichiers
- Tous les styles sont scopés au composant

## 🎓 Auteur

**Étudiant:** Sahar  
**Cours:** Technologie Web et Multimédia  
**Université:** FST - Département TI  
**Professeur:** Mohamed Lassoued
