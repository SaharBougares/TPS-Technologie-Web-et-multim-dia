import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  title = 'Jeu de Quiz';
  description = 'Testez vos connaissances avec notre jeu de quiz interactif!';

  @Output() startQuiz = new EventEmitter<void>();

  onStartClick(): void {
    this.startQuiz.emit();
  }
}
