import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panier-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panier-guide.html',
  styleUrls: ['./panier-guide.scss']
})
export class PanierGuideComponent {
  // Activité 6: Recevoir les données du parent avec @Input
  @Input() items: string[] = [];
}
