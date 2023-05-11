const button = document.querySelector("#enter");
const list = document.querySelector("#list");
const input = document.getElementById("new-todo")

button.addEventListener('click', (event) => {
    const newToDo = document.createElement("li");
    newToDo.innerText = input.value;
    

    list.appendChild(newToDo);
    
    input.value = '';
})