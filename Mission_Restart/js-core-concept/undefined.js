/**
 * undefined ---> not defined
 */


let money;
// console.log(money);

function total2(a, b){
    console.log('value of parameter', a, b);
    // const sum = a + b;
    // console.log('total is', sum);
    if(a === undefined || b === undefined){
        return;
    }
    if(a && b){
        const sum = a+ b; 
        return sum;
    }
}

// total(2)
const result2 = total2(5);
// console.log(result2);


const phone = {
    name: 'samsung',
    price: 25000
}

// console.log(phone.price);
// console.log(phone.brand);

const banks = ['sonali', 'rupali', 'jamuna'];
console.log(banks[3]);
delete banks[1]//undefined
console.log(banks[1]);

console.log('type of undefined',typeof undefined);
console.log('type of null',typeof null);
