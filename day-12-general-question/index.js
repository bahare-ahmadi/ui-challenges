let arrayQuestions = [];

let searchBox = document.querySelector(".search");
let searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", () => {
  let searchValue = searchBox.value;
  filterQuestions(searchValue);
  searchBox.focus();
});
searchBox.addEventListener("keydown",(i)=>{
    if(i.key==="Enter"){
        let searchValue = searchBox.value;
        filterQuestions(searchValue);
    }
})
searchBox.focus();

function filterQuestions(searchValue) {
 let newarray =arrayQuestions.filter((x) => x.question.includes(searchValue));
  renderQuestions(newarray);

}

function renderQuestions(questions) {
  const container = document.querySelector(".questions-container");
    container.innerHTML = "";

  questions.forEach((item, index) => {
    const questionDivContent = document.createElement("div");
    questionDivContent.classList.add("question-header");
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionIcon = document.createElement("div");
    questionIcon.classList.add("more");
    const questionText = document.createElement("p");

    questionIcon.textContent = "+";
    questionText.textContent = `${index + 1}.${item.question}`;
    questionIcon.style.cursor = "pointer";

    const answerText = document.createElement("p");
    answerText.classList.add("question-style");
    answerText.textContent = `answer :  ${item.answer}`;
    answerText.style.display = "none";

    questionIcon.addEventListener("click", () => {
      if (answerText.style.display === "none") {
        answerText.style.display = "block";
      } else {
        answerText.style.display = "none";
      }
    });
    questionDiv.appendChild(questionDivContent);
    questionDivContent.appendChild(questionText);
    questionDivContent.appendChild(questionIcon);

    questionDiv.appendChild(answerText);

    container.appendChild(questionDiv);
  });
}

//////////////////////////////////
fetch("./questions.json") // فایل JSON
  .then((response) => response.json()) // تبدیل به object
  .then((data) => {
    arrayQuestions = data;

    renderQuestions(data);
  }) // نمایش سوالات
  .catch((error) => console.error("Error loading JSON:", error));
