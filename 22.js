/*
  Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/

const numeroMasAltoYMasBajo = (array) => {
  if (array === undefined) console.warn('El array esta vacio');
  if (array.length === 0) console.error('Debes llenar el array');
  if (!(array instanceof Array)) console.error('El valor no es un Array');

  let numeroMenor = 0;
  let numeroMayor = 0;
  let numeroMayorYMenor = [];
  
  for (let num of array){
    if (num < numeroMenor) {
      numeroMenor = num;
    }

    if (num > numeroMayor) {
      numeroMayor = num;
    }
  }

  numeroMayorYMenor.push(numeroMayor, numeroMenor);

  return console.log(`Los números menor y mayor son: ${numeroMayorYMenor}`);
}

numeroMasAltoYMasBajo([1, 4, 5, 99, -60]);
