
const btn = document.querySelector('button');

btn.onclick = function addTask() {
    const taskInput = document.getElementById('input-box');
    const taskValue = taskInput.value;
    const tasklist = document.getElementById('input-list');
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    const textNode = document.createTextNode(taskValue);
    li.appendChild(textNode);
    var ul = tasklist
    ul.appendChild(li);
    taskInput.value = "";

    checkbox.addEventListener("click", function () {
        li.classList.toggle("completed", checkbox.checked);
      });
      

}




