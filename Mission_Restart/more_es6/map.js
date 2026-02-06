const numbers = [4,8,2,3,5];

// const double = [];
// for(const num of numbers){
//     const result = num * 2;
//     double.push(result)
// }

// const doubleIt = x => x * 2;
// const double = numbers.map(doubleIt)

const double = numbers.map(x => x * 2);

// console.log(double);

const fiveTimes = numbers.map(num => num * 5);
const squared = numbers.map(num => num * num)

// console.log(fiveTimes);
// console.log(squared);

const friends = ['abul', 'babul', 'kabul', 'Sabul'];
const namesLength = friends.map(name => name.length);

const firstLetter = friends.map(name => name[0].toUpperCase());
const result = numbers.map((num, index) => {
    console.log(num * index);
})


// console.log(namesLength);
// console.log(firstLetter);