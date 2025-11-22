import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Produit {
  nom: string;
  prix: number;
  stock: number;
}

@Component({
  selector: 'app-activite4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './activite.html',
  styleUrl: './activite4.scss'
})
export class Activite4Component {
  Math = Math;
  
  produits: Produit[] = [
    { nom: 'Laptop', prix: 999, stock: 75 },
    { nom: 'Souris', prix: 25, stock: 30 },
    { nom: 'Clavier', prix: 75, stock: 10 }
  ];

  newNom = '';
  newPrix = 0;
  newStock = 0;

  addProduit(): void {
    if (this.newNom.trim() && this.newPrix > 0 && this.newStock >= 0 && this.newPrix >= 0) {
      this.produits.push({
        nom: this.newNom,
        prix: Math.max(0, this.newPrix),
        stock: Math.max(0, this.newStock)
      });
      this.newNom = '';
      this.newPrix = 0;
      this.newStock = 0;
    }
  }

  deleteProduit(index: number): void {
    this.produits.splice(index, 1);
  }

  incrementStock(index: number): void {
    this.produits[index].stock++;
  }

  decrementStock(index: number): void {
    if (this.produits[index].stock > 0) {
      this.produits[index].stock--;
    }
  }

  getStockColor(stock: number): string {
    if (stock > 50) return '#28a745'; // Vert
    if (stock >= 20) return '#fd7e14';  // Orange
    return '#dc3545';                  // Rouge
  }

  getStockStyle(stock: number): { color: string } {
    return { color: this.getStockColor(stock) };
  }

  getStockStatus(stock: number): string {
    if (stock > 50) return 'Stock normal';
    if (stock >= 20) return 'Stock faible';
    return 'Rupture de stock';
  }
}
