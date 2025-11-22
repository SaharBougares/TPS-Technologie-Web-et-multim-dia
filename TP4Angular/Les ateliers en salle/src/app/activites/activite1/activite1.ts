import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-activite1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './activite1.html',
  styleUrl: './activite1.scss'
})
export class Activite1Component {
  isLoggedIn = false;
  inputPrenom = '';
  userPrenom = '';
  errorMessage = '';
  prenom = 'Sahar'; // Remplacez par votre prénom

  toggleLogin(): void {
    if (!this.inputPrenom.trim()) {
      this.errorMessage = 'Veuillez entrer votre prénom';
      this.isLoggedIn = false;
      return;
    }

    if (this.inputPrenom.toLowerCase() === this.prenom.toLowerCase()) {
      this.isLoggedIn = !this.isLoggedIn;
      if (this.isLoggedIn) {
        this.userPrenom = this.inputPrenom;
        this.errorMessage = '';
      }
    } else {
      this.errorMessage = `Le prénom doit être "${this.prenom}"`;
      this.isLoggedIn = false;
    }
  }
}
