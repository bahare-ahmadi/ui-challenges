fetch("./ingredients.json")
  .then((Response) => Response.json())
  .then((data) => {
    renderIngredients(data.ingredients);
    renderSteps(data.steps);
  })
  .catch((error) => console.error("Error Loading JSON Bahare", error));

function renderIngredients(ingredients) {
  let ingredient = document.querySelector(".ingredients");
  ingredients.forEach((item) => {
    let ingredientDiv = document.createElement("div");
    ingredientDiv.classList.add("ingredients-detile");
    const ingredientText = document.createElement("div");
    ingredientText.classList.add("ingredients-head");
    const ingredientQt = document.createElement("div");
    ingredientQt.classList.add("ingredient-qt");
    ingredientText.textContent = item.text;
    ingredientQt.textContent = item.qt;
    ingredient.appendChild(ingredientDiv);
    ingredientDiv.appendChild(ingredientText);
    ingredientDiv.appendChild(ingredientQt);
  });
}
let currentStep = 1;

function renderSteps(steps) {
  let stepContentDiv = document.querySelector(".step-content");
  stepContentDiv.innerHTML = "";
  document.querySelector(".step-number").innerHTML=`( ${currentStep} of ${steps.length} )`
  steps.forEach((item, index) => {
    if (currentStep <= index) {
      return;
    }
    const stepContentDetail = document.createElement("div");
    stepContentDetail.classList.add("step-content-detail");
    const stepContentInput = document.createElement("input");
    stepContentInput.type = "checkbox";
    stepContentInput.id = "checkstep";
    const stepContentLable = document.createElement("label");
    stepContentLable.textContent = item.text;
    stepContentLable.name = "checkstep";
    stepContentDiv.appendChild(stepContentDetail);
    stepContentDetail.appendChild(stepContentInput);
    stepContentDetail.appendChild(stepContentLable);
    if (item.completed) {
      stepContentInput.checked = true;
    }
    stepContentDetail.addEventListener("click", () => {
      currentStep = index + 2;
      item.completed = !item.completed;

      renderSteps(steps);
    });
  });
}

