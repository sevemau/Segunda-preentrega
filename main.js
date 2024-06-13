
class Pregunta {
    constructor(texto, opciones, respuestaCorrecta) {
        this.texto = texto;
        this.opciones = opciones;
        this.respuestaCorrecta = respuestaCorrecta;
        this.respuestaUsuario = null;
    }
}

const preguntas = [
    new Pregunta("¿Cuántas veces ha ganado Argentina la Copa del Mundo?", ["a) 1", "b) 2", "c) 3", "d) 4"], "c) 3"),
    new Pregunta("¿Quién fue el entrenador de Argentina durante el Mundial de 1986?", ["a) César Luis Menotti", "b) Marcelo Bielsa", "c) Carlos Salvador Bilardo", "d) Alfio Basile"], "c) Carlos Salvador Bilardo"),
    new Pregunta("¿Cuál fue el resultado de la final del Mundial 1978 y quién fue el rival de Argentina?", ["a) 2-1 contra Brasil", "b) 3-1 contra Países Bajos", "c) 1-0 contra Alemania", "d) 4-2 contra Italia"], "b) 3-1 contra Países Bajos"),
    new Pregunta("¿Qué jugador argentino es famoso por el `Gol del Siglo` en el Mundial de 1986?", ["a) Gabriel Batistuta", "b) Lionel Messi", "c) Diego Maradona", "d) Sergio Agüero"], "c) Diego Maradona"),
    new Pregunta("¿Quién fue el capitán de la selección argentina en el Mundial de 2022?", ["a) Ángel Di María", "b) Lionel Messi", "c) Javier Mascherano", "d) Sergio Romero"], "b) Lionel Messi"),
    new Pregunta("¿En qué país se celebró el Mundial de 1978 y qué importancia tuvo para Argentina?", ["a) Brasil, fue la primera vez que Argentina ganó el torneo.", "b) España, fue la primera vez que Argentina llegó a la final.", "c) Argentina, fue la primera vez que Argentina ganó el torneo.", "d) Italia, fue la primera vez que Argentina participó en el torneo."], "c) Argentina, fue la primera vez que Argentina ganó el torneo.")
];

const registrarRespuestas = () => {
    preguntas.forEach(pregunta => {
        let mensaje = `${pregunta.texto}\n`;
        pregunta.opciones.forEach((opcion, i) => {
            mensaje += `${opcion}\n`;
        });

        let respuesta;
        do {
            respuesta = prompt(mensaje + "Ingrese la letra de su respuesta (a, b, c, d):").toLowerCase();
        } while (!/^[a-d]$/.test(respuesta));

        pregunta.respuestaUsuario = pregunta.opciones[respuesta.charCodeAt(0) - 97];
    });
}

const evaluarRespuestas = () => {
    let correctas = 0;
    let incorrectas = 0;

    preguntas.forEach(pregunta => {
        if (pregunta.respuestaUsuario === pregunta.respuestaCorrecta) {
            correctas++;
        } else {
            incorrectas++;
        }
    });

    console.log(`Respuestas Correctas: ${correctas}`);
    console.log(`Respuestas Incorrectas: ${incorrectas}`);
    alert(`Respuestas Correctas: ${correctas}\nRespuestas Incorrectas: ${incorrectas}`);
}

registrarRespuestas();
evaluarRespuestas();