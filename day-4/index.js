const btnOne = document.getElementById("one");
const btnTwo = document.querySelector("#two");
const btnThree = document.querySelector("#three");
const btnFour = document.querySelector("#four");
const btnFive = document.querySelector("#five");
const btnSix = document.querySelector("#six");
const btnSeven = document.querySelector("#seven");
const btnEight = document.querySelector("#eight");
const btnNine = document.querySelector("#nine");
const btnZero = document.querySelector("#zero");
const btnclear = document.querySelector("#clear");

const btnPercent = document.querySelector("#percent");
const btnDivide = document.querySelector("#divide");
const btnMultiply = document.querySelector("#multiply");
const btnSubtract = document.querySelector("#subtract");
const btnAdd = document.querySelector("#add");
const btnDecimal = document.querySelector("#decimal");
const btnEqual = document.querySelector("#equal");
const displayElement = document.querySelector(".display");

let numberOne = "";
let numberTwo = "";
let operator = "";

// Behtare az in estefade koni ke sadetar bashe va code'e tekrari kamtar dashte bashi
function calculateResult(num1, op, num2) {
  //TODO:vurudi ha ro validate kon
  let num1asFloat = parseFloat(num1);
  let num2asFloat = parseFloat(num2);
  switch (op) {
    case "+":
      return num1asFloat + num2asFloat;
    case "-":
      return num1asFloat - num2asFloat;
    case "*":
      return num1asFloat * num2asFloat;
    case "/":
      return num1asFloat / num2asFloat;
  }
}

function proccessInput(input) {
  if (input === "=") {
    numberOne = calculateResult(numberOne, operator, numberTwo);
    displayElement.innerHTML = numberOne;
    numberTwo = "";
    clearOperators();
  } else if (input === "-" || input === "*" || input === "/" || input === "+") {
    operator = input;
    console.log(operator); //TODO: dokmeye mored nazar ra rangi kon.
    clearOperators();
    if (operator === "+") {
      btnAdd.classList.add("selected");
    } else if (operator === "-") {
      btnSubtract.classList.add("selected");
    } else if (operator === "*") {
      btnMultiply.classList.add("selected");
    } else if (operator === "/") {
      btnDivide.classList.add("selected");
    }
  } else if (operator === "") {
    numberOne = numberOne + input;
    displayElement.innerHTML = numberOne;
  } else if (numberOne !== "" && operator !== "") {
    numberTwo = numberTwo + input;
    displayElement.innerHTML = numberTwo;
  }

  //   if (numberOne !== "" && numberTwo !== "" && operator !== "" && input === "=") {
  //     numberTwo = "";
  //     operator = "";
  //     return;
  //   }

  // Amaliate manteghi va mohasebe inja anjam mishe
}
function clearOperators() {
  document.querySelectorAll(".operand").forEach((akbar) => {
    akbar.classList.remove("selected");
  });
}

function clearInput() {
  numberOne = "";
  numberTwo = "";
  operator = "";
  displayElement.innerHTML = "";
}

//vaghti event click ruye dokmeye mored nazar anjam shod function morede nazar ro ejra kon
btnOne.addEventListener("click", () => proccessInput(1));
btnTwo.addEventListener("click", () => proccessInput(2));
btnThree.addEventListener("click", () => proccessInput(3));
btnFour.addEventListener("click", () => proccessInput(4));
btnFive.addEventListener("click", () => proccessInput(5));
btnSix.addEventListener("click", () => proccessInput(6));
btnSeven.addEventListener("click", () => proccessInput(7));
btnEight.addEventListener("click", () => proccessInput(8));
btnNine.addEventListener("click", () => proccessInput(9));
btnZero.addEventListener("click", () => proccessInput(0));
btnPercent.addEventListener("click", () => proccessInput("%"));
btnMultiply.addEventListener("click", () => proccessInput("*"));
btnDivide.addEventListener("click", () => proccessInput("/"));
btnSubtract.addEventListener("click", () => proccessInput("-"));
btnAdd.addEventListener("click", () => proccessInput("+"));
btnDecimal.addEventListener("click", () => proccessInput("."));
btnEqual.addEventListener("click", () => proccessInput("="));
btnclear.addEventListener("click", () => clearInput());

// document.querySelectorAll(".calc-btn").forEach((akbar) => {
//   console.log(akbar.innerHTML);
//   akbar.addEventListener('click',()=>proccessInput(akbar.innerHTML))
// });
