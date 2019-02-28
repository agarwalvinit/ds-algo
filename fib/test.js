// jest fib/test.js --watch or jest fib --watch
const fib = require('./index');

it('Fib function is defined', () => {
  expect(typeof fib).toEqual('function');
});


