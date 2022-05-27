/*
  Programa una función que valide si una palabra o frase dada, es un palíndromo
  (que se lee igual en un sentido que en otro), pe.
  mifuncion("Salas") devolverá true.
*/

const polindromo = (cadena = '') => {
  if (!cadena) console.warn('La cadena esta vacia');

  let nuevaCadena = cadena.toLocaleLowerCase().split('').reverse().join('');
  return cadena.toLocaleLowerCase() === nuevaCadena ? true : false;
}

console.log(
  polindromo('Salas')
);