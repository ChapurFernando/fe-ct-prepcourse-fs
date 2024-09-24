function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var temp = array[0];
  for (var element of array) {
    if (temp !== element) return false;
  }
  return true;
}

module.exports = todosIguales;
