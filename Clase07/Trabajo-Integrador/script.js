document.addEventListener("DOMContentLoaded", () => {

//Guardo en variables los elementos del DOM que voy a usar

const formulario = document.getElementById("formulario"); 
const inputTarea = document.getElementById("tarea");
const selectCategoria = document.getElementById("categoria");
const listaTareas = document.getElementById("lista-tareas");//contenedor donde se van a mostrar las tareas
const mensajeError = document.getElementById("mensaje-error");
const btnBorrarTodas = document.getElementById("borrar-todas");

//Array donde guardo las tareas (cada tarea es un objeto)
let tareas = [];

//Escuchar el evento del submit del form


formulario.addEventListener("submit", (e) => {     //evita que la página se recargue al enviar el form
    e.preventDefault();   
   //console.log("Formulario enviado");      

const texto = inputTarea.value.trim();            //tomar el valor del escrito en el input y quitar espacios extras
const categoria = selectCategoria.value;           //elegir una categoria

//valido que el campo de texto no esté vacío
if(texto === "") {
    mensajeError.textContent = "Por favor, escribe una tarea antes de agregarla."
    mensajeError.style.display = "block";
    return;
} else {
 mensajeError.style.display = "none";//oculta el mensaje si todo está ok
}


//Creo objeto tarea 
const tareaNueva = {
    id:Date.now(),     //id único que se basa en timestamp
    texto,
    categoria
};

//Agrego tarea al array
tareas.push(tareaNueva);

//Muestro las tareas en pantalla
mostrarTareas();

//Reseteo form
formulario.reset();
});

//funcion para mostrar las tareas en pantalla

function mostrarTareas() {
    listaTareas.innerHTML = ""; //limpiar lista antes de mostrar
    
    //Recorremos el array filtrado para mostrar las tareas
       tareas.forEach (tarea => {
        const div = document.createElement("div");   //Creo un contenedor para la tarea un <div>
        const p = document.createElement("p");       //creo un elemento <p> para mostrar la tarea 
        p.textContent = `${tarea.texto} - Categoría:${tarea.categoria}`;   //texto para que combine con la tarea y la categoría

// Botón para eliminar tarea
const btnEliminar = document.createElement("button");
btnEliminar.textContent = "Eliminar";
btnEliminar.classList.add("btn-eliminar");
btnEliminar.addEventListener("click", () => {
    //se filtra array para sacar la tarea eliminada
    tareas = tareas.filter(t => t.id !== tarea.id);
    mostrarTareas();
});


//Agrego el <p> y los botones al contendor de la lista de tareas
div.appendChild(p);
div.appendChild(btnEliminar);
//Agrego la tarea completa (div) a la lista de tareas
listaTareas.appendChild(div);
});
}

//Botón para eliminar todas las tareas
btnBorrarTodas.addEventListener("click", () => {
    const confirmar = confirm("¿Estás segura de que querés borrar todas las tareas?");
        if(confirmar) {
        tareas = [];
        mostrarTareas();
    }
});

});
 