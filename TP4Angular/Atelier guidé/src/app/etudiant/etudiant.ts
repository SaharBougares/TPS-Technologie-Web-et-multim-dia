import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student, Students } from '../typeStudent';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant implements OnInit {
  etuds = Students;
  selectedEtudiant!: Student;

  ngOnInit(): void {
  }

  onSelect(etudiant: Student): void {
    this.selectedEtudiant = etudiant;
  }
}
