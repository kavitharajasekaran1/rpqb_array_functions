
const { arrays_same_elements} =  require('./function/array_same_elements');
const {array_contains_string} = require('./function/array_contains_string');
const {array_contains_number} = require('./function/array_contains_number');
const { array_max } =  require('./function/array_max');
const { array_min } =  require('./function/array_min');
const { array_reverse } =  require('./function/array_reverse');
const { array_sum } =  require('./function/array_sum');


let ar =  ["3","4","6"];
var ar1 =["7","9","4"];
var a =[3,4,6,9]

console.log(array_contains_string(ar)) //true

console.log(array_contains_number(ar))  //false

console.log(arrays_same_elements(ar,ar1)) //['4']

console.log(array_reverse(ar)) //[ '6', '4', '3' ]

console.log(array_max(a)) //9

console.log(array_min(a)) //3

console.log(array_sum(a)) //22