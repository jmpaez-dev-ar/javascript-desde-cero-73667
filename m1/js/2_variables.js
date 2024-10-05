// Variables
// Las variables son contenedores que almacenan datos y les asignan un nombre. En JavaScript, las variables se pueden declarar utilizando las palabras clave let y const. La palabra clave let se utiliza para declarar variables que pueden ser reasignadas, mientras que la palabra clave const se utiliza para declarar constantes, cuyos valores no pueden ser modificados una vez asignados.

// Nombres de variables
// - Deben ser descriptivos
// - No deben tener espacios
// - No deben comenzar con números
// - Deben ser camelCase
// - Deben ser sensibles a mayúsculas y minúsculas
// - No deben ser palabras reservadas
// - No deben ser palabras clave

// 1. Declarar una variable:
let nombre;
let $importe;
let _cantidad;

// 2. Asignar un valor a una variable:
nombre = 'Juan';
console.log("Nombre:", nombre);

// 3. Utilizar una variable en una operación:
let numero1 = 5;
let numero2 = 3;
let resultadoSuma = numero1 + numero2;
console.log(resultadoSuma); 

let direccion = "Av. Santa Fe 1000";
let ciudad = "Buenos Aires";
let direccionCompleta = direccion + ", " + ciudad;
console.log(direccionCompleta); 


//4. Reasignar el valor de una variable:
let edad = 25;
edad = 30;


// Constantes
const PI = 3.14159;
console.log(PI); 
// PI = 3.16;

const EMPRESA = "EducacionIT";
console.log("Bienvenidos a, " + EMPRESA + "!"); 

const SEGUNDOS = 30;
console.log("Tiempo de espera " + SEGUNDOS + " segundos.");

// Tipos de datos
// string
//      Almacena datos de texto.
let miNombre = "María";
let miApellido = 'Gómez';

// number
//      Almacena datos numéricos, ya sean enteros o decimales.
let miEdad = 25;
let miAltura = 1.75;

// boolean
//      Almacena valores de verdadero o falso.
let esEstudiante = true;
let tieneTrabajo = false;

// object
//      Almacena datos complejos, como objetos, arreglos, funciones, etc.
let persona = {
    nombre: "Juan",
    edad: 30
};

let libro = {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry"
};

// array
//      Almacena una colección de datos, ya sean del mismo tipo o de tipos diferentes.
let numeros = [1, 2, 3, 4, 5];
let colores = ["rojo", "azul", "verde"];


// NaN
//      Representa un valor numérico inválido, como el resultado de una operación matemática no válida.
let resultado = 10 / "texto";
let operacionInvalida = NaN;

// undefined
//      Representa una variable que ha sido declarada pero no inicializada.
let variablesinValor;
console.log(variablesinValor); // Esto mostrará "undefined" en la consola
let valorNoAsignado = undefined;

// null
//      Representa la ausencia de un valor o un objeto nulo.
let objetoNulo = null;
let valorNulo = null;


// typeof
//      Permite conocer el tipo de dato de una variable.
console.log(typeof nombre); // Esto mostrará "string" en la consola
console.log(typeof edad); // Esto mostrará "number" en la consola
console.log(typeof esEstudiante); // Esto mostrará "boolean" en la consola
console.log(typeof persona); // Esto mostrará "object" en la consola
console.log(typeof numeros); // Esto mostrará "object" en la consola
console.log(typeof resultado); // Esto mostrará "number" en la consola
console.log(typeof variablesinValor); // Esto mostrará "undefined" en la consola
console.log(typeof objetoNulo); 
