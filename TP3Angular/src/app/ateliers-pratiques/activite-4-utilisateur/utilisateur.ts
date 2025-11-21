import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './utilisateur.html',
  styleUrls: ['./utilisateur.scss']
})
export class UtilisateurComponent {
  // Activité 4: Ajouter une propriété nom initialisée à une chaîne vide
  nom = '';
}
