

//Actividad 1

//fetch('https://api.ejemplo-sin-cors.com/data')
//      .then(response => response.json())
//     .then(data => console.log(data))
//      .catch(error => console.log(error));

      //mensaje de error que aparece : api.ejemplo-sin-cors.com/data:1  
      // Failed to load resource: net::ERR_NAME_NOT_RESOLVED/app.js:5 TypeError: Failed to fetch
    //en este caso no hace ningun error tipo CORS, porque la url no existe por lo tanto no conecta
    //  con ningun servidor. Si la URL fuera válida pero la bloquea ahi si ocurre CORS

//Actividad 2

/*const $ = (selector) => document.querySelector(selector);

const lista = $("#lista");
const mensaje = $("#mensaje");


fetch ("https://jsonplaceholder.typicode.com/postssss")
.then(response => {
    if(!response.ok) {
        throw new Error ('Error en la respuesta de la API');
    }
    return response.json();
    })
    .then ((data) => {
        mensaje.textContent = '';//se quita cargando ...
        
        data.forEach((post)=> {
        
        const li = document.createElement('li');
        li.textContent = post.title;

        // aplico estilos en linea con JS
        li.style.listStyleType = "none";
        li.style.border = "1px solid #ccc";
        li.style.padding = "10px";
        li.style.margin = "5px 0";
        li.style.borderRadius = "8px";

        lista.appendChild(li);
        });
    })
    .catch(error =>{
        mensaje.textContent = '¡Ocurrió un error al cargar los datos!';
        console.log('Error:', error);
        });*/

//Actividad 3

document.addEventListener("DOMContentLoaded", () => {
const $ = (selector) => document.querySelector(selector);

const form = $("#post-form");
const mensaje1 = $("#mensaje1");
                
form.addEventListener("submit", (e) => {
e.preventDefault(); // Evita que se recargue la página

    //mostrar mensaje enviando ...
    mensaje.textContent = "Enviando ...";
    
    const nuevoPost = {
        title: $("#title").value,
        body:$("#body").value,
        userId:1,  //campo ficticio para la API
    };

    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers:{ 
            "Content-Type": "application/json; charset=UTF-8",
         },
        body: JSON.stringify(nuevoPost),
    })
    .then((respuesta) => {
    console.log("Status:", respuesta.status);
    if(!respuesta.ok){
       throw new error ("Error en la respuesta");
      }
        return respuesta.json();
    })
    .then((data) => {
        console.log("Respuesta:", data);
        mensaje.textContent ="¡Post creado!";
        form.reset(); //limpia el form
    })
    .catch((error) => {
        console.log ("Error:", error);
        mensaje.textContent = "Error al enviar";
    });
   });
});

//Actividad 4

const $ = (selector) => document.querySelector(selector);
const mensaje2 = $("#mensaje2");
const lista = $("#lista-datos");
const btnReintentar = $("#reintentar");

function cargarDatos(){
    mensaje2.textContent ="Cargando datos ...";
    lista.innerHTML = "";
    btnReintentar.style.display = "none";

    fetch("https://jsonplaceholder.typicode.com/INVALIDO")
    .then((respuesta) => {
        if(!respuesta.ok) {
            throw new Error (`Error ${respuesta.status}:${respuesta.statusText}`);
        }
        return respuesta.json;
        })
        .then((datos) => {
            mensaje.textContent = "";
            datos.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.title ||JSON.stringify(item);
                lista.appendChild(li);
            });
        })
        .catch((error) => {
            console.log("Error:", error); // Para ver todos los detalles en consola
            mensaje2.textContent = `No se pudieron cargar los datos (${error.message})`;
            btnReintentar.style.display = "inline"; //mostramos botón
        });
    }

    //llamada inicial
    cargarDatos();

    //evento del botón reintentar
    btnReintentar.addEventListener("click", () =>{
        cargarDatos();
    });
  
//Actividad 5

//const $ = (selector) => document.querySelector(selector);
const mensaje3 = $("#mensaje3");

fetch("https://jsonplaceholder.typicode.com/posts/9999")
.then((respuesta) => {
    if(respuesta.status === 404){
        //post no encontrado
        mensaje3.textContent="Post no encontrado";
        throw new Error ("Post 9999 no existe");
    }else if (respuesta.status === 200) {
        //post encontrado
        return respuesta.json();
   }else{
    throw new Error (`Error inesperado:${respuesta.status}`);
    }
})
.then((post) => {
    //si llegamos acá, es porque el post existe
    mensaje3.textContent = `Titulo del post:${post.title}`;
})
.catch((error) => {
    console.log("Error:", error);
   
});