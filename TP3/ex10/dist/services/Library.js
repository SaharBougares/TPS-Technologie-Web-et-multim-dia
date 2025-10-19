"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const Repository_1 = require("../utils/Repository");
const ApiService_1 = require("./ApiService");
class Library {
    constructor() {
        this.bookRepository = new Repository_1.Repository();
        this.userRepository = new Repository_1.Repository();
        this.apiService = new ApiService_1.ApiService();
        this.initializeBooks();
    }
    async initializeBooks() {
        const books = await this.apiService.fetchBooks();
        books.forEach((book) => this.bookRepository.add(book));
    }
    addBook(book) {
        this.bookRepository.add(book);
    }
    removeBook(bookId) {
        this.bookRepository.remove((book) => book.id === bookId);
    }
    findBookById(id) {
        return this.bookRepository.find((book) => book.id === id);
    }
    findBooksByAuthor(author) {
        return this.bookRepository.findAll((book) => book.author.toLowerCase().includes(author.toLowerCase()));
    }
    borrowBook(bookId, userId) {
        const book = this.findBookById(bookId);
        const user = this.userRepository.find((u) => u.id === userId);
        if (!book || !user || !book.available) {
            return false;
        }
        book.available = false;
        return true;
    }
    returnBook(bookId) {
        const book = this.findBookById(bookId);
        if (!book)
            return false;
        book.available = true;
        return true;
    }
    addUser(user) {
        this.userRepository.add(user);
    }
    getAllBooks() {
        return this.bookRepository.getAll();
    }
    getAvailableBooks() {
        return this.bookRepository.findAll((book) => book.available);
    }
    searchBooksByTitle(title) {
        return this.bookRepository.findAll((book) => book.title.toLowerCase().includes(title.toLowerCase()));
    }
    findUserById(id) {
        return this.userRepository.findById(id);
    }
}
exports.Library = Library;
