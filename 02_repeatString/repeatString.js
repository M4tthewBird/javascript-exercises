const repeatString = function(string, num) {

    let returnString = "";
    
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            returnString = returnString.concat(string)
        }
        return returnString
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
