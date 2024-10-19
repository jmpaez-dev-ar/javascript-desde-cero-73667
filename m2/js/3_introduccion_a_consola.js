// Consola de JavaScript
// La consola de JavaScript es una herramienta que te permite interactuar con el navegador y ejecutar código JavaScript directamente en la página web. Puedes utilizar la consola para depurar tu código, probar funciones y manipular elementos de la página. Aquí tienes algunas formas de utilizar la consola de JavaScript:
// 

/*
    Métodos Principales del Objeto console:
        console.log(): Imprime mensajes informativos.
        console.error(): Muestra mensajes de error.
        console.warn(): Muestra advertencias.
        console.table(): Muestra datos en formato de tabla.
        console.assert(): Muestra un mensaje de error si una condición es falsa.
        console.count(): Cuenta el número de veces que se ha llamado.
        console.clear(): Limpia la consola.
        console.debug(): Muestra mensajes de depuración.
*/

// 1. `console.assert` - Este método se utiliza para verificar si una expresión es verdadera y, en caso contrario, mostrar un mensaje de error en la consola.
let edad = 18;
console.assert(edad >= 18, "Debes ser mayor de edad para ingresar.");

// 2. `console.clear` - Este método se utiliza para borrar el contenido de la consola.
console.log("Este es un mensaje.");
console.clear();

// 3. `console.count` - Este método se utiliza para llevar un registro de cuántas veces se ha llamado a una etiqueta específica en la consola.
console.count("Click en el botón");
console.count("Click en el botón");
console.count("Click en el botón");

// 4. `console.countReset` - Este método se utiliza para restablecer el contador de una etiqueta específica a cero.
console.count("Visitante");
console.count("Visitante");
console.countReset("Visitante");
console.count("Visitante");


// 5. `console.debug` - Este método se utiliza para imprimir mensajes de depuración en la consola.

console.clear();

function suma(a, b) {
    let resultado = a + b;
    console.debug(`console.debug: --> La suma de ${a} y ${b} es ${resultado}`);
    return resultado;
}

let resultadoSuma = suma(5, 3);
console.log("Resultado de la suma:", resultadoSuma);


// Cronómetros: temporizador

// 1. Medir el tiempo que tarda en ejecutarse una función:

console.clear();

// Iniciar el cronómetro
console.time('miCronometro');

// Simular una función que lleva tiempo en ejecutarse
for (let i = 0; i < 10000000; i++) {
    // Hacer algo aquí
  }

// Detener el cronómetro y mostrar el resultado en milisegundos
console.timeEnd('miCronometro');  


// 2. Medir el tiempo que tarda en cargar una página web:

// Iniciar el cronómetro cuando se carga la página
window.onload = function () {
    console.time('cargaPagina');
  
    // Código adicional que podría llevar tiempo en ejecutarse
  
    // Detener el cronómetro cuando todo esté listo
    console.timeEnd('cargaPagina');
  };