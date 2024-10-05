// Tipos de errores

// Errores de sintaxis.
/*
    classX Persona {
        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
    }
*/


// Errores en tiempo de ejecución (runtime).

// 2. **División por cero:**

let resultado = 10 / 0;
console.log(resultado);

// Errores lógicos.

//let objeto = {};
// console.log(objeto.propiedadInexistente);

//funcionInexistente();


// Controlar un error: bloque try-catch 

// 1. Manejo de errores al acceder a una propiedad inexistente de un objeto:
// Intentando acceder a una propiedad inexistente
// Captura la excepción y muestra el mensaje de error

/*
try {
  let objeto = {};
  console.log(objeto.propiedad.inexistente); 
} catch (error) {
  console.error("Error:", error.message); 
}
*/


//. Manejo de errores al analizar una cadena JSON inválida:
// JSON inválido debido a la coma extra
// Intentando analizar la cadena JSON
// Esta línea nunca se ejecutará debido a la excepción
// Captura la excepción y muestra el mensaje de error

try {
  let jsonString = '{"nombre": "Juan", "edad": 30}'; 
  let objeto = JSON.parse(jsonString); 
  console.log(objeto); 
} catch (error) {
  console.error("Hubo un Error:", error.message); 
}