const employe= {
    name: "Mohi",
    designation: 'DEv',
    salary: 20000,
    experience: 2,
    age: 25
}
Object.seal(employe)

delete employe.experience;
employe.salary = employe.salary + 5000;
employe.location = 'Dhaka';

console.log(employe);