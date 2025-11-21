import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './score.html',
  styleUrls: ['./score.scss']
})
export class ScoreComponent {
  // Activité 2: Système de Scoring avec @Input
  @Input() score: number = 0;
  @Input() totalQuestions: number = 0;
  @Input() correctAnswers: number = 0;
  @Input() incorrectAnswers: number = 0;

  getPercentage(): number {
    if (this.totalQuestions === 0) return 0;
    return Math.round((this.correctAnswers / this.totalQuestions) * 100);
  }

  getScoreMessage(): string {
    const percentage = this.getPercentage();
    if (percentage === 100) return 'Parfait! 🎉';
    if (percentage >= 80) return 'Excellent! 🌟';
    if (percentage >= 60) return 'Bien! 👍';
    if (percentage >= 40) return 'Moyen 📊';
    return 'À améliorer 💪';
  }
}
