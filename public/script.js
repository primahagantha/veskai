// Switch between dark and light mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
// script.js

document.getElementById("theme-switch").addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

// Listen for dark mode switch button click
document.addEventListener("DOMContentLoaded", function () {
  const switchBtn = document.getElementById("switch-btn");
  switchBtn.addEventListener("click", toggleDarkMode);
});

function sendMessage() {
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value.trim();

  if (message !== "") {
    fetch("/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Optionally display a success message on the website
      })
      .catch((error) => {
        console.error("Error:", error);
        // Optionally display an error message on the website
      });

    // Clear the input field
    messageInput.value = "";
  }
}
