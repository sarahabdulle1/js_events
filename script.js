const button = document.querySelector("#enter");
const list = document.querySelector("#list");
const input = document.getElementById("new-todo");
const showDateButton = document.getElementById("show-date");
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

showDateButton.addEventListener('click', (event) =>{
        const newDate = paragraph.getAttribute("data-showDate");
        const datePresent = newDate === "true";
        const booleanInvented = !datePresent;   
        paragraph.setAttribute("data-showDate", booleanInvented);        
        const showDate = document.createElement("p");
    if (newDate === "true"){
        showDate.innerText = Date();
        paragraph.appendChild(showDate);
    }
});

