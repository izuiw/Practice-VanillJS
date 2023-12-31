//console.log(console)

const name = "minji Kim";
let age = 27;

// ``(백틱)으로 묶으주고 ${}표현식으로 변수 사용
// -> 코드 가독성이나, 편리성이 좋음
console.log(`이름은 ${name}이고, 나이는 ${age}입니다`);


//split
console.log(name.substring(0,5).toUpperCase());
console.log(name.split(""));

    // 배열 -> 문자열 
const hobbies = ["game", "Tv", "yputube"];

console.log(hobbies.join())

    // 문자열 -> 배열
const subject = "kor,eng,math,history"

console.log(subject);
console.log(subject.split(","))
