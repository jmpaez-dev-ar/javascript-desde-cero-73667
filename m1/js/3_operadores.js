// Operadores en JavaScript
// Los operadores son símbolos que se utilizan para realizar operaciones en variables y valores. En JavaScript, los operadores se utilizan para realizar cálculos matemáticos, comparaciones y asignaciones, entre otras tareas.

// Los operadores se clasifican en diferentes categorías según su funcionalidad:
// 1. Operadores de asignación, incremento y decremento
// 2. Operadores matemáticos
// 3. Operadores de comparación
// 4. Operadores lógicos
// 5. Operadores de concatenación
// 6. Operadores condicionales
// 7. Operadores de tipo

// Operadores de asignación, incremento y decremento

// 1. Operadores de Asignación:
// Los operadores de asignación se utilizan para asignar valores a variables.

//   - Asignación simple (`=`): Asigna un valor a una variable.
let x = 5;

//   - Asignación con suma (`+=`): Agrega un valor a una variable y luego lo asigna.
let y = 10;
y += 3; // --> y = y + 3;

//   - Asignación con resta (`-=`): Resta un valor de una variable y luego lo asigna.
let z = 8;
z -= 2;

// 2. Operadores de Incremento:
//   - Incremento (`++`): Aumenta el valor de una variable en 1.
let contador = 0;
contador++; // --> contador = contador + 1;

// 3. Operadores de Decremento:
//   - Decremento (`--`): Reduce el valor de una variable en 1.
let valor = 5;
valor--; // --> valor = valor - 1;

// Operadores matemáticos
// Los operadores matemáticos se utilizan para realizar operaciones matemáticas en variables y valores.

// 1. Suma (+):
let numero1 = 5;
let numero2 = 3;
let resultadoSuma = numero1 + numero2;
console.log('resultadoSuma', resultadoSuma);

// 2. Resta (-):
let numero3 = 10;
let numero4 = 4;
let resultadoResta = numero3 - numero4;
console.log('resultadoResta', resultadoResta);

// 3. Multiplicación (*):
let numero5 = 6;
let numero6 = 7;
let resultadoMultiplicacion = numero5 * numero6;
console.log('resultadoMultiplicacion', resultadoMultiplicacion);

// 4. División (/):
let numero7 = 20;
let numero8 = 5;
let resultadoDivision = numero7 / numero8;
console.log('resultadoDivision', resultadoDivision);

// 5. Módulo o Resto (%):
let resultadoModulo = 10 % 3;
console.log('resultadoModulo', resultadoModulo);

// Operadores de comparación
// Tambien llamados operadores relacionales
// Los operadores de comparación se utilizan para comparar dos valores y devolver un valor booleano (`true` o `false`) según el resultado de la comparación.


// 1. Comparación de igualdad (`===`) y `!==`):
console.log('numero1', numero1);
console.log('numero2', numero2);

let esIgual = (numero1 === numero2);
console.log('esIgual', esIgual);

// Comparación de desigualdad (`!==`):
let texto1 = 'Hola';
let texto2 = 'Mundo';
console.log('texto1', texto1);
console.log('texto2', texto2);
let noEsIgual = (texto1 !== texto2);
console.log('noEsIgual', noEsIgual);

// 2. Operadores de igualdad débil (`==`):
let cadena = '5';
let numero = 5;
console.log('cadena', cadena);
console.log('numero', numero);
let esIgualDebil = (cadena == numero); 
console.log('esIgualDebil', esIgualDebil);

// Operadores de desigualdad débil (`!=`):
// Comprueba la desigualdad sin verificar el tipo de dato
let noEsIgualDebil = (1 != '0'); 
console.log('noEsIgualDebil', noEsIgualDebil);


// 3. Operadores de comparación mayor y menor (`>`, `<`, `>=`, `<=`):
let puntaje = 85;
let puntajeMinimo = 60;

let cantidad = 100;
let cantidadMaxima = 200;

let edad = 25;
let edadMinima = 18;

let tiempo = 20;
let tiempoLimite = 30;

let esMayor = (puntaje > puntajeMinimo);
console.log('esMayor', esMayor);

let esMenor = (cantidad < cantidadMaxima);
console.log('esMenor', esMenor);

let esMayorIgual = (edad >= edadMinima);
console.log('esMayorIgual', esMayorIgual);

let esMenorIgual = (tiempo <= tiempoLimite);
console.log('esMenorIgual', esMenorIgual);

// 4. Operador de comparación distinto de:
//   - `!=`: Devuelve `true` si los operandos no son iguales.
//   - `!==`: Devuelve `true` si los operandos no son iguales y/o no son del mismo tipo.

let valor1 = 5;
let valor2 = 10;
console.log('valor1', valor1);
console.log('valor2', valor2);

let esDistinto = (valor1 != valor2);
console.log('esDistinto', esDistinto);

let esDistintoTipo = (valor1 !== valor2);
console.log('esDistintoTipo', esDistintoTipo);

// Operadores lógicos
// Los operadores lógicos se utilizan para combinar expresiones lógicas y devolver un valor booleano (`true` o `false`) según el resultado de la combinación.

// 1. Operador AND (`&&`):
//   Este operador devuelve `true` si ambas expresiones son verdaderas.

let esMayorDeEdad = true;
let tieneLicencia = true;
console.log('esMayorDeEdad', esMayorDeEdad);
console.log('tieneLicencia', tieneLicencia);

if (esMayorDeEdad && tieneLicencia) {
    console.log("Puede conducir un automóvil.");
 } else {
    console.log("No puede conducir un automóvil.");
 }

 // 2. Operador OR (`||`):
//   Este operador devuelve `true` si al menos una de las expresiones es verdadera.
let esDiaFeriado = false;
let esFinDeSemana = true;
console.log('esDiaFeriado', esDiaFeriado);
console.log('esFinDeSemana', esFinDeSemana);

if (esDiaFeriado || esFinDeSemana) {
    console.log("Puede descansar.");
 } else {
    console.log("Debe trabajar.");
 }

 // 3. Operador lógico NOT (`!`):
//   Este operador invierte el valor de una expresión.
let esVerdadero = true;
console.log('esVerdadero', esVerdadero);

let esFalso = !esVerdadero;
console.log('esFalso', esFalso);

// Operadores de concatenación
// Los operadores de concatenación se utilizan para unir cadenas de texto o variables en JavaScript.

// 1. Operador de concatenación (`+`):
let nombre = 'Juan';
let apellido = 'Pérez';
let nombreCompleto = nombre + ' ' + apellido;
console.log('nombreCompleto', nombreCompleto);

// Operadores condicionales
// Los operadores condicionales se utilizan para asignar un valor a una variable según una condición.

// 1. Operador condicional (`?`):
//   - Sintaxis: `condición ? valor1 : valor2`
//  - Asigna `valor1` a la variable si la condición es verdadera, de lo contrario asigna `valor2`.

let miEdad = 15;
let esMayorEdad = (miEdad >= 18) ? 'Sí' : 'No';
console.log('esMayorEdad', esMayorEdad);

// 2. Operador de asignación condicional (`||`):
//   - Sintaxis: `variable = valor1 || valor2`
//  - Asigna el primer valor verdadero a la variable.

let nombreUsuario = null;
let nombreDefault = 'Invitado';

console.log('nombreUsuario', nombreUsuario);
console.log('nombreDefault', nombreDefault);

let nombreFinal = nombreUsuario || nombreDefault;
console.log('nombreFinal', nombreFinal);

// 1. Operador `typeof`:
//   - Devuelve el tipo de datos de una variable o valor.
let unNumero = 5;
console.log('unNumero', unNumero);
let tipoNumero = typeof unNumero;
console.log('tipoNumero', tipoNumero);