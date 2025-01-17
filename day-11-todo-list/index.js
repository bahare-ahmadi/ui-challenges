let inputButton = document.querySelector("#input");
let addButton = document.querySelector("#add-btn");
let list = document.querySelector(".list");
let todoList = [];
addButton.addEventListener("click", () => {
  addItemList();
  renderList();
});
inputButton.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItemList();
    renderList();
  }
});

function renderList() {
  list.innerHTML = "";
  todoList.forEach((value, index) => {
    const li = document.createElement("li");
    li.textContent = value.text;
    li.classList.add("list-item-wrapper");

    if (value.state === "done") {
      li.classList.add("done");
    }
    li.addEventListener("click", () => {
      toggleState(value);
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
      deleteTodo(index); // Har item ro ba id hazf mikonim
    });

    li.appendChild(deleteButton); // Dokmeh ro be item ezafe mikonim
    list.appendChild(li); // Har li ro be ul list ezafe mikonim
  });
}
function deleteTodo(index) {
  todoList.splice(index, 1);
  renderList();
}

function toggleState(todoItem) {
  if (todoItem.state === "todo") {
    todoItem.state = "done";
  } else {
    todoItem.state = "todo";
  }
  // value.state = value.state === "todo" ? "done" : "todo"; // Taghyir state
  renderList(); // List ra dobare render mikonim
}
function addItemList() {
  const inputValue = inputButton.value;

  todoList.push({
    text: inputValue,
    state: "todo",
  });
  console.log(todoList);
  inputButton.value = "";
}
