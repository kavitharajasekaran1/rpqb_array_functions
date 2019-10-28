**var ar =  ["3","4","6"];**
**var ar1 =["7","9","4"];**
**var a =[3,4,6,9];**
**var element = "10000"**

**console.log(array_contains_string(ar)) // result is true**

**console.log(array_contains_number(ar))  // result is false**

**console.log(arrays_same_elements(ar,ar1)) // result is equal to ['4']**

**console.log(array_reverse(ar)) // result is equal to [ '6', '4', '3' ]**

**console.log(array_max(a)) //result is equal to 9**

**console.log(array_min(a)) //result is equal to 3**

**console.log(array_sum(a)) // result is equal to 22**

**console.log(array_concat(ar,ar1)) // expected restul is ["3","4","6","7","9","4"]**

**console.log(array_adding_element_inbetween(ar,element,ar1))   //restult is equal to ["3","4","6","10000","7","9","4"]**

**console.log(array_with_keys(ar))  // result is [[0,"3],[1,"4],[2,"6"]]**

| function                            | Result              |
| --------------------------------    | -------------       |
| array_contains_string(ar)           | true                |
| array_contains_number(ar)           | false               |
| arrays_same_elements(ar,ar1)        | ['4']               | 
| array_reverse(ar)                   |  [ '6', '4', '3' ]  | 
| array_max(a)                        | 9                   | 
| array_min(a)                        |  3                  | 
| array_sum(a)                        | 22                  | 
| array_concat(ar,ar1)                |  ["3","4","6","7","9","4"] | 
| array_adding_element_inbetween(ar,element,ar1) | ["3","4","6","10000","7","9","4"]        |               
| array_with_keys(ar)                   | [[0,"3],[1,"4],[2,"6"]]  | 
