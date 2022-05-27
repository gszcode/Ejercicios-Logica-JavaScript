/*
  Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

const obtenerPromedio = (array = undefined) => {
  if (array === undefined) console.warn('El array esta vacio!');
  if (array.length === 0) console.warn('Deber llenar el array!');
  if (!(array instanceof Array)) console.error('El valor ingresado NO es un array!');

  let suma = 0;
  array.forEach(numero => suma += numero);

  return console.log(`El promedio de los números ingresados es ${suma / array.length}`);
}

obtenerPromedio([9,8,7,6,5,4,3,2,1,0]);