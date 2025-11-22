import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Welcome } from './welcome/welcome';
import { Articles } from './articles/articles';
import { Etudiant } from './etudiant/etudiant';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Welcome, Articles, Etudiant],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp4');
}
