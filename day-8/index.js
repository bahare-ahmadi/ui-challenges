let selfChoice = document.querySelectorAll(".image");
let cpuChoice = document.querySelectorAll(".image-cpu");
let cpuState = false;
for (let i = 0; i <= selfChoice.length - 1; i++) {
  selfChoice[i].addEventListener("click", () => {
    if (cpuState===true) {
      refreshButton();
      return;
    }


    hiddenSelect(i);
    let randomChoice = Math.floor((Math.random() * 10) / 4);
    cpuChoice[randomChoice].classList.remove("hidden");
    cpuState = true;
    gameLogic(i, randomChoice);
  });
}

function hiddenSelect(i) {
  for (let j = 0; j <= selfChoice.length - 1; j++) {
    if (j !== i) {
      selfChoice[j].classList.add("hidden");
    }
  }
}
const refreshButton = () => {
  for (let i = 0; i <= selfChoice.length - 1; i++) {
    selfChoice[i].classList.remove("hidden");
    cpuChoice[i].classList.add("hidden");
  }
  cpuState = false;
};
document.querySelector(".button").addEventListener("click", refreshButton);

document.addEventListener("keydown", (e) => {
  if (e.key == "r") {
    refreshButton();
  }
});

function gameLogic(user, cpu) {
  const cpuPoint = document.querySelector("#cpu-point");
  const userPoint = document.querySelector("#user-point");
  if (user !== cpu) {
    if (user == 0) {
      if (cpu == 1) {
        cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
      } else {
        userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
      }
    }
    if (user == 1) {
      if (cpu == 0) {
        userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
      } else {
        cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
      }
    }
    if (user == 2) {
      if (cpu == 0) {
        cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
      } else {
        userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
      }
    }
  }
}
