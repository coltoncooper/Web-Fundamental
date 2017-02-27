function slotMachine(quarterCount){
    for(var i=0; i<quarterCount; i++){
        console.log (didWin())
    }

}
function didWin(){
    var result = generateRandomIntNum(1, 100);
    if (result==100){
        return true;
    }else{
        return false;
    }

}
function generateRandomIntNum(min, max){
    var ran = min + (Math.random() * ((max - min) + 1))
    ran = Math.floor(ran)

    return ran;
}
slotMachine(100)

