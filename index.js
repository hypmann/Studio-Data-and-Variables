// FORK this starter file and save it to your own Repl.it account.


// Take in user input - take in astronaut astronautCount
const input = require('readline-sync');
let astronautCount = Number( input.question("Total astronauts?"));



// Decaler and initialize the 12 variables here:

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
//let astronautCount = 7;
let atronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = 	astronautCount * averageAstronautMassKg;
let fuelMassKg = 	760000;
let shuttleMassKg = 	74842.31;
let totalMassKg = 	crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = 1;
let weatherStatus = "clear";
let overallStatus = "YES";


// Write code to generate the LC04 report here:

let theLine = "-------------------------------------";

console.log(theLine);
console.log("> LC04 - LAUNCH CHECHLIST");
console.log(theLine);
let dateLine ="Date: " + date;
console.log(dateLine);
console.log("Time: " + time + "\n");

console.log(theLine);
console.log("> ASTRONAUT INFO");
console.log(theLine);
console.log("* count: " + astronautCount);
console.log("* status: " + atronautStatus + "\n");

console.log(theLine);
console.log("> FUEL DATA");
console.log(theLine);
console.log("* Fuel temp celsius: " + fuelTempCelsius + "C");
console.log("* Fuel level: " +  (fuelLevel * 100) + "%" + "\n");

console.log(theLine);
console.log("> MASS DATA");
console.log(theLine);

console.log("* Crew mass: " + crewMassKg + "kg");
console.log("* Fuel mass: " + fuelMassKg + "kg");
console.log("* Shuttle mass: " + shuttleMassKg + "kg");
console.log("* Total mass: " + totalMassKg + "kg" + "\n");

console.log(theLine);
console.log("> FLIGHT PLAN");
console.log(theLine);

console.log("* Weather: " +  weatherStatus + "\n");

console.log(theLine);
console.log("> OVERALL STATUS");
console.log(theLine);

console.log("* clear for takeoff: " + overallStatus);


// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.
