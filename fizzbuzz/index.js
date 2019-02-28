const fizzbuzz = (n) => {
    for(let i = 1; i <= n; i++) {
        let result = i;
        if (i % 3 === 0)
            result = 'fizz';
        if (i % 5 === 0) {
            if (typeof result !== 'string')
                result = '';
            result += 'buzz';
        }
        console.log(result);
    }
};

module.exports = fizzbuzz;