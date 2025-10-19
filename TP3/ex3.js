// 1 Variable id pouvant être number ou string
var id;
id = 123;
id = "abc123";
console.log("ID:", id);
var User = {
    name: "Sahar",
    age: 25,
    isAdmin: true
};
console.log("User:", User);
var currentStatus = "pending";
console.log("Current status:", currentStatus);
//4 Variable unknown et assertion de type
var unknownValue;
unknownValue = "Hello TypeScript!";
if (typeof unknownValue === "string") {
    // Assertion de type pour accéder à la propriété length
    var lengthOfString = unknownValue.length;
    console.log("Length of string:", lengthOfString);
}
