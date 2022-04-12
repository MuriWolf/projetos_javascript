numeros = [
    1, 2, 3, 4, 5
]

const conta = numeros.reduce(function(total, item) {
    return total + item
},0 )

console.log(conta)

const arrayA = [10, 20, 30, 40];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arrayA.reduce(reducer));
console.log(arrayA.reduce(reducer, 50));