const listContainer = document.querySelector("#list-container");
const input = document.querySelector("#input-box");
const empty = document.querySelector(".empty")

function addTask() {
  if (input.value == "") {
    empty.style.display = "block";
} 

else {
    empty.style.display = "none";
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  input.value = "";
  saveData();

}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } 
    
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
  },
false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();



