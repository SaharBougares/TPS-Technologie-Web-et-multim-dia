import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Question {
  question: string;
  options: string[];
  reponse: string;
  type?: 'multiple' | 'text';
}

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './question.html',
  styleUrls: ['./question.scss']
})
export class QuestionComponent {
  // Activité 1: Property Binding pour afficher la question
  @Input() question: Question | null = null;
  @Input() questionNumber: number = 1;
  @Input() totalQuestions: number = 1;
  @Input() isAnswered: boolean = false;

  // Activité 6: Two-Way Data Binding pour capturer la réponse
  selectedOption: string = '';
  textAnswer: string = '';

  // Activité 2: Event Binding pour gérer les réponses
  @Output() answerSelected = new EventEmitter<string>();

  selectOption(option: string): void {
    if (!this.isAnswered) {
      this.selectedOption = option;
      this.answerSelected.emit(option);
    }
  }

  submitTextAnswer(): void {
    if (!this.isAnswered && this.textAnswer.trim()) {
      this.answerSelected.emit(this.textAnswer);
    }
  }

  isCorrect(): boolean {
    if (!this.question) return false;
    const userAnswer = this.selectedOption || this.textAnswer;
    return userAnswer.toLowerCase() === this.question.reponse.toLowerCase();
  }
}
