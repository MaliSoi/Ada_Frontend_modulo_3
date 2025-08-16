

const $ = (selector) => document.querySelector(selector);

//Crear un array de productos

const productos = [
    {nombre:"heladera", precio: 200, categoria:"cocina"},
    {nombre:"mesa", precio: 24, categoria:"comedor"},
    {nombre:"lámpara", precio: 150, categoria:"dormitorio"},
    {nombre:"cama", precio: 80, categoria:"dormitorio"},
    {nombre:"televisor", precio: 260, categoria:"living"},
];

//LOOPS
//For básico - útil cuando necesitas el índice
function ejemploForBasico() {
  for (let i = 0; i < productos.length ; i++) {
console.log(`indice= ${i}, producto= ${productos[i].nombre}, precio=${productos[i].precio}, categoria=${productos[i].categoria}`);
       }
 }

 
//For...of - cuando solo necesitas los valores
function ejemploForOf(){
for (const producto of productos){
    console.log(`${producto.nombre} cuesta $${producto.precio} (${producto.categoria})`);
}
}

// For...in - recorre índices/propiedades

function ejemploForIn(){
    for (const indice in productos) {
        console.log(` posición=${indice}, producto=${productos[indice].nombre}`);
    }
}

//METODOS DE ARRAY

function ejemploForEach(){
    productos.forEach((producto, indice) => {
        console.log(`${indice + 1}. ${producto.nombre} (${producto.precio})`);

    });
}


// map: crea un nuevo array transformando cada elemento

function ejemploMap(){
console.log("=== MAP ==="); 
let resultado = "map() - Crear array nuevo transformando elementos:<br>";        

const nombresEnMayuscula = productos.map(producto => producto.nombre.toLocaleUpperCase());
console.log(nombresEnMayuscula)

document.getElementById("resultadoMap").innerHTML = resultado;
}

//Filter - crea un nuevo array con elemntos que cumplen esa categoria

function ejemploFilter(){
console.log("=== FILTER ==="); 
let resultado = "filter() - Crear array nuevo con elementos que cumplan condición:<br>";    

//Filtra categoria dormitorio
const productosCategoria = productos.filter(e => e.categoria === "dormitorio");

//Filtra precio alto
const productosPrecioMasAltos = productos.filter(e => e.precio >= 200 );

console.log("Productos Categoría dormitorio:", productosCategoria);
console.log("Los productos más altos son:", productosPrecioMasAltos);

document.getElementById("resultadoFilter").innerHTML = resultado;

}


//Find - enocntrar el PRIMER elemntos que cumpla la condicion

function ejemploFind(){
console.log("=== FIND ==="); 
let resultado = "find() - Encontrar el PRIMER elemento que cumpla condición:<br>";

const productoPrecioMasAlto = productos.find(productos => productos.precio > 200);
const productoMesa = productos.find(producto => producto.nombre === "mesa");


console.log("Producto con precio más alto:", productoPrecioMasAlto);
console.log("Producto Mesa:", productoMesa);

document.getElementById("resultadoFind").innerHTML = resultado;

}

//SOME EVERY

function ejemploSomeEvery() {
console.log("===SOME y EVERY===");
let resultado = "some() y every() - Verificar condiciones:<br>";

//some : al emnos 1 cumple la condicion?
//every: todos cumplen la condicion? 


const algunProductoDeCocina = productos.some(producto => producto.categoria === "cocina");
//const precioMenorA200 = productos.every(producto => producto.precio <= 200);
const precioMenorA200 = productos.some(producto => producto.precio <= 200);
const precioMasAltoA260 = productos.some (producto => producto.precio > 260);

console.log("Verificaciones:", { algunProductoDeCocina, precioMenorA200, precioMasAltoA260 });

document.getElementById("resultadoSomeEvery").innerHTML = resultado;
}

//REDUCE

function ejemploReduce() {
    console.log("===REDUCE===");
    let resultado = "reduce() -Reducir array a un solo valor:<br>";

    //Sumar todos los productos del array
    const sumaPrecios = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);

   console.log("Suma de precios:", sumaPrecios);

  document.getElementById("resultadoReduce").innerHTML = resultado;
}

//SORT

function ejemploSort(){
    console.log("===SORT===");
    let resultado = "sort() - Ordenar elementos de un array:<br>";

    //Ordenar de mayor a menor segun precio
    const productosPorPrecio1 = [...productos].sort ((a,b) => b.precio - a.precio); //mayor a menor
    const productosPorPrecio2 = [...productos].sort ((a,b) => a.precio - b.precio); //menor a mayor

    console.log("Ordenar por precio, mayor a menor:", productosPorPrecio1);
    console.log("Ordenar por precio, menor a mayor:", productosPorPrecio2);

    document.getElementById("resultadoSort").innerHTML = resultado;


}
