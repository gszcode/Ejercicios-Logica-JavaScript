/*
  Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

const numeroAleatorio = () => {
  console.log(
    Math.floor(Math.random() * (601 - 501)) + 501
  );
}

numeroAleatorio();
