//typeof(variable); retorna tipo string (number,string, boolean)
//console.log(variable, 'comentario') para identificar la variable en el proceso
// REQUERIMIENTOS
//1. Transforma esta declaración de función a una función de expresión. El ejercicio debe
//   quedar en un archivo nombrado `1_funcion.js` (1 Punto)
//
//   function example(a, b, c){
//     return a+b+c
//   }
let a=1;
let b=2;
let c=3;

let resultado = function (a, b, c) { return (a+b+c); };

//invoca la funcion
console.log(resultado(a,b,c),'<--- function de expresion');


//2. Transforma la siguiente función a una arrow function de una línea. Este ejercicio
//   debe quedar en un archivo llamado `2_arrow.js` (1 Punto)
//
//   let suma = function(a, b){
//     return a + b
//     }

let suma=(a, b) => a + b;
console.log(suma(a,b), '<--- function arrow');

