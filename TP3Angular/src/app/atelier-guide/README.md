# Atelier Guidé - Gestion de Produits

Ce dossier contient les activités de l'atelier guidé couvrant les concepts avancés d'Angular.

## Structure
```
atelier-guide/
├── atelier-guide.ts          (Composant principal)
├── atelier-guide.html        (Template principal)
├── atelier-guide.scss        (Styles)
├── produit-guide/
│   ├── produit-guide.ts      (Composant produit)
│   ├── produit-guide.html    (Template)
│   └── produit-guide.scss    (Styles)
└── panier-guide/
    ├── panier-guide.ts       (Composant panier)
    ├── panier-guide.html     (Template)
    └── panier-guide.scss     (Styles)
```

## Activités Couverts

### Activité 5 : Binding des Attributs et des Styles
- **Propriété booléenne** : `enStock` initialisée à `true`
- **Class binding** : `[ngClass]="{'en-stock': enStock, 'hors-stock': !enStock}"`
- **Style binding** : `[ngStyle]="{'opacity': enStock ? '1' : '0.5'}"`
- **Interaction** : Bouton pour basculer `enStock` et observer les changements

### Activité 6 : Communication entre Composants (@Input et @Output)
- **@Output** : `ajouterAuPanier` émis du composant enfant
- **Gestion d'événement** : Réception dans le composant parent
- **@Input** : Passage de `nomProduit` du parent à l'enfant

### Activité 7 : Utilisation de @Input
- **Propriété @Input** : `nomProduit` reçue du parent
- **Affichage dynamique** : Utilisation dans le template avec interpolation

### Activité 8 : Binding avec les Pipes
- **Currency pipe** : Affichage des prix en TND
- **Formatage** : `{{ prix | currency: 'TND' }}`

## Concepts Clés

1. **Class Binding Conditionnel** : Application de classes CSS basée sur des conditions
2. **Style Binding Conditionnel** : Application de styles inline basée sur des conditions
3. **@Input et @Output** : Communication parent-enfant
4. **Événements personnalisés** : Émission d'événements avec EventEmitter
5. **Pipes** : Formatage des données affichées
