function takeQuarters(quarterCount, minCashOut){
    var WINNUM=77;
    var MAXREWARD=100;
    var MINREWARD=50;
    while(quarterCount > 0){
        console.log("Remaining coins #" + quarterCount)
        var ranNum =  Math.random()*100;
        ranNum = Math.floor(ranNum)
        if(ranNum == WINNUM){
            var reward = Math.floor( Math.random()*(MAXREWARD - MINREWARD) + MINREWARD);
            console.log("You win " + reward)

            quarterCount = reward + quarterCount;
            if (quarterCount < minCashOut){
                continue;
            }else{
                return quarterCount;
            }
        }
        quarterCount--;
    }
    return 0;
}
console.log(takeQuarters(100, 150));