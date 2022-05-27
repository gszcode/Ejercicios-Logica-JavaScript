/*
  Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
  pe. miFuncion(1000, 20) devolverá 800.
*/

const descuento = (cantidad, porciento) => {
  if (cantidad <= 0) console.warn('Ingrese una cantidad');
  if (typeof cantidad !== 'number') console.error('La cantidad ingresada NO es un numero');

  if (porciento < 0) console.warn('Ingrese una porcentaje');
  if (typeof porciento !== 'number') console.error('El porcentaje ingresado NO es un numero');

  let descuento = (cantidad * porciento) / 100;
  return console.log(`Descuento del ${porciento}%, Total $${cantidad - descuento}`);
}

descuento(1000, 20);