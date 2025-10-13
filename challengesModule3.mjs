import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { get } from "node:https";
import { log } from "node:console";
const userInput = readline.createInterface({ input, output });

// E1: Even of oneven
// Schrijf een lus dat alle even getallen tussen 1 en 20 afprint.
// for(let i = 0 ; i <= 20 ; i++){
//     if(i % 2 == 0){
//         console.log(i);

//     }
// }

// E2: Tafel van vermenigvuldiging
// let i = 1;
// let getal = parseFloat(await userInput.question("geef een getal :"));
// while ( i <= 10) {
//   console.log(`${getal} * ${i} = ${getal * i}`);
//   i++
// }

// M1: Getallen optellen
// Maak een applicatie dat getallen aan de gebruiker vraagt en deze optelt bij elkaar zolang het ingegeven getal groter is dan 0. Van zodra de gebruiker een getal kleiner of gelijk aan 0 ingeeft print de applicatie de som af.

// let getal;
// let som = 0;
// do {
//   getal = parseFloat(await userInput.question("Geef een getal : "));
//   som += getal;
//   if (getal <= 0) {
//     console.log(`De som van alle getallen is : ${som}`);
//   }
// } while (getal > 0);

// M2: Sterrenpiramide
// Gebruik een variabele hoogte. We gaan aan de hand van hoogte een sterrenpiramide bouwen. Per laag van de piramide komt er een ster bij. Dus bijvoorbeeld als hoogte gelijk is aan 4 zal de afgedrukte piramide er zo uit zien:

// *
// **
// ***
// ****

let hoogte = 4;

for (let i = 1; i < hoogte; i++) {
  console.log("*");
  for (let j = 1; j < hoogte; j++) {
    console.log("*");
  }
}
