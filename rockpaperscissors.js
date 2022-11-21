
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

let computerChoice = ""
let playerChoice = ""
let roundWinner = ""
let playerScore = 0
let computerScore = 0

getPlayerChoice() 
getComputerChoice()
singleRound()
playGame()

//Get computer choice
function getComputerChoice(){
  let options = ['Rock', 'Paper', 'Scissors']
  result = options[Math.floor(Math.random()*3)]
  computerChoice = result
}

//Get player choice
function getPlayerChoice(){
  result = prompt("Rock, Paper, or Scissors?")
  result = capitalize(result)
  playerChoice = result
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
  for (let i = 0; i < 5; i++) {
    if (singleRound() === "Win") {
      console.log("You win!")
      playerScore++
      getComputerChoice()
      getPlayerChoice()
    }
    else if (singleRound() === "Lose") {
      console.log("You lose!")
      computerScore++
      getComputerChoice()
      getPlayerChoice()
    }
    else if (singleRound() === "Tie") {
      console.log("You tied!")
      getComputerChoice()
      getPlayerChoice()
    }
  }
  console.log(roundWinner)
  console.log("Player:" + playerScore + " Computer:" + computerScore)
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


