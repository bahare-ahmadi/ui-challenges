let scorePlayerOne = document.querySelector("#total-score-player1");
let scorePlayerTwo = document.querySelector("#total-score-player2");
let currentScorePlayerOne = document.querySelector("#current-score-player1");
let currentScorePlayerTwo = document.querySelector("#current-score-player2");
let diceElement = document.querySelector(".dice");
let currentScore = 0;
let getRandomPlayer = () => {
  return Math.trunc(Math.random() * 2) + 1;
};

let activePlayer = getRandomPlayer();
let isPlaying = true;

let displayActivePlayer = () => {
  document.querySelector(".player-1").classList.remove("active-player");
  document.querySelector(".player-2").classList.remove("active-player");
  document.querySelector(`.player-${activePlayer}`).classList.add("active-player");
};

displayActivePlayer();

let rollDice = document.querySelector(".roll").addEventListener("click", () => {
  if (!isPlaying) {
    return;
  }

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
  displayActivePlayer();
};

let scores = [0, 0];
document.querySelector(".hold").addEventListener("click", (event) => {
  if (isPlaying) {
    scores[activePlayer - 1] += currentScore;
    document.querySelector(`#total-score-player${activePlayer}`).textContent = scores[activePlayer - 1];
    if (scores[activePlayer - 1] > 10) {
      document.querySelector(`.player-${activePlayer}`).classList.add("winner");
      diceElement.classList.add("hidden");
      isPlaying = false;

      document.querySelector(".hold").setAttribute("disabled", "");
      document.querySelector(".roll").setAttribute("disabled", "");
    }
    playerswitch();
  }
});
document.querySelector(".start").addEventListener("click", () => {
  // Reset Total Score
  scorePlayerOne.innerHTML = 0;
  scorePlayerTwo.innerHTML = 0;
  scores = [0, 0];

  // Reset Current Score
  currentScorePlayerOne.innerHTML = 0;
  currentScorePlayerTwo.innerHTML = 0;
  currentScore = 0;

  // Reset Active Player
  //activePlayer = 1;
  if (scores[0] > scores[1]) {
    activePlayer = 1;
  } else if (scores[0] < scores[1]) {
    activePlayer = 2;
  } else {
    activePlayer = getRandomPlayer();
  }
  displayActivePlayer();

  // Reset Winner
  document.querySelector(".player-1").classList.remove("winner");
  document.querySelector(".player-2").classList.remove("winner");

  isPlaying = true;
});
