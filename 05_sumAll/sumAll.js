const sumAll = function(x,y) {
    let finalSum = 0;
    let smallerNum;
    let largerNum;
    //check which one is smaller or bigger
    if (x <= y) {
        smallerNum = x;
        largerNum = y;
    }
    else {
        smallerNum = y;
        largerNum = x;
    }

    // sum proper
    if (x < 0 || 
        y < 0 || 
        typeof x != "number" || 
        typeof y != "number" ) {
        return "ERROR"
    }

    else {
        for (i = smallerNum; i < largerNum+1 ; i++) {
            finalSum += i;
        }
        return finalSum
    }
};

// Do not edit below this line
module.exports = sumAll;
