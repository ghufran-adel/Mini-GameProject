"use strict";

let userScore = 0;
let computerScore = 0;

// Get computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Get user's choice and procced the game
const options = document.querySelectorAll(".options img");
const computerHandImage = document.querySelector(".computer-hand");
const userHandImage = document.querySelector(".user-hand");

// remove shaking classes before the game start
computerHandImage.classList.remove("computer-hand");
userHandImage.classList.remove("user-hand");

options.forEach((option) => {
  option.addEventListener("click", function () {
    // Set the opacity to 1
    option.style.opacity = "1";
    computerHandImage.classList.add("computer-hand");
    userHandImage.classList.add("user-hand");

    // Get the user's choice and computer's choice
    const userChoice = this.id;
    const computerChoice = getComputerChoice();

    setTimeout(function () {
      computerHandImage.classList.remove("computer-hand");
      userHandImage.classList.remove("user-hand");

      const result = determineWinner(userChoice, computerChoice);

      // Set the image source for the user's hand
      userHandImage.src = `../../assets/img/${userChoice}.png`;
      userHandImage.classList.add("rotate-user-img");

      // Set the image source for the computer's hand
      computerHandImage.src = `../../assets/img/${computerChoice}.png`;
      computerHandImage.classList.add("rotate-comp-img");

      // Display the result
      displayResult(computerScore, userScore, result);

      // After displaying the result, set the opacity back to 0.5
      setTimeout(function () {
        option.style.opacity = "0.5";
      }, 2500);
    }, 1000);
    //   reset the game play to orgin
    computerHandImage.src = "../../assets/img/rock-right.svg";
    computerHandImage.classList.remove("rotate-comp-img");
    userHandImage.src = "../../assets/img/rock-left.svg";
    userHandImage.classList.remove("rotate-user-img");
  });
});

// Determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "It's a tie!";
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    return "You win!";
  } else {
    computerScore++;
    return "Computer wins!";
  }
}

// Display the result
function displayResult(computerScore, userScore, result) {
  const resultElement = document.getElementById("gameStatus");
  const computerScoreDisplay = document.getElementById("computer");
  const userScoreDisplay = document.getElementById("user");
  resultElement.textContent = `${result}`;
  computerScoreDisplay.textContent = `${computerScore}`;
  userScoreDisplay.textContent = ` ${userScore}`;
}

// Reset the game or (play again)
const playAgainButton = document.getElementById("playAgain");
playAgainButton.addEventListener('click', function(){
  const computerScoreDisplay = document.getElementById("computer");
  const userScoreDisplay = document.getElementById("user");
  const resultElement = document.getElementById("gameStatus");
  resultElement.textContent = `Let Us Start`;
  computerScoreDisplay.textContent = '0';
  userScoreDisplay.textContent = '0';
});

// description part
const descriptionButton = document.getElementsByClassName('description-button');
const descriptionSection = document.getElementById('description');
const gameSection = document.getElementById('game');
let visible = false;

// Define a media query for small screens
const smallScreenMediaQuery = window.matchMedia('(max-width: 800px');

// Function to handle the media query change
function handleMediaQuery(event) {
  if (event && event.matches) {
    // small screen
    descriptionButton[0].addEventListener('click', function () {
      if (visible) {
        gameSection.style.display = 'none';
        descriptionSection.style.display = 'block';
      } else {
        descriptionSection.style.display = 'none';
        gameSection.style.display = 'block';
      }
      visible = !visible;
    });
  } else {
    // larger screen
    descriptionButton[0].addEventListener('click', function () {
      if (visible) {
        descriptionSection.style.display = 'none';
      } else {
        descriptionSection.style.display = 'block';
      }
      visible = !visible;
    });
  }
}
// Add an event listener for the media query change
smallScreenMediaQuery.addEventListener('change', handleMediaQuery);
handleMediaQuery(smallScreenMediaQuery);

// get back boutton 
const goBackButton = document.getElementById('back-icon');
goBackButton.addEventListener('click', function() {
  window.history.back();
});