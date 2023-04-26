//Get the choice from Player
let userInputDisplay = prompt("What is your choice? Rock, Paper, or Scissors - ");
let userFinalInput = userInputDisplay.charAt(0).toUpperCase() + userInputDisplay.slice(1);


//Get the choice from Computer
let elements = ["Rock", "Paper", "Scissors"];
let computerFinalInput = elements[Math.floor(Math.random()*elements.length)];
let computerInputDisplay = console.log("Computer chooses: " + computerFinalInput);


//Compare the choices from Computer and Player
if (userFinalInput === computerFinalInput) {
    console.log("It is a TIE!");
} else if (userFinalInput == "Rock") {
    if (computerFinalInput == "Scissors") {
        console.log("You WON!");
    } else {
        console.log("You LOST!");
    };
} else if (userFinalInput == "Paper") {
    if (computerFinalInput == "Rock") {
        console.log("You WON!");
    } else {
        console.log("You LOST!");
    };
} else if (userFinalInput == "Scissors") {
    if (computerFinalInput == "Paper") {
        console.log("You WON!");
    } else {
        console.log("You LOST!");
    };
};
