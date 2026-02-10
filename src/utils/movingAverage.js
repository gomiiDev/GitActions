function movingAverage(series, window) {
  if (!Number.isInteger(window)) {
    throw new TypeError('window debe ser un entero');
  }

  if (window < 2 || window > series.length) {
    throw new RangeError('window fuera de rango');
  }

  if (!series.every(n => typeof n === 'number' && Number.isFinite(n))) {
    throw new TypeError('Deben ser numeros finitos');
  }

  const result = [];

  for (let i = 0; i <= series.length - window; i++) {
    const parNumerosMedia = series.slice(i, i + window);
    const media = parNumerosMedia.reduce((a, b) => a + b, 0) / window;
    result.push(Number(media.toFixed(2)));
  }

  return result;
}

module.exports = movingAverage;