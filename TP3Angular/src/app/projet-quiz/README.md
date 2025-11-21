# Projet Quiz - Jeu de Quiz Interactif

Application web interactive où les utilisateurs répondent à des questions, accumulent des scores et comparent leurs performances.

## Structure
```
projet-quiz/
├── home/                (Composant d'accueil)
├── game/                (Composant principal du jeu)
├── question/            (Composant pour afficher les questions)
├── score/               (Composant pour afficher les résultats)
├── projet-quiz.ts       (Composant principal)
└── README.md
```

## Fonctionnalités Principales

### 1. Gestion des Questions ✅
- Affichage dynamique des questions à choix multiples
- Support de questions textuelles
- Base de données de questions avec réponses correctes

### 2. Système de Scoring ✅
- Attribution de points pour réponses correctes (+10 points)
- Déduction de points pour réponses incorrectes (-5 points)
- Affichage du score en temps réel

### 3. Défis Implémentés

#### Défi 1: Blocage des Réponses ✅
- Les réponses sont bloquées après la sélection
- L'utilisateur ne peut pas répondre deux fois à la même question

#### Défi 2: Interface Temps Réel ✅
- Affichage en temps réel du nombre de bonnes réponses
- Affichage du nombre de mauvaises réponses
- Barre de score visible pendant le jeu

#### Défi 3: Chronomètre ✅
- Compte à rebours de 15 secondes par question
- Réponse automatiquement incorrecte si délai dépassé
- Affichage visuel avec animation (vert → orange → rouge)
- Implémentation: `startTimer()`, `handleTimeExpired()`, `ngOnInit()`, `ngOnDestroy()`

## Concepts Angular Couverts

- **Interpolation**: Affichage dynamique des questions
- **Property Binding**: Passage de données aux composants
- **Event Binding**: Gestion des clics et interactions
- **Two-Way Data Binding**: Capture des réponses textuelles
- **Structural Directives**: *ngFor, *ngIf
- **Communication**: @Input et @Output
