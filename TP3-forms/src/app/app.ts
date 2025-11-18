import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [FormsModule, EtudiantFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP3-forms');
}
