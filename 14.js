/*
  Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.
  miFuncion(0,"C") devolverá 32°F.
*/

const grados = (grado = null, estado = '') => {
  if (grado === null) console.warn('Ingrese un grado');
  if (typeof grado !== 'number') console.warn('Ingrese un grado correcto');
  if (estado.length === 0) console.warn('Ingrese un estado');
  if (typeof estado !== 'string') console.warn('Ingrese un estado corecto');

  if (estado === 'c' || estado === 'C'){
    let fahrenheit = (grado * 9/5) + 32;
    return `${fahrenheit}ºF`;
  } else if(estado === 'f' || estado === 'F') {
    let celsius = (grado - 32) * 5/9;
    return `${celsius}ºC`;
  }
}

console.log(
  grados(2, 'C')
);