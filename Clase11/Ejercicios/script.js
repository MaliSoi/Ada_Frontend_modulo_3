//Actividad 1

const estudiante = {
    nombre: "Lucía",
    edad: 20,
    carrera: "Ingeniería",
    universidad: "UBA"
};

//Usa desestructuración para obtener nombre y edad en variables separadas.
//const { nombre, edad } = estudiante;
//console.log(nombre, edad);

//Cambia el nombre de la variable carrera a profesion.
const { carrera: profesión } = estudiante;
console.log(profesión);

//Imprime cada una de las variables en consola.

//Actividad 2- Aprender a extraer valores de un array usando desestructuración.

const colores = ["rojo", "verde", "azul", "amarillo"];

//Usa desestructuración para obtener los tres primeros colores en variables llamadas color1, color2, color3.
//Imprime cada color en consola.
//Usa el operador rest(...) para guardar los colores restantes en una 
// variable llamada otrosColores e imprímela.

const [color1, color2, color3, ...otrosColores] = colores;

console.log(color1);
console.log(color2);
console.log(color3);


console.log(otrosColores);


//Actividad 3 - Spread y Rest en funciones

const persona = { nombre: "Lucas", edad: 22 };
const direccion = { ciudad: "Córdoba", pais: "Argentina" };

//Usa el spread operator (...) para combinar los objetos persona y 
// direccion en un solo objeto llamado personaCompleta.

const personaCompleta = {...persona, ...direccion};
//console.log(personaCompleta);

//Llama a la función mostrarDatos() pasándole personaCompleta.nombre 
// y los valores de personaCompleta restantes usando rest (...).

function mostrarDatos(nombre, otrosDatos) {
  console.log(`Nombre: ${nombre}`);
  console.log(`Otros datos:`, otrosDatos);
}

const { nombre, ...otrosDatos} = personaCompleta;

mostrarDatos(nombre, otrosDatos); 

//Actividad 4 - Entender cómo se copian los datos primitivos y los objetos.

let numero1 = 10;
let numero2 = numero1;
numero2 = 20;

console.log(numero1); //10
console.log(numero2); //20

//const objeto1 = { mensaje: "Hola" };
//const objeto2 = objeto1;
//objeto2.mensaje = "Chau";

//console.log(objeto1.mensaje);//Chau
//console.log(objeto2.mensaje);//Chau

//Entonces en el primer ejemplo son tipos primitivos y se copian por valor. Entonces le estoy pasando el valor y en el segundo, son objetos y se copian por referencia, entonces es 
//el mismo objeto de memoria, y modifica todo.

//¿Cómo podríamos hacer para que objeto1 no se modifique cuando cambiamos objeto2?

//Utilizar copia superficial con spread para que no cambie. 

const objeto1 = {mensaje: "Hola"};
const objeto2 = {...objeto1};
objeto2.mensaje = "Chau";

console.log(objeto1.mensaje);//Hola
console.log(objeto2.mensaje);//Chau

//Actividad 5 - Copia Superficial vs Copia Profunda

const usuario = { 
  nombre: "Carla", 
  direccion: { ciudad: "Buenos Aires", codigoPostal: 1406 }
};

//Realiza una copia superficial de usuario usando el spread operator (...) 
// y guárdala en usuarioCopia.

const usuarioCopia = {...usuario};
//console.log(usuarioCopia);

//Modifica la ciudad en usuarioCopia.direccion 
// y revisa si también cambió en usuario.

usuarioCopia.direccion.ciudad = "Pampa";
console.log(usuario.direccion.ciudad);//Pampa
console.log(usuarioCopia.direccion.ciudad);//Pampa

//Ahora, realiza una copia profunda usando JSON.parse(JSON.stringify()) 
// y guarda el resultado en usuarioCopiaProfunda.

const usuarioCopiaProfunda = JSON.parse(JSON.stringify(usuarioCopia));

usuarioCopiaProfunda.direccion.ciudad = "Jujuy";
console.log(usuarioCopiaProfunda.direccion.ciudad);//Jujuy
console.log(usuario.direccion.ciudad);//Pampa
