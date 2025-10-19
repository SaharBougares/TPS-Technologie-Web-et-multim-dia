"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Library_1 = require("./services/Library");
const User_1 = require("./models/User");
async function main() {
    console.log('=== Système de Gestion de Bibliothèque ===\n');
    const library = new Library_1.Library();
    // Add users
    const admin = new User_1.Admin(1, 'Sahar Admin');
    const user1 = new User_1.User(2, 'Amina User');
    const user2 = new User_1.User(3, 'Rania User');
    library.addUser(admin);
    library.addUser(user1);
    library.addUser(user2);
    console.log('Utilisateurs ajoutés');
    // Wait for books to load from API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Livres chargés depuis l'API\n");
    // Display all books
    console.log('Tous les livres:');
    const allBooks = library.getAllBooks();
    allBooks.forEach((book) => {
        console.log(`  [${book.id}] ${book.title} - ${book.author} (${book.year}) - ${book.available ? 'Disponible' : 'Emprunté'}`);
    });
    // Add a new book manually
    const newBook = {
        id: 5,
        title: 'TypeScript Deep Dive',
        author: 'Basarat Ali Syed',
        year: 2017,
        available: true,
    };
    library.addBook(newBook);
    console.log(`\nNouveau livre ajouté: ${newBook.title}`);
    // Search books by author
    console.log('\nRecherche par auteur "Martin":');
    const martinBooks = library.findBooksByAuthor('Martin');
    martinBooks.forEach((book) => {
        console.log(`  - ${book.title} par ${book.author}`);
    });
    // Borrow a book
    console.log('\nBob emprunte "Clean Code":');
    const borrowed1 = library.borrowBook(1, 2);
    console.log(`  Résultat: ${borrowed1 ? 'Succès' : 'Échec'}`);
    // Try to borrow the same book again
    console.log('\nCharlie essaie d\'emprunter "Clean Code":');
    const borrowed2 = library.borrowBook(1, 3);
    console.log(`  Résultat: ${borrowed2 ? 'Succès' : 'Échec (déjà emprunté)'}`);
    // Display available books
    console.log('\nLivres disponibles:');
    const availableBooks = library.getAvailableBooks();
    availableBooks.forEach((book) => {
        console.log(`  - ${book.title}`);
    });
    // Return a book
    console.log('\nBob retourne "Clean Code":');
    const returned = library.returnBook(1);
    console.log(`  Résultat: ${returned ? 'Succès' : 'Échec'}`);
    // Borrow again after return
    console.log('\nCharlie emprunte "Clean Code":');
    const borrowed3 = library.borrowBook(1, 3);
    console.log(`  Résultat: ${borrowed3 ? 'Succès' : 'Échec'}`);
    // Search by title
    console.log('\nRecherche par titre "Design":');
    const designBooks = library.searchBooksByTitle('Design');
    designBooks.forEach((book) => {
        console.log(`  - ${book.title}`);
    });
    // Display user info
    console.log('\nInformation utilisateur:');
    const user = library.findUserById(2);
    if (user) {
        console.log(`  Nom: ${user.name}, Rôle: ${user.role}`);
    }
    console.log('\n=== Fin de la démonstration ===');
}
main().catch(console.error);
