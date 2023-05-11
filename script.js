const button = document.querySelector("#enter");
const list = document.querySelector("#list");
const input = document.getElementById("new-todo");
const showDate = document.getElementById("show-date");
const paragraph = document.getElementById("paragraph");

button.addEventListener('click', (event) => {
    const newToDo = document.createElement("li");
    newToDo.innerText = input.value;
    if (input.value != ""){
        list.appendChild(newToDo);
        input.value = '';

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "delete item";
        list.appendChild(deleteButton);
   
         deleteButton.addEventListener('click', (event) =>{
        list.removeChild(newToDo);
        list.removeChild(deleteButton);
        });
    }
    
})

showDate.addEventListener('click', (event) =>{
    const showDate = document.createElement("p");
    // if (paragraph.value == null)}
        showDate.innerText = new Date;
        paragraph.appendChild(showDate);
        const newDate = showDate.getAttribute("data-showDate");
        const datePresent = newDate === "true";
        const booleanInvented = !datePresent;
        showDate.setAttribute("data-showDate", booleanInvented);
    
});

