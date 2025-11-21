# TP3 Angular - Ateliers Pratiques

## Structure du Projet

Ce projet Angular est organisé en trois dossiers principaux correspondant à trois modules d'apprentissage :

###  1. Les Ateliers Pratiques (`src/app/ateliers-pratiques/`)
---

###  2. Atelier Guidé (`src/app/atelier-guide/`)


---

###  3. Projet : Cahier des Charges du Jeu de Quiz (`src/app/projet-quiz/`)

---


L'application sera disponible à `http://localhost:4200/`


---

## Architecture des Composants

## Concepts Clés Couverts

### 1. **Interpolation** 
Afficher des données du composant dans le template
***html
<p>{{ message }}</p>


### 2. **Property Binding**
Lier une propriété HTML à une propriété du composant
***html
<img [src]="imageUrl">


### 3. **Event Binding**
Lier un événement DOM à une méthode du composant
***html
<button (click)="afficherAlerte()">Cliquez</button>

### 4. **Two-Way Binding**
Synchroniser les données entre le template et le composant
***html
<input [(ngModel)]="nom">


### 5. **Class et Style Binding**
Appliquer des classes et styles conditionnellement
***html
<div [ngClass]="{ 'active': isActive }"></div>
<div [style.color]="color"></div>


### 6. **@Input et @Output**
Communiquer entre composants parent et enfant
***typescript
@Input() nomProduit: string;
@Output() ajoutPanier = new EventEmitter();


### 7. **Pipes**
Formater les données dans le template
***html
<p>{{ prix | currency: 'TND' }}</p>


---

## Notes Importantes

- **FormsModule** : Importé dans `main.ts` pour utiliser `ngModel`
- **CommonModule** : Importé dans les composants pour utiliser `*ngIf`, `*ngFor`, etc.
- **Standalone Components** : Tous les composants utilisent l'API `standalone: true`
- **Assets** : Configuré dans `angular.json` pour servir les fichiers statiques



