
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");

const allclear = document.querySelector(".all-clear");
const alldelete = document.querySelector(".all-delete");


//전체 삭제 - 화살표function

alldelete.addEventListener("click", () => {
    if(todoList.firstChild){
        while(todoList.firstChild){
            todoList.removeChild(todoList.firstChild);
        }
    }

      
})

//전체 완료 - 화살표function
allclear.addEventListener("click", () =>{
    if(todoList.firstChild){
        console.log(todoList.firstChild)
        while(todoList.firstChild){
             todoList.firstChild.classList.add('done') 
             //2024.01.15 Error 
                //todo.js:26 Uncaught TypeError: Cannot read properties of undefined (reading 'add') -> 객체를 제대로 찾지 못함.. while 범위 탓?
        }
    }
})


//input 이벤트
todoInput.addEventListener("keypress", function(e){
    if(e.keyCode === 13) {
        console.log(todoInput.value); 
        
        //li
        generateTodo(todoInput.value);
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

//const likeButton = document.querySelector(".like");
function generateLike() {
    const span = document.createElement("span");
    span.classList.add("todo-like");
    
    const icon = document.createElement("i");
    icon.classList.add("material-icons");
    icon.classList.add("like");
    icon.innerText = "favorite_border";
    span.appendChild(icon);

    //like 버튼 이벤트 
    span.addEventListener("click",()=>{
        //삼항 연산자 
            //조건 ? 참 : 거짓
        icon.innerHTML === 'favorite_border' ? icon.innerHTML = "favorite" : icon.innerHTML = "favorite_border"
        
    })
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

    //완료, 삭제 이벤트
    icon1.addEventListener("click", (e)=>{
        const li = e.target.parentNode.parentNode;
        li.classList.add('done')
    })

    icon2.addEventListener("click", (e)=>{
        const li = e.target.parentNode.parentNode;
        todoList.removeChild(li)
    })

    

    span.appendChild(icon1);
    span.appendChild(icon2);
    

    return span;
};

