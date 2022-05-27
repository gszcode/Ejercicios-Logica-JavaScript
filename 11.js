/*
  Programa una función que calcule el factorial de un número
  (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos
  desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

const factorial = (numero) => {
  if (numero <= 0) console.warn('Ingrese un numero');
  if (typeof numero !== 'number') console.warn('No es un numero');

  let numeroFactorial = 1;

  for (let i = 1; i <= numero; i++){
    numeroFactorial *= i;
  }

  return numeroFactorial;
}

console.log(
  factorial(5)
);