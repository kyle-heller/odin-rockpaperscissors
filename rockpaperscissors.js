
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

computerChoice = ""
playerChoice = ""
roundWinner = ""

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

getPlayerChoice()
getComputerChoice()
singleRound()


//Single round compare
function singleRound(){
    
    switch (computerChoice) {
        case 'Rock':
        if (playerChoice === "Rock") {
          console.log("Go again!")
        }
        else if (playerChoice === "Paper") {
          console.log("You win!")
        }
        else if (playerChoice === "Scissors") {
          console.log("You lose!")
        }
          break;
        case 'Paper':
          if (playerChoice === "Rock") {
            console.log("You lose!")
          }
          else if (playerChoice === "Paper") {
            console.log("Go again!!")
          }
          else if (playerChoice === "Scissors"){
            console.log("You win!")
          }
          break;
        case 'Scissors':
          if (playerChoice === "Rock") {
            console.log("You Win!")
          }
          else if (playerChoice === "Paper") {
            console.log("You lose!!")
          }
          else if (playerChoice === "Scissors") {
            console.log("Go again!")
          }
          break;
        default: 
        roundWinner = "Wrong input";
      }
}

console.log(playerChoice)
console.log(computerChoice)
console.log(roundWinner)


//Standardize capitalization of user input
function capitalize(input) {
    lowercase = input.toLowerCase()
    split = lowercase.split("")
    firstletter = split[0]
    split[0] = firstletter.toUpperCase()
    parsed = split.join("")
    return parsed
 }


