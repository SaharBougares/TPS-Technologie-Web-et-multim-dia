import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './produit.html',
  styleUrls: ['./produit.scss']
})
export class ProduitComponent {
  // Activité 2: Ajouter une propriété @Input imageUrl
  @Input() imageUrl = '/assets/images/casque.jpeg';

  // Activité 7: Ajouter une propriété @Input nomProduit
  @Input() nomProduit = 'Produit Exemple';

  // Activité 5: Ajouter une propriété booléenne enStock
  enStock = true;

  // Activité 8: Ajouter une propriété numérique prix
  prix = 99.99;

  // Activité 6: Utiliser @Output pour émettre un événement
  @Output() ajoutPanier = new EventEmitter<{ nom: string; prix: number }>();

  // Activité 3: Ajouter une méthode afficherAlerte()
  afficherAlerte(): void {
    alert('Produit ajouté au panier');
    // Émettre l'événement pour Activité 6
    this.ajoutPanier.emit({ nom: this.nomProduit, prix: this.prix });
  }

  // Activité 5: Ajouter un bouton pour basculer enStock
  basculerStock(): void {
    this.enStock = !this.enStock;
  }
}
