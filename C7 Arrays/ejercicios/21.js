function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var mesesBuscados = ["Enero", "Marzo", "Noviembre"];
  var newArray = array.filter((element) => mesesBuscados.includes(element));
  if (newArray.length === 3) return newArray;
  return "No se encontraron los meses pedidos";
}

module.exports = mesesDelAño;
