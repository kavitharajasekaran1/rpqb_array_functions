

function arrays_same_elements(ar1,ar2){
  var ar3 =[]
if(ar1.length == ar2.length){
   ar1.forEach(function(element1){
      ar2.forEach(function(element) {
   if(element1 == element){
     ar3.push(element1)
   }
  })
  })
  return ar3;
}

else{
return "Arrays length should be same"
}
}

module.exports ={
    arrays_same_elements
}