
var check = require("./array_contains_string")

function Arraysum(a, b) { 
    return a +b; 
} 



function array_sum(ar1){
if(check.array_contains_string(ar1)){
   
return "Array elements should be a number"
}

else{

return  ar1.reduce(Arraysum)
}


}

module.exports ={
    array_sum : array_sum
}