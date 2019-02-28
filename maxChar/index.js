const maxChar = (str) => {
    const result = {};
    let max = 0;
    let maxChr = '';
    for (let i of str) {
        if (!result[i])
            result[i] = 0;
        result[i]++;
    }
    for(let key in result) {
        if (result[key] > max) {
            max = result[key];
            maxChr = key;
        }
    }
    return maxChr;
};

module.exports = maxChar;