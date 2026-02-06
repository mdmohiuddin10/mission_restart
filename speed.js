// speed 
const numbers = [52, 512,852];
console.log(numbers);
console.log(...numbers);

// const max = Math.max(21, 58, 25, 2565, 84);
const max = Math.max(...numbers)
console.log(max);

// const first = [1, 2, 3, 4, 5];
// const second = first
// second.push(6)
// console.log(first);


const first = [1, 2, 3, 4, 5];
const second = [...first]
const third = [...first, 87, 85, 96]
second.push(6)
// console.log(first);
// console.log(third);

const ages = [85,45,45]
const prices = [566,15544,2222];
const all = [...ages, 0, ...prices]
console.log(all);

const person = {name: 'Eshan', age: 18};
const employe = {designation: 'Dev', ...person};
console.log(employe);
