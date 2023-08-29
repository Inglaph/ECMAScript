// Generators
function* iterate(array) {
    for (let value of array) {
        yield value;
    }

}

const ej = iterate(['Oscar', 'David', 'Ana', 'Daniel']);

console.log(ej.next().value)
console.log(ej.next().value)
console.log(ej.next().value)


// Generator running indefinitely

function* iterate2() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

const ej3 = iterate2();

console.log(ej3.next().value)
console.log(ej3.next().value)
console.log(ej3.next().value)
console.log(ej3.next().value)
console.log(ej3.next().value)
console.log(ej3.next().value)
console.log(ej3.next().value)
console.log(ej3.next().value)
console.log(ej3.next().value)