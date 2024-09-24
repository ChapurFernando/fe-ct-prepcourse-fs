function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  var res = undefined;
  for (var num of secuencia) {
    if (num % n === 0) {
      res = num;
      break;
    }
  }
  return res;
}

module.exports = encontrarPrimerMultiploDeN;
