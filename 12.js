/*
  Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1)
  o no, pe. miFuncion(7) devolverá true.
*/

const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) console.warn('No ingresaste un numero');
  if (typeof numero !== 'number') console.warn('El valor ingresado NO es un numero');
  if (numero === 0) console.warn('El numero NO puede ser 0');
  if (numero === 1) console.warn('El numero NO puede ser 1');
  if (Math.sign(numero) === -1) console.warn('El numero NO puede ser negativo');

  let divisible = false;

  for(let i = 2; i < numero; i++){
    if((numero % 2) === 0){
      divisible = true;
      break;
    }
  }

  return divisible ? 'El numero NO es primo' : 'El numero es primo';
}

console.log(
  numeroPrimo(20)
);