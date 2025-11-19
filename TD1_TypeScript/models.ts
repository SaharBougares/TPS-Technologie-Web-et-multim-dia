// MODELS.TS - Types et Interfaces de base

/*Type Role - Définit les rôles possibles dans la plateforme*/
export type Role = "student" | "teacher" | "admin";

/*
 * Interface User - Représente un utilisateur de la plateforme
 * Utilise l'interface car elle peut être étendue et implémentée par des classes
 */
export interface User {
    id: number;
    name: string;
    role: Role;
    email?: string; // Propriété optionnelle
}

/**
 * Type générique ApiResponse<T>
 * Représente une réponse d'API qui peut contenir soit des données, soit une erreur
 * Utilisation d'un type car il combine des propriétés optionnelles
 */
export type ApiResponse<T> = {
    data?: T;
    error?: string;
};

/**
 * Fonction fetchUser - Simule la récupération d'un utilisateur depuis une API
 *id - L'identifiant de l'utilisateur à récupérer
 *returns ApiResponse<User> contenant soit l'utilisateur, soit une erreur
 */

export function fetchUser(id: number): ApiResponse<User> {
    // Simulation d'une base de données
    const mockDatabase: User[] = [
        { id: 1, name: "Alice Dupont", role: "student", email: "alice@example.com" },
        { id: 2, name: "Bob Martin", role: "teacher", email: "bob@example.com" },
        { id: 3, name: "Charlie Admin", role: "admin", email: "charlie@example.com" }
    ];

    const user = mockDatabase.find(u => u.id === id);

    if (user) {
        return { data: user };
    } else {
        return { error: `Utilisateur avec l'ID ${id} introuvable` };
    }
}
