const notes = [12, 5, 17, 9, 20];

//calcul moyenne
const somme = notes.reduce((acc, note) => acc + note, 0);
const moyenne = somme / notes.length;
console.log("Moyenne :", moyenne); 

//tri dcroissantg
const notesDesc = [...notes].sort((a, b) => b - a);
console.log("Notes décroissantes :", notesDesc); 

//notes sup a 10
const notesSup10 = notes.filter(note => note >= 10);
console.log("Notes ≥10 :", notesSup10); 
