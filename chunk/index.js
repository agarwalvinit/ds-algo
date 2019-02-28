const chunk = (arr, size) => {
    const result = [];
    let index = 0;
    while(index < arr.length) {
        const len = arr.length;
        const newArr = arr.slice(index, index + size);
        index += size;
        result.push(newArr);
    }
    return result;
};

// Using Splice
// const chunk = (arr, size) => {
//     const result = [];
//     while(arr.length) {
//         const len = arr.length;
//         const num = len > size ? size : len;
//         const newArr = arr.splice(0, num);
//         result.push(newArr);
//     }
//     return result;
// };

// const chunk = (arr, size) => {
//     let result = [];
//     for(let val of arr) {
//         const last = result[result.length - 1];
//         if(!last || last.length === size) {
//             result.push([val]);
//         } else {
//             last.push(val);
//         }
//     }
//     return result;
// };

// const chunk = (arr, size) => {
//     let result = [];
//     let newArr = [];
//     for(let val = 0; val < arr.length; val++) {
//         newArr.push(arr[val]);
//         if (newArr.length === size || (val === arr.length -1)) {
//             result.push(newArr);
//             newArr = [];
//         }
//     }
//     return result;
// };

module.exports = chunk;