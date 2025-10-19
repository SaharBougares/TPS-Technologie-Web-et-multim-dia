//1 Interface User
interface User {
  id: number;
  name: string;
  email?: string; // propriété optionnelle
  readonly isAdmin: boolean; // lecture seule
}

// 2 Objet conforme à l'interface
const User1: User = {
  id: 1,
  name: "Sahar",
  email: "saharbougares@gmail.com",
  isAdmin: true
};

console.log("User1:", User1);

// 3 Interface Admin qui hérite de User
interface Admin extends User {
  permissions: string[]; // nouvelle propriété spécifique à Admin
}

// Objet Admin
const Admin1: Admin = {
  id: 2,
  name: "Jihed",
  isAdmin: true,
  permissions: ["read", "write", "delete"]
};

console.log("Admin1:", Admin1);
