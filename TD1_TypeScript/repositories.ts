// REPOSITORIES.TS - Interfaces génériques et Repository pattern


import { User } from './models';
import { Course } from './courses';

/**
 * Interface générique Repository<T>
 * Définit un contrat pour la gestion de collections d'objets
 * Le type générique T permet de réutiliser cette interface pour différents types
 * 
 * Avantages :
 * - Réutilisabilité : même interface pour User, Course, etc.
 * - Type-safety : TypeScript vérifie les types à la compilation
 * - Maintenabilité : modifications centralisées
 */
export interface Repository<T> {
    /**
     * Ajoute un élément au repository
     * item - L'élément à ajouter
     */
    add(item: T): void;

    /**
     * Supprime un élément par son ID
     *id - L'identifiant de l'élément à supprimer
     */
    remove(id: number): void;

    /**
     * Récupère tous les éléments
     * returns Un tableau contenant tous les éléments
     */
    getAll(): T[];

    /**
     * Trouve un élément par son ID (méthode additionnelle utile)
     *  id - L'identifiant de l'élément recherché
     * returns L'élément trouvé ou undefined
     */
    findById(id: number): T | undefined;
}

/**
 * Classe UserRepository
 * Implémente Repository<User> pour gérer une collection d'utilisateurs
 * Utilise un tableau en mémoire comme stockage simple
 */
export class UserRepository implements Repository<User> {
    private users: User[] = [];

    /**
     * Ajoute un utilisateur au repository
     * Vérifie qu'un utilisateur avec le même ID n'existe pas déjà
     */
    add(user: User): void {
        const exists = this.users.some(u => u.id === user.id);
        if (exists) {
            console.warn(` Un utilisateur avec l'ID ${user.id} existe déjà. Mise à jour effectuée.`);
            this.remove(user.id);
        }
        this.users.push(user);
        console.log(`Utilisateur ajouté: ${user.name} (${user.role})`);
    }

    /**
     * Supprime un utilisateur par son ID
     */
    remove(id: number): void {
        const initialLength = this.users.length;
        this.users = this.users.filter(u => u.id !== id);
        
        if (this.users.length < initialLength) {
            console.log(` Utilisateur avec l'ID ${id} supprimé`);
        } else {
            console.warn(` Aucun utilisateur trouvé avec l'ID ${id}`);
        }
    }

    /**
     * Récupère tous les utilisateurs
     */
    getAll(): User[] {
        return [...this.users]; // Retourne une copie pour éviter les modifications externes
    }

    /**
     * Trouve un utilisateur par son ID
     */
    findById(id: number): User | undefined {
        return this.users.find(u => u.id === id);
    }

    /**
     * Méthode additionnelle : filtre les utilisateurs par rôle
     */
    findByRole(role: string): User[] {
        return this.users.filter(u => u.role === role);
    }

    /**
     * Méthode additionnelle : compte le nombre d'utilisateurs
     */
    count(): number {
        return this.users.length;
    }
}

/**
 * Classe CourseRepository (Amélioration proposée)
 * Implémente Repository<Course> pour gérer une collection de cours
 * Démontre la réutilisabilité de l'interface générique
 */
export class CourseRepository implements Repository<Course> {
    private courses: Course[] = [];

    add(course: Course): void {
        this.courses.push(course);
        console.log(`✅ Cours ajouté: ${course.getTitle()}`);
    }

    remove(id: number): void {
        const initialLength = this.courses.length;
        this.courses = this.courses.filter((_, index) => index !== id);
        
        if (this.courses.length < initialLength) {
            console.log(`🗑️ Cours avec l'ID ${id} supprimé`);
        }
    }

    getAll(): Course[] {
        return [...this.courses];
    }

    findById(id: number): Course | undefined {
        return this.courses[id];
    }

    /**
     * Méthode additionnelle : recherche de cours par titre
     */
    findByTitle(title: string): Course | undefined {
        return this.courses.find(c => c.getTitle().toLowerCase().includes(title.toLowerCase()));
    }
}
