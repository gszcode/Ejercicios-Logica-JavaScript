/*
  Programa una función que dada una String te devuelva un Array de textos separados
  por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

function cadena(array, metodo){
  let nuevoArray;
  for(let i = 0; i < array.length; i++){
    nuevoArray = array[i].split(metodo);
  }
  return nuevoArray;
}

console.log(
  cadena(['hola que tal'], ' ')
);