const students = [
    {id: 1, name: 'abul', Mark: 500},
    {id: 2, name: 'aul', Mark: 505},
    {id: 3, name: 'aeul', Mark: 580},
    {id: 4, name: 'abut', Mark: 590}
];

const names = students.map(name => name.name)
console.log(names)

const goodStudents = students.filter(student => student.Mark > 510);
const goodStudent = students.find(student => student.Mark > 510);
// console.log(goodStudents)
console.log(goodStudent)