//Initialize variables for counter
let userScore = 0;
let compScore = 0;

//selsect  elements
const match = document.querySelector('.match');
const score = document.querySelector('.score');
const options = document.querySelectorAll('.options button');
const playerHand = document.querySelector('.p-hand');
const computerHand = document.querySelector('.c-hand');
const hands = document.querySelectorAll('.hands img');
const reset = document.getElementById('reset') 
const playerScore = document.querySelector('.user-score p');
const computerScore = document.querySelector('.computer-score p');
const winner = document.querySelector('.match__title');
//array for options for computer.
const computerOptions = ['rock', 'paper', 'scissors'];

options.forEach(option => {
  option.addEventListener('click', function () {
    //variable for randome number to index for computer
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];

    setTimeout(() => {
      compareHands(this.textContent, computerChoice);
      playerHand.src = `../assets/${this.textContent}.png`;
      computerHand.src = `../assets/${computerChoice}.png`;
    });
  
    const updateScore = () => {
      
      playerScore.textContent = userScore;
      computerScore.textContent = compScore;
    };
   
    const compareHands = (playerChoice, computerChoice) => {
     

      if (playerChoice === computerChoice) {
        winner.textContent = 'Tie';
        return;
      }

      if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
          winner.textContent = 'Player Wins';
          userScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Computer Wins';
          compScore++;
          updateScore();
          return;
        }
      }

      if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
          winner.textContent = 'Computer Wins';
          compScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Player Wins';
          userScore++;
          updateScore();
          return;
        }
      }

      if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
          winner.textContent = 'Computer Wins';
          compScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Player Wins';
          userScore++;
          updateScore();
          return;
        }
      }
    };
  })
});


