const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// M 1:Spread operator
const fusion1 = [...arr1, ...arr2];
console.log("Fusion avec spread :", fusion1); 

// M2:concat()
const fusion2 = arr1.concat(arr2);
console.log("Fusion avec concat :", fusion2); 

// M3:push() avec spread (modifie arr1)
const arr3 = [1, 2, 3];
arr3.push(...arr2);
console.log("Fusion avec push :", arr3); 

//  Copier et modifier 
const user = { name: "Noor", age: 10, city: "Tunis" };
const newUser = { ...user, age: 11 };

console.log("Objet original :", user); 
console.log("Nouvel objet :", newUser);  
