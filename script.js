let countdown = 10;
const timerElement = document.getElementById('timer');

const countdownInterval = setInterval(() => {
    countdown--;
    timerElement.textContent = countdown;
    
    if (countdown === 0) {
        clearInterval(countdownInterval);
        window.location.href = 'https://veskai.xyz';
    }
}, 1000);
