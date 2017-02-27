function calculateReward(numOfDays) {
    var sum = 0.01;
    for (var i = 1; i < numOfDays; i++) {
        sum = sum * 2
    }
    return sum;

}
console.log("After 30 days servant will have $" + calculateReward(30))

function calculateNumOfDays(amount){
    for (var i = 1; i < Infinity; i++) {
        var sum = calculateReward(i);
        if (sum >= amount) {
            return i;
            break;
        }
    }
}
console.log("Servant needs to wait "+ calculateNumOfDays(10000) + " days to have $10000")
console.log("Servant needs to wait "+ calculateNumOfDays(1000000000) + " days to have $1000000000")
console.log("Servant needs to wait "+ calculateNumOfDays(Infinity) + " days to have Infinity")
