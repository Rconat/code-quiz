// DOM elements
var startQuiz = document.getElementById('startQuizBtn')
var countdownTimer = document.getElementById('countdownTimer')
var restartQuiz = document.getElementById('restartQuizBtn')

// Quiz Questions and answers
    // Sourced Questions from "https://www.codeconquest.com/coding-quizzes/"
var quizQuestions = [
    {
        question: 'What is a JavaScript element that represents either TRUE or FALSE values?',
        choices: ['Event', 'RegExp', 'Condition', 'Boolean'],
        answer: 'Boolean'
    },
    {
        question: 'What is the element called that can continue to execute a block of code as long as the specified condition remains TRUE?',
        choices: ['Debugger', 'Repeater', 'Clone', 'Loop'],
        answer: 'Loop'
    },
    {
        question: 'in Javascript, what is a block of code called that is used to perform a specific task?',
        choices: ['Function', 'Declaration', 'Variable', 'String'],
        answer: 'Function'
    },
    {
        question: 'What is the element called that is used to describe the set of variables, objects, and functions you explicitly have access to?',
        choices: ['Restriction', 'Range', 'Scope', 'Output Level'],
        answer: 'Range'
    },
    {
        question: 'What is the element used – and hidden – in code that explains things and makes the content more readable?',
        choices: ['Comparisons', 'Quotations', 'Notes', 'Comments'],
        answer: 'Comments'
    },
    {
        question: 'What is the name of the statement that is used to exit or end a loop?',
        choices: ['Break Statement', 'Close Statement', 'Falter Statement', 'Condition Statement'],
        answer: 'Condition Statement'
    },
    {
        question: 'What is the default behavior called that is used to move declarations to the top of the current scope?',
        choices: ['Jumping', 'Arranging', 'Sorting', 'Hoisting'],
        answer: 'Hoisting'
    },
    {
        question: 'What is the object called that lets you work with both dates and time-related data?',
        choices: ['Clock', 'Time Field', 'Time-warp', 'Dates'],
        answer: 'Clock'
    },
    {
        question: 'Where is the JavaScript placed inside an HTML document or page?',
        choices: ['In the <body> and <head> sections', 'In the <footer> section', 'In the <title> section', 'In the <meta> section'],
        answer: 'In the <meta> section'
    },
]


// Score variables
var currentScore = 0;

startQuiz.addEventListener('click', startQuizFunction);
// function runs on startQuiz click
function startQuizFunction() {
    // Timer starting time
    var count = 75;
    countdownTimer.innerText = count + ' seconds left'
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
            var finalScore = currentScore
            // Display final score
            alert("Quiz Complete: Your Score final score is " + finalScore)
            // Display Scoreboard
    }
}

// View Highscores button

// Restart Quiz Button
restartQuiz.addEventListener('click', restartQuizFunction);
// function runs on restartQuiz click
function restartQuizFunction() {
    restartCnfr = confirm("Would you like to restart the quiz?")
    if (restartCnfr) {
        clearInterval()
        count = 75;
        startQuizFunction()
    }
}
