const index = require('./index')
test('testing sum', () => {
    const result = index.sum(1,2);
    expect(result).toEqual(3);
})

test ('testing subtract', () => {
    const result = index.subtract(2,1);
    expect(result).toEqual(1);
})

test ('testing muyltiply', () => {
    const result = index.multiply(2,2);
    expect(result).toEqual(4);
})

test ('testing divide', () => {
    const result = index.divide(4,2);
    expect(result).toEqual(2);
})