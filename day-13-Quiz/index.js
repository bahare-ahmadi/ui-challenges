let arrayQuestions = [];
fetch("./index.json") // فایل JSON
  .then((response) => response.json()) // تبدیل به object
  .then((data) => {
    arrayQuestions = data;

    renderQuestions(data);
  }) // نمایش سوالات
  .catch((error) => console.error("Error loading JSON:", error));

/////////////////////

function renderQuestions(questions) {
  const container = document.querySelector(".container");
  questions.forEach((item, index) => {
    const questionDiv = document.createElement("div");
  
    questionDiv.classList.add("question");
    const questionText = document.createElement("div");
    questionText.classList.add("question-header");
    questionText.textContent = `${index + 1} - ${item.questionText}`;
    const answerDiv = document.createElement("div");
    answerDiv.classList.add("answer");

    item.answerOptions.forEach((answer, index) => {
      let answerText = document.createElement("div");
      answerText.classList.add("answer-text");
      answerText.textContent = `${String.fromCharCode(97 + index)}) ${answer.answerText}`;
      answerDiv.appendChild(answerText);
      answerText.style.cursor = "pointer";

      answerText.addEventListener("click", () => {
        if (answer.isCorrect) {
          answerText.style.backgroundColor = "#86efac";
        } else {
          answerText.style.backgroundColor = "#ef4444";
        }
      });
    });
    container.appendChild(questionDiv)
    questionDiv.appendChild(questionText);
    questionDiv.appendChild(answerDiv);
  });
}
