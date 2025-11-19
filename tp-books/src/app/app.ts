import { Component, signal } from '@angular/core';
import { BookContainer} from './book-container/book-container';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ BookContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp-books');
}



