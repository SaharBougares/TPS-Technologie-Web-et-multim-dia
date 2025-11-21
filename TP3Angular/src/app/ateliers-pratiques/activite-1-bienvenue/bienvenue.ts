import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenue',
  standalone: true,
  templateUrl: './bienvenue.html',
  styleUrls: ['./bienvenue.scss']
})
export class BienvenueComponent {
  // Activité 1: Ajouter une propriété message
  message = 'Bienvenue sur notre site !';
}


