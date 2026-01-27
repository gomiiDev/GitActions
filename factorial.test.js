const e = require('express');
const factorial = require('./factorial');

test('Factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(120);
});