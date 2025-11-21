import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitComponent } from '../activite-2-produit/produit';

interface ProduitPanier {
  nom: string;
  prix: number;
  quantite: number;
}

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, ProduitComponent],
  templateUrl: './panier.html',
  styleUrls: ['./panier.scss']
})
export class PanierComponent {
  // Activité 6: Créer un composant Panier
  articles: ProduitPanier[] = [];

  // Activité 6: Méthode pour gérer l'événement d'ajout au panier
  onAjoutPanier(event: { nom: string; prix: number }): void {
    // Vérifier si le produit existe déjà dans le panier
    const articleExistant = this.articles.find(a => a.nom === event.nom);

    if (articleExistant) {
      // Augmenter la quantité
      articleExistant.quantite++;
    } else {
      // Ajouter un nouvel article
      this.articles.push({
        nom: event.nom,
        prix: event.prix,
        quantite: 1
      });
    }
  }

  // Calculer le total du panier
  get totalPanier(): number {
    return this.articles.reduce((total, article) => total + (article.prix * article.quantite), 0);
  }

  // Supprimer un article du panier
  supprimerArticle(index: number): void {
    this.articles.splice(index, 1);
  }

  // Vider le panier
  viderPanier(): void {
    this.articles = [];
  }
}
