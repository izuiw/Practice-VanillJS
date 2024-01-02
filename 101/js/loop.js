//배열 선언시 가급적 복수형 으로 선언 -> 가독성 문제?
const animals = [
    {name : "monky", size : "medium", isAggressive: false, weight : 20},
    {name : "lion", size : "big", isAggressive: true, weight : 56},
    {name : "dog", size : "medium", isAggressive: false, weight : 13},
    {name : "cat", size : "small", isAggressive: false, weight : 7}    
]

// old - for
for(let i=0; i<animals.length; i++) {
    if (i==0) {
        console.log("old-for \n")
    }
    console.log(animals[i])
}

//now - for 
for(let animal of animals) {
    console.log("now-for \n")
    console.log(animal.name)
}


//forEach 
animals.forEach(function(index, animal){
    console.log(animal, index)
})

//map 재정의할 떄 ( == return 시키는) 사용하는 반복문
const map_animal = animals.map(function(animal){
    return `${animal.name} is ${animal.isAggressive}`  
})
console.log(map_animal) // ->  ['monky is false', 'lion is true', 'dog is false', 'cat is false']

    //화살표 함수 표현식으로 map 
const map_animal_a = animals.map(animal=>animal.size)
console.log(map_animal_a) // -> ['medium', 'big', 'medium', 'small']


// filter 필터 


const filter_animal = animals.filter(animal => {
    return animal.size === "medium";
})

console.log(filter_animal)
    //0:{name: 'monky', size: 'medium', isAggressive: false, weight: 20}
    //1:{name: 'dog', size: 'medium', isAggressive: false, weight: 13}

const filter_animal_a = animals.filter(animal=>animal.size === 'big')
console.log(filter_animal_a)
    //0:{name: 'lion', size: 'big', isAggressive: true, weight: 56}


// reduce 로 배열의 합의 구하는 빙밥 

const reduce_animal = animals.reduce((acc,curr)=> {
    return acc + curr.weight
},0) // 0 : 초기화
console.log(reduce_animal)
    // -> 96