/*
  Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
  pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

const calcularFecha = (fecha = undefined) => {
  if (fecha === undefined) console.warn('No ingresaste Fecha');
  if (!(fecha instanceof Date)) console.error('El valor ingresado NO es valido');

  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  let aniosEnMS = 1000 * 60 * 60 * 24 * 365;
  let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  return (Math.sign(aniosHumanos) === -1)
    ? console.log(`Faltan ${Math.abs(aniosHumanos)} años para ${fecha.getFullYear()}`)
    : (Math.sign(aniosHumanos) === 1)
      ? console.log(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
      : console.log(`Estamos en el año actual ${fecha.getFullYear()}`);
}

calcularFecha(new Date(2001, 4, 17));