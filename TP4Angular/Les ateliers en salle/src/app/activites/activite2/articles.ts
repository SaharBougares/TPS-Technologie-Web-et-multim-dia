import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Article {
  titre: string;
  contenu: string;
}

@Component({
  selector: 'app-activite2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './articles.html',
  styleUrl: './articles.scss'
})
export class Activite2Component {
  articles: Article[] = [
    { titre: 'Angular Directives', contenu: 'Les directives sont des marqueurs sur les éléments DOM qui indiquent à Angular d\'attacher un comportement spécifié à cet élément.' },
    { titre: 'ngIf et ngFor', contenu: 'ngIf permet l\'affichage conditionnel et ngFor permet l\'itération sur les listes.' }
  ];

  newTitre = '';
  newContenu = '';

  addArticle(): void {
    if (this.newTitre.trim() && this.newContenu.trim()) {
      this.articles.push({
        titre: this.newTitre,
        contenu: this.newContenu
      });
      this.newTitre = '';
      this.newContenu = '';
    }
  }

  deleteArticle(index: number): void {
    this.articles.splice(index, 1);
  }
}
