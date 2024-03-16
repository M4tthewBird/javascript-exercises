const removeFromArray = function(numberArray, ...num) {

    let newArray = [];

    for (let i = 0; i < numberArray.length; i++) {
        if (!num.includes(numberArray[i])) {
            newArray.push(numberArray[i])
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
