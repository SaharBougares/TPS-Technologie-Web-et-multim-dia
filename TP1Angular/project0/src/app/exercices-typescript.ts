/**
 * Fichier: exercices-typescript.ts
 * Description: Exercices pratiques de TypeScript - Partie 4 & 5
 * Étudiante: Sahar Bougares IGL3
 */

// ============================================
// PARTIE 4: Révision des bases de TypeScript
// ============================================

// 1. Déclaration de variables avec différents types primitifs
const nom: string = "Dupont";
const prenom: string = "Jean";
const age: number = 20;
const estActif: boolean = true;
const note: number = 15.5;
const id: number = 12345;

console.log("=== Variables primitives ===");
console.log(`Nom: ${nom}, Prénom: ${prenom}, Âge: ${age}`);
console.log(`Est actif: ${estActif}, Note: ${note}`);

// 2. Fonction typée qui calcule la somme de deux nombres
function calculerSomme(a: number, b: number): number {
  return a + b;
}

console.log("\n=== Fonction calculerSomme ===");
console.log(`Somme de 10 et 20: ${calculerSomme(10, 20)}`);

// 3. Interface Etudiant
interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  age: number;
}

// 4. Classe Etudiant qui implémente l'interface
class EtudiantImpl implements Etudiant {
  id: number;
  nom: string;
  prenom: string;
  age: number;

  constructor(id: number, nom: string, prenom: string, age: number) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
  }

  // Méthode pour afficher les informations de l'étudiant
  afficherInfos(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Nom: ${this.nom}`);
    console.log(`Prénom: ${this.prenom}`);
    console.log(`Âge: ${this.age}`);
  }

  // Méthode supplémentaire pour obtenir le nom complet
  obtenirNomComplet(): string {
    return `${this.prenom} ${this.nom}`;
  }
}

console.log("\n=== Classe Etudiant ===");
const etudiant1 = new EtudiantImpl(1, "Dupont", "Jean", 20);
etudiant1.afficherInfos();
console.log(`Nom complet: ${etudiant1.obtenirNomComplet()}`);

// ============================================
// PARTIE 5: Approfondissement de TypeScript
// ============================================

// 1. Types génériques - Fonction qui retourne un tableau de valeurs du même type
/**
 * Fonction générique qui crée un tableau avec un nombre spécifié d'éléments
 * @param element L'élément à répéter
 * @param nombre Le nombre de fois à répéter l'élément
 * @returns Un tableau contenant l'élément répété
 */
function creerTableau<T>(element: T, nombre: number): T[] {
  const tableau: T[] = [];
  for (let i = 0; i < nombre; i++) {
    tableau.push(element);
  }
  return tableau;
}

console.log("\n=== Types génériques ===");
const tableauNombres = creerTableau<number>(5, 3);
console.log("Tableau de nombres:", tableauNombres);

const tableauChaines = creerTableau<string>("Angular", 2);
console.log("Tableau de chaînes:", tableauChaines);

// 2. Unions de types et types optionnels
/**
 * Fonction avec union de types et paramètres optionnels
 * @param valeur Peut être un nombre ou une chaîne
 * @param suffixe Suffixe optionnel à ajouter
 * @returns La valeur formatée
 */
function formaterValeur(valeur: number | string, suffixe?: string): string {
  const resultat = `Valeur: ${valeur}`;
  return suffixe ? `${resultat} ${suffixe}` : resultat;
}

console.log("\n=== Unions de types et types optionnels ===");
console.log(formaterValeur(42));
console.log(formaterValeur("Hello"));
console.log(formaterValeur(100, "unités"));
console.log(formaterValeur("Angular", "Framework"));

// 3. Énumérations (enum) pour représenter des valeurs constantes
/**
 * Énumération pour les niveaux d'études
 */
enum NiveauEtude {
  L1 = "Licence 1",
  L2 = "Licence 2",
  L3 = "Licence 3",
  M1 = "Master 1",
  M2 = "Master 2"
}

/**
 * Énumération pour les statuts d'étudiant
 */
enum StatutEtudiant {
  Actif = "ACTIF",
  Inactif = "INACTIF",
  Suspendu = "SUSPENDU"
}

// Classe Etudiant avancée avec énumérations
class EtudiantAvance implements Etudiant {
  id: number;
  nom: string;
  prenom: string;
  age: number;
  niveau: NiveauEtude;
  statut: StatutEtudiant;
  specialite?: string; // Propriété optionnelle

  constructor(
    id: number,
    nom: string,
    prenom: string,
    age: number,
    niveau: NiveauEtude,
    statut: StatutEtudiant,
    specialite?: string
  ) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.niveau = niveau;
    this.statut = statut;
    this.specialite = specialite;
  }

  afficherInfosComplete(): void {
    console.log(`\n--- Informations Complètes ---`);
    console.log(`ID: ${this.id}`);
    console.log(`Nom: ${this.nom}`);
    console.log(`Prénom: ${this.prenom}`);
    console.log(`Âge: ${this.age}`);
    console.log(`Niveau: ${this.niveau}`);
    console.log(`Statut: ${this.statut}`);
    if (this.specialite) {
      console.log(`Spécialité: ${this.specialite}`);
    }
  }

  afficherInfos(): void {
    this.afficherInfosComplete();
  }

  obtenirNomComplet(): string {
    return `${this.prenom} ${this.nom}`;
  }
}

console.log("\n=== Énumérations et classe avancée ===");
const etudiant2 = new EtudiantAvance(
  2,
  "Martin",
  "Sophie",
  21,
  NiveauEtude.L2,
  StatutEtudiant.Actif,
  "Développement Web"
);
etudiant2.afficherInfosComplete();

const etudiant3 = new EtudiantAvance(
  3,
  "Bernard",
  "Pierre",
  22,
  NiveauEtude.L3,
  StatutEtudiant.Actif
);
etudiant3.afficherInfosComplete();

// 4. Fonction générique avancée avec contraintes
/**
 * Fonction générique qui filtre un tableau selon un critère
 * @param tableau Le tableau à filtrer
 * @param predicat La fonction de filtrage
 * @returns Le tableau filtré
 */
function filtrerTableau<T>(tableau: T[], predicat: (item: T) => boolean): T[] {
  return tableau.filter(predicat);
}

console.log("\n=== Fonction générique avec contraintes ===");
const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nombresPairs = filtrerTableau(nombres, (n) => n % 2 === 0);
console.log("Nombres pairs:", nombresPairs);

const etudiants = [etudiant1, etudiant2, etudiant3];
const etudiantsActifs = filtrerTableau(
  etudiants,
  (e) => e instanceof EtudiantAvance && e.statut === StatutEtudiant.Actif
);
console.log("Nombre d'étudiants actifs:", etudiantsActifs.length);

// 5. Types d'union discriminée (Discriminated Unions)
/**
 * Exemple de types d'union discriminée pour gérer différents types de résultats
 */
type Resultat<T> =
  | { status: "success"; data: T }
  | { status: "error"; message: string }
  | { status: "loading" };

function traiterResultat<T>(resultat: Resultat<T>): void {
  if (resultat.status === "success") {
    console.log("Succès:", resultat.data);
  } else if (resultat.status === "error") {
    console.log("Erreur:", resultat.message);
  } else {
    console.log("Chargement en cours...");
  }
}

console.log("\n=== Types d'union discriminée ===");
const resultatSucces: Resultat<string> = {
  status: "success",
  data: "Opération réussie"
};
traiterResultat(resultatSucces);

const resultatErreur: Resultat<string> = {
  status: "error",
  message: "Une erreur s'est produite"
};
traiterResultat(resultatErreur);

const resultatChargement: Resultat<string> = { status: "loading" };
traiterResultat(resultatChargement);

console.log("\n=== Fin des exercices TypeScript ===");
