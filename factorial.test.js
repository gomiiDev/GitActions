const e = require('express');
const factorial = require('./factorial');

test('Factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(120);
});

test('Factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
}); 