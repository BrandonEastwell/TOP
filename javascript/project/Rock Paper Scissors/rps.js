 let humanScore = 0
 let computerScore = 0
 let buttons = document.querySelectorAll("button")
 let scoreText = document.querySelector("#score");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        let target = event.target

        switch (target.id) {
            case 'rock':
                playGame('rock')
                break;
            case 'paper':
                playGame('paper')
                break;
            case 'scissors':
                playGame('scissors')
                break;
        }
    })
})

 function playGame(humanSelection) {
     if (humanScore === 5 || computerScore === 5) {
         if (humanScore > computerScore) {
             scoreText.textContent = `You won! \nYour score is ${humanScore} \nComputers score is ${computerScore}`;
         } else if (computerScore > humanScore) {
             scoreText.textContent = `You lost! \nYour score is ${humanScore} \nComputers score is ${computerScore}`;
         } else {
             scoreText.textContent = `You drew! \nYour score is ${humanScore} \nComputers score is ${computerScore}`
         }
     } else {
         playRound(humanSelection, getComputerChoice())
     }
 }

 function playRound(humanChoice, computerChoice) {
     if (humanChoice === "rock") {
         if (computerChoice === "scissors") {
             humanScore++
             scoreText.textContent = `You win. ${humanChoice} beats ${computerChoice}`;
         } else if (computerChoice === "paper") {
             computerScore++
             scoreText.textContent = `You lose. ${computerChoice} beats ${humanChoice}`;
         } else {
             scoreText.textContent = `No winner. ${humanChoice} draws with ${computerChoice}`;
         }
     } else if (humanChoice === "paper") {
         if (computerChoice === "scissors") {
             computerScore++
             scoreText.textContent = `You lose. ${computerChoice} beats ${humanChoice}`;
         } else if (computerChoice === "rock") {
             humanScore++
             scoreText.textContent = `You win. ${humanChoice} beats ${computerChoice}`;
         } else {
             scoreText.textContent = `No winner. ${humanChoice} draws with ${computerChoice}`;
         }
     } else if (humanChoice === "scissors") {
         if (computerChoice === "rock") {
             computerScore++
             scoreText.textContent = `You lose. ${computerChoice} beats ${humanChoice}`;
         } else if (computerChoice === "paper") {
             humanScore++
             scoreText.textContent = `You win. ${humanChoice} beats ${computerChoice}`;
         } else {
             scoreText.textContent = `No winner. ${humanChoice} draws with ${computerChoice}`;
         }
     }
 }

 function getComputerChoice() {
     let getRandomInt = (max) => Math.floor(Math.random() * max)
     let rand = getRandomInt(3)

     if (rand === 0) {
         return "rock"
     } else if (rand === 1) {
         return "paper"
     } else if (rand === 2) {
         return "scissors"
     }

 }

 /*
 function getHumanChoice() {
     while(true) {
         let input = prompt("rock, paper or scissors")
         input = input.toLowerCase()
         if (findMatch(input)) {
             console.log(input)
             return input
         } else {
             console.log("wrong input")
         }
     }
 }
  */

 function findMatch(input) {
     let choices = ["rock", "paper", "scissors"]
     for (let i = 0; i < choices.length; i++) {
         if (input === choices[i]) {
             return true
         }
     }
     return false
 }