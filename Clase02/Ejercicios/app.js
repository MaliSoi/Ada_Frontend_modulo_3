
//definir función común para cambiar el texto
function cambiarTexto(){
    const parrafo = document.getElementById("mensaje");

    if (parrafo.textContent ==="Texto original"){
        parrafo.textContent = "¡Texto cambiado!";
    } else {
       parrafo.textContent = "Texto original";
    }
   }

//definir función para cambiar COLOR del h1

function cambiarColor(color){
    const titulo = document.getElementById("title");

    if (titulo.style.color === "red") {
        titulo.style.color = "";              //vuelve al color original
    } else {
        titulo.style.color = "red";
    }
    }

 //definir función para agregar elemento a una lista
 
 document.getElementById('agregar').addEventListener('click',function(){
    const input = document.getElementById('nuevoItem');
    const lista = document.getElementById('lista');

    if (input.value.trim() !== '') {
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = input.value;
        lista.appendChild(nuevoLi);
        input.value = '';//limpiar input
    }
 })

 




