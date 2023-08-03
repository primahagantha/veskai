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
document.addEventListener("DOMContentLoaded", () => {
  const typingSpeed = 100; // Adjust the typing speed here (the smaller the value, the faster the animation)
  const typingElement = document.getElementById("typing-text");
  const codeText = typingElement.textContent || typingElement.innerText;

  // Clear the text content in the code block
  typingElement.textContent = "";

  let i = 0;
  const typingInterval = setInterval(() => {
    if (i < codeText.length) {
      typingElement.textContent += codeText.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, typingSpeed);

  const copyButton = document.querySelector(".copy-button");
  copyButton.addEventListener("click", () => {
    navigator.clipboard
      .writeText(codeText)
      .then(() => {
        copyButton.innerText = "Copied!";
        setTimeout(() => {
          copyButton.innerText = "Copy";
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  });
});
