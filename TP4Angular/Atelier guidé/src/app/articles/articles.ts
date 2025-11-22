import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  // Propriété qui contient la liste des articles
  articles = [
    { titre: 'LapTop Asus', contenu: 'Contenu de l\'article 1', importance: 'élevée' },
    { titre: 'Laptop Gaming', contenu: 'Contenu de l\'article 2', importance: 'moyenne' },
    { titre: 'Laptop HP', contenu: 'Contenu de l\'article 3', importance: 'faible' }
  ];

  // Propriétés pour capturer les valeurs des nouveaux articles
  newTitle = '';
  newContent = '';
  newImportance = 'moyenne';
  validationError = '';

  // Méthode pour ajouter un nouvel article avec validation avancée
  addArticle() {
    this.validationError = '';

    // Validation : titre vide
    if (!this.newTitle || this.newTitle.trim() === '') {
      this.validationError = 'Le titre ne peut pas être vide.';
      return;
    }

    // Validation : contenu vide
    if (!this.newContent || this.newContent.trim() === '') {
      this.validationError = 'Le contenu ne peut pas être vide.';
      return;
    }

    // Validation : doublons (vérifier si le titre existe déjà)
    const titleExists = this.articles.some(
      article => article.titre.toLowerCase().trim() === this.newTitle.toLowerCase().trim()
    );
    if (titleExists) {
      this.validationError = 'Un article avec ce titre existe déjà.';
      return;
    }

    // Si toutes les validations passent, ajouter l'article
    this.articles.push({
      titre: this.newTitle.trim(),
      contenu: this.newContent.trim(),
      importance: this.newImportance
    });

    // Réinitialisation des champs
    this.newTitle = '';
    this.newContent = '';
    this.newImportance = 'moyenne';
  }
}
