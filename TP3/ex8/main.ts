// main.ts
/*import { add } from './math';

const result = add(5, 3);
console.log('5 + 3 =', result);*/


// main.ts
import { add, subtract } from './index';

console.log('10 + 4 =', add(10, 4));
console.log('10 - 4 =', subtract(10, 4));



// Import uniquement pour les types
import type { Point, ID } from './types';


// Exemple d'utilisation des types
const p: Point = { x: 7, y: 12 };
console.log(`Point: (${p.x}, ${p.y})`);
const UserId: ID = 'User123';
console.log(`ID de l'utilisateur: ${UserId}`);


