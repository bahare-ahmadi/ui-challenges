let gameNumber = Math.floor(Math.random() * 20);
console.log(gameNumber);
document.querySelector(".enter").addEventListener('click', () => {
  let enterNumber = Number(document.querySelector(".input").value);
  let showResult = document.querySelector(".result");
  if (enterNumber && enterNumber >= 1) {
    if (gameNumber < enterNumber) {
      showResult.innerHTML = "To Big";
    } else if (gameNumber >enterNumber) {
      showResult.innerHTML = "To Small";
    } else {
        showResult.classList.add('winn')
      showResult.innerHTML = "You Winn";
 
    }
  }
 
});
