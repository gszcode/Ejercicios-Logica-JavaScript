/*
  Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/

const eliminarDuplicados = (array = undefined) => {
  if (array === undefined) console.warn('El array esta vacio!');
  if (array.length === 0) console.warn('Deber llenar el array!');
  if (!(array instanceof Array)) console.error('El valor ingresado NO es un array!');

  let sinDobles = new Set(array);
  let sinDuplicados = Array.from(sinDobles);

  return console.log(`Este en el nuevo array sin valores duplicados ${sinDuplicados}`);
}

eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);