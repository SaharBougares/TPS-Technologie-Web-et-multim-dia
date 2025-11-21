import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitGuideComponent } from './produit-guide/produit-guide';
import { PanierGuideComponent } from './panier-guide/panier-guide';

@Component({
  selector: 'app-atelier-guide',
  standalone: true,
  imports: [CommonModule, ProduitGuideComponent, PanierGuideComponent],
  templateUrl: './atelier-guide.html',
  styleUrls: ['./atelier-guide.scss']
})
export class AtelierGuideComponent {
  // Activité 6: Créer un tableau pour stocker les articles du panier
  panierItems: string[] = [];

  // Activité 6: Méthode pour gérer l'ajout au panier
  gererAjoutAuPanier(nomProduit: string): void {
    this.panierItems.push(nomProduit);
    console.log(`${nomProduit} ajouté au panier.`);
  }
}
