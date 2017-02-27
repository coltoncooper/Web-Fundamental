function numbersOnly(array){
    var result=[];
    for(var i=0; i<array.length; i++){
        if(typeof array[i] === "number"){
            result.push(array[i])
        }
    }return result;

}

console.log(numbersOnly([1, "apple", -3, "orange", 0.5]));