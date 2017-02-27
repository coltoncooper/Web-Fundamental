var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

function getTheTime(hour, minute, period) {
    var result="It's ";

    if(minute == 5){
        result = result + "5 after "+ hour
    }else if (minute == 30){
        result = result + "half past "+ hour
    }else if(minute == 15){
        result = result + "quarter after " + hour
    }else if(minute<30){
        result = result + "just after " + hour
    }
    else{
        result = result + "almost "+ (hour+1)
    }

    result= result +" in the "

    if(period == "AM"){
        result= result + "morning"
    }
    else{
        result = result + "evening"
    }


    return result;
}
console.log(getTheTime(HOUR, MINUTE, PERIOD))