// 1 Variable id pouvant être number ou string
let id: number | string;
id = 123;      
id = "abc123"; 
console.log("ID:", id);

//Types A et B + intersection
type A = {
  name: string;
  age: number;
};

type B = {
  isAdmin: boolean;
};

//2 Intersection (A & B) combine toutes les propriétés
type C = A & B;

let User: C = {
  name: "Sahar",
  age: 25,
  isAdmin: true
};
console.log("User:", User);

// 3 Alias Status
type Status = "pending" | "done" | "canceled";

let currentStatus: Status = "pending";
console.log("Current status:", currentStatus);

//4 Variable unknown et assertion de type
let unknownValue: unknown;
unknownValue = "Hello TypeScript!";

if (typeof unknownValue === "string") {
  // Assertion de type pour accéder à la propriété length
  let lengthOfString: number = (unknownValue as string).length;
  console.log("Length of string:", lengthOfString);
}
