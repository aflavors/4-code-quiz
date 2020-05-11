// Define Variables
var time = document.querySelector(".time");
var startButton = document.querySelector("#startButton");
var secondsLeft = 20;

// Define Functions
function setTime() { // Timer function
    var timerInterval = setInterval(function(){
        secondsLeft--;
        time.textContent = secondsLeft + " seconds remaining in the quiz"

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timesUpMessage();
        }
    }, 1000);
}

function timesUpMessage() { // Timer message when count = 0
    time.textContent = "Time's up!";
}

// Event Listeners

// Call Functions
setTime();