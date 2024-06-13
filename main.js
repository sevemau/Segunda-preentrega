
const persona = {
    edad: null,
    determinarCategoriaEdad: function () {
        if (this.edad < 18) {
            return "Eres menor de edad.";
        } else if (this.edad >= 18 && this.edad <= 25) {
            return "Eres un adulto joven.";
        } else if (this.edad > 25 && this.edad <= 65) {
            return "Eres un adulto.";
        } else {
            return "Eres un anciano.";
        }
    }
};


const solicitarEdad = () => {
    let edad = parseInt(prompt("Hola. Por favor, ingrese su edad:"));
    while (isNaN(edad) || edad <= 0) {
        edad = parseInt(prompt("Por favor, ingrese un número válido para su edad:"));
    }
    return edad;
}


persona.edad = solicitarEdad();

while (!confirm(`Si ${persona.edad} es tu edad correcta dale en aceptar, sino volveremos a preguntarte!`)) {
    persona.edad = solicitarEdad();
}


alert(persona.determinarCategoriaEdad());

alert("Ahora (NADA QUE VER) probemos esta calculadora. Dale en aceptar cuando estés listo!");


const operadoresPermitidos = ['+', '-', '*', '/'];


const realizarOperacion = (operando1, operando2, operador) => {
    switch (operador) {
        case '+':
            return operando1 + operando2;
        case '-':
            return operando1 - operando2;
        case '*':
            return operando1 * operando2;
        case '/':
            return operando1 / operando2;
        default:
            return NaN;
    }
}


const obtenerOperacion = () => {
    let operacion = prompt("Ahora ingresa la operación que deseas realizar. Ej: (+, -, *, /)");
    while (!operadoresPermitidos.includes(operacion)) {
        operacion = prompt("La operación no es válida. Por favor, ingresa una operación válida! Ej: (+, -, *, /)");
    }
    return operacion;
}

// Función para realizar el cálculo y mostrar el resultado
const calcular = () => {
    let operando1 = parseFloat(prompt("Ingresa el N°1 para realizar la operación:"));

    // Solicito operando1 hasta que se ingrese un número válido
    while (isNaN(operando1)) {
        operando1 = parseFloat(prompt("Por favor, ingresa el N°1 (válido) para realizar la operación:"));
    }

    let operando2 = parseFloat(prompt("Ahora ingresa el N°2:"));

    // Solicito operando2 hasta que se ingrese un número válido
    while (isNaN(operando2)) {
        operando2 = parseFloat(prompt("Por favor, ahora ingresa el N°2 (válido):"));
    }

    const operacion = obtenerOperacion();
    const resultado = realizarOperacion(operando1, operando2, operacion);

    if (isNaN(resultado)) {
        alert("Operación no válida.");
    } else {
        alert(`El resultado de la operación ${operando1} ${operacion} ${operando2} es = ${resultado}`);
    }
}

calcular();