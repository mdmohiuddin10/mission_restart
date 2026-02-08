if(true){
    const data = 58;
    // console.log('inside the if block', data);
}
// console.log(data);

for (const num of [1,2,3,4]){

}
// function scope or local scope
function doMath(a, b){
    console.log(a, b);
    const sum = a + b;
    const total = sum + 10;
    console.log('calling double it', doubleIt(452));
    function doubleIt(x){
        return x * 2;
    }
}