const removeFromArray = function(removeFrom, ...args) {
    //remove values from array using splice method
    for (a = 0; a < args.length; a++) {
        for (var i = 0; i < removeFrom.length; i++) {
            if (removeFrom[i] == args[a] &&
                typeof removeFrom[i] == typeof args[a]
                ) {
                removeFrom.splice(i,1);
            }
        }
    }
    return removeFrom
};

// Do not edit below this line
module.exports = removeFromArray;
