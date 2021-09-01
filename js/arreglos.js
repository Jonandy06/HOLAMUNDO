let anime = 'Dragon Ball Z'


// crear o inicializar un arreglo
let series = ['Dragon Ball', 'Naruto', 'Evangelion 3.0+1', anime, 15, true];
// crear un arreglo vacio
let temporadas =[];

// cuando quiero acceder a un elemento del nombrearreglo[posicion]
document.write('Serie: '+ series[3] );

// agregar un elemento al final del arreglo 
series.push('Loki');
series.push('Breaking Bad');

console.log(series[6]);

// para saber la cantidad de elementos que tiene el arreglo length
console.log(series.length)
console.log(temporadas.length)

let serieUsuario = prompt('Ingrese una serie')
series.push(serieUsuario);
console.log(series.length);

// mostrar todos los elementos de un arreglo
for(let posicion = 0; posicion < series.length; posicion++){
    document.write('<br>Serie: '+series[posicion]);
}
// modificar un elemento del arreglo
series[4] = 'The Office'

document.write('<br>');
for(let posicion = 0; posicion < series.length; posicion++){
    document.write('<br>Serie: '+series[posicion]);
}

// agregar elemento nuevo en una posicion particular
series.splice(0,0,'One Piece');
document.write('<br>');
for(let posicion = 0; posicion < series.length; posicion++){
    document.write('<br>Serie: '+series[posicion]);
}

