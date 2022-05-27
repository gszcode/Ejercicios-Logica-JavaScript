/*
  Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. 
  miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

const caracteres = (cadena = '', patron = '') => {
  if (!cadena) console.warn('El patrón esta vacio');
  if (!patron) console.warn('El patrón a patron esta vacio');

  let buscar = new RegExp(patron, "ig");
  console.log(cadena.replace(buscar, ""));
}

caracteres('xyz1 xyz2 xyz3 xyz4 xyz5', 'xyz')