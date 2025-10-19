import { Book } from '../models/Book';
import { User, Admin } from '../models/User';
import { Repository } from '../utils/Repository';
import { ApiService } from './ApiService';

export class Library {
  private bookRepository = new Repository<Book>();
  private userRepository = new Repository<User | Admin>();
  private apiService = new ApiService();

  constructor() {
    this.initializeBooks();
  }

  private async initializeBooks(): Promise<void> {
    const books = await this.apiService.fetchBooks();
    books.forEach((book) => this.bookRepository.add(book));
  }

  addBook(book: Book): void {
    this.bookRepository.add(book);
  }

  removeBook(bookId: number): void {
    this.bookRepository.remove((book) => book.id === bookId);
  }

  findBookById(id: number): Book | undefined {
    return this.bookRepository.find((book) => book.id === id);
  }

  findBooksByAuthor(author: string): Book[] {
    return this.bookRepository.findAll((book) =>
      book.author.toLowerCase().includes(author.toLowerCase()),
    );
  }

  borrowBook(bookId: number, userId: number): boolean {
    const book = this.findBookById(bookId);
    const user = this.userRepository.find((u) => u.id === userId);

    if (!book || !user || !book.available) {
      return false;
    }

    book.available = false;
    return true;
  }

  returnBook(bookId: number): boolean {
    const book = this.findBookById(bookId);
    if (!book) return false;

    book.available = true;
    return true;
  }

  addUser(user: User | Admin): void {
    this.userRepository.add(user);
  }

  getAllBooks(): Book[] {
    return this.bookRepository.getAll();
  }

  getAvailableBooks(): Book[] {
    return this.bookRepository.findAll((book) => book.available);
  }

  searchBooksByTitle(title: string): Book[] {
    return this.bookRepository.findAll((book) =>
      book.title.toLowerCase().includes(title.toLowerCase()),
    );
  }

  findUserById(id: number): User | Admin | undefined {
    return this.userRepository.findById(id);
  }
}
