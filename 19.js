/*
  Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/

const validarNombre = (nombre = undefined) => {
  if (nombre === undefined) console.warn('Ingresa un nombre!');
  if (nombre === ' ') console.warn('El nombre esta vacio!');
  if (typeof nombre !== 'string') console.error('El nombre debe ser una cadena de texto');

  let expReg = /^[A-Za-zÑnÀàÈèÌìÒòÙù\s]+$/g.test(nombre);

  return expReg ? console.log(`${nombre} es valido!`) : console.log(`${nombre} no es valido!`);
}

validarNombre('Gaby');