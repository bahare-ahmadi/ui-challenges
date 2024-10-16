let scorePlayerOne = document.querySelector("#total-score-player1");
let scorePlayerTwo = document.querySelector("#total-score-player2");
let currentScorePlayerOne = document.querySelector("#current-score-player1");
let currentScorePlayerTwo = document.querySelector("#current-score-player2");
let diceElement = document.querySelector(".dice");
let currentScore = 0;
let activePlayer = 1;
let isPlaying = true;
let rollDice = document.querySelector(".roll").addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove("hidden");
  diceElement.src = `./${dice}.jpg`;

  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`#current-score-player${activePlayer}`).textContent = currentScore;
  } else {
    playerswitch();
  }
});

let playerswitch = () => {
  currentScore = 0;
  document.querySelector(`#current-score-player${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 1 ? 2 : 1;
  document.querySelector(".player-1").classList.toggle("active-player");
  document.querySelector(".player-2").classList.toggle("active-player");
};

let scores = [0, 0];
document.querySelector(".hold").addEventListener("click", () => {
  if (isPlaying) {
    scores[activePlayer - 1] += currentScore;
    document.querySelector(`#total-score-player${activePlayer}`).textContent = scores[activePlayer - 1];
    if (scores[activePlayer - 1] > 10) {
      document.querySelector(`.player-${activePlayer}`).classList.add("winner");
      diceElement.classList.add("hidden");
    
      isPlaying = false;
    }
    playerswitch();
  }
});
document.querySelector(".start").addEventListener("click", () => {
  scorePlayerOne.innerHTML = 0;
  scorePlayerTwo.innerHTML = 0;
  currentScorePlayerOne.innerHTML = 0;
  currentScorePlayerTwo.innerHTML = 0;
  document.querySelector(".player-1").classList.remove("winner");
  document.querySelector(".player-1").classList.add("active-player");
  document.querySelector(".player-2").classList.remove("winner");
  document.querySelector(".player-2").classList.remove("active-player");
  activePlayer = 0;
  isPlaying = true;
});
