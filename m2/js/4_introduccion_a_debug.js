// 1. Uso de un depurador de código:
// Puedes usar herramientas de desarrollo integradas en navegadores web como Google Chrome o Firefox para depurar tu código JavaScript. Aquí hay un ejemplo básico:

function suma(a, b) {
    return a + b;
}

// Llamada a la función
let resultadoSuma = suma(10, 5);
console.log('resultadoSuma:', resultadoSuma);

// 2. Establecimiento de breakpoints en el código:
// Puedes establecer breakpoints en tu código JavaScript directamente en las herramientas de desarrollo de tu navegador. Aquí hay un ejemplo:

function resta(a, b) {
    // Establece un breakpoint en la siguiente línea
    debugger;
    return a - b;
  }

let resultadoResta = resta(20, 10);
console.log('resultadoResta:', resultadoResta);