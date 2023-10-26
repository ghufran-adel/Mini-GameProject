
//   -------------------------------- theme toggle--------------------------------
const themeToggleSelect = document.getElementById("theme-toggle-select");
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
