


//Array donde guardo las tareas (cada tarea es un objeto)
let tareas = [];

//Guardo en variables los elementos del DOM que voy a usar

const formulario = document.getElementById("formulario");
const inputTarea = document.getElementById("tarea");
const selectCategoria = document.getElementById("categoria");
const listaTareas = document.getElementById("lista-tareas");//contenedor donde se van a mostrar las tareas
const mensajeError = document.getElementById("mensaje-error");
const btnBorrarTodas = document.getElementById("borrar-todas");

document.addEventListener("DOMContentLoaded", () => {
const tareasGuardadas = localStorage.getItem("tareas");
if(tareasGuardadas){
    tareas = JSON.parse(tareasGuardadas);
    mostrarTareas();
}
});

//Escuchar el evento del submit del form
        formulario.addEventListener("submit", (e) => {     //evita que la página se recargue al enviar el form
        e.preventDefault();    

        const texto = inputTarea.value.trim();            //tomar el valor del escrito en el input y quitar espacios extras
        const categoria = selectCategoria.value;           //elegir una categoria

        //valido que el campo de texto no esté vacío
        if (!texto) {
            alert('Por favor, escribe una tarea antes de agregarla.');
            return;
        }
        //Creo objeto tarea 
        const tareaNueva = {
            id: Date.now(),     //id único que se basa en timestamp
            texto,
            categoria,
        };

        //Agrego tarea al array
        tareas.push(tareaNueva);

        //Guardo el array actualizado en localStorage
        guardarTareas();

        //Muestro las tareas en pantalla
        mostrarTareas();

        //Reseteo form
        formulario.reset();
    });

    //funcion para mostrar las tareas en pantalla

    function mostrarTareas() {
        listaTareas.innerHTML = ""; //limpiar lista antes de mostrar
        
        //Obtener los parámetros de la URL
        const params = new URLSearchParams (window.location.search);
        const categoriaFiltrada = params.get("categoria");

        //Filtramos tareas según categoría (si hay filtro)
        let tareasAMostrar = tareas;
        if(categoriaFiltrada && categoriaFiltrada !== "") {
            tareasAMostrar = tareas.filter(tarea => tarea.categoria === categoriaFiltrada);
            console.log(`Filtrando por: ${categoriaFiltrada}`);
        }

           //Recorremos el array filtrado para mostrar las tareas

            tareasAMostrar.forEach (tarea => {
            const div = document.createElement("div");   //Creo un contenedor para la tarea un <div>
            const p = document.createElement("p");       //creo un elemento <p> para mostrar la tarea 
            p.textContent = `${tarea.texto} - Categoría:${tarea.categoria}`;   //texto para que combine con la tarea y la categoría
        

            // Botón para eliminar tarea
            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.addEventListener("click", () => {
                //se filtra array para sacar la tarea eliminada
                tareas = tareas.filter(t => t.id !== tarea.id);
                guardarTareas();
                mostrarTareas();
            });

            //Agrego el <p> y los botones al contendor de la lista de tareas
            div.appendChild(p);
            div.appendChild(btnEliminar);

            // 👉 ESTO FALTABA
        listaTareas.appendChild(div);

        });
    }
    
    // Función que activan los botones de filtro
    function filtrarPorCategoria (categoria) {
        const url = new URL(window.location);
        if(categoria){
            url.searchParams.set("categoria", categoria);
        }else {
            url.searchParams.delete("categoria");
        }
        window.history.pushState({},"", url); //cambia la URL sin recargar
        mostrarTareas();
        }
    


    //Botón para eliminar todas las tareas
    btnBorrarTodas.addEventListener("click", () => {
        const confirmar = confirm("¿Estás segura de que querés borrar todas las tareas?");
        if (confirmar) {
            tareas = [];
            guardarTareas();
            mostrarTareas();
        }
    });

//Función para guardar tareas en localStorage
function guardarTareas(){
    localStorage.setItem("tareas", JSON.stringify(tareas));
 }

