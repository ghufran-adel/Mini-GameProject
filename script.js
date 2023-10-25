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
  
//   -------------------------------- theme toggle--------------------------------
// Get a reference to the theme toggle dropdown element by its ID.
const themeToggleSelect = document.getElementById("theme-toggle-select");

// Get a reference to the body element to apply the theme class.
const bodyElement = document.body;

// Check for the user's current theme preference (light or dark) from local storage.
const currentTheme = localStorage.getItem("theme");

// If the user previously selected the dark theme, set it.
if (currentTheme === "dark") {
  // Add the "theme-dark" class to the body, which changes the theme.
  bodyElement.classList.add("theme-dark");

  // Set the dropdown value to "dark" to reflect the current theme choice.
  themeToggleSelect.value = "dark";
}

// Add a change event listener to the theme toggle dropdown.
themeToggleSelect.addEventListener("change", () => {
  // Get the selected value from the dropdown.
  const selectedValue = themeToggleSelect.value;

  // Toggle the theme class on the body element and update the local storage based on user choice.
  if (selectedValue === "dark") {
    // Switch to the dark theme by adding the "theme-dark" class to the body.
    bodyElement.classList.add("theme-dark");

    // Update the theme preference in local storage to remember the choice.
    localStorage.setItem("theme", "dark");
  } else {
    // Switch to the light theme by removing the "theme-dark" class from the body.
    bodyElement.classList.remove("theme-dark");

    // Update the theme preference in local storage to remember the choice.
    localStorage.setItem("theme", "light");
  }
});





