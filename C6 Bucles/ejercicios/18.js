function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var res = a;
  for (var i = a + 1; i <= b; i++) {
    res = res * i;
  }
  return Math.abs(res);
}

module.exports = productoEntreNúmeros;
