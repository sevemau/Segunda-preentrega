
class Pregunta {
    constructor(texto, opciones, respuestaCorrecta) {
        this.texto = texto;
        this.opciones = opciones;
        this.respuestaCorrecta = respuestaCorrecta;
        this.respuestaUsuario = null;
    }
}

const preguntas = [
    new Pregunta("¿Cual es la capital de Francia?", ["a) Paris", "b) Londres", "c) Roma", "d) Madrid"], "a) Paris"),
    new Pregunta("¿Cual es el planeta más grande del sistema solar?", ["a) Tierra", "b) Marte", "c) Jupiter", "d) Saturno"], "c) Jupiter"),
    new Pregunta("¿Quien escribio 'Cien años de soledad'?", ["a) Gabriel Garcia Marquez", "b) Pablo Neruda", "c) Jorge Luis Borges", "d) Mario Vargas Llosa"], "a) Gabriel Garcia Marquez"),
    new Pregunta("¿Cuantas patas tiene un gato?", ["a) 4", "b) 6", "c) 2", "d) 8"], "a) 4"),
    new Pregunta("¿Cual es el oceano mas grande?", ["a) Oceano Atlantico", "b) Oceano Pacifico", "c) Oceano Indico", "d) Oceano Artico"], "b) Oceano Pacifico"),
    new Pregunta("¿Quien pintó la Mona Lisa?", ["a) Vincent van Gogh", "b) Leonardo da Vinci", "c) Pablo Picasso", "d) Claude Monet"], "b) Leonardo da Vinci")
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