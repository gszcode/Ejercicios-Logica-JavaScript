/**
  Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

const numerosImparesYPares = (array = undefined) => {
  if (array === undefined) console.warn('El array esta vacio!');
  if (array.length === 0) console.error('El array debe tener elementos');
  if (!(array instanceof Array)) console.error('El valor no es un array');

  const pares = []
  const impares = []
  const objeto = {};

  for (let numero of array) {
    if (numero % 2 === 0) pares.push(numero);
    else if (numero % 2 !== 0) impares.push(numero);
  }

  objeto.pares = pares;
  objeto.impares = impares;

  return objeto;
}

console.log(
  numerosImparesYPares([1,2,3,4,5,6,7,8,9,0])
);