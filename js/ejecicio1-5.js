// Ejercicio 1
// alert('esto es ventana emergente')

// Ejercicio 2
// document.write('HELLO WORLD')

// Ejercicio 3

// a = 3
// b = 5
// document.write('<br>el resultado es ' + (3 + 5));

//Ejercicio 5
// parseInt('numero') = se transforma a formato entero
// let numero1 = parseInt(prompt('Ingrese un primer numero'));
// let numero2 = parseInt(prompt('Ingrese un segundo numero'));

// document.write('<br>El resultado de la suma es' + (numero1+numero2))
// console.log(numero1)
// console.log(numero1 + numero2);

//Ejercicio 6
// let contador1 = parseInt(prompt('Ingrese el primer numero'));
// let contador2 = parseInt(prompt('Ingrese el segundo numero'));

// if (contador1 > contador2) {
//     document.write('<br>La variable contador1 es mayor ' + contador1);
// }else if (contador2 > contador1) {
//     document.write('<br>La variable contador2 es mayor ' + contador2);
// }

//Ejercicio 7
// let numero1 = parseInt(prompt('Ingrese un primer numero'));
// let numero2 = parseInt(prompt('Ingrese un segundo numero'));
// let numero3 = parseInt(prompt('Ingrese un tercer numero'));

// if (numero1 > numero2 && numero1 > numero3) {
//     document.write("<br>La numero es mayor " + numero1);

// }if (numero2 > numero1 && numero2 > numero3) {
//     document.write("<br>La numero es mayor " + numero2);
// }
// if (numero3 > numero1 && numero2) {
//     document.write("<br>La numero es mayor " + numero3);
// }

//Ejercicio 8
// let numero1 = parseInt(prompt('Ingrese un primer numero'));

// if (numero1 % 2 === 0) {
//     document.write("Es numero par ");
// }

//Ejercicio 9

// let frase = prompt("Ingrese una frase");
// // hola mundo
// console.log(frase.toLocaleLowerCase());
// frase = frase.toLocaleLowerCase();
// console.log(frase.length);

/* tomar un caracter variable.charAt(indice)
preguntar si es vocal
si es vocal lo muestro sino no hago nada 
*/

// for (let vocal = 0; vocal < frase.length; vocal++) {
//   console.log(frase.charAt(vocal));
//   if (
//     frase.charAt(vocal) == "a" ||
//     frase.charAt(vocal) == "e" ||
//     frase.charAt(vocal) == "i" ||
//     frase.charAt(vocal) == "o" ||
//     frase.charAt(vocal) == "u"
//   ) {
//     document.write(frase.charAt(vocal));
//   }
// }

//Ejercicio 10
// let numero = prompt('Ingrese el numero')

// if (numero % 2 ===0 || numero % 3 ===0 || numero % 5 ===0 || numero % 7 ===0 ) {
//     document.write('El numero es divisible');
// }

//Ejercicio 11
// let numero = parseInt(prompt('Ingrese el numero'))

// if (numero % 2 ===0) {
//     document.write('El numero es divisible por 2 <br>');
// }if (numero % 3 ===0) {
//     document.write('El numero es divisible por 3 <br>');
// }if (numero % 5 ===0) {
//     document.write('El numero es divisible por 5 <br>');
// }if (numero % 7 ===0) {
//     document.write('El numero es divisible por 7 <br>');
// }
let numero1 = parseInt(prompt('Ingrese el numero'))

switch (numero1) {
    case numero1 % 2 ===0:
        console.log('El numero es divisible por 2 <br>');
       
    case numero1 % 3 ===0:
        console.log('El numero es divisible por 3 <br>');
       
    case numero1 % 5 ===0:
        console.log('El numero es divisible por 5 <br>');
        
    case numero1 % 7 ===0:
        console.log('El numero es divisible por 7 <br>');
        
    default: 
        console.log('El numero no es divisible<br>');
        
}
