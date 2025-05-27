/* Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

let descripcion = "javascript es genial";
let textoEnMayusculas = descripcion.toUpperCase();

console.log(textoEnMayusculas);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring). */

let frase = "Programación web";
let primerosCinco = frase.substring(0, 5);

console.log(primerosCinco);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */

let texto = "JavaScript";
let ultimosTres = texto.substring(texto.length - 3);

console.log(ultimosTres);


/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

let textoOriginal = "jAVASCRIPT es genial";
let textoFormateado = textoOriginal.substring(0,1).toUpperCase() + textoOriginal.substring(1).toLowerCase();

console.log(textoFormateado);

/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

let frase2 = "Hola mundo grande";
let posicionEspacio = frase.indexOf(" ");

console.log(posicionEspacio);

/* Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

let texto2 = "programacion javascript";

let espacioPos = texto.indexOf(" ");

let primeraPalabra = texto.substring(0,1).toUpperCase() + texto.substring(1, espacioPos).toLowerCase();

let segundaPalabra = texto.substring(espacioPos + 1, espacioPos + 2).toUpperCase() + texto.substring(espacioPos + 2).toLowerCase();

let resultado = primeraPalabra + " " + segundaPalabra;

console.log(resultado);
