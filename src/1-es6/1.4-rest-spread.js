let fruits = ['Apple', 'Banana']

let [fruitA, fruitB] = fruits
console.log(fruitA)
console.log(fruitB)


let person = {
    namePerson: 'John',
    age: 30
}

let { namePerson, age } = person
console.log(namePerson, age)

// lap: continue with spread operator
let fruits2 = ['Apple', 'Banana', 'Orange']
let [fruitA2, fruitB2, ...others] = fruits2
console.log(fruitA2)
console.log(fruitB2)
console.log(others)


let person2 = {
    namePerson: 'John',
    age: 30,
    country: 'MX'
}

let data = {
    ...person2,
    job: 'Developer'
}

console.log(data)

// lap: continue with rest operator
let person3 = {
    namePerson: 'Gina',
    age: 23,
    country: 'COL',
    job: 'Developer',
    height: 1.65
}
let { namePerson, age, ...rest } = person3
console.log(namePerson, age, rest)
console.log(rest.height)




let default1 = {
    name: "Mr. Michi",
    food: "Pescado"
}


let default2 = {
    age: 12,
    color: "Blanco"
}

function solution(obj1 = default1, obj2 = default2) {
    return { ...obj1, ...obj2 }
}


console.log(solution({
    name: "Bigotes",
    food: "Pollito"
}))



