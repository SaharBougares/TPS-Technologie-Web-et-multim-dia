//1 Classe Person
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const Person1 = new Person("Sahar", 21);
Person1.greet(); // Hello, my name is Sahar and I am 25 years old.

// 2 Classe Student qui hérite de Person
class Student extends Person {
  school: string;

  constructor(name: string, age: number, school: string) {
    super(name, age); // appel du constructeur de la classe parent
    this.school = school;
  }

  greet(): void {
    console.log(`Hello, I am ${this.name}, ${this.age} years old, and I study at ${this.school}.`);
  }
}

const student1 = new Student("Sahar", 21, "Université de Tunis");
student1.greet();

// 3 Classe abstraite Shape
abstract class Shape {
  abstract area(): number; 
}

// Cercle
class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Rectangle
class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
console.log("Circle area:", circle.area());

const rectangle = new Rectangle(4, 6);
console.log("Rectangle area:", rectangle.area());

// 4 Interface Drivable
interface Drivable {
  drive(): void;
}

// Classe Car qui implémente Drivable
class Car implements Drivable {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  drive(): void {
    console.log(`${this.brand} is driving Vroom Vroom...`);
  }
}

const car1 = new Car("Tesla");
car1.drive();
