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
  