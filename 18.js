/*
  Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/

const letras = (cadena = undefined) => {
  if (cadena === undefined) console.warn('Cadena esta vacia, ingresa un texto!');
  if (typeof cadena !== 'string') console.error('Valor ingresado invalido!');

  let vocales = 0; 
  let consonantes = 0;
  
  for (let letra of cadena) {
    if (/[aeiouáéíóúAEIOUÁÉÍÓÚ]/.test(letra)){
      vocales++;
    } else if (letra !== ' ') {
      consonantes += 1;
    }
  }

  return console.log(`En la cadena hay ${vocales} vocales y ${consonantes} consonantes`);
}

letras('Hola Mundo');