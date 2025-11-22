import { Injectable } from '@angular/core';
import { Question } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: Question[] = [
    {
      id: 1,
      question: 'Quel est le plus grand océan du monde ?',
      options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'],
      reponse: 'Pacifique'
    },
    {
      id: 2,
      question: 'Quelle est la capitale de l\'Algérie ?',
      options: ['Alger', 'Tunis', 'Tanger'],
      reponse: 'Alger'
    },
    {
      id: 3,
      question: 'Quelle est la couleur du ciel par temps clair ?',
      options: ['Bleu', 'Vert', 'Rouge'],
      reponse: 'Bleu'
    },
    {
      id: 4,
      question: 'Quel est le plus haut sommet du monde ?',
      options: ['Mont Blanc', 'Mont Everest', 'Kilimanjaro'],
      reponse: 'Mont Everest'
    },
    {
      id: 5,
      question: 'Quel est le plus grand désert du monde ?',
      options: ['Sahara', 'Kalahari', 'Gobi'],
      reponse: 'Sahara'
    }
  ];

  constructor() {}

  getQuestions(): Question[] {
    return this.questions.map(q => ({
      ...q,
      answered: false,
      selectedAnswer: undefined,
      isCorrect: undefined
    }));
  }

  checkAnswer(selectedAnswer: string, question: Question): boolean {
    return selectedAnswer === question.reponse;
  }
}
