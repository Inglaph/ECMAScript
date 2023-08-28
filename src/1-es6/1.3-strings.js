let namePerson = 'Luis'
let lastName = 'Posada'

// lap: classic syntax
let nameAndLastName = namePerson + ' ' + lastName
console.log(nameAndLastName)


// lap: ES6 syntax
let fullName = `${namePerson} ${lastName}`
console.log(fullName)


let lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \n' + 'Linea dos \n' + 'Linea 3'
console.log(lorem)

function newUser(name, age, country) {
    var name = name || 'Luis';
    var age = age || '27';
    var country = country || 'COL';
    console.log(name, age, country)
}

newUser()
newUser('XXXX', '47', 'MX')


function newUser(name = 'Luis', age = '27', country = 'COL') {
    console.log(name, age, country)
}

newUser()
newUser('XXXX', '47', 'MX')




// function newUser (name, lastName, country, age, isDeveloper) {
//     return {
//         name,
//         lastName,
//         country,
//         age,
//         isDeveloper
//     }
// }