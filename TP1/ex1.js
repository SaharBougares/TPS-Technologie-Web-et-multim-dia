var nomVar = "sahar";      
let nomLet = "Ali";         
const nomConst = "Chaima"; 

console.log("Avant le bloc :");
console.log("var :", nomVar);     
console.log("let :", nomLet);     
console.log("const :", nomConst);

//  dans un bloc {}
{
    var nomVar = "Sarra";      
    let nomLet = "Emna";        
    const nomConst = "Maha"; 

    console.log("\nDans le bloc :");
    console.log("var :", nomVar);     
    console.log("let :", nomLet);     
    console.log("const :", nomConst); 
}

console.log("\nAprès le bloc :");
console.log("var :", nomVar);      // Sarra
console.log("let :", nomLet);      //Ali
console.log("const :", nomConst);  // Chaima

try {
    nomConst = "Asma"; 
} catch (error) {
    console.log("\nRéaffectation const :");
    console.log(error.message);
}



