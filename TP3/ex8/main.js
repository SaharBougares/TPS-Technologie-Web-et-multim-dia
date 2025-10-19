"use strict";
// main.ts
/*import { add } from './math';

const result = add(5, 3);
console.log('5 + 3 =', result);*/
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var index_1 = require("./index");
console.log('10 + 4 =', (0, index_1.add)(10, 4));
console.log('10 - 4 =', (0, index_1.subtract)(10, 4));
// Exemple d'utilisation des types
var p = { x: 7, y: 12 };
console.log("Point: (".concat(p.x, ", ").concat(p.y, ")"));
var UserId = 'User123';
console.log("ID de l'utilisateur: ".concat(UserId));
