'use strict'

let input = [[3, 5, 6], [7, 8, 9, [1, 10, 12]], 5, 2, 1];

function sameLevel(arr){
   return arr.reduce((data, value) => Array.isArray(value) ? data.concat(sameLevel(value)) : data.concat(value), []);
}
input = sameLevel(input)
console.log('Res ', input);

/* Explaining the code

  With reduce method I'll remove and flat the value of the arrays at
  the main level, after that I check if the result cotains an array with ternary operator
  if yes I apply again the sameLevel function, if not just return the result

*/
