// 2 Objet conforme à l'interface
var User1 = {
    id: 1,
    name: "Sahar",
    email: "saharbougares@gmail.com",
    isAdmin: true
};
console.log("User1:", User1);
// Objet Admin
var Admin1 = {
    id: 2,
    name: "Jihed",
    isAdmin: true,
    permissions: ["read", "write", "delete"]
};
console.log("Admin1:", Admin1);
