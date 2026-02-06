// const porm = ' amm pata jora jora \n' +
// 'marbo chabok';
// console.log(porm);

const porm = `amm pata jora jora
marbo chabok chorbe gora
ore amr pagla gora`
console.log(porm);


function sum(num1, num2=20){
    const result = num1 + num2;
    // const output = 'sum of ' + num1 + 'and' + num2 + 'is equal to ' + result;
    const output = `sum of ${num1} and ${num2} is equal to ${result}`
    console.log(output);
}

sum(50) 

const price = 1000
const discountedPrice = `discounted price of ${price} after 20% discount is ${price * 0.8}`;
console.log(discountedPrice);
