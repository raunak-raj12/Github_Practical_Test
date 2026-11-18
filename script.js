// Simple feature: switch between light and dark mode

var button = document.getElementById("theme-btn");

button.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  // change the button text
  if (document.body.classList.contains("dark")) {
    button.textContent = "Light Mode";
  } else {
    button.textContent = "Dark Mode";
  }
});
