const person = {
    name: 'Mohiuddin',
    age: 25,
    profession: 'Software Developer',
    isMarried: false
};


// json

const personJson = JSON.stringify(person)
// console.log(personJson);

// object

const personParse = JSON.parse(personJson)
console.log(personParse);