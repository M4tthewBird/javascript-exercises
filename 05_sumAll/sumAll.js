const sumAll = function(num1, num2) {
    let sumNumber = 0;

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }

    if (num1 > num2) {
        const tempVar = num1;
        num1 = num2;
        num2 = tempVar;
    }

    for (let i = num1; i <= num2; i++) {
        sumNumber += i;
    }
    
    return sumNumber
};

// Do not edit below this line
module.exports = sumAll;
