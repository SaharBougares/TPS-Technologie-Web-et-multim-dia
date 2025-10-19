// Variables de base
var nom = "Sahar";
var age = 25;
var isAdmin = true;
console.log("Name:", nom);
console.log("Age:", age);
console.log("Is Admin?", isAdmin);
//  Tableau de nombres
var scores = [90, 85, 78, 100];
console.log("Scores:", scores);
// Tuple [string, number] pour un étudiant
var student = ["Nour", 22];
console.log("Student:", student);
// Enum Role
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["SuperAdmin"] = 2] = "SuperAdmin";
})(Role || (Role = {}));
var myRole = Role.Admin;
console.log("My role:", myRole);
console.log("My role name:", Role[myRole]);
