import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../book'; // adapter le chemin si besoin

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports:  [CommonModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
        // 8. Réception de la liste via @Input()
  @Input() books: Book[] = [];


    // 🔹 Événement pour demander l'édition d'un livre
  @Output() edit = new EventEmitter<Book>();

  onEdit(book: Book) {
    this.edit.emit(book);
  }


   @Output() delete = new EventEmitter<number>();

  onDelete(id: number) {
    this.delete.emit(id);
  }

}




