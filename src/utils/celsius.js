function toCelsius(numberFarenheit) {
  if (typeof numberFarenheit !== 'number' || !Number.isFinite(numberFarenheit)) {
    throw new TypeError('Validar numero finito');
  }

  const result = (numberFarenheit - 32) * 5/9;
  return Number(result.toFixed(1));
}

module.exports = toCelsius;