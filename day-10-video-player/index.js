const controlMain = document.querySelector(".control-main");
const videoContainer = document.querySelector(".video-container");
const player = document.querySelector("#video");
const playBtn = document.querySelector(".play-button");
const pauseBtn = document.querySelector(".pause-button");
const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const stopBtn = document.querySelector(".stop-button");
const arrowBtn = document.querySelector(".arrow-button");
const volumeBtn = document.querySelector(".volume-button");
const muteBtn = document.querySelector(".mute-button");
const progressContainer = document.querySelector(".progress");
const progressDisplay = document.querySelector(".progress-child");

// به‌روزرسانی زمان هنگام تغییر زمان ویدیو
player.addEventListener("timeupdate", () => {
  if (player.duration) {
    // اطمینان از این که مدت زمان ویدیو قابل دسترس است
    const progress = (player.currentTime / player.duration) * 100; // محاسبه درصد پیشرفت
    progressDisplay.style.width = progress+"%";
  }
});

volumeBtn.addEventListener("click", () => {
  toggleSound();
});
muteBtn.addEventListener("click", () => {
  toggleSound();
});

arrowBtn.addEventListener("click", () => {
  player.requestFullscreen();
});

stopBtn.addEventListener("click", () => {
  player.pause();
  player.currentTime = 1;
  pauseBtn.classList.add("hidden");
  playBtn.classList.remove("hidden");
});

nextBtn.addEventListener("click", () => {
  nextSecunde();
});
prevBtn.addEventListener("click", () => {
  prevSecunde();
});

playBtn.addEventListener("click", () => {
  console.log("play");
  togglePlay();
});
pauseBtn.addEventListener("click", () => {
  togglePlay();
});
player.addEventListener("click", () => {
  togglePlay();
  console.log("container");
});
document.addEventListener("keypress", (keyEvent) => {
  if (keyEvent.keyCode === 32) {
    togglePlay();
  }
});

videoContainer.addEventListener("mouseenter", () => {
  showControl();
});

videoContainer.addEventListener("mouseleave", () => {
  hideControl();
});

function showControl() {
  controlMain.style.opacity = 1;
  progressContainer.style.opacity = 1;
}

function hideControl() {
  controlMain.style.opacity = 0;
  progressContainer.style.opacity = 0;
}
function togglePlay() {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
  playBtn.classList.toggle("hidden");
  pauseBtn.classList.toggle("hidden");
}

function toggleSound() {
  if (player.volumeBtn) {
    player.muted = false;
    player.volumeBtn = false;
  } else {
    player.muted = true;
    player.volumeBtn = true;
  }
  volumeBtn.classList.toggle("hidden");
  muteBtn.classList.toggle("hidden");
}

function nextSecunde() {
  player.currentTime += 10;
}
function prevSecunde() {
  player.currentTime -= 10;
  player.currentTime = Math.max(0, player.currentTime - 5);
}
