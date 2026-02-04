// for of for Array

const numbers = [12,25,52,366,225,8]
for (const num of numbers){
    console.log(num);
}

// for in for object
const employe= {
    name: "Mohi",
    designation: 'DEv',
    salary: 20000,
    experience: 2,
    age: 25
}

// for (const key in employe){
//     const value = employe[key]
//     console.log(value);
// }

const keys = Object.keys(employe)
for(const key of keys){
    const value = employe[key]
    console.log(value);
}