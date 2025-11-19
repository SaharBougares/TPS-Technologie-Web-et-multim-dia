import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../book'; // adapte le chemin si besoin


@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})




export class BookForm implements OnChanges{


   // 🔹 Livre à éditer reçu du parent (null = mode ajout)
  @Input() bookToEdit: Book | null = null;




    // 🔹 Événement envoyé au parent lors du submit
  @Output() bookSubmit = new EventEmitter<Book>();


  // Modèle pour le formulaire (CREATE / UPDATE plus tard)
  book: Book = new Book(
    0,
    '',
    '',
    '',
    '',
    '',
    '',
    true
    // stock est facultatif, donc on ne le met pas
  );

  // Erreur de validation personnalisée pour la date
  dateError: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bookToEdit']) {
      if (this.bookToEdit) {
        // MODE UPDATE : on précharge le formulaire
        this.book = { ...this.bookToEdit };
      } else {
        // MODE CREATE : on réinitialise
        this.book = new Book(0, '', '', '', '', '', '', true);
      }
    }
  }

  // Valider que la date est après 1900
  validateReleaseDate(): boolean {
    if (!this.book.releaseDate) {
      this.dateError = '';
      return true;
    }

    const date = new Date(this.book.releaseDate);
    const year = date.getFullYear();

    if (year <= 1900) {
      this.dateError = 'La date doit être postérieure à 1900.';
      return false;
    }

    this.dateError = '';
    return true;
  }

  // Méthode appelée au submit
   onSubmit(form: NgForm) {
    // Valider la date
    if (!this.validateReleaseDate()) {
      return;
    }

    // on crée une COPIE pour ne pas modifier l'objet dans la liste après reset
    const bookToSend = new Book(
      this.book.id,
      this.book.title,
      this.book.author,
      this.book.publisherEmail,
      this.book.publisherPhone,
      this.book.releaseDate,
      this.book.category,
      this.book.isAvailable,
      this.book.stock
    );

    // 🔹 envoyer le book au parent
    this.bookSubmit.emit(bookToSend);

    // 🔹 réinitialiser le modèle + formulaire
    this.book = new Book(0, '', '', '', '', '', '', true);
    this.dateError = '';
    // plus tard on émettra vers le parent pour CREATE / UPDATE
    form.resetForm({
      isAvailable: true
    });
  }



}
