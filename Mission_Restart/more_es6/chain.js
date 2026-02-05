const student = {
    name: 'Rafi',
    1: 50,
    family: {
        title: 'bhuiyan',
        mother: {
            name: 'noor jahan',
            age: 45
        }
    },
   'home-address': 'Dhaka',
    marks: 500
}

console.log(student.name);
// console.log(student.family.title);
console.log(student.family.mother?.age);