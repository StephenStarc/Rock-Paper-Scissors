/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
let playerpoints = document.getElementById('player-score')
let hands = document.getElementById('hands')
let result = document.getElementById('result')

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
const totalScore = {playerScore:0}
function getComputerChoice() {
  choices = ['Rock','Paper','Scissors']
    choice = Math.floor(Math.random()*3)
    return choices[choice]
}
// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  score = 0
  if (playerChoice ==  computerChoice ){
    return score 
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    return score = 1
  }else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
    return score = 1
  }else if (playerChoice == 'Scissors' && computerChoice == 'Paper'){
    return score = 1
  }else{
    return score = -1
  }


}
// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  let status = `It's a Draw!`
  if (score == 1){
    status = 'You Win!'
  }else if(score == -1){
    status = 'You Lose'
  }
  hands.innerText = `${playerChoice} vs ${computerChoice}`
    result.innerText = status

  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}
// ** Calculate who won and show it on the screen **

function onClickRPS(playerChoice) {
  
  const computerChoice = getComputerChoice()
  getResult(playerChoice, computerChoice)
  showResult(score, playerChoice, computerChoice)
  totalScore['playerScore'] += score
  playerpoints.innerText = totalScore['playerScore']
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  rpsbutts = document.querySelectorAll('.rpsButton')
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  rpsbutts.forEach(butts => {
    butts.onclick = () => {onClickRPS(butts.value)
    }
  })
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  let reset = document.getElementById('endGameButton')
  reset.onclick = () => endGame()
 

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  totalScore['playerScore'] = 0

  playerpoints.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()