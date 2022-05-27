/*
  Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/

const numero = (numero) =>{
  if (!numero) console.warn('Ingrese un numero');
  if (typeof numero !== 'number') console.warn('Dato incorrecto');
  
  return numero % 2 === 0 ? 'El numero es par' : 'El numero es impar';
}

console.log(
  numero(12)
);