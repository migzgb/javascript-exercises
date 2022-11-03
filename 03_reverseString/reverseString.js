const reverseString = function(str) {
    finalStr = "";
    //split str into array
    let splitStr = str.split('');
    //concatenate array starting from the last element
    for  (let i = splitStr.length - 1; i >= 0; i--) {
        finalStr += splitStr[i];
    }

    //return new concatenated str
    return finalStr
};

// Do not edit below this line
module.exports = reverseString;
