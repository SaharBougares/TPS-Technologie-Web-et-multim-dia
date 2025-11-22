import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  // Propriété indiquant si l'utilisateur est connecté
  isLoggedIn: boolean = false;

  // Méthode pour basculer l'état de connexion
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
