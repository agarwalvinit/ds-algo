const rSteps = (n, row = 0, res = '') => {
    if (row === n) {
        return;
    }
    if (res.length === n) {
        console.log(res);
        return rSteps(n, ++row, res = '');
    }
    if (res.length >= n - row - 1)
        res += '#';
    else
        res += ' ';
    rSteps(n, row, res);
}

module.exports = rSteps;

// const rSteps = (n) => {
//     for (let i=n; i>0; i--) {
//         let res = '';
//         for (let j=0; j<n; j++) {
//             if (j >= i-1) {
//                 res += '#';
//             } else {
//                 res += ' '
//             }
//         }
//         console.log(res);
//     }
// };

// const rSteps = (n, row = 0, res = '') => {
//     if (row === n) {
//         return;
//     }
//     if (res.length === n) {
//         console.log(res);
//         return rSteps(n, ++row, res = '');
//     }
//     if (res.length >= n - row - 1)
//         res += '#';
//     else
//         res += ' ';
//     rSteps(n, row, res);
// }


// rSteps(6)
