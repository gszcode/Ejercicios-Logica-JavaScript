/*
  Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

const validarEmail = (email) => {
  if (email === undefined) console.warn('Ingresa un email!');
  if (email === ' ') console.warn('El email esta vacio!');
  if (typeof email !== 'string') console.error('El email debe ser una cadena de texto');

  let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

  return expReg ? console.log(`${email} es un email valido!`) : console.log(`${email} no es un email valido!`);
}

validarEmail('gaby@gmail.com')