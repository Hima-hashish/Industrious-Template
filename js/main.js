// Start Header
// Catch Elements
let icon = document.querySelector("header .menu .btn"),
  navigate = document.querySelector("header .menu nav");

// Handle the click event
icon.addEventListener("click", nav);

// Nav function
function nav() {
  // Check if the navigation bar is appear or not
  if (navigate.style.left === "100%") {
    // Appear the navigation bar
    navigate.style.left = "50%";
  } else {
    // Hide the navigation bar
    navigate.style.left = "100%";
  }
}
// End Header
