const capitalize = (str) => {
    const arr = str.split(' ');
    let result = [];
    for(let i of arr) {
        const val = i.charAt(0).toUpperCase() + i.slice(1);
        result.push(val);
    }
    return result.join(' ');

};

module.exports = capitalize;

// const capitalize = (str) => {
//     console.log(str);
//     let result = str.charAt(0).toUpperCase();

//     for(let i = 1;i < str.length; i++) {
//         if (str.charAt(i-1) === ' ') {
//             result += str.charAt(i).toUpperCase();
//         } else {
//             result += str.charAt(i);
//         }
//     }
//     return result;
// };
