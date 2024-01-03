

const x = 10;

if (x === 10 ) {
    console.log(`x is ${x}`);
} else if (x !== 10){
    console.log(`x is not 10`);
} else {
    console.log(`x is not 10. x is ${x}`);
}


//삼항 연산    조건 ? 참일경우 : 아닐경우
const age = 20;
let grup = "";

age > 20 ? grup = "senior" : grup = "junior";

console.log(grup);


//swith문

const animal = "lion";

switch(animal) {
    case 'lion' :
        console.log("big");
        break;

    case 'dog' :
        console.log("medium");
        break;

    default :
        console.log(" size.");
        break;
}


//함수 function기초

function add(a = 0, b = 0 ) { //초기값 설정 가능 ES6 . -> 파라미터 값이 없을 때 초기값으로 처리...
    return a+b; 
}

console.log(add(10, 5)); 

    //무명함수를 변수에 담아 사용할수 있음

const sum = function(a,b){return a+b}
console.log(sum(5, 8));

    //화살표 arrow function
        // : 특징으로 -> window 객체에 저장되지 않기 때문에 안정적인 면이 있다. 
const sum_a = (a, b) => {return a+b}
console.log(sum_a(2,2));

