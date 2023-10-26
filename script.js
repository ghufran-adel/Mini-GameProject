// Add an event listener to the select element with the id "games-select".
document.getElementById("games-select").addEventListener("change", function() {
    // Get the selected value from the dropdown.
    const selectedValue = this.value;
    
    // Call the redirectToPage function with the selected value.
    redirectToPage(selectedValue);
  });
  
  // Function to redirect to different pages based on the selected option.
  function redirectToPage(selectedValue) {
    // Initialize an empty string to store the file path.
    let filePath = "";
  
    // Check which option was selected and set the corresponding file path.
    if (selectedValue === "games") {
      filePath = "games.html"; // For the "Games" option.
    } else if (selectedValue === "Black-jack") {
      filePath = "games-pages/Black-jack/Black-jack.html"; // For the "Black-jack" option.
    } else if (selectedValue === "Hangman") {
      filePath = "games-pages/Hangman/Hangman.html"; // For the "Hangman" option.
    } else if (selectedValue === "Tic-Tac-Toe") {
      filePath = "games-pages/Tic-Tac-Toe/Tic-Tac-Toe.html"; // For the "Tic-Tac-Toe" option.
    }
  
    // Use the calculated file path to navigate to the selected page.
    window.location.href = filePath;
  }


  // ------------------- i try this no change--------------
//   const themeToggleSelect = document.getElementById("theme-toggle-select");
// const linkElements = document.querySelectorAll('link[rel="stylesheet"]');

// // Function to update the theme based on user choice and update the CSS files
// function updateTheme(selectedValue) {
//     const selectedHref = selectedValue === "dark" ? "dark-theme.css" : "style.css";
    
//     linkElements.forEach(link => {
//         if (link.getAttribute("href") !== selectedHref) {
//             link.setAttribute("href", selectedHref);
//         }
//     });

//     localStorage.setItem("theme", selectedValue);
// }

// // Function to load the theme from local storage
// function loadTheme() {
//     const currentTheme = localStorage.getItem("theme");
//     if (currentTheme === "dark") {
//         themeToggleSelect.value = "dark";
//         updateTheme("dark");
//     } else {
//         themeToggleSelect.value = "light";
//         updateTheme("light");
//     }
// }

// // Load the initial theme when the page loads
// loadTheme();

// // Event listener for theme toggle
// themeToggleSelect.addEventListener("change", () => {
//     const selectedValue = themeToggleSelect.value;
//     updateTheme(selectedValue);
// });
// ================================================================
  
//   -------------------------------- theme toggle--------------------------------
const themeToggleSelect = document.getElementById("theme-toggle-select");
const bodyElement = document.body;
localStorage.setItem("theme", "dark");
localStorage.setItem("theme", "light");
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
loadTheme();

// Event listener for theme toggle
themeToggleSelect.addEventListener("change", () => {
    const selectedValue = themeToggleSelect.value;
    updateTheme(selectedValue);
});



<<<<<<< Updated upstream


=======
// game cards section to navigate through the cards and go to the pages
function navigateTo(page) {
    window.location.href = page;
}
>>>>>>> Stashed changes
