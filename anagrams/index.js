const anagram  = (stringA, stringB) => {
    const a = CreateMap(stringA);
    const b = CreateMap(stringB);
    if (Object.keys(a).length !== Object.keys(b).length)
        return false;
    for (let i in a) {
        if (b[i] !== a[i]) {
            return false;
        }
    }
    return true;
}

function CreateMap(str) {
    const result = {};
    for(let i of str.replace(/[^\w]/g, '').toLowerCase()) {
        result[i] = result[i] + 1 || 1
    }
    return result;
}

module.exports = anagram;

// const anagram  = (stringA, stringB) => {
//     return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//     return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }