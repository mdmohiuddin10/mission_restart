const student = {
    name: 'Rafi',
    1: 50,
   'home-address': 'Dhaka',
    marks: 500
}

// dot notetion
const studentName = student.name;
// const studentName5= student.'home-address';  dot notetion not allowed
// const studentName = student.1;
console.log(student);

// bracket Notetion
const studentName2 = student['1'];
console.log(studentName2);
console.log(student['home-address'])

for(const key in student){
    const value = student[key]
}