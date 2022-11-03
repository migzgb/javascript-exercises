const repeatString = function( str, times) {
    newStr = "";
    if (times < 0) {
        return "ERROR"
    }

    else if (times == 0) {
        return newStr
    }

    else {
        for (let i = 0; i < times; i++) {
            newStr += str;
        }
        return newStr
    }
};

// Do not edit below this line
module.exports = repeatString;
