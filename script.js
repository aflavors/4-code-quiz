// Variables
var time = $(".time");
var startButton = $("#startButton");
var secondsLeft = 60;

// Variable for Quiz Questions
var allQuestions = [{
    question: "What does CSS stand for?",
    choices: ["Counteracting Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
    correctAnswer: 1
}, {
    question: "What is Bootstrap?",
    choices: ["An open-source CSS framework", "A debugging method", "The extra leather at the top of a boot"],
    correctAnswer: 0
}, {
    question: "What does HTML stand for?",
    choices: ["HyperText Machine Language", "HyperTech Markup Language", "HyperText Markup Language"],
    correctAnswer: 2
}, {
    question: "What are short sections of code written to complete a task called?",
    choices: ["Functions", "Arrays", "Objects"],
    correctAnswer: 0
}];

var questionCount = 0;
var quizScore = 0;

// Question Functions
function setQuestion(questionNumber) { // Display Questions
    var questionHeaderEl = $("#question-header");
    console.log("index we're trying to access", questionNumber)
    //console.log(allQuestions);
    //if(questionNumber < allQuestions.length) {
        questionHeaderEl.text(allQuestions[questionNumber].question); //looking for allQuestions[4] -> which doesn't exist
    //}
    
}
function setAnswer(idEl, questionNumber, choiceNum) { // Display Answer Choices
    var answerChoice = document.getElementById(idEl);
    //if(questionNumber < allQuestions.length) {
        answerChoice.innerHTML = allQuestions[questionNumber].choices[choiceNum];
    //}
}
function runQuiz() { // Run All Questions and Choices
    
        console.log('running runQuiz')
        setQuestion(questionCount);
        setAnswer("answer1", questionCount, 0);
        setAnswer("answer2", questionCount, 1);
        setAnswer("answer3", questionCount, 2);
        $("#next-button").text("Next Question");
}
function runNextQuestion() { // Next Question Button
    getScore();
    questionCount++; // Increase Question Count
    
    if(questionCount < allQuestions.length) {
        runQuiz();
        displayScore();
    } else { // After Last Question
        $("#quiz-content").hide();
        $("#submit-initials").show();
        $("#final-score").text("Your final score is " + quizScore + "!");
    }
}

// Score Functions
function getScore() { // Get Score from Correct Answer
    var theCorrectAnswer = allQuestions[questionCount].correctAnswer;
    console.log('correct answer index', theCorrectAnswer)
    var selectedAnswer = document.getElementById("choice" + (theCorrectAnswer + 1));
//console.log ('correct answer element', selectedAnswer)
    console.log(selectedAnswer)
    if (selectedAnswer.checked) {
        quizScore++;
        secondsLeft = secondsLeft+20; // Adds 20 seconds to counter
        alert("Correct! Your score is now " + quizScore);
       
    }
    else {
        console.log("this is the wrong answer")
        secondsLeft = secondsLeft-10; // Subtracts 10 seconds from counter
    }
        document.getElementById('choice1').checked=false; //Clear input between questions
        document.getElementById('choice2').checked=false;
        document.getElementById('choice3').checked=false;
}

function displayScore () { // Display Score 
    if (questionCount >= allQuestions.length) { // After Last Question
        $("#quiz-content").html = "Your score is " + quizScore;
    }
    if(questionCount < allQuestions.length) {
        //then run this code to end quiz
    }
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
            $("#quiz-content").hide();
            $("#submit-initials").show();
            $("#final-score").text("Your final score is " + quizScore + "!");
        }
    }, 1000);
}

function timesUpMessage() {
    $(".time").text("Time's up!");
}

// Event Listeners
$("#startButton").click(function(){ 
    event.preventDefault();
    $("#welcome-screen").hide(); // Hide Welcome Screen
    $("#quiz-content").show(); // Show Quiz Content
    setTime();
    runQuiz();
    //console.log("hello")
})

$("#next-button").click(function(event){ // Next Question Button
    event.preventDefault();
    if(questionCount < allQuestions.length) {
        runNextQuestion();
    }
    
})

// Call Functions
