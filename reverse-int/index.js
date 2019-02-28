const reverseInt = (val) => {
    const result = val.toString().split('').reverse().join('');
    return parseInt(result) * Math.sign(val);
};

module.exports = reverseInt;