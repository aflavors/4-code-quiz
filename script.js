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
    choices: ["HyperText Machine Language", "HyperTech Markup Language", "HyperText Markup Language"],
    correctAnswer: 2
}, {
    question: "What are short sections of code written to complete a task called?",
    choices: ["Function", "Array", "Object"],
    correctAnswer: 0
}];

var questionCount = 0;
var quizScore = 0;

// Question Functions
function setQuestion(questionNumber) { // Display Questions
    var questionHeaderEl = $("#question-header");
    questionHeaderEl.text(allQuestions[questionNumber].question);
}
function setAnswer(idEl, questionNumber, choiceNum) { // Display Answer Choices
    var answerChoice = document.getElementById(idEl);
    answerChoice.innerHTML = allQuestions[questionNumber].choices[choiceNum];
}

function runQuiz() { // Run All Questions and Choices
    setQuestion(questionCount);
    setAnswer("answer1", questionCount, 0);
    setAnswer("answer2", questionCount, 1);
    setAnswer("answer3", questionCount, 2);
    $("#next-button").text("Next Question");
}
function runNextQuestion() { // Next Question Button
    questionCount++;
    runQuiz();
}

// Timer Functions
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
    runQuiz();
    //console.log("hello")
})

$("#next-button").click(function(){ // Next Question Button
    event.preventDefault();
    runNextQuestion();
})

// Call Functions
