let filas = parseInt(prompt('Ingrese un numero de filas'));
let columnas = parseInt(prompt('Ingrese un numero de columnas'));
// total valor para cargar las celdas de la tabla
let total = filas * columnas;

document.write('<table border>');
// document.write('<tr>');
// document.write('<td>prueba');
// document.write('</td>');
// document.write('</tr>');
for (let indiceFila = 0; indiceFila< filas; indiceFila++) {
    // aqui dibujo las filas
    document.write('<tr>');
    // dibujo la celda
    for(let indiceColumna=0; indiceColumna< columnas; indiceColumna++){
        document.write('<td>'+total);
        document.write('</td>');
        total--;
    }
    document.write('</tr>');
}

document.write('</table>');