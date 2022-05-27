/*
  Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/

const elevarAlCuadrado = (array = undefined) => {
  if (array === undefined) console.warn('El array esta vacio');
  if (array.length <= 0) console.error('Debes llenar el array');
  if (!(array instanceof Array)) console.error('El valor no es un Array');

  let numerosElevados = [];

  for (let i = 0; i < array.length; i++){
    if (typeof array[i] !== 'number') console.error(`El valor ${array[i]} NO es un numero`);

    numerosElevados.push(array[i] * array[i]);
  }

  return console.log(`Números al cuadrado: ${numerosElevados}`);
}

elevarAlCuadrado([1, 4, 5]);