"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
class ApiService {
    async fetchBooks() {
        // Simulate API call with realistic book data
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        title: 'Clean Code',
                        author: 'Robert C. Martin',
                        year: 2008,
                        available: true,
                    },
                    {
                        id: 2,
                        title: 'Les Misérables',
                        author: 'Victor Hugo',
                        year: 1994,
                        available: true,
                    },
                    {
                        id: 3,
                        title: 'The Pragmatic Programmer',
                        author: 'Andrew Hunt',
                        year: 1999,
                        available: true,
                    },
                    {
                        id: 4,
                        title: 'L Étranger',
                        author: 'Albert Camus',
                        year: 1999,
                        available: true,
                    },
                ]);
            }, 500);
        });
    }
}
exports.ApiService = ApiService;
