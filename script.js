// Variables
var time = $(".time");
var startButton = $("#startButton");
var secondsLeft = 20;

// Define Functions
function setTime() {
    var timerInterval = setInterval
    (function(){
        secondsLeft--;
        $(".time").text(secondsLeft + " seconds remaining in the quiz")
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timesUpMessage();
            //ALSO set a quizOver function to end everything
            //OR just add on to the timesUpMessage function
        }
    }, 1000);
}

function timesUpMessage() {
    $(".time").text("Time's up!");
}

// Event Listeners
$("#startButton").click(function(){
    event.preventDefault();
    setTime();
})

// Call Functions
