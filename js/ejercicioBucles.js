// document.write('Elemento 1 <br>');
// document.write('Elemento 2 <br>');
// document.write('Elemento 3 <br>');
// document.write('Elemento 4 <br>');
// document.write('Elemento 5 <br>');
// document.write('Elemento 6 <br>');
// document.write('Elemento 7 <br>');
// document.write('Elemento 8 <br>');

//while

/*
while(condicion){
    codigo a ejecutar si se cumple la condicion
    cambiar la condicion
} 
*/

// let contador = 1000;
// while(contador <=100){
//     document.write('Elemento '+ contador +'<br>');
//    // contador++
//    contador = contador +1;    
// }


// do-while hacer ... mientras (se cumple la condicion)
/*
do{
    codigo a ejecutar
    cambio la condicion
}while(condicion)
 */

// let elemento = 100;

// do{
//     document.write('Elemento do-while '+ elemento +'<br>');
//     elemento--;
// }while(elemento >= 1)

// Estructura for

/*
for(crear la variable; condicion; incremento o decremento el valor de la variable){
    codigo a ejecutar
}
 */

// for(let i=1; i<= 100; i++){
//     document.write('Elemento '+ i +'<br>');
// }

//Ejercicio 1
// let edad = parseInt(prompt('Ingrese su edad'))

// if (edad >= 18) {
//     document.write('Ya puede manejar');
// }else{
// document.write('Edad no valida');
// }

//Ejercicio 2
// let nota = parseInt(prompt('Ingrese un numero de 0 a 10'));

// if (typeof nota !== 'number') {
//     alert('Numero no valido');
// }
// if (nota >10) {
//     alert('Numero erroneo'); 
// }
// if (nota <=2) {
//     alert('Muy deficiente');
// }
// if (nota >=3 && nota <=4) {
//     alert('Insuficiente');
// }
// if (nota >=5 && nota <=6) {
//     alert('Suficiente');
// }
// if (nota ==7) {
//     alert('Bien');
// }
// if (nota >=8 && nota <=9) {
//     alert('Muy bien');
// }
// if (nota ==10) {
//     alert('Excelente');
// }

//Ejercicio 3


let resultado='';
do{
    let palabra = prompt('Ingrese una palabra');
    resultado= resultado+palabra+'-'
    console.log(resultado);

//while(true) o while(false)
}while(confirm('¿Desea continuar?'));
document.write(resultado)

//Ejercicio 10



