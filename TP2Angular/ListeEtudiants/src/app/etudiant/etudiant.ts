import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student } from './TypeStudent';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class EtudiantComponent {
  etudiant: Student = {
    id: 1,
    name: 'Ali Ben Saleh',
    lastname: 'Ben Saleh',
    average: 85.5
  };
}
