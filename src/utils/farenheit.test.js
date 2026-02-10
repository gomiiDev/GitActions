const e = require('express');
const toFahrenheit = require('./farenheit');

describe('toFahrenheit', () => {
  test('0°C → 32.0°F', () => {
    expect(toFahrenheit(0)).toBe(32.0);
  });

  test('100°C → 212.0°F', () => {
    expect(toFahrenheit(100)).toBe(212.0);
  });

  test('-40°C → -40.0°F', () => {
    expect(toFahrenheit(-40)).toBe(-40.0);
  });

  test('lanza TypeError si no es finito', () => {
    expect(() => toFahrenheit(null)).toThrow(TypeError);
    expect(() => toFahrenheit(NaN)).toThrow(TypeError);
  });
});