var form = document.getElementById("task-form");
var input = document.getElementById("task-input");
var list = document.getElementById("task-list");
var summary = document.getElementById("summary");
var emptyMessage = document.getElementById("empty-message");
 
 
// Update the "x of y tasks pending" text
function updateSummary() {
  var total = list.children.length;
  var done = list.querySelectorAll(".is-done").length;
  var pending = total - done;
 
  if (total === 0) {
    summary.textContent = "No tasks yet. Let's start! ✨";
    emptyMessage.textContent = "Your list is empty. Add your first task above 🌷";
  } else {
    summary.textContent = pending + " of " + total + " tasks pending 💗";
    emptyMessage.textContent = "";
  }
}
 
 
// Create one task and add it to the list
function addTask(text) {
  var item = document.createElement("li");
  item.className = "task";
 
  // checkbox
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task__checkbox";
 
  // task text
  var label = document.createElement("span");
  label.className = "task__text";
  label.textContent = text;
 
  // delete button
  var deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "task__delete";
  deleteButton.textContent = "×";
 
  // when checkbox is clicked: mark task as done / not done
  checkbox.addEventListener("click", function () {
    item.classList.toggle("is-done");
    updateSummary();
  });
 
  // when × is clicked: remove the task
  deleteButton.addEventListener("click", function () {
    item.remove();
    updateSummary();
  });
 
  // put everything inside the task and add it to the list
  item.appendChild(checkbox);
  item.appendChild(label);
  item.appendChild(deleteButton);
  list.appendChild(item);
 
  updateSummary();
}
 
 
// When the form is submitted (Add button or Enter key)
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stops the page from reloading
 
  var text = input.value.trim();
 
  if (text !== "") {
    addTask(text);
    input.value = "";
  }
});
 
 
// Show the starting message
updateSummary();