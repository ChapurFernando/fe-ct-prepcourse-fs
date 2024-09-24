function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  return (
    resultadosTest.reduce((sum, num) => sum + num, 0) / resultadosTest.length
  );
}

module.exports = promedioResultadosTest;
