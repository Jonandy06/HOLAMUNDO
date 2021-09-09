let nombre = 'the office';
let temporadas = 9;
let genero = 'sitcom';
let capitulos = 27;

// crear un objeto con notacion literal

let serie = {
    nombre : 'the office',
    temporadas : 9,
    genero : 'sitcom',
    capitulos : 27
}

// mostrar una propiedad de un objeto
document.write(`Serie: ${serie.nombre}`);
document.write(`<br>Capitulo: ${serie.capitulos}`);
// mostrar una propiedad de un objeto metodo 2
document.write(`<br>Temporadas: ${serie['temporadas']}`);
console.log(serie)