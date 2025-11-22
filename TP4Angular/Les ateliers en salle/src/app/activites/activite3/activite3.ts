import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Article {
  titre: string;
  contenu: string;
  importance: 'élevée' | 'moyenne' | 'faible';
}

@Component({
  selector: 'app-activite3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './activite3.html',
  styleUrl: './activite3.scss'
})
export class Activite3Component {
  articles: Article[] = [
    { titre: 'Angular Directives', contenu: 'Les directives sont essentielles', importance: 'élevée' },
    { titre: 'TypeScript Basics', contenu: 'Les bases de TypeScript', importance: 'moyenne' },
    { titre: 'CSS Styling', contenu: 'Les styles CSS', importance: 'faible' }
  ];

  newTitre = '';
  newContenu = '';
  newImportance: 'élevée' | 'moyenne' | 'faible' = 'moyenne';

  addArticle(): void {
    if (this.newTitre.trim() && this.newContenu.trim()) {
      this.articles.push({
        titre: this.newTitre,
        contenu: this.newContenu,
        importance: this.newImportance
      });
      this.newTitre = '';
      this.newContenu = '';
      this.newImportance = 'moyenne';
    }
  }

  deleteArticle(index: number): void {
    this.articles.splice(index, 1);
  }

  getArticleClass(importance: string): string {
    return `importance-${importance}`;
  }
}
