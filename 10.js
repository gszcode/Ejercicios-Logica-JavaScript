/*
  Programa una función que reciba un número y evalúe si es capicúa o no
  (que se lee igual en un sentido que en otro), pe.
  miFuncion(2002) devolverá true.
*/

const capicua = (numero = 0) => {
  if (numero <= 0) console.warn('Ingrese un numero');
  if (typeof numero !== 'number') console.warn('No es un numero');

  let nuevoNumero = numero.toString().split('').reverse().join('');
  return numero === parseInt(nuevoNumero) ? true : false;
}

console.log(
  capicua(2302)
);