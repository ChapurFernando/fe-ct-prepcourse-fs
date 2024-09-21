function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  res = 0;
  for (var i = 1; i <= n; i++) {
    res = res + i;
    if (res > 100) break;
  }
  return res;
}

module.exports = sumarHastaNConBreak;
