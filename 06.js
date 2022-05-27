/*
  Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe.
  miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

const comparar = (texto = '', buscar = '') => {
  if (!texto) console.warn('El texto esta vacio');
  if (!buscar) console.warn('Debe ingresar una palabra para buscar');

  let contador = 0;
  let nuevaCadena= texto.split(' ');
  for(let i = 0; i < nuevaCadena.length; i++){
    if (nuevaCadena[i].includes(buscar)){
      contador++;
    }
  }
  return contador;
}

console.log(
  comparar('hola mundo adios mundo', 'mundo')
);