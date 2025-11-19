
// COURSES.TS - Classes de cours (POO)


/**
 * Classe abstraite Course

 * 
 * Justification : Course est abstraite car un "cours" générique n'a pas de sens
 * dans notre système. Chaque cours doit avoir un type spécifique (vidéo, live, etc.)
 */
export abstract class Course {
    protected title: string;

    constructor(title: string) {
        this.title = title;
    }

    /* Méthode abstraite - doit être implémentée par les classes dérivées */
    abstract getDescription(): string;

    getTitle(): string {
        return this.title;
    }
}

/*
 * Classe VideoCourse - Cours en format vidéo
 * Hérite de Course et ajoute une durée
 */
export class VideoCourse extends Course {
    private duration: number; // durée en minutes

    constructor(title: string, duration: number) {
        super(title);
        this.duration = duration;
    }

    /*
     * Implémentation de la méthode abstraite
     * Fournit une description spécifique aux cours vidéo
     */
    getDescription(): string {
        return `Cours vidéo: "${this.title}" - Durée: ${this.duration} minutes`;
    }

    getDuration(): number {
        return this.duration;
    }
}

/*
 * Classe LiveCourse - Cours en direct
 * Hérite de Course et ajoute une date de diffusion
 */
export class LiveCourse extends Course {
    private date: Date;

    constructor(title: string, date: Date) {
        super(title);
        this.date = date;
    }

    /**
     * Implémentation de la méthode abstraite
     * Fournit une description spécifique aux cours en direct
     */
    getDescription(): string {
        const formattedDate = this.date.toLocaleString('fr-FR', { // Formate la date selon la langue française
            dateStyle: 'full',// Affiche la date complète (ex : mardi 4 novembre 2025)
            timeStyle: 'short'// Affiche l'heure abrégée (ex : 18:00)
        });
        return `Cours en direct: "${this.title}" - Prévu le ${formattedDate}`;
    }

    getDate(): Date {
        return this.date;
    }
}

// Export par défaut - Alternative aux exports nommés
// Permet d'importer avec : import Course from './courses'
// au lieu de : import { Course } from './courses'
export default Course;
