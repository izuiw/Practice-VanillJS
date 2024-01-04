const output = document.getElementById("button")
const wrapper = document.getElementsByClassName("wrapper")

output.innerText = "전송"
console.log({output});

//wrapper[0].innerText = "html"
console.log({wrapper});


const output2 = document.querySelector("#button");
const wrapper2 = document.querySelector(".wrapper");
const items = document.querySelectorAll(".item");


const target = document.querySelector(".target");

target.style.color = "red";
target.style.fontSize = "40px";

console.log({target})


//이벤트

const title = document.querySelector("h1");

title.addEventListener("click", function(){
    title.style.color = "red" 
})

const userId = document.querySelector("#userId");

userId.addEventListener("input", function(e){
   // console.log(e)
   target.innerText = this.value
})

//일반 function과 달리, arrow function 으로 사용하게되면 this가 window 객체를 가리키기됨.
output2.addEventListener("click", () => {
    target.style.width = "50px"
    target.style.height = "50px"
    target.style.backgroundColor = userId.value;
    target.style.borderRadius = "50%"
})

const point = document.querySelector(".point")


items.forEach(item => {
    item.addEventListener("click", () => {
        point.innerHTML = item.innerHTML;
    })
})