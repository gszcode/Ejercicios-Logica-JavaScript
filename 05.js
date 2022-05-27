/*
  Programa una función que invierta las palabras de una cadena de texto, pe.
  miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

const invertir = (cadena = '') => {
  if(!cadena) {
    console.warn('La cadena esta vacia');
  } else if(typeof cadena === 'number') {
    console.error('Ingresa un string');
  } else {
    let cadenaInvertida = cadena.split('').reverse().join('');
    console.log(cadenaInvertida);
  }
};

invertir('Gabito');