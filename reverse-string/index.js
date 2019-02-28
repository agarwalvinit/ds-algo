const reverseString = (str) => {
    return str.split('').reduce((prev, current) => current + prev, '');
};

// const reverseString = (str) => {
//     const newStr = str.split('');
//     let result = '';
//     for(let i = newStr.length - 1; i >= 0; i--) {
//         result += newStr[i];
//     }
//     return result;
// };

// const reverseString = (str) => {
//     let result = '';
//     for(let i of str) {
//         result = i + result;
//     }
//     return result;
// };

// const reverseString = (str) => {
//     return str.split('').reverse().join('');
// };

module.exports = reverseString;