import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tache {
  description: string;
  statut: boolean;
  priorite: 'haute' | 'moyenne' | 'basse';
}

@Component({
  selector: 'app-activite5',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './activite5.html',
  styleUrl: './activite5.scss'
})
export class Activite5Component {
  taches: Tache[] = [
    { description: 'Apprendre Angular', statut: false, priorite: 'haute' },
    { description: 'Créer un composant', statut: true, priorite: 'moyenne' },
    { description: 'Styliser l\'interface', statut: false, priorite: 'basse' }
  ];

  newDescription = '';
  newPriorite: 'haute' | 'moyenne' | 'basse' = 'moyenne';

  addTache(): void {
    if (this.newDescription.trim()) {
      this.taches.push({
        description: this.newDescription,
        statut: false,
        priorite: this.newPriorite
      });
      this.newDescription = '';
      this.newPriorite = 'moyenne';
    }
  }

  toggleTache(index: number): void {
    this.taches[index].statut = !this.taches[index].statut;
  }

  deleteTache(index: number): void {
    this.taches.splice(index, 1);
  }

  getTacheClass(tache: Tache): { [key: string]: boolean } {
    return {
      'tache-completed': tache.statut,
      'priorite-haute': tache.priorite === 'haute',
      'priorite-moyenne': tache.priorite === 'moyenne',
      'priorite-basse': tache.priorite === 'basse'
    };
  }

  getPrioriteColor(priorite: string): string {
    switch (priorite) {
      case 'haute': return '#dc3545';
      case 'moyenne': return '#fd7e14';
      case 'basse': return '#28a745';
      default: return '#666';
    }
  }

  get completedCount(): number {
    return this.taches.filter(t => t.statut).length;
  }

  get totalCount(): number {
    return this.taches.length;
  }

  get progressPercentage(): number {
    return this.totalCount === 0 ? 0 : (this.completedCount / this.totalCount) * 100;
  }
}
