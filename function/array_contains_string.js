

function array_contains_string(ar){
    var ar2 =[];
ar.forEach(function(element){
   ar2.push(typeof(element))
})
if(ar2.includes("string")){
return true
}
else{
  return false
}
}

module.exports ={
    array_contains_string
}