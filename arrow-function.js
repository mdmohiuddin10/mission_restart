// function decleration
// function add(num1, num2){
//     return num1 + num2;
// }


// function expression
// const additon = function(num1, num2){
//     return num1 + num2
// }

// const result = additon(15, 76)
// console.log(result);

// arrow function
const sum = (num1, num2) => num1 + num2;
console.log(sum(120,225));

const multiplay = (a, b) => a * b;

const mult = multiplay(10,20)
console.log(mult);

const isFirstBig = (x, y) => x > y;
const isBig = isFirstBig(70,700)
console.log(isBig);

// multi line Arrow Function
const doMath = (x, y) => {
    const makeDouble = x * 5;
    const againDouble = y * 4;
    const result = makeDouble + againDouble;
    return result;
}

const math= doMath(50,20)
console.log(math);