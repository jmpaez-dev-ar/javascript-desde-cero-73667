// Cuadros de diálogo
// Los cuadros de diálogo son ventanas emergentes que se utilizan para mostrar mensajes, solicitar información o confirmar acciones al usuario. En JavaScript, los cuadros de diálogo son una forma de interactuar con el usuario y obtener su entrada o confirmación.

// 1. `alert()`: Muestra un cuadro de diálogo con un mensaje y un botón "Aceptar". No permite que el usuario ingrese ningún valor.
alert("¡Hola, bienvenido a Javascript !");

// 2. `confirm()`: Muestra un cuadro de diálogo con un mensaje, un botón "Aceptar" y un botón "Cancelar". Devuelve `true` si el usuario hace clic en "Aceptar" y `false` si hace clic en "Cancelar".
let respuesta = confirm("¿Estás seguro de continuar?");
if (respuesta) {
  console.log("El usuario hizo clic en Aceptar");
} else {
  console.log("El usuario hizo clic en Cancelar");
}


// 3. `prompt()`: Muestra un cuadro de diálogo con un mensaje y un campo de entrada de texto donde el usuario puede ingresar datos. Devuelve el valor ingresado por el usuario o `null` si se hace clic en "Cancelar".

let nombre = prompt("Por favor, ingresa tu nombre:");
if (nombre !== null) {
  console.log("Hola, " + nombre + "!");
} else {
  console.log("El usuario hizo clic en Cancelar.");
}