const e = require('express');
const movingAverage = require('./movingAverage');

describe('movingAverage', () => {
  test('movingAverage([10,20,30,40], 2) → [15.00, 25.00, 35.00]', () => {
    expect(movingAverage([10, 20, 30, 40], 2)).toEqual([15.00, 25.00, 35.00]);
  });

  test('movingAverage([1,2,3], 3) → [2.00]', () => {
    expect(movingAverage([1, 2, 3], 3)).toEqual([2.00]);
  });

  test('window debe ser un entero', () => {
    expect(() => movingAverage([1, 2, 3], 2.5)).toThrow(TypeError);
    expect(() => movingAverage([1, 2, 3], '2')).toThrow(TypeError);
  });

  test('lanza TypeError si el array de series no es valido', () => {
    expect(() => movingAverage([1, '2', 3], 2)).toThrow(TypeError);
  });

  test('lanza RangeError si la ventana está fuera de rango', () => {
    expect(() => movingAverage([1, 2, 3], 1)).toThrow(RangeError);
    expect(() => movingAverage([1, 2, 3], 4)).toThrow(RangeError);
  });
});