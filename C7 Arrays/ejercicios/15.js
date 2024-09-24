function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length === 0) return 0;
  var bigNum = -Infinity;
  var indice = -1;
  for (var i = 0; i < array.length; i++) {
    if (bigNum < array[i]) {
      bigNum = array[i];
      indice = i;
    }
  }
  return indice;
}

module.exports = encontrarIndiceMayor;
