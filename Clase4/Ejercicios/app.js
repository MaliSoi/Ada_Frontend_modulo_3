



function $ (selector) {
    return  document.querySelector(selector)
}


let btnSaludo = $('#btnClick')
let container_message = $('#clickMsg')
const hover =$('#hoverBox')


function saludar (message) {
container_message.textContent = message
}

// btnSaludo.addEventListener("dblclick", () => saludar('Hola!') )// Cambiá "click" o "dblclick" según quieras
btnSaludo.addEventListener("dblclick", () => saludar('Hola!') )


hover.addEventListener('mouseover', ()=>{
    hover.style.background = "blue"
})

hover.addEventListener('mouseout', ()=>{
    hover.style.background = "red"
})

$('#tecladoInput').addEventListener('keydown', (e)=>{
    $('#keyMsg').textContent = `Tecla presionada = ${e.key}`
    console.log(e.key)
})

function stop (e){
    e.preventDefault()
     $("#linkMsg").textContent = "Se evitó la redirección.";
}

$('#enlace').addEventListener('click', stop)

// Propagacion en accion

const bubblingMsg = $('#bubblingMsg')

$('#abuelo').addEventListener('click', () => {
    bubblingMsg.textContent += '👴 Click en ABUELO\n'
})

$('#padre').addEventListener('click', () => {
    bubblingMsg.textContent += '👨 Click en PADRE\n'
})

$('#hijo').addEventListener('click', () => {
    bubblingMsg.textContent += '🧒 Click en HIJO\n'
})

/*$('#hijo').addEventListener('click', (e) => {
    e.stopPropagation()
    bubblingMsg.textContent += '🧒 Click en HIJO (¡detuvo la propagación!)\n'
})*/

$('#abuelo').addEventListener('click', () => {
    console.log('captura abuelo')
}, true) // ← El "true" activa la fase de captura

// Ejercicio 1

const botonModo = document.getElementById('botonModo');

botonModo.onclick = function() {
    //alternar la clase de modo-oscuro en <body>
    document.body.classList.toggle("oscuro");

    //cambiar texto acorde al modo
    if(document.body.classList.contains("oscuro")) {
        botonModo.textContent = "Modo Claro";
    } else {
        boton.textContent = "Modo Oscuro";
    }
};

// Ejercicio 2

const campo = $ ('#campoTexto');

campo.onkeydown = function (e) {
    if (e.key === "Enter" ){
        alert("¡Formulario enviado!");
    }
};

//Ejercicio 3 

const palabra = document.getElementById("palabra");
let tooltip;

palabra.onmouseover = function(){
tooltip = document.createElement("span");
tooltip.id="tooltip";
tooltip.textContent = "Javascript:lenguaje de programación para la web.";
//Insertar tooltip justo después de la palabra
palabra.insertAdjacentElement('afterend', tooltip);
};

palabra.onmouseout = function() {
    if(tooltip) {
        tooltip.remove();
        tooltip = null;
    }
    };

 //Ejercicio 4   
const boton = document.getElementById('contadorBtn');
  const mensaje = document.getElementById('mensaje');
 let contador = 0;

 boton.addEventListener('click' , () => {
    contador++;
    boton.innerText = `Clics: ${contador}`;

    if (contador === 5){
        boton.disabled = true;
        mensaje.innerText = '¡Límite alcanzado!';
    }
 });

//Ejercicio 5  

const inputTarea = document.getElementById('inputTarea');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');

btnAgregar.onclick = function () {
    const texto = inputTarea.value.trim();

    if (texto === ""){
        alert("Por favor, escribí una tarea.");
        return;
    }

    //Crear elemento li
    const li = document.createElement('li');
    li.textContent = texto;

    //Crear botón eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "eliminar";

    //Agregar evento para eliminar tarea
    btnEliminar.onclick = function(){
        listaTareas.removeChild(li);
    };

    //Añadir botón elminar al li
    li.appendChild(btnEliminar);

    //Añadir li a la lista
    listaTareas.appendChild(li);

    //Limpiar input
    inputTarea.value = "";
    inputTarea.focus();
};
  
 



