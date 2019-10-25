
function array_reverse(ar1) {
    var ar2 =[]
for(i=1;i<=ar1.length;i++){
  ar2.push(ar1[ar1.length -i])
}
return ar2;
}
module.exports ={
    array_reverse : array_reverse
}

