const Formulario = document.getElementById('miFormulario');
const resultado = document.getElementById('resultado');

Formulario.addEventListener('submit', function(event) {
    event.preventDefault();    //evita que se recargue la página

    const nombre = document.getElementById('nombre').value;   //se captura los valores de los inputs
    const edad = document.getElementById('edad').value;       //se captura los valores de los inputs

    resultado.innerHTML= `<p>Nombre: ${nombre}</p><p>Edad: ${edad}</p>`;   //mostrar los datos dentro de un div en lugar de la consola



});

