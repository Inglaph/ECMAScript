class user { // This is a class.
    //methods
    greeting() {
        return 'Hello';
    }
}

const user1 = new user(); // This is an instance of the class user.

console.log(user1.greeting());




class user { // This is a class.
    constructor(name = 'usuario', age = 37, country = 'MX') { // This is a constructor.
        this.name = name,
            this.age = age,
            this.country = country
    }

    speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

}

// const luis = new user(); // This is an instance of the class user.
// const miguel = new user('Miguel')
// console.log(luis.greeting())
// console.log(miguel.greeting())




class animal {
    // constructor
    constructor(name, age) {
        this.name = name,
            this.age = age
    }

    // method
    speak() {
        return (`Hello`)
    }

    greeting() {
        // console.log(this.name)
        return `${this.speak()} ${this.name}`
    }

    get uAge() {
        return this.age
    }

    set uAge(newAge) {
        this.age = newAge
    }
}


const animal1 = new animal('Lion', 3);
console.log(animal1.uAge)
animal1.uAge = 4
console.log(animal1.uAge)
console.log(animal1.greeting());
const miguel = new animal('Miguel')
console.log(miguel.greeting())