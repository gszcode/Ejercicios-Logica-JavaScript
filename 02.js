/*
  Programa una función que te devuelva el texto recortado según el número de caracteres
  indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

function texto(cadena, recorte){
  let nuevaCadena = cadena.slice(0, recorte);
  return nuevaCadena;
}

console.log(
  texto('Hola Mundo', 4)
);