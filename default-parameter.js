
//(num1, num2) = parameter
// function sum(num1, num2){
//     const total = num1 + num2;
//     console.log(total);
// }

// sum(20,50) //arguments

function sum(num1, num2=20){
    const total = num1 + num2;
    // console.log(total);
}

sum(50) 

function multiplay(num1, num2=20){
    const result = num1 * num2;
    console.log(result);
}

multiplay(50) 

function fullName(first, last= ''){
    const name = first + '' + last;
    console.log(name);
}

fullName("Eshan")



/**
 * some thumb rule for default value, may be usefull
 * add, substract --> 0
 * multiplay -- > 1
 * string --- > ''
 * array = []
 * 
 * object = {}
 */