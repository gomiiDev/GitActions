function toFahrenheit(numberCelsius) {
  if (typeof numberCelsius !== 'number' || !Number.isFinite(numberCelsius)) {
    throw new TypeError('Validar numero finito');
  }

  const result = (numberCelsius * 9/5) + 32;
  return Number(result.toFixed(1));
}

module.exports = toFahrenheit;