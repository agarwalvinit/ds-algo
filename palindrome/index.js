// const palindrome = (str) => {
//     return str.split('').reduce((prev, curr) => curr + prev, '') === str;
// };

const palindrome = (str) => {
    const newStr = str.split('');
    let result = true;
    let n = newStr.length/2;
    if (newStr.length % 2 == 0) {
        n = n - 1;
    }
    for(let i = 0; i <= n; i++) {
        if (newStr[i] !== newStr[newStr.length - 1 - i]) {
            result = false;
            break;
        }
    }
    return result;
};

// const palindrome = (str) => {
//     let result = '';
//     for(let i of str) {
//         result = i + result;
//     }
//     return str === result;
// };

module.exports = palindrome;