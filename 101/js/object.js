//Object 
 // 배열과는 구분되어 이해해야함. `key`와 `value` 한 쌍으로 이루어져 있음 
 // json 구조 같은 것 같은데.. Object 와는 다름

 const animal = {
    name : "dog",
    weight : 10, 
    age : 6,
    food : ["banana", "grape", "nuts"],
    location : {
        country : ["kor", "eng"]
    }
 }

//clg (snippets / vs코드익스텐션)
 console.log(animal.location.country[0])


 const user = {
    name : "minji Kim",
    birth : {
        year : 1996,
        month : 3,
        day : 16
    },
    age : 27, 
    hobbies : ["game", "Watching sports", "nap"],
    job : "developer"
}

console.log(user)




 //json 
 const animal_json = JSON.stringify(animal);
 console.log(animal_json); 
 // -> {"name":"dog","weight":10,"age":6,"food":["banana","grape","nuts"],"location":{"country":["kor","eng"]}}

 console.log(JSON.parse(animal_json), JSON.parse(animal_json).name)
