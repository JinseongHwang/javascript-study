const { odd, even } = require('./var');

function checkOddOrEven(num) {
    if (num & 1) {
        return odd;
    } else {
        return even;
    }
}

// to index.js
module.exports = checkOddOrEven;