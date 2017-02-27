/**
 * Created by edwin146 on 1/9/17.
 */
// Page 50


function removeBlanks(inputString){
    result ="";
    for(var i=0; i<inputString.length; i++){
        if(inputString[i] != " "){
            result = result + inputString[i]
        }
    }return result;
}
console.log(removeBlanks(" Pl ayTha tF u nkym usi c "))



function getDigit(inputString){
    result="";
    for(var i=0; i<inputString.length; i++){
        if(inputString[i] in ["0","1","2","3","4","5","6","7","8","9"]){
            result = result + inputString[i];
        }

    }console.log (result);
}
getDigit("1111iihjdkuejlk99yj200")


function getAcronym(inputSentence){
    result = "";
    var sentenceArray = inputSentence.split(" ")

    for(var i=0; i<sentenceArray.length; i++){
        // if(sentenceArray[i] != "" && sentenceArray[i] !=".")
        if(sentenceArray.length > 1) {
            result = result + sentenceArray[i][0]
        }

    }return result.toUpperCase();


}
// console.log(getAcronym(" there's no free lunch - gotta pay yer way."))
console.log(getAcronym("Live from New York, it's Saturday Night!"))

function countNonSpaces(inputString){
    result="";
    for(var i=0; i<inputString.length; i++){
        if(inputString[i] !=" "){
            result = result + inputString[i]
        }


    }console.log(result.length)

}
countNonSpaces("Honey pie, you are driving me crazy")

function removeShorterString(stringArray, valueLength){
    result=[];
    for(var i=0;i<stringArray.length; i++){
        if(stringArray[i].length > valueLength){
            result.push(stringArray[i])
        }

    }return result;
}
console.log(removeShorterString(["grape","apple","banana","orange","bee"],4))