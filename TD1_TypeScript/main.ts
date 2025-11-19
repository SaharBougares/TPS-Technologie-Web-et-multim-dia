// MAIN.TS - Point d'entrée et simulation du système


// Imports nommés 
import { User, fetchUser, ApiResponse } from './models';
import { VideoCourse, LiveCourse } from './courses';
import { UserRepository, CourseRepository } from './repositories';

// Import par défaut (exemple alternatif, commenté car on utilise les imports nommés)
// import Course from './courses';

/**
 * Fonction principale qui simule l'utilisation de la plateforme e-learning
 */
function main(): void {
    console.log("=".repeat(60));
    console.log("PLATEFORME E-LEARNING - SIMULATION");
    console.log("=".repeat(60));
    console.log();

    
    // 1. CRÉATION DES UTILISATEURS
    console.log(" ÉTAPE 1 : Création des utilisateurs");
    console.log("-".repeat(60));

    const student: User = {
        id: 1,
        name: "Marie Curie",
        role: "student",
        email: "marie.curie@university.fr"
    };

    const teacher: User = {
        id: 2,
        name: "Albert Einstein",
        role: "teacher",
        email: "albert.einstein@university.fr"
    };

    console.log(`Étudiant créé: ${student.name} (${student.email})`);
    console.log(`Professeur créé: ${teacher.name} (${teacher.email})`);
    console.log();

   
    // 2. AJOUT DANS LE REPOSITORY 
    console.log("ÉTAPE 2 : Ajout dans le UserRepository");
    console.log("-".repeat(60));

    const userRepo = new UserRepository();
    userRepo.add(student);
    userRepo.add(teacher);
    console.log();


    // 3. CRÉATION DES COURS
    console.log(" ÉTAPE 3 : Création des cours");
    console.log("-".repeat(60));

    const videoCourse = new VideoCourse(
        "Introduction à TypeScript",
        120 // 2 heures
    );

   const liveCourse = new LiveCourse(
    "Programmation Orientée Objet Avancée",
    new Date(2024, 11, 15, 14, 0)
);


    console.log("Cours créés avec succès!");
    console.log();


    // 4. AJOUT DES COURS DANS LE REPOSITORY
    console.log("ÉTAPE 4 : Ajout des cours dans le CourseRepository");
    console.log("-".repeat(60));

    const courseRepo = new CourseRepository();
    courseRepo.add(videoCourse);
    courseRepo.add(liveCourse);
    console.log();

    
    // 5. AFFICHAGE DES DESCRIPTIONS DES COURS
    console.log("ÉTAPE 5 : Descriptions des cours");
    console.log("-".repeat(60));

    const allCourses = courseRepo.getAll();
    allCourses.forEach((course, index) => {
        console.log(`${index + 1}. ${course.getDescription()}`);
    });
    console.log();

  
    // 6. AFFICHAGE DE LA LISTE DES UTILISATEURS
   
    console.log("ÉTAPE 6 : Liste des utilisateurs");
    console.log("-".repeat(60));

    const allUsers = userRepo.getAll();
    console.log(`Nombre total d'utilisateurs: ${userRepo.count()}`);
    console.log();

    allUsers.forEach((user, index) => {
        console.log(`${index + 1}.${user.name}`);
        console.log(`   - Rôle: ${user.role}`);
        console.log(`   - Email: ${user.email || "Non renseigné"}`);
        console.log(`   - ID: ${user.id}`);
        console.log();
    });

   
    // 7. DÉMONSTRATION DE fetchUser (ApiResponse)

    console.log("ÉTAPE 7 : Test de la fonction fetchUser");
    console.log("-".repeat(60));

    // Test avec un ID existant
    const response1: ApiResponse<User> = fetchUser(1);
    if (response1.data) {
        console.log(` Utilisateur trouvé: ${response1.data.name}`);
    } else {
        console.log(` Erreur: ${response1.error}`);
    }

    // Test avec un ID inexistant
    const response2: ApiResponse<User> = fetchUser(3);
    if (response2.data) {
        console.log(` Utilisateur trouvé: ${response2.data.name}`);
    } else {
        console.log(` Erreur: ${response2.error}`);
    }
    console.log();

    // 8. DÉMONSTRATION DES FONCTIONNALITÉS AVANCÉES
    
    console.log(" ÉTAPE 8 : Fonctionnalités avancées");
    console.log("-".repeat(60));

    // Recherche par rôle
    const students = userRepo.findByRole("student");
    console.log(` Nombre d'étudiants: ${students.length}`);

    const teachers = userRepo.findByRole("teacher");
    console.log(` Nombre de professeurs: ${teachers.length}`);
    console.log();

    // Recherche de cours par titre
    const foundCourse = courseRepo.findByTitle("TypeScript");
    if (foundCourse) {
        console.log(` Cours trouvé: ${foundCourse.getTitle()}`);
    }
    console.log();

    
    // RÉSUMÉ FINAL

    console.log("=".repeat(60));
    console.log(" SIMULATION TERMINÉE AVEC SUCCÈS");
    console.log("=".repeat(60));
    console.log(` Statistiques:`);
    console.log(`   - Utilisateurs: ${userRepo.count()}`);
    console.log(`   - Cours: ${courseRepo.getAll().length}`);
    console.log(`   - Étudiants: ${students.length}`);
    console.log(`   - Professeurs: ${teachers.length}`);
    console.log("=".repeat(60));
}

// Exécution du programme principal
main();
