function getAcro(sentence){
    var result="";
    var newSentence = sentence.split(" ");
    for(var i=0; i<newSentence.length; i++){
        result = result + newSentence[i][0];
    }return result.toUpperCase();
}
console.log(getAcro("This is the coding dojo"))