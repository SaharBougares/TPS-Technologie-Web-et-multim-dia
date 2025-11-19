import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookForm } from '../book-form/book-form';
import { BookList } from '../book-list/book-list';
import { FormsModule } from '@angular/forms';
import { Book } from '../book';
@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [CommonModule,FormsModule ,BookForm, BookList],
  templateUrl: './book-container.html',
  styleUrl: './book-container.css',
})

export class BookContainer {

  // 6. Liste initiale de livres (avec les champs retenus)
  books: Book[] = [
    new Book(
      1,
      'Le Petit Prince',
      'Antoine de Saint-Exupéry',
      'contact@folio.fr',
      '0102030405',
      '1943-04-06',
      'Roman',
      true,
      10
    ),
    new Book(
      2,
      'Introduction à Angular',
      'Maxime Dupont',
      'support@angular-book.com',
      '0600000000',
      '2024-01-15',
      'Informatique',
      true,
      5
    ),
    new Book(
      3,
      'Histoire de la Tunisie',
      'Ali Ben Salem',
      'editions@tunisie.tn',
      '0712345678',
      '2019-05-20',
      'Histoire',
      false,
      0
    )
  ];

  // 7. Tableau de catégories
  categories: string[] = [
    'Roman',
    'Science',
    'Histoire',
    'Informatique',
    'Art',
    'Autres'
  ];

  // 🔹 Livre actuellement en cours d'édition (null = mode ajout)
  editingBook: Book | null = null;

  // 🔍 texte de recherche
  searchTerm: string = '';
  // 🔽 clé de tri : '', 'category', 'availability'
  sortKey: string = '';

  // 🔹 Calculer le prochain ID en fonction du maximum des IDs existants
  private getNextId(): number {
    if (this.books.length === 0) {
      return 1;
    }
    const maxId = Math.max(...this.books.map(b => b.id));
    return maxId + 1;
  }

  // 🔹 Vérifier si un livre en doublon existe (même titre + même auteur + même catégorie)
  private isDuplicate(book: Book): boolean {
    return this.books.some(b =>
      b.title.toLowerCase() === book.title.toLowerCase() &&
      b.author.toLowerCase() === book.author.toLowerCase() &&
      b.category.toLowerCase() === book.category.toLowerCase()
    );
  }

  // 🔹 liste filtrée + triée pour l’affichage
  get filteredBooks(): Book[] {
    let result = [...this.books];

    // filtre par recherche (titre ou auteur)
    const term = this.searchTerm.toLowerCase().trim();
    if (term) {
      result = result.filter(b =>
        b.title.toLowerCase().includes(term) ||
        b.author.toLowerCase().includes(term)
      );
    }

    // tri
    if (this.sortKey === 'category') {
      result.sort((a, b) => a.category.localeCompare(b.category));
    } else if (this.sortKey === 'availability') {
      // dispo d’abord, puis non dispo
      result.sort((a, b) => Number(b.isAvailable) - Number(a.isAvailable));
    }

    return result;
  }

   // CREATE / UPDATE
  onBookSubmit(book: Book) {
    if (this.editingBook) {
      // 🔸 MODE UPDATE

      // On garde le même id que le livre en cours d'édition
      book.id = this.editingBook.id;

      const index = this.books.findIndex(b => b.id === this.editingBook!.id);
      if (index !== -1) {
        this.books[index] = { ...book };
      }

      // revenir en mode ajout
      this.editingBook = null;
    } else {
      // 🔸 MODE CREATE

      // Vérifier si le livre existe déjà (même titre + même auteur + même catégorie)
      if (this.isDuplicate(book)) {
        alert('Un livre avec le même titre, auteur et catégorie existe déjà!');
        return;
      }

      // id auto
      //  générer automatiquement l'id en fonction du maximum des IDs existants
      book.id = this.getNextId();
      // 🔹 ajouter le livre dans la liste
      this.books.push({ ...book });
      console.log('Livre ajouté :', book);
    }

    console.log('Liste des livres :', this.books);
  }


   // appelé quand on clique sur "Modifier" dans la liste
  onEditBook(book: Book) {
    // on garde une copie pour éviter de modifier directement la liste
    this.editingBook = { ...book };
  }
 
deleteBook(id: number) {
  this.books = this.books.filter(book => book.id !== id);
}

}



