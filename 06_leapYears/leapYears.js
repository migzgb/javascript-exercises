const leapYears = function(year) {
    
    //century years computation
    if (year % 100 == 0 && year % 400 == 0) {
        return true
    }
    
    // non century years computation
    else if ( year % 100 != 0 && year % 4 == 0) {
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
