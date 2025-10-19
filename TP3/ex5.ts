// 1 Fonction add : additionne deux nombres
function add(a: number, b: number): number {
  return a + b;
}

console.log("Add 2 + 3 =", add(2, 3));

// 2 Fonction greet 
function greet(name: string, age?: number): void {
  if (age !== undefined) {
    console.log(`Hello ${name}, you are ${age} years old!`);
  } else {
    console.log(`Hello ${name}!`);
  }
}

greet("Sahar", 25);
greet("Jihed");    

// 3 Fonction power : exposant par défaut
function power(base: number, exp: number = 2): number {
  return base ** exp;
}

console.log("2^3 =", power(2, 3));
console.log("5^2 =", power(5)); // Utilise l'exposant par défaut

// 4 Fonction combine : addition ou concaténation (surcharge)

// Surcharges
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

// Implémentation
function combine(a: any, b: any): any {
  return a + b;
}

console.log("Combine numbers:", combine(10, 20));       // 30
console.log("Combine strings:", combine("Hello, ", "TS")); // "Hello, TS"
