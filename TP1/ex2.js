function somme(a, b) {
    return a + b;
}

console.log("Fonction classique :");
console.log(somme(5, 3)); 

// Fonction fléchée (return implicite)
const sommeFlechee2 = (a, b) => a + b;

console.log("\nFonction fléchée avec return implicite :");
console.log(sommeFlechee2(5, 3)); // 8
