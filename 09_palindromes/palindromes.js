const palindromes = function (word) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';


    const lowerWord = word
        .toLowerCase()
        .split("")
        .filter((character) => alphanumerical.includes(character))
        .join('');

    const reversedWord = lowerWord.split("").reverse().join("")

    return lowerWord === reversedWord
};

// Do not edit below this line
module.exports = palindromes;
