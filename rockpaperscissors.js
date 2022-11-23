
{/* Your game is going to play against the computer, so begin with a function called getComputerChoice 
that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game 
to make the computer’s play. Tip: use the console to make sure this is returning the expected output 
before moving to the next step! */}

{/* Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters
 - the playerSelection and computerSelection - and then return a string that declares the winner of the 
 round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or 
any other variation). */}

{/* Important note: you want to return the results of this function call, not console.log() them. You’re 
going to use what you return later on, so let’s test this function by using console.log to see the 
results: */}
{/* 
Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game 
that keeps score and reports a winner or loser at the end. */}

// In our UI, the player should be able to play the game by clicking on buttons rather than typing their 
// answer in a prompt.
// For now, remove the logic that plays exactly five rounds.
// Create three buttons, one for each selection. Add an event listener to the buttons that call your 
// playRound function with the correct playerSelection every time a button is clicked. (you can keep 
//   the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s 
// OK! Reworking old code is an important part of a programmer’s life.


 /////////////////////////////////////////


 const rockbutton = document.getElementById('rock')
 const paperbutton = document.getElementById('paper')
 const scissorsbutton = document.getElementById('scissors')
 
 window.addEventListener('click', function (e) {

 if (e.target === rockbutton) {
 e.target.classList.add('pressed');
 playerChoice = "Rock";
 singleRound()
 playGame()
 }

 else if (e.target === paperbutton) {
 e.target.classList.add('pressed');
 playerChoice = "Paper";
 singleRound()
 playGame()
 }

 else if (e.target === scissorsbutton) {
 e.target.classList.add('pressed');
 playerChoice = "Scissors";
 singleRound()
 playGame()
 }});
 

 function removeTransition(e) {
 if (e.propertyName !== 'transform') return // skip it if it's not a transform
 this.classList.remove('pressed')
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));


 /////////////////////////////////////////



let computerChoice = ""
let playerChoice = ""
let roundWinner = ""
let playerScore = 0
let computerScore = 0
let round = 0

// getPlayerChoice() 
getComputerChoice()
// singleRound()
playGame()

//Get computer choice
function getComputerChoice(){
  let options = ['Rock', 'Paper', 'Scissors']
  result = options[Math.floor(Math.random()*3)]
  computerChoice = result
}

//Single round compare
function singleRound(){
    
    switch (computerChoice) {
        case 'Rock':
        if (playerChoice === "Rock") {
          result = "Tie"
        }
        else if (playerChoice === "Paper") {
          result = "Win"
        }
        else if (playerChoice === "Scissors") {``
          result = "Lose"
        }
        else {
          console.log("Bad input")
        }
          break;
        case 'Paper':
          if (playerChoice === "Rock") {
            result = "Lose"
          }
          else if (playerChoice === "Paper") {
            result = "Tie"
          }
          else if (playerChoice === "Scissors"){
            result = "Win"
          }
          else {
            console.log("Bad input")
          }
          break;
        case 'Scissors':
          if (playerChoice === "Rock") {
            result = "Win"
          }
          else if (playerChoice === "Paper") {
            result = "Lose"
          }
          else if (playerChoice === "Scissors") {
            result = "Tie"
          }
          else {
            console.log("Bad input")
          }
          break;
      }
      return result
}

//Play a group of 5 rounds and keep score
function playGame() {
    if (singleRound() === "Win") {
      console.log("You win!")
      playerScore++
      round++
      getComputerChoice()
      checkScore()

    }
    else if (singleRound() === "Lose") {
      console.log("You lose!")
      computerScore++
      round++
      getComputerChoice()
      checkScore()
    
    }
    else if (singleRound() === "Tie") {
      console.log("You tied!")
      round++
      getComputerChoice()
      checkScore()
    }}
   

function checkScore() {

    if (round === 5) {
      if (playerScore > computerScore) {
        console.log("You win the game!")
        playerScore = 0
        computerScore = 0
        round = 0
      }
      else if (playerScore < computerScore) {
        console.log("You lose the game!")
        playerScore = 0
        computerScore = 0
        round = 0
      }
    }
  }
  
//Standardize capitalization of user input
function capitalize(input) {
    lowercase = input.toLowerCase()
    split = lowercase.split("")
    firstletter = split[0]
    split[0] = firstletter.toUpperCase()
    parsed = split.join("")
    return parsed
 }


