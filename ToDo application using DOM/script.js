function addTodo(){

    let input = document.getElementById("todoInput");

    let li = document.createElement("li");

    li.innerText = input.value;

    li.onclick = function(){
        this.style.textDecoration = "line-through";
    }

    document.getElementById("todoList").appendChild(li);

    input.value = ""; // clear input
}