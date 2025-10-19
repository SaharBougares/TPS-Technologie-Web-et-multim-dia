// Variables de base
let nom: string = "Sahar";
let age: number = 25;
let isAdmin: boolean = true;

console.log("Name:", nom);
console.log("Age:", age);
console.log("Is Admin?", isAdmin);

//  Tableau de nombres
let scores: number[] = [90, 85, 78, 100];
console.log("Scores:", scores);

// Tuple [string, number] pour un étudiant
let student: [string, number] = ["Nour", 22];
console.log("Student:", student);

// Enum Role
enum Role {
  User,       
  Admin,      
  SuperAdmin  
}

let myRole: Role = Role.Admin;
console.log("My role:", myRole);          
console.log("My role name:", Role[myRole]); 
