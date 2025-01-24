const timerInputValue = document.querySelector(".input-value");

const startBtn = document.querySelector(".timer-button-start");
const timerShow = document.querySelector(".timer-show-detail");
const stopBtn = document.querySelector(".timer-button-stop");
let timerValueTemp = 0;
let isStarted = false;
let timerInterval;
timerInputValue.focus();

timerInputValue.addEventListener("keydown", (i) => {
  if (i.key == "Enter") {
    if (isStarted) {
      alert("Already started, Please stop first");
      return;
    }
    timerValueTemp = timerInputValue.value;
    startTimer(timerValueTemp);
  }
});
startBtn.addEventListener("click", () => {
  if (isStarted) {
    alert("Already started, Please stop first");
    return;
  }
  timerValueTemp = timerInputValue.value;
  startTimer(timerValueTemp);
});

stopBtn.addEventListener("click", () => {
  isStarted = false;
  clearInterval(timerInterval);
  timerShow.textContent = "";
  timerInputValue.value = "";
  timerValueTemp = "";
});

function startTimer(duration) {
  isStarted = true;
  let timer = duration * 60;
  let minutes;
  let seconds;
  let hour;

  timerInterval = setInterval(() => {
    hour = parseInt(timer / 3600);
    minutes = parseInt((timer / 60) % 60);
    seconds = parseInt(timer % 60);

    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerShow.textContent = hour + " : " + minutes + " : " + seconds;
    if (--timer < 0) {
      clearInterval(timerInterval);
      isStarted = false;
    }
  }, 1000);
}
