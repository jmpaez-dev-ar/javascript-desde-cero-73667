// Estructuras de control de flujo

// Las estructuras de control de flujo permiten modificar el flujo de ejecución de un programa, dependiendo de ciertas condiciones o valores. Algunas de las estructuras de control de flujo más comunes son:

// 1. Estructuras condicionales: Permiten ejecutar un bloque de código si se cumple una condición específica.

// 2. Bucles o ciclos: Permiten repetir un bloque de código múltiples veces, hasta que se cumpla una condición de salida.

// Estructuras condicionales
// Las estructuras condicionales permiten ejecutar un bloque de código si se cumple una condición específica. 


// 1. `if`: La estructura condicional `if` se utiliza para ejecutar un bloque de código si una condición es verdadera.

/*
    if (condición) {
        // Código a ejecutar si la condición es verdadera
    }
*/

let miEdad = 18;
console.log('miEdad', miEdad);
if (miEdad >= 18) {
    console.log("Eres mayor de edad");
}

// Ejemplo 1: Verificar si un número es positivo
let numero = 10;
console.log('numero', numero);
if (numero > 0) {
    console.log("El número es positivo.");
}

// 2. `if, else`: Esta estructura se utiliza para ejecutar un bloque de código si una condición es verdadera, y otro bloque de código si la condición es falsa.

/*
    if (condición) {
        // Código si la condición es verdadera
    } else {
        // Código si la condición es falsa
    }
*/

let temperatura = 25;
console.log('temperatura', temperatura);

if (temperatura > 30) {
    console.log("Hace calor");
} else {
    console.log("No hace calor");
}

// 3. `if, else if, else`: Esta estructura se utiliza para evaluar múltiples condiciones en orden y ejecutar el bloque de código correspondiente al primer caso verdadero.

/*
    if (condición1) {
        // Código si condición1 es verdadera
    } else if (condición2) {
        // Código si condición2 es verdadera
    } else {
        // Código si ninguna condición anterior es verdadera
    }
*/

let calificacion = 69;
console.log('calificacion', calificacion);

if (calificacion >= 90) {
    console.log("Aprobaste con A");
} else if (calificacion >= 80) {
    console.log("Aprobaste con B");
} else if (calificacion >= 70) {
    console.log("Aprobaste con C");
} else {
    console.log("Reprobaste");
}

// En este ejemplo, la variable `mes` se evalúa en una serie de condiciones `if`, `else if` y `else` para determinar el nombre del mes correspondiente

let mes = -2;
console.log('mes', mes);
if (mes === 1) {
    console.log("Enero");
} else if (mes === 2) {
    console.log("Febrero");
} else if (mes === 3) {
    console.log("Marzo");
} else if (mes === 4) {
    console.log("Abril");
} else if (mes === 5) {
    console.log("Mayo");
} else if (mes === 6) {
    console.log("Junio");
} else if (mes === 7) {
    console.log("Julio");
} else if (mes === 8) {
    console.log("Agosto");
} else if (mes === 9) {
    console.log("Septiembre");
} else if (mes === 10) {
    console.log("Octubre");
} else if (mes === 11) {
    console.log("Noviembre");
} else if (mes === 12) {
    console.log("Diciembre");
} else {
    console.log("Mes inválido");
}

// Condicional compuesto
/*
        const USUARIO_REGISTRADO = "admin";
        const CLAVE_REGISTRADA = "123456";

        let usuario = prompt("Ingrese su usuario");
        let clave = prompt("Ingrese su clave");

        if (usuario === USUARIO_REGISTRADO && clave === CLAVE_REGISTRADA) {
        console.log("Bienvenido al sistema");
        } else {
        console.log("Usuario o clave incorrectos");
        }
*/

// 3. Estructura `switch`
// La estructura `switch` se utiliza para evaluar una expresión y ejecutar diferentes bloques de código según el valor de la expresión.

/*
    switch (expresión) {
        case valor1:
            // Código a ejecutar si expresión === valor1
            break;
        case valor2:
            // Código a ejecutar si expresión === valor2
            break;
        default:
            // Código a ejecutar si ningún caso coincide
    }
*/

let diaSemana = 6;
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
console.log(`Hoy es ${nombreDia}`);

// Estructuras de Repetición
// Las estructuras de repetición, también conocidas como bucles o ciclos, permiten ejecutar un bloque de código múltiples veces, hasta que se cumpla una condición de salida. 

// 1. `for`: Se utiliza para ejecutar un bloque de código un número específico de veces.

// 2. `while`: Se utiliza para ejecutar un bloque de código mientras una condición sea verdadera.

/*
    while (condición) {
        // Código a ejecutar mientras la condición sea verdadera
    }
*/

let contador = 0;
console.log('contador valor inicial:', contador);
while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;
}

// 3. `do...while`: Se utiliza para ejecutar un bloque de código al menos una vez, y luego repetirlo mientras una condición sea verdadera.

/*
    do {
        // Código a ejecutar al menos una vez y luego mientras la condición sea verdadera
    } while (condición);
*/

let contador2 = 10;
console.log('contador2 valor inicial:', contador2);
do {
    console.log("Contador2: " + contador2);
    contador2++;
} while (contador2 < 5);  

/*
Diferencias entre while y do-while:
    while: La condición se evalúa antes de ejecutar el bloque de código. Si la condición es falsa inicialmente, el bloque no se ejecuta.
    do-while: El bloque de código se ejecuta al menos una vez antes de evaluar la condición.
*/