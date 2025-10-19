// 1 Fonction add : additionne deux nombres
function add(a, b) {
    return a + b;
}
console.log("Add 2 + 3 =", add(2, 3));
// 2 Fonction greet 
function greet(name, age) {
    if (age !== undefined) {
        console.log("Hello ".concat(name, ", you are ").concat(age, " years old!"));
    }
    else {
        console.log("Hello ".concat(name, "!"));
    }
}
greet("Sahar", 25);
greet("Jihed");
// 3 Fonction power : exposant par défaut
function power(base, exp) {
    if (exp === void 0) { exp = 2; }
    return Math.pow(base, exp);
}
console.log("2^3 =", power(2, 3));
console.log("5^2 =", power(5)); // Utilise l'exposant par défaut
// Implémentation
function combine(a, b) {
    return a + b;
}
console.log("Combine numbers:", combine(10, 20)); // 30
console.log("Combine strings:", combine("Hello, ", "TS")); // "Hello, TS"
