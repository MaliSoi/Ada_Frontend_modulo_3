//Actividad 1

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector) => document.querySelector(selector);


$(".btn").addEventListener("click",() => {
   console.log("Inicio");//1 Inicio

    setTimeout(()=>{
        console.log("Timeout");//3 Timeout
    },0);

    console.log("Fin");//2 Fin
   });
});

//Este orden sucede asi porque al hacer el primer 
// console.log deja en espera esa tarea y pasa a 
// la siguiente y cuando esa esta, la tira. 

//Actividad 2

const $ = (selector) => document.querySelector(selector);

const lista = $("#lista");
const mensaje = $("#mensaje");

//con URL correcta
const url = "https://jsonplaceholder.typicode.com/posts";

//para simular error
//const url = "https://jsonplaceholder.ttypicode.com/postsss";

fetch(url)
.then ((respuesta) => {
    if (!respuesta.ok) {
        throw new Error ("Error en la respuesta de la API");
    }
    return respuesta.json();
})
.then((posts)=> {
    //quiero simular el cargando un poquirto mas de tiempo...
    setTimeout(() => {
    mensaje.textContent = "";//borra el "Cargando"

    posts.forEach((posts) => {
        const li = document.createElement("li");
        li.textContent = posts.title;

        // aplico estilos en linea con JS
        li.style.listStyleType = "none";
        li.style.border = "1px solid #ccc";
        li.style.padding = "10px";
        li.style.margin = "5px 0";
        li.style.borderRadius = "8px";
        

        lista.appendChild(li);
        });
    }, 2000); 
    })

    .catch((error)=> {
        mensaje.textContent = "Hubo un error al cargar los datos."
        console.log(error);
    });


//Actividad 3

const form = $("#postForm");
const mensaje1 = $("#mensaje1");
const resultado = $("#resultado");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    //Obtener valores
    const title = $("#title").value;
    const body = $("#body").value;

    //Mostrar mensaje Enviando...
    mensaje1.textContent = "Enviando ...";
    resultado.innerHTML ="";

    try {
        //simular POST con fetch
     const respuesta = await fetch("https:jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers:{ "Content-Type": "application/json"},
        body: JSON.stringify({ title, body, userId:1 })
     });

     //Si API responde ok
     if(!respuesta.ok) throw new Error ("Error en crear post");

    
     const data = await respuesta.json();

     mensaje1.textContent = "¡Post creado!";

    //Mostrar el post enviado en pantalla
    const postDiv = document.createElement("div");
    postDiv.style.border = "1px solid #ccc";
    postDiv.style.padding = "10px";
    postDiv.style.marginTop = "10px";

    const h3 = document.createElement("h3");
    h3.textContent = data.title;

    const p = document.createElement("p");
    p.textContent = data.body;


    postDiv.appendChild(h3);
    postDiv.appendChild(p);
    resultado.appendChild(postDiv);


    } catch (error){
        mensaje1.textContent = "Hubo un error al crear el post";
        console.error(error);
    }
});

//Actividad 4

const button = $("#boton2");
const mensaje2 = $("#mensaje2");

button.addEventListener("click",()=>{
    //deshabilito el botón y muestro el mensaje
    button.disabled = true;
    mensaje2.textContent = "Espere 3 segundos ...";

    //esperar 3 segundos usando el Timeout
    setTimeout(() => {
        //habilito el boton y actualizo el mensaje
        button.disabled = false;
        mensaje2.textContent ="¡Listo!";
    },3000);
    });


//Actividad 5

const button3 = $("#boton3");
const mensaje3 = $("#mensaje3");
const lista1 = $("#lista1");

button3.addEventListener("click", async() =>{
    mensaje3.textContent = "Cargando datos ...";
    lista.innerHTML = "";

    try {
        //URL incorrecta para simular error
        const url = "https://jsonplaceholder.typicode.com/postsss";
        const respuesta = await fetch(url);

        if(!respuesta.ok){
            throw new Error("Respuesta no OK");
        }
        
        const datos = await respuesta.json();

        //Si llega a funcionar,se muestran los datos
        datos.forEach(item =>{
            const li = document.createElement("li");
            li.textContent = item.title;
            lista1.appendChild(li);
        });

    }catch (error){
       mensaje3.textContent = "No se pudieron cargar los datos. Intenta más tarde.";
        console.log(error)
    }
});




