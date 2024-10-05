const COSTO_M2 = 1.16;
let metros2 = prompt("Ingresa los metros cuadrados de la vivienda: ");

let fm = 1.009;
let resultado = metros2 * COSTO_M2 * fm;
alert("Resultado de la multiplicación: $ " + resultado);