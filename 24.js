/*
  Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

const numerosAscYDes = (array = undefined) => {
  if (array === undefined) console.warn('El array esta vacio!');
  if (array.length === 0) console.error('El array debe tener elementos');
  if (!(array instanceof Array)) console.error('El valor no es un array');

  const objeto = {};
  let asc = [];
  let des = [];

  asc = array.map(num => num).sort();
  des = array.map(num => num).sort().reverse();

  objeto.asc = asc;
  objeto.des = des;

  return objeto;
}

console.log(
  numerosAscYDes([7, 5, 7, 8, 6])
);