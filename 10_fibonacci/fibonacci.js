const fibonacci = function(num) {

    let number
    if (typeof num !== 'number') {
        number = parseInt(num)
    } else {
        number = num
    }

    if (number < 0) {
        return "OOPS"
    } else if (number == 0 ) {
        return 0
    } else {

        let firstPrev = 1;
        let secondPrev = 0;

        for (let i = 2; i <= number; i++) {
            let current = firstPrev + secondPrev;
            secondPrev = firstPrev;
            firstPrev = current;
        }

        return firstPrev;
    }

};

// Do not edit below this line
module.exports = fibonacci;
