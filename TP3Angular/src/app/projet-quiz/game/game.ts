import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent, Question } from '../question/question';
import { ScoreComponent } from '../score/score';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, QuestionComponent, ScoreComponent],
  templateUrl: './game.html',
  styleUrls: ['./game.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  // Étape 1: Tableau de questions
  questions: Question[] = [
    {
      question: 'Quel est le plus grand océan du monde ?',
      options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'],
      reponse: 'Pacifique',
      type: 'multiple'
    },
    {
      question: 'Quelle est la capitale de l\'Algérie ?',
      options: ['Alger', 'Tunis', 'Tanger', 'Casablanca'],
      reponse: 'Alger',
      type: 'multiple'
    },
    {
      question: 'Quelle est la couleur du ciel par temps clair ?',
      options: ['Bleu', 'Vert', 'Rouge', 'Jaune'],
      reponse: 'Bleu',
      type: 'multiple'
    },
    {
      question: 'Quel est le plus haut sommet du monde ?',
      options: ['Mont Blanc', 'Everest', 'K2', 'Kilimanjaro'],
      reponse: 'Everest',
      type: 'multiple'
    },
    {
      question: 'En quelle année l\'homme a-t-il marché sur la lune ?',
      options: ['1969', '1971', '1965', '1972'],
      reponse: '1969',
      type: 'multiple'
    }
  ];

  // Gestion du jeu
  currentQuestionIndex: number = 0;
  score: number = 0;
  correctAnswers: number = 0;
  incorrectAnswers: number = 0;
  gameFinished: boolean = false;
  answeredQuestions: Set<number> = new Set();

  // Défi 3: Chronomètre
  timePerQuestion: number = 15; // 15 secondes par question
  timeRemaining: number = 15;
  timerInterval: any = null;
  timeExpired: boolean = false;

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  get isCurrentQuestionAnswered(): boolean {
    return this.answeredQuestions.has(this.currentQuestionIndex);
  }

  // Activité 2: Gérer les réponses du joueur
  onAnswerSelected(answer: string): void {
    if (this.isCurrentQuestionAnswered) return;

    const isCorrect = answer.toLowerCase() === this.currentQuestion.reponse.toLowerCase();
    
    if (isCorrect) {
      this.score += 10;
      this.correctAnswers++;
    } else {
      this.score = Math.max(0, this.score - 5);
      this.incorrectAnswers++;
    }

    // Défi 1: Bloquer les réponses après la sélection
    this.answeredQuestions.add(this.currentQuestionIndex);
  }

  restartGame(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.gameFinished = false;
    this.answeredQuestions.clear();
    this.timeExpired = false;
    this.startTimer();
  }

  // Défi 3: Gestion du chronomètre
  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  startTimer(): void {
    this.timeRemaining = this.timePerQuestion;
    this.timeExpired = false;
    
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    this.timerInterval = setInterval(() => {
      this.timeRemaining--;

      if (this.timeRemaining <= 0) {
        this.handleTimeExpired();
      }
    }, 1000);
  }

  stopTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  handleTimeExpired(): void {
    this.stopTimer();
    this.timeExpired = true;

    // Si la question n'a pas été répondue, compter comme incorrecte
    if (!this.isCurrentQuestionAnswered) {
      this.score = Math.max(0, this.score - 5);
      this.incorrectAnswers++;
      this.answeredQuestions.add(this.currentQuestionIndex);
    }
  }

  nextQuestion(): void {
    this.stopTimer();
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.startTimer();
    } else {
      this.gameFinished = true;
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.startTimer();
    }
  }
}
