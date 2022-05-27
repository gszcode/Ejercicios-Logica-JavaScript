/*
  Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3)
  devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

function repetir(texto, x){
  for(let i = 0; i < x; i++){
    console.log(texto);
  }
}

repetir('Hola Mundo', 3);