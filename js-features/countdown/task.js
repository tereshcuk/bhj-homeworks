let timerElement = document.getElementById('timer');
let secondsRemaining = timerElement.textContent; 
let hiddenLink = document.getElementById('hiddenLink');

function padZero(num) {
    return num.toString().padStart(2, '0');
}

function downloadFile() {        
    hiddenLink.href = '1.zip';    
    hiddenLink.click(); 
}

function updateTimer() {
    if (secondsRemaining > 0) {
        let hours = Math.floor(secondsRemaining / 3600);
        let minutes = Math.floor((secondsRemaining % 3600) / 60);
        let seconds = secondsRemaining % 60; 
        //timerElement.textContent = `${secondsRemaining}`;
        timerElement.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
        secondsRemaining--;
        setTimeout(updateTimer, 1000); 
    } else {        
        alert('Вы победили в конкурсе!');
        downloadFile();
    }
}

updateTimer(); 