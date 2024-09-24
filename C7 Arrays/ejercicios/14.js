function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  count = 0;
  for (num of array) {
    if (num > 10) count++;
  }
  return count;
}

module.exports = contarElementosMayoresA10;
