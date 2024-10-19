// Anidamiento de condicionales
// El anidamiento de condicionales se refiere a la práctica de colocar una estructura condicional dentro de otra.

// Ejemplo 1: Anidamiento de condicionales con if-else
let numero = 6;
console.log("Número: " + numero);
if (numero > 0) {
    if (numero % 2 === 0) {
        console.log("El número es positivo y par.");
    } else {
        console.log("El número es positivo pero impar.");
    }
} else {
    console.log("El número no es positivo.");
}

// Condicional múltiple
// La cláusula `switch` se utiliza para seleccionar uno de los muchos bloques de código para ejecutar. Es similar a una serie de declaraciones `if...else if...else`, pero más legible y fácil de mantener.

let diaSemana = 3;
let nombreDia;
switch (diaSemana) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    case 6:
        nombreDia = "Sábado";
        break;
    case 7:
        nombreDia = "Domingo";
        break;
    default:
        nombreDia = "Día no válido";
}
console.log("Hoy es " + nombreDia);