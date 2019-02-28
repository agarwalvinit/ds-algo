const rs = require('./index');

test('reverse function is defined ', () => {
    expect(typeof rs).toEqual('function');
});

test('Reverse function exists', () => {
    expect(rs).toBeDefined();
});

test('Reverse reverses the string abcd', () => {
    expect(rs('abcd')).toEqual('dcba');
});

test('Reverse reverses the string greetings!', () => {
    expect(rs('greetings!')).toEqual('!sgniteerg');
});