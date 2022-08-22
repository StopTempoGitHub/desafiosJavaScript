const contenedorProductos = document.getElementById('contenedor-productos'); //tomo mi contenedor del html
const contenedorCarrito = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('vaciar-carrito');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');


//AGREGAMOS LOS PRODUCTOS AL CARRITO
let carrito = []; //array que empieza vacío

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'));
        actualizarCarrito();
    }
})

//VACIAMOS CARRITO
botonVaciar.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarrito();
});

//MOSTRAMOS LOS PRODUCTOS EN LA PÁGINA
//recorro el arrai del stock
stockProductos.forEach((producto) => {

    const {imagen, nombre, descripcion, precio, id} = producto; //DESESTRUCTURACION

    const div = document.createElement('div'); //Creo un div por cada producto
    div.classList.add('producto'); //agrego la clase producto al nuevo div
    div.innerHTML = `
    <img class="imgProd" src=${imagen} alt="">
    <h3>${nombre}</h3>
    <p class="descProd">${descripcion}</p>
    <p class="precioProducto">$ ${precio}</p>
    <button id="agregar${id}" class="boton-agregar">Comprar</button>
    ` //contenido html del div

    contenedorProductos.appendChild(div);
    const boton = document.getElementById(`agregar${id}`); //llamo al botón del html. Es importante tomar el ID mediante acentos graves alt+96.

    boton.addEventListener('click', () => {
        agregarAlCarrito(id)
    });
});

//Función para agregar productos al carrito
const agregarAlCarrito = (prodId) =>{
    const item = stockProductos.find ((prod) => prod.id === prodId);
    carrito.push(item);
    actualizarCarrito();
};

//Funcion para eliminar del carrito
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);   
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1); //El método .splice sirve para borrar. Recibe 2 parametros: el indice y la cantidad de elementos a borrar.
    actualizarCarrito();
}

//Función para recorrer el carrito y actualizar el carrito.
const actualizarCarrito = () =>{
    contenedorCarrito.innerHTML = ""; //Con esto indico qué cada vez que llamo a la funcion, lo primero que hago es borrar el contenido del nodo.

    carrito.forEach((prod) => {

        const {nombre, precio, id} = prod;

        const div = document.createElement('div');
        div.className = ('productoEnCarrito cajitasDelCarro')
        div.innerHTML = `
        <h3 class="modeloEnCarro">${nombre}</h3>
        <p class="descripcionEnCarro">Descripcion de la camara</p>
        <p class="precioEnCarro">$ ${precio}</p>
        <button onclick = "eliminarDelCarrito(${id})" class="boton-eliminar><i class="cancelar"><img src="./assets/multimedia/imagenes/iconos/cancelar.png" alt="Cancel"></i></button>
        `
        contenedorCarrito.appendChild(div);

        localStorage.setItem('carrito', JSON.stringify(carrito));
    });

    contadorCarrito.innerText = carrito.length; //con este código actualiza el contador del carrito.
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
};