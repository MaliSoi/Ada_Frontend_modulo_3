const title = document.createElement('h1');                      //Crea el h1
const text = document.createTextNode("¡Bienvenida!");            //Crear el nodo de texto
title.appendChild(text);                                      //Insertar el texto dentro del h1
document.body.appendChild(title);                             // Insertar el h1 en el body


//Ejercicio 2
/*const lista = document.getElementById('compras');

const item1 = document.createElement('li');
const text1 = document.createTextNode('Leche')
        item1.appendChild(text1);
        lista.appendChild(item1);

const item2 = document.createElement('li');
const text2 = document.createTextNode('Queso')
        item2.appendChild(text2);
        lista.appendChild(item2);*/
        
const lista = document.getElementById('compras');

function agregarItem(texto) {
    const li = document.createElement('li');
    const nodoTexto = document.createTextNode(texto);
    li.appendChild(nodoTexto);
    lista.appendChild(li)
}

agregarItem('Leche');
agregarItem('Queso');

//Ejercicio 3

/*const mensaje = document.querySelector('.mensaje'); // el . indica que es una clase
mensaje.innerHTML = 'Hola, Javascript 👋';*/

//Ejercicio 4

const nombre = "Arnold";
const edad = 32;

const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;//Creando el mensaje con template string

const parrafo = document.createElement('p'); //creando un elemento <p>

const texto = document.createTextNode(mensaje); //creando el nodo de texto con el mensaje

parrafo.appendChild(texto); //insertando el texto en el <p>

document.body.appendChild(parrafo); //insertando el <p> en el body del documento

//Ejercicio 5



function escribir (titulo, texto){      //Insertar en el body con innerHTML y template strings
document.body.innerHTML += `
<h2>${titulo}</h2>
<p> ${texto}</p>
`;
}

//Llamamos a la funcion con valores

escribir("Titulo dinámico", "Este contenido fue generado desde JS.");



