import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home';
import { GameComponent } from './game/game';

@Component({
  selector: 'app-projet-quiz',
  standalone: true,
  imports: [CommonModule, HomeComponent, GameComponent],
  templateUrl: './projet-quiz.html',
  styleUrls: ['./projet-quiz.scss']
})
export class ProjetQuizComponent {
  gameStarted: boolean = false;

  startGame(): void {
    this.gameStarted = true;
  }

  goHome(): void {
    this.gameStarted = false;
  }
}
