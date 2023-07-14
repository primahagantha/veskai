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
document.addEventListener('DOMContentLoaded', function() {
  var copyButtons = document.querySelectorAll('.copy-button');

  copyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var codeBlock = this.parentElement.querySelector('code');
      var codeText = codeBlock.textContent || codeBlock.innerText;

      navigator.clipboard.writeText(codeText)
        .then(function() {
          button.innerText = 'Copied!';
          button.disabled = true;
          setTimeout(function() {
            button.innerText = 'Copy';
            button.disabled = false;
          }, 2000);
        })
        .catch(function(err) {
          console.error('Failed to copy text: ', err);
        });
    });
  });
});


