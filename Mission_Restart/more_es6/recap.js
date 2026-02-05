// var
const tax= 5000;
let eta = 5;
eta = 3;

// default parameter
function add(num1, num2=0){

}

const student = {name: 'nayem', marks: 800}
const friends = ['babul', 'sabul', 'tabul']

// templete string
const dinamicText = `My tax: ${tax} and marks ${student.marks * 200} and has friend ${friends[2]}`
console.log(dinamicText);

const innerHTML = `
<div>
    <h1> hello friends: ${friends.length} </h1>
    <p></p>
    </div>
    `
console.log(innerHTML);

// arrow function
const add3 = (num1, num2) => num1 + num2;

// spreed operator
const newFriends = [...friends, 'Vabbil']

// destruture
const {marks} = student;

const [firstFriend] = friends;

// loop