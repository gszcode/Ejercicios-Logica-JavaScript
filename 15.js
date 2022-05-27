/*
  Programa una función para convertir números de numero binaria a decimal y viceversa, pe.
  miFuncion(100,2) devolverá 4 numero 10.
*/

const convertirNumero = (numero = undefined, base = undefined) => {
  if (numero === undefined) console.warn('No ingresaste una numero');
  if (typeof numero !== 'number') console.error('La numero debe ser un numero');
  if (base === undefined) console.warn('No ingresaste un base');
  if (typeof base !== 'number') console.error('El base debe ser un numero');

  if (Math.sign(numero) === -1) console.error('La numero no puede ser un numero negativo');
  if (Math.sign(base) === -1) console.error('El base no puede ser un numero negativo');

  if (base === 2){
    return console.log(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
  } else if (base === 10) {
    return console.log(`${numero} base ${base} = ${numero.toString(2)} base 2`);
  }
}

convertirNumero(100, 2);