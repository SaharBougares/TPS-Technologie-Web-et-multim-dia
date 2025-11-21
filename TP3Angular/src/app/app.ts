 import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Ateliers Pratiques
import { BienvenueComponent } from './ateliers-pratiques/activite-1-bienvenue/bienvenue';
import { ProduitComponent } from './ateliers-pratiques/activite-2-produit/produit';
import { UtilisateurComponent } from './ateliers-pratiques/activite-4-utilisateur/utilisateur';
import { PanierComponent } from './ateliers-pratiques/activite-6-panier/panier';

// Atelier Guidé
import { AtelierGuideComponent } from './atelier-guide/atelier-guide';

// Projet Quiz
import { ProjetQuizComponent } from './projet-quiz/projet-quiz';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BienvenueComponent,
    ProduitComponent,
    UtilisateurComponent,
    PanierComponent,
    AtelierGuideComponent,
    ProjetQuizComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'TP3 Angular - Ateliers Pratiques';
}
