var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

/* Signs you shouldn't be using map: 
A) You're not using the array it returns, and/or 
B) You're not returning a value from the callback.*/

/*
Syntax

var new_array = arr.map(function callback(currentValue[, index[, array]]) {
  // Return element for new_array
}[, thisArg])

*/
