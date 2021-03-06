const { arrays_same_elements } =  require('../function/array_same_elements');
const {array_contains_string} = require('../function/array_contains_string');
const {array_contains_number} = require('../function/array_contains_number');
const { array_max } =  require('../function/array_max');
const { array_min } =  require('../function/array_min');
const { array_reverse } =  require('../function/array_reverse');
const { array_sum } =  require('../function/array_sum');
const {array_concat} = require('../function/array_concat');
const {array_adding_element_inbetween} = require('../function/array_adding_element_inbetween')
const {array_with_keys} = require('../function/array_with_keys');

 let ar =  ["3","4","6"];
 var ar1 =["7","9","4"];
 var a =[3,4,6,9];
 var element = "1000"


 
//  console.log(array_contains_string(ar))

 test('array_contains_string', () => expect(array_contains_string(ar)).toBe(true) );
 test('array_contains_number', () => expect(array_contains_number(ar)).toBe(false) );
 test('arrays_same_elements', () => expect(arrays_same_elements(ar,ar1)).toStrictEqual(["4"]) );
 test('array_reverse', () => expect(array_reverse(ar)).toStrictEqual(["6","4","3"]) );
 test('array_max', () => expect(array_max(a)).toStrictEqual(9) );
 test('array_min', () => expect(array_min(a)).toStrictEqual(3) );
 test('array_sum', () => expect(array_sum(a)).toBe(22) );
 test('array_concat', () => expect(array_concat(ar,ar1)).toStrictEqual(["3","4","6","7","9","4"]));
 test('array_adding_element_inbetween', () => expect (array_adding_element_inbetween(ar,element,ar1)).toStrictEqual(["3","4","6","1000","7","9","4"]));
 test('array_with_keys', () => expect(array_with_keys(ar)).toStrictEqual([[0, "3"], [1, "4"], [2, "6"]]));




