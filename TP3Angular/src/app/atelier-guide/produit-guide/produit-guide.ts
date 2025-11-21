import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit-guide.html',
  styleUrls: ['./produit-guide.scss']
})
export class ProduitGuideComponent {
  // Activité 7: Ajouter une propriété @Input nomProduit
  @Input() nomProduit: string = 'Produit Par Défaut';

  // Activité 6: Utiliser @Output pour émettre un événement
  @Output() ajouterAuPanier = new EventEmitter<string>();

  // Activité 5a: Ajouter une propriété booléenne enStock
  enStock: boolean = true;

  // Activité 5c: Ajouter une méthode pour basculer enStock
  toggleStock(): void {
    this.enStock = !this.enStock;
  }

  // Activité 6: Ajouter une méthode pour émettre l'événement
  ajouterProduit(): void {
    this.ajouterAuPanier.emit(this.nomProduit);
  }
}
