// Array (배열)
    //const 로 선언 후, 데이터를 변환시켜도 에러가 나지 않은 것은 배열의 요소를 변경했기 때문. 
const users = ["june", "mike","sumin","mode", 10, 20];
console.log(users)
console.log(users[2])

const users_len = users.length

console.log(users[users_len-1])

//배열에 데이터 추가
users.push("ran")//맨끝에 추가
console.log(users)

users.unshift("didi")//맨앞에 추가
console.log(users)


//배열에 데이터 제거 

users.pop()
console.log(users)

s
//배열에서 값으로 인덱스 구하기
console.log(users.indexOf("sumin"))

users[users.indexOf("sumin")] = "SUMIN"
console.log(users)


//데이터 형식 검증 (array 일 경우, true )
console.log(Array.isArray(users))

//자르기 
users.splice(0,1)
console.log(users)


console.log(...users) // 배열의 값만 출력 됨. 흠..