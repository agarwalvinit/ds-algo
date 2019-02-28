const steps = (n, row = 0, res = '') => {
    if(n === row) return;
    if(res.length === n) {
        console.log(res);
        return steps(n, row+1);
    }
    if(res.length <= row)
        res += '#';
    else
        res += ' ';

    steps(n, row, res);
}

module.exports = steps;

// const steps = (n) => {
//     for (let i = 1; i <= n; i++) {
//         let res = '';
//         for (let j = 0; j < i; j++) {
//             res += '#';
//         }
//         for (let k = i; k < n; k++) {
//             res += ' ';
//         }
//         console.log(res);
//     }
// };

// const steps = (n) => {
//     for (let i = 0; i < n; i++) {
//         let res = '';
//         for (let j = 0; j < n; j++) {
//             if(j <= i)
//                 res += '#';
//             else
//                 res += ' ';
//         }
//         console.log(res);
//     }
// };