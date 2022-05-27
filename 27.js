/*
  Programa una clase llamada Pelicula.

  La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
      7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
      aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

  * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula {
  constructor({id, titulo, director, estreno, pais, generos, calificacion}){
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarId(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGenero(generos);
  }

  // validando las cadenas de texto
  validarStrings(propiedad, valor) {
    if (valor === undefined) return console.warn(`${propiedad} "${valor}" esta vacio!`);
    if (typeof valor !== 'string') return console.error(`${propiedad} "${valor}" debe ser una cadena de texto`);

    return true;
  }

  // validando cantidad de caracteres de titulo y director
  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud) return console.warn(`El ${propiedad} "${valor}" no debe pasar los ${longitud} caracteres`);

    return true;
  }

  // validando arrays
  validarArrays(propiedad, valor) {
    if (valor.length === 0) return console.error(`Debes de agregar un ${propiedad}`);
    if (!(valor instanceof Array)) return console.error(`El valor de ${propiedad} debe ser un array`);

    for (let item of valor) {
      if (typeof item !== 'string') return console.error(`El ${propiedad} debe ser una cadena de texto`);
    }
  }

  // validando el id
  validarId(id) {
    if (this.validarStrings('Id', id)){
      if (!(/^([a-z]){2}([0-9]){7}$/.test(id))){
        return console.error(`El Id "${id}" no es válido, debe tener 9 caracteres, 2 letras en minúscula y 7 números`);
      }
    }
  }

  // validando el titulo
  validarTitulo(titulo) {
    if (this.validarStrings('Titulo', titulo)){
      this.validarLongitudCadena('Titulo', titulo, 100)
    }
  }

  // validando el director
  validarDirector(director) {
    if (this.validarStrings('Director', director)){
      this.validarLongitudCadena('Director', director, 50)
    }
  }

  // validando estreno
  validarEstreno(estreno) {
    if (estreno === undefined) return console.warn(`El año de estreno esta vacio!`);
    if (typeof estreno !== 'number') return console.error(`El año de estreno debe ser un número`);
    if (estreno > 3 && estreno < 5) return console.error(`El año de estreno debe contener 4 digitos`);
  }

  // validar pais
  validarPais(pais) {
    this.validarArrays('Pais', pais);
  }

  // validar generos
  validarGenero(generos) {
    this.validarArrays('Genero', generos);
  }
}

// ME FALTA COMPLETARLO * 

const pelicula = new Pelicula({
  id: 'gs1234567',
  titulo: 'Un hombre en llamas',
  director: 'Jony Deep',
  estreno: 2001,
  pais: [undefined]
});
