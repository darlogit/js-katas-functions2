console.log("hi");

// function add(arr){
//     let x = 0;
//     for(let y= 0; y<arr.length; y++) {
//         x = x + arr[y];
//     }
//     return x;  
// }
// let returnedVal = add([2,4,]);
// console.log(returnedVal);



console.log("addition");

function add (x, y){
let result = x + y;
return result;
};
console.log (add(2, 4));
console.log (add(7, 7))


console.log("multiplication");
function multiply(x, y) {
let result = 0;
let counter = 0;
while (counter < y){
counter = counter +1;
result = add (result, x);  
};
return result;
};
console.log (multiply(9, 9));
console.log(multiply(7, 7));

console.log ("power");
function power(x, y){
let result = 1;
let counter = 0;
while (counter < y){
counter = counter +1;
result = multiply (result, x);
};
return result;
};
console.log (power(2, 4));
console.log (power(4, 6));

console.log ("factorial")
function factorial (x){
let result = 1;
let counter = 0;
while(counter < x){
result = multiply(result, x-counter);
counter = counter +1;
};
return result;
};
console.log(factorial (9));
console.log(factorial (5));

console.log ("fibonacci")
function fibonacci (x){
let array = [0, 1];
let index = 0;
while (index < x){
array.push(array[index] + array[index +1]);
index = index +1;
};
return array [x - 1];
};
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(8));
