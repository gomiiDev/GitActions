const e = require('express');
const toCelsius = require('./celsius');

describe('toCelsius', () => {
  test('32°F → 0.0°C', () => {
    expect(toCelsius(32)).toBe(0.0);
  });

  test('-40°F → -40.0°C', () => {
    expect(toCelsius(-40)).toBe(-40.0);
  });

  test('lanza TypeError si no es finito', () => {
    expect(() => toCelsius('32')).toThrow(TypeError);
    expect(() => toCelsius(Infinity)).toThrow(TypeError);
  });
});