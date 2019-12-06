const convert = require('./convert');

test('add cotacao 4 and quantidade 16 to equal 64', () => {
    expect(convert.convert(4, 16)).toBe(64);
});

test('convert 200 to 200.00', () => {
    expect(convert.toMoney(200)).toBe('200.00');
})