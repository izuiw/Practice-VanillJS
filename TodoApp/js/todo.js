
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");

const likeButton = document.querySelector(".like");


//input 이벤트
todoInput.addEventListener("keypress", function(e){
    if(e.keyCode === 13) {
        console.log(todoInput.value); 
        
        //li
        generateTodo(todoInput.value);ß
        todoInput.value = "";
        
    }
});


function generateTodo(todo){    
    const li = document.createElement("li");
    const likeSpan = generateLike();
    const itemSpan = generateItem(todo);
    const manageSpan = generateManage();

    li.appendChild(likeSpan);
    li.appendChild(itemSpan);
    li.appendChild(manageSpan);

    todoList.appendChild(li);
};

function generateLike() {
    const span = document.createElement("span");
    span.classList.add("todo-like");
    
    const icon = document.createElement("i");
    icon.classList.add("material-icons");
    icon.classList.add("like");
    icon.innerText = "favorite_border";
    span.appendChild(icon);

    return span;
};

function generateItem(todo){
    const span = document.createElement("span");
    span.classList.add("todo-item");
    span.innerText = todo;

    return span;
};

function generateManage(){
    const span = document.createElement("span");
    span.classList.add("todo-manage");
    
    const icon1 = document.createElement("i");
    const icon2 = document.createElement("i");
    icon1.classList.add("material-icons");
    icon1.classList.add("check");
    icon1.innerText = "check";
    icon2.classList.add("material-icons");
    icon2.classList.add("clear");
    icon2.innerText = "clear";

    span.appendChild(icon1);
    span.appendChild(icon2);
    

    return span;
};

//like 버튼 이벤트 