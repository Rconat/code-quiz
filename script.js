// Start Button
var startQuiz = document.getElementById('startQuizBtn')
var countdownTimer = document.getElementById('countdownTimer')

// Score variables
var currentScore
var finalScore

// Timer starting time
var count = 75
    
    // Create a running timer that counts down when agree to take the quiz
    setInterval(function() {
        count--
        countdownTimer.innerText = count + ' seconds left'
        console.log(count + ' seconds left')
    }, 10000)

    // Ask JavaScript questions while 
        // For each correct answer add 1 to the score
        // For each wrong answer subtract time from the countdown timer

    // When timer runs out
        // Record Score with a prompt to enter initials
        // Display Scoreboard



// View Highscores button
// Restart Quiz Button
