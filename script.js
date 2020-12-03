// DOM elements
var startQuiz = document.getElementById('startQuizBtn')
var countdownTimer = document.getElementById('countdownTimer')
var restartQuiz = document.getElementById('restartQuizBtn')



// Quiz Questions and answers
    // Sourced Questions from "https://www.codeconquest.com/coding-quizzes/"


// Score variables
var currentScore = 0;
var finalScore = 0;

startQuiz.addEventListener('click', startQuizFunction())
// function runs on startQuiz click
function startQuizFunction() {
    // Timer starting time
    var count = 75;
    // Create a running timer that counts down when agree to take the quiz
    setInterval(function() {
        count--
        countdownTimer.innerText = count + ' seconds left'
        console.log(count + ' seconds left')
    }, 1000)

     // Ask JavaScript questions while 
        // For each correct answer add 1 to the score
        // currentScore++
        // For each wrong answer subtract time from the countdown timer
        // count-5

        // When timer runs out
    if (count <= 0) {
            currentScore = finalScore
            // Display final score
            alert("Quiz Complete: Your Score final score is " + finalScore)
            // Display Scoreboard
    }
}

// View Highscores button

// Restart Quiz Button
restartQuiz.addEventListener('click', restartQuizFunction())
// function runs on restartQuiz click
function restartQuizFunction() {
    restartCnfr = confirm("Would you like to restart the quiz?")
    if (restartCnfr) {
        startQuizFunction()
    }
}
