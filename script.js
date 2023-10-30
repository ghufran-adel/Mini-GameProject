
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

// NAVMENU in mobile version
let isMenuVisible = false; // Initialize a variable to track the state

function NavMenu() {
  let elementsToToggle = document.querySelectorAll('nav, .button, .nav-theme');
  let icon = document.querySelector(".icon i"); // Correct class selector

  if (isMenuVisible) {
    icon.className = "fa fa-bars"; // Set the class back to "fa fa-bars"
    elementsToToggle.forEach((element) => {
      element.style.display = 'none';
    });
  } else {
    icon.className = "fa fa-times"; // Set the class to "fa fa-times"
    elementsToToggle.forEach((element) => {
      element.style.display = 'block';
    });
  }

  isMenuVisible = !isMenuVisible; // Toggle the state
}

// .dropdown-button:hover .dropdown-content {
  // display: block;}
let gameDropDownButton= document.querySelector(".dropdown-button");
let gameDropDownMenu= document.querySelector(".dropdown-content");
gameDropDownButton.addEventListener('click', function() {
  // Code to handle the click event for the dropdown button
  if (gameDropDownMenu.style.display === 'none' || gameDropDownMenu.style.display === '') {
    gameDropDownMenu.style.display = 'block';
  } else {
    gameDropDownMenu.style.display = 'none';
  }
});
