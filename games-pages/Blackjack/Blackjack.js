// Lab 1: 
// Today, you will be creating your own game! A simplified version of Black Jack. The game rules are:
// The computer will start with a random number between 1 and 5. 
// The user will be asked for a number between 1 and 5.
// The computer will add the user’s number to it’s random number. It will check if the total value is 21
// These steps will keep repeating until the total is 21 or above.
// The goal for the user is to try to get 21 exactly. If their total is above 21, they lose. 
// For pt 1 of the lab, think about how the game will work and write out the psedocode for the Black Jack game. Write your pseudocode in the comments of your javascript file

//const randomNum = Math.floor(Math.random()*3) //randomNum is either 0,1,2
// console.log("Final score: ${userscore}, computer: ${computerscore}")

// For your Blackjack project from last week’s lab (Friday), improve your code (in a new copy of your .js file so you don’t lose your work) by converting your game to use the following functions:
// A function that is responsible for asking for user input and checking if it is valid input
// A function that will add the user’s input to the current sum and add on a new random number each time
// A function that is responsible for checking if the game is over and stopping the game if it is
// A function that is responsible for printing a winning or losing message to the console depending on whether the user won or not


// Trying to get light and dark themes working
// Get the theme toggle select element



const minPick = 1;
const maxPick = 5;
const winTotal = 21; // Blackjack value
let dealerPick = Math.round(Math.random() * maxPick);
let userPick;
let userTotal = 0 + dealerPick; // User card + dealer card
let continuePick = true;

const pickButton = document.getElementById("pickButton");
const userNumber = document.getElementById("userNumber");
const computerNumber = document.getElementById("computerNumber");
const resultMessage = document.getElementById("resultMessage");
const numberOptions = document.querySelectorAll(".numberOption");

function getPick() {
    let goodPick = true;
    do {
        userPick = prompt("Pick a number between " + minPick + " and " + maxPick + ": ");
        if (isNaN(userPick)) {
            console.log("That is not a number.");
            goodPick = false;
        } else if (userPick < minPick) {
            console.log(userPick + " is below " + minPick);
            goodPick = false;
        } else if (userPick > maxPick) {
            console.log(userPick + " is above " + maxPick);
            goodPick = false;
        } else {
            goodPick = true;
        }
    } while (!goodPick);
    return userPick;
}

function getUserTotal(num1) {
    dealerPick = Math.round(Math.random() * maxPick);
    return Number(userTotal) + Number(userPick) + Number(dealerPick);
}

function isGameOver() {
    return userTotal < winTotal;
}

function printEndgame(userTotal, winTotal) {
    if (userTotal === winTotal) {
        resultMessage.textContent = "You won!";
    } else {
        resultMessage.textContent = "You lost with a total of: " + userTotal;
    }
}

numberOptions.forEach(option => {
    option.addEventListener("click", function () {
        if (continuePick) {
            userPick = option.getAttribute("data-number");
            userTotal = getUserTotal(userPick);
            userNumber.textContent = userTotal;
            continuePick = isGameOver();
            if (!continuePick) {
                printEndgame(userTotal, winTotal);
                pickButton.disabled = true;
            }
        }
    });
});


// get back button img 
const goBackButton1 = document.getElementById('back-arrow-back');
goBackButton1.addEventListener('click', function() {
  window.history.back();
});
// get back button p
const goBackButton2 = document.getElementById('back-arrow-back2');
goBackButton2.addEventListener('click', function() {
  window.history.back();
});