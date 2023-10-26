// Add an event listener to the select element with the id "games-select".
document.getElementById("games-select").addEventListener("change", function () {
  // Get the selected value from the dropdown.
  const selectedValue = this.value;

  // Call the redirectToPage function with the selected value.
  redirectToPage(selectedValue, false);
});

document
  .getElementById("games-select-game")
  .addEventListener("change", function () {
    // Get the selected value from the dropdown.
    const selectedValue = this.value;

    // Call the redirectToPage function with the selected value.
    redirectToPage(selectedValue, true);
  });

// Function to redirect to different pages based on the selected option.
function redirectToPage(selectedValue, game) {

  if (game){
    if (selectedValue === "games") {
      // Check which option was selected and set the corresponding file path.
      window.location.href = "../../games.html"; // For the "Games" option.
    } else if (selectedValue === "Black-jack") {
      window.location.href ="../Black-jack/Black-jack.html"
       // For the "Black-jack" option.
    } else if (selectedValue === "Hangman") {
      window.location.href = "../Hangman/Hangman.html"; // For the "Hangman" option.
    } else if (selectedValue === "Tic-Tac-Toe") {
      window.location.href = "../Tic-Tac-Toe/Tic-Tac-Toe.html"; // For the "Tic-Tac-Toe" option.
    } else if (selectedValue === "Rock Paper Scissors") {
      window.location.href = "../Rock-Paper-Scissors/Rock-Paper-Scissors.html"; // For the "Tic-Tac-Toe" option.
    }
  }else{

    if (selectedValue === "games") {
      // Check which option was selected and set the corresponding file path.
      window.location.href = "games.html"; // For the "Games" option.
    } else if (selectedValue === "Black-jack") {
      window.location.href ="games-pages/Black-jack/Black-jack.html"
    } else if (selectedValue === "Hangman") {
      window.location.href = "games-pages/Hangman/Hangman.html"; // For the "Hangman" option.
    } else if (selectedValue === "Tic-Tac-Toe") {
      window.location.href = "games-pages/Tic-Tac-Toe/Tic-Tac-Toe.html"; // For the "Tic-Tac-Toe" option.
    } else if (selectedValue === "Rock Paper Scissors") {
      window.location.href = "games-pages/Rock-Paper-Scissors/Rock-Paper-Scissors.html"; // For the "Tic-Tac-Toe" option.
    }
  }
}

//   -------------------------------- theme toggle--------------------------------
// Get a reference to the theme toggle dropdown element by its ID.
const themeToggleSelect = document.getElementById("theme-toggle-select");

// Get a reference to the body element to apply the theme class.
const bodyElement = document.body;

// Function to update the theme based on user choice and update the CSS variables
function updateTheme(selectedValue) {
  if (selectedValue === "dark") {
    bodyElement.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    bodyElement.classList.remove("dark-theme");
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
    themeToggleSelect.value = "dark";
    updateTheme("dark");
  } else {
    themeToggleSelect.value = "light";
    updateTheme("light");
  }
}

// Load the initial theme when the page loads
onPageLoad(loadTheme);

// Event listener for theme toggle
themeToggleSelect.addEventListener("change", () => {
  const selectedValue = themeToggleSelect.value;
  updateTheme(selectedValue);
});

// game cards section to navigate through the cards and go to the pages
function navigateTo(page) {
  window.location.href = page;
}
