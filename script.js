// Variables
var time = $(".time");
var startButton = $("#startButton");
var secondsLeft = 20;
// Variable for Quiz Questions
var allQuestions = [{
    question: "What does CSS stand for?",
    choices: ["Counteracting Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
    correctAnswer: 1
}, {
    question: "What is Bootstrap?",
    choices: ["An open-source CSS framework", "A debugging method", "The extra leather at the top of a boot"],
    correctAnswer: 1
}, {
    question: "What does HTML stand for?",
    choices: ["HyperText Machine Language", "HyperTeach Markup Language", "HyperText Markup Language"],
    correctAnswer: 2
}, {
    question: "What are short sections of code written to complete a task called?",
    choices: ["Function", "Array", "Object"],
    correctAnswer: 0
}];

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
