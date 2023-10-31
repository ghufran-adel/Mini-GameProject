

// This code is for a simple Hangman game built with JavaScript and HTML. I'll break down the code into sections to explain what each part does:

// 1. **HTML Element References:**
//    - Several HTML elements are selected and stored in JavaScript variables using `document.getElementById`. These elements include buttons for alphabet letters, a display for the answer, a display for hints, a display for the number of lives left, a canvas for drawing the hangman figure, and more.

// 2. **generateButton():**
//    - This function generates the alphabet buttons for the game and creates HTML code for them. It groups the buttons into sets of 5 letters per row.

// 3. **playSoundEffect() and playSoundEffectOnce():**
//    - These functions handle playing a sound effect when a button is clicked. `playSoundEffect` is called when a button is clicked, but it only plays the sound effect once by using a flag (`soundEffectPlayed`) to prevent repeated playing.

// 4. **handleClick():**
//    - This function is called when a button is clicked. It adds a "selected" class to the clicked button and plays the sound effect once.

// 5. **window.addEventListener("beforeunload"):**
//    - This event listener is used to reset the `soundEffectPlayed` flag when the page is reloaded or the user navigates to a different page. This ensures that the sound effect can be played again when the game is restarted.

// 6. **Data Arrays:**
//    - Arrays are defined for categories, hints, and questions. These arrays hold words related to different categories, hints for those words, and category descriptions.

// 7. **setAnswer() and generateAnswerDisplay():**
//    - `setAnswer()` randomly selects a category, word, and hint from the data arrays.
//    - `generateAnswerDisplay()` creates an initial display of underscores for the word to guess. It is based on the length of the selected word.

// 8. **showHint():**
//    - This function displays a hint for the selected word when the "Hint" button is clicked.

// 9. **init():**
//    - This function sets the initial game conditions, including resetting variables, clearing the canvas, displaying the category description, generating alphabet buttons, and setting the answer word. It also adds event listeners for button clicks.

// 10. **window.onload = init():**
//     - The `init` function is called when the page loads to initialize the game.

// 11. **buttonReset.addEventListener():**
//     - This event listener calls the `init` function to reset the game when the "Reset" button is clicked.

// 12. **guess(event):**
//     - This function handles the player's guess when a button is clicked. It checks if the guessed letter matches any letters in the answer word and updates the display accordingly. It also tracks the number of lives and checks for a win condition.

// 13. **container.addEventListener("click", guess):**
//     - This event listener calls the `guess` function when an alphabet button is clicked.

// 14. **Drawing Functions (animate, canvas, head, draw, frame1, frame2, etc.):**
//     - These functions are used to draw the hangman figure on the canvas as the player makes incorrect guesses. They are called based on the number of incorrect guesses (lives).

// 15. **drawArray:**
//     - An array of drawing functions is used to draw the hangman figure step by step.

// This code provides the structure for a Hangman game, where players guess letters to complete a word while avoiding losing all their lives and having the hangman figure drawn. It also provides hints and category descriptions to make the game more engaging.



// Constants and variable declarations
const container = document.getElementById("alphabetButtons"); // Get the element with the id "alphabetButtons"
var answerDisplay = document.getElementById("hold"); // Get the element with the id "hold"
var answer = ""; // Initialize an empty answer variable
var hint = ""; // Initialize an empty hint variable
var life = 10; // Initialize the life counter to 10
var wordDisplay = []; // Initialize an empty array to display the word
var winningCheck = ""; // Initialize a variable to check if the player has won
const containerHint = document.getElementById("clue"); // Get the element with the id "clue"
const buttonHint = document.getElementById("hint"); // Get the element with the id "hint"
const buttonReset = document.getElementById("reset"); // Get the element with the id "reset"
const livesDisplay = document.getElementById("mylives"); // Get the element with the id "mylives"
var myStickman = document.getElementById("stickman"); // Get the element with the id "stickman"
var context = myStickman.getContext("2d"); // Get a 2D drawing context for the stickman element

// Function to generate alphabet buttons
function generateButton() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; // Define the alphabet
  let buttonsHTML = "";

  for (let i = 0; i < alphabet.length; i += 5) {
    // Loop through the alphabet in groups of 5 letters
    const group = alphabet.slice(i, i + 5); // Get a group of 5 letters
    const groupHTML = group.split("").map((letter) => {
      return `<button class="alphabetButtonJS" id="${letter}">${letter}</button>`;
    }).join(""); // Create HTML buttons for each letter in the group
    buttonsHTML += `<div class="button-group">${groupHTML}</div>`; // Group the buttons in a div
  }

  return buttonsHTML; // Return the generated HTML for alphabet buttons
}

// Function to play a sound effect
function playSoundEffect(soundId) {
  const sound = document.getElementById(soundId); // Get the audio element with the specified sound ID
  if (sound) {
    sound.currentTime = 0; // Rewind the sound to the beginning
    sound.play(); // Play the sound
  }
}

let soundEffectPlayed = false; // Initialize a flag to track if the sound effect has been played

function playSoundEffectOnce() {
  if (!soundEffectPlayed) {
    playSoundEffect("soundEffect"); // Play the sound effect
    soundEffectPlayed = true; // Set the flag to indicate the sound effect has been played
  }
}

// Event handler for button clicks
function handleClick(event) {
  const isButton = event.target.nodeName === "BUTTON"; // Check if the clicked element is a button
  if (isButton) {
    const button = event.target; // Get the button element that was clicked
    button.classList.add("selected"); // Add a "selected" class to the clicked button

    // Call the playSoundEffectOnce function when a button is clicked
    playSoundEffectOnce();
  }
}

// Reset the flag when the page is reloaded or the user navigates to a different page
window.addEventListener("beforeunload", function () {
  soundEffectPlayed = false;
});

// Arrays for questions, categories, and hints
const question = [
  // "The Chosen Category Is Premier League Football Teams",
  // "The Chosen Category Is Films",
  // "The Chosen Category Is Cities"
  "The Chosen Category Is Fruits",
  "The Chosen Category Is Cars",
  "The Chosen Category Is Cities",
  "The Chosen Category Is Animals",
  "The Chosen Category Is Plants",
  "The Chosen Category Is Countries"
];

const categories = [
  // [
  //   "everton",
  //   "liverpool",
  //   "swansea",
  //   "chelsea",
  //   "hull",
  //   "manchester-city",
  //   "newcastle-united"
  // ],
  // ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
  // ["manchester", "milan", "madrid", "amsterdam", "prague"]

// Fruits
["apple", "banana", "cherry", "grape", "kiwi", "mango", "orange"],
// Cars
["audi", "bmw", "ford", "honda", "mercedes", "toyota", "volkswagen"],
// Cities
["barcelona", "dubai", "london", "paris", "sydney", "tokyo", "toronto"],
// Animals
["elephant", "giraffe", "kangaroo", "penguin", "tiger", "zebra", "lion"],
// Plants
["rose", "tulip", "sunflower", "cactus", "bamboo", "fern", "daisy"],
// Countries
["brazil", "canada", "germany", "india", "japan", "mexico", "russia"]

];

const hints = [
  // Fruits
  ["Common red or green fruit", "Yellow and curved", "Small and red", "Small, sweet, and round", "Small and fuzzy, green inside", "Tropical fruit", "Citrus fruit"],
  // Cars
  ["German luxury car manufacturer", "German automobile company", "American car brand", "Japanese car manufacturer", "German car brand", "Japanese car company", "German car manufacturer"],
  // Cities
  ["Spanish city known for Gaudi architecture", "City in the United Arab Emirates", "Capital of the United Kingdom", "Capital of France", "Major Australian city", "Japanese capital", "Canadian city"],
  // Animals
  ["Large herbivorous mammal", "Tall and spotted animal", "Australian marsupial", "Black and white bird", "Striped big cat", "Black and white striped animal", "Large carnivorous cat"],
  // Plants
  ["Symbol of love and romance", "Popular spring flower", "Yellow and follows the sun", "Thorny desert plant", "Tall, green, and fast-growing", "Green leafy plant", "Simple and white-petaled flower"],
  // Countries
  ["South American nation", "Large North American country", "European country known for sausages", "Country in South Asia", "East Asian island nation", "North American neighbor of the USA", "Eurasian country"]
];

/// Function to set the question, answer, and hint
function setAnswer() {
  // Randomly select a category and word
  const categoryOrder = Math.floor(Math.random() * categories.length);
  const chosenCategory = categories[categoryOrder];
  const wordOrder = Math.floor(Math.random() * chosenCategory.length);
  const chosenWord = chosenCategory[wordOrder];

  // Display the category description
  const categoryNameJS = document.getElementById("categoryName");
  categoryNameJS.innerHTML = question[categoryOrder];

  answer = chosenWord; // Set the answer word
  hint = hints[categoryOrder][wordOrder]; // Set the hint for the answer
  answerDisplay.innerHTML = generateAnswerDisplay(chosenWord); // Generate initial word display
}

// Function to generate the initial word display
function generateAnswerDisplay(word) {
  var wordArray = word.split("");
  for (var i = 0; i < answer.length; i++) {
    if (wordArray[i] !== "-") {
      wordDisplay.push("_");
    } else {
      wordDisplay.push("-");
    }
  }
  return wordDisplay.join(" ");
}

// Function to show the hint
function showHint() {
  containerHint.innerHTML = `Clue - ${hint}`;
}

// Event listener for the hint button
buttonHint.addEventListener("click", showHint);

// Function to initialize game conditions
function init() {
  answer = "";
  hint = "";
  life = 10;
  wordDisplay = [];
  winningCheck = "";
  context.clearRect(0, 0, 400, 400); // Clear the canvas
  canvas(); // Initialize the canvas
  containerHint.innerHTML = `Clue -`;
  livesDisplay.innerHTML = `You have ${life} lives!`;
  setAnswer(); // Set the answer word and category
  container.innerHTML = generateButton(); // Generate alphabet buttons
  container.addEventListener("click", handleClick); // Add event listener for button clicks
}

// Call the init function when the page loads
window.onload = init();

// Event listener for the reset button
buttonReset.addEventListener("click", init);

// Function to handle player's guess
function guess(event) {
  const guessWord = event.target.id;
  const answerArray = answer.split("");
  var counter = 0;
  if (answer === winningCheck) {
    livesDisplay.innerHTML = `YOU WIN!`;
    return;
  } else {
    if (life > 0) {
      for (var j = 0; j < answer.length; j++) {
        if (guessWord === answerArray[j]) {
          wordDisplay[j] = guessWord;
          answerDisplay.innerHTML = wordDisplay.join(" ");
          winningCheck = wordDisplay.join("");
          counter += 1;
        }
      }
      if (counter === 0) {
        life -= 1;
        animate(); // Draw hangman figure for incorrect guess
      }
      if (life > 1) {
        livesDisplay.innerHTML = `You have ${life} lives!`;
      } else if (life === 1) {
        livesDisplay.innerHTML = `You have ${life} life!`;
      } else {
        livesDisplay.innerHTML = `GAME OVER!`;
      }
    } else {
      return;
    }
    if (answer === winningCheck) {
      livesDisplay.innerHTML = `YOU WIN!`;
      return;
    }
  }
}

// Event listener to handle button clicks and player guesses
container.addEventListener("click", guess);

// Hangman drawing functions
function animate() {
  drawArray[life](); // Draw a part of the hangman figure based on the number of lives left
}

// Function to initialize the canvas
function canvas() {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#fff";
  context.lineWidth = 2;
}

// Functions to draw different parts of the hangman figure
function head() {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext("2d");
  context.beginPath();
  context.arc(60, 25, 10, 0, Math.PI * 2, true);
  context.stroke();
}

// Function to draw lines
function draw($pathFromx, $pathFromy, $pathTox, $pathToy) {
  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
  context.stroke();
}

// Functions to draw different parts of the hangman figure
function frame1() {
  draw(0, 150, 150, 150);
}

function frame2() {
  draw(10, 0, 10, 600);
}

function frame3() {
  draw(0, 5, 70, 5);
}

function frame4() {
  draw(60, 5, 60, 15);
}

function torso() {
  draw(60, 36, 60, 70);
}

function rightArm() {
  draw(60, 46, 100, 50);
}

function leftArm() {
  draw(60, 46, 20, 50);
}

function rightLeg() {
  draw(60, 70, 100, 100);
}

function leftLeg() {
  draw(60, 70, 20, 100);
}

// Array of drawing functions for hangman figure
var drawArray = [
  rightLeg,
  leftLeg,
  rightArm,
  leftArm,
  torso,
  head,
  frame4,
  frame3,
  frame2,
  frame1
];


//   -------------------------------- theme toggle--------------------------------
// Get a reference to the theme toggle dropdown element by its ID.
const themeToggleSelect1 = document.getElementById("theme-toggle-select");

// Get a reference to the body element to apply the theme class.
const bodyElement1 = document.body;

// Function to update the theme based on user choice and update the CSS variables
function updateTheme(selectedValue) {
  if (selectedValue === "dark") {
    bodyElement1.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    bodyElement1.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
}

function onPageLoad(performTask) {
  document.addEventListener("DOMContentLoaded", performTask);
}

// Function to load the theme from local storage
function loadTheme() {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    themeToggleSelect1.value = "dark";
    updateTheme("dark");
  } else {
    themeToggleSelect1.value = "light";
    updateTheme("light");
  }
}

// Load the initial theme when the page loads
onPageLoad(loadTheme);

// Event listener for theme toggle
themeToggleSelect1.addEventListener("change", () => {
  const selectedValue = themeToggleSelect1.value;
  updateTheme(selectedValue);
});