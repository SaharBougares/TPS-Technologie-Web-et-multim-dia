import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from './services/quiz.service';
import { Question, AnswerHistory } from './models/quiz.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  correctAnswers: number = 0;
  incorrectAnswers: number = 0;
  answerHistory: AnswerHistory[] = [];
  gameFinished: boolean = false;
  showFeedback: boolean = false;
  feedbackMessage: string = '';
  feedbackType: 'correct' | 'incorrect' = 'correct';
  selectedAnswer: string | null = null;
  isReponse: boolean = false;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.initializeGame();
  }

  initializeGame(): void {
    this.questions = this.quizService.getQuestions();
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.answerHistory = [];
    this.gameFinished = false;
    this.showFeedback = false;
    this.selectedAnswer = null;
  }

  get currentQuestion(): Question | undefined {
    return this.questions[this.currentQuestionIndex];
  }

  get allQuestionsAnswered(): boolean {
    return this.questions.every(q => q.answered);
  }

  get unansweredQuestions(): Question[] {
    return this.questions.filter(q => !q.answered);
  }

  get answeredQuestions(): Question[] {
    return this.questions.filter(q => q.answered);
  }

  onSelectOption(selectedOption: string, question: Question): void {
    // Marquer la question comme répondue
    question.answered = true;
    
    // Stocker la réponse sélectionnée
    question.selectedAnswer = selectedOption;
    
    // Vérifier si la réponse est correcte
    this.isReponse = selectedOption === question.reponse;
    question.isCorrect = this.isReponse;
    
    if (this.isReponse) {
      this.score += 10;
      this.correctAnswers++;
    } else {
      this.score -= 5;
      this.incorrectAnswers++;
    }

    // Ajouter à l'historique
    this.answerHistory.push({
      questionId: question.id,
      question: question.question,
      selectedAnswer: selectedOption,
      correctAnswer: question.reponse,
      isCorrect: this.isReponse
    });

    // Afficher le feedback
    this.showFeedback = true;
  }

  nextQuestion(): void {
    this.showFeedback = false;
    this.selectedAnswer = null;

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else if (this.allQuestionsAnswered) {
      this.finishGame();
    }
  }

  finishGame(): void {
    this.gameFinished = true;
  }

  resetGame(): void {
    this.initializeGame();
  }

  isCorrect(option: string, question: Question): boolean {
    return option === question.reponse;
  }

  isSelected(option: string): boolean {
    return this.selectedAnswer === option;
  }

  getButtonOpacity(question: Question): number {
    return question.answered ? 0.5 : 1;
  }
}
