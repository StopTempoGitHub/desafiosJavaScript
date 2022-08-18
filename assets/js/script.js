/* Creo mis OBJETOS */
    //Cámaras
let cams1 = new productos("Nikon D3500", 388000, "Una cámara tan sencilla de usar como aquellas para apuntar y disparar, pero permite tomar increíbles fotos y videos con la calidad de una DSLR que realmente harán la diferencia.", "./assets/multimedia/imagenes/camaras/d3500.png");
cams1.set_id("c1");
let cams2 = new productos("Nikon D7500", 581367, "Creada a partir del deseo de contar con el rendimiento y la innovación de primera calidad en una cámara con conectividad compacta y sencilla, la D7500 ofrece las mismas características de resolución, rango de sensibilidad ISO, procesamiento y eficiencia energética que la galardonada D500, pero en una DSLR para aficionados.", "./assets/multimedia/imagenes/camaras/d7500.png");
cams2.set_id("c2");
let cams3 = new productos("Nikon D780", 1439422, "Obtenga versatilidad a través del esplendor de la fotografía de cuadro completo y video 4K, cámara lenta, intervalos, exposiciones largas y una gran cantidad de herramientas creativas e inspiradoras de toma de fotografías.", "./assets/multimedia/imagenes/camaras/d780.png");
cams3.set_id("c3");
let cams4 = new productos("Nikon D850", 1647207, "Una maravilla de ingenio, que logra una extraordinaria calidad de imagen, mayor eficiencia de recolección de luz, lectura de datos más rápida y un color más real.", "./assets/multimedia/imagenes/camaras/d850.png");
cams4.set_id("c4");
    //Objetivos
let obj1 = new productos("AF Nikkor 50mm f/1.4D", 238361, "Con excelentes ópticas NIKKOR y una ultra rápida apertura máxima f/1.4, el AF NIKKOR 50mm f/1.4D brinda una magnífica resolución y reproducción de color además de un clásico ángulo de visión de 50 mm.", "./assets/multimedia/imagenes/objetivos/afNikkor50.png");
obj1.set_id("o1");
let obj2 = new productos("AF-S NIKKOR 24-85 mm f/3.5-4.5G ED VR", 322000, "Versátil lente que cubre perspectivas desde gran angular hasta telefoto medio, lo que lo hace un magnífico lente multipropósito para fotografías y videos en HD.", "./assets/multimedia/imagenes/objetivos/afNikkor2485.png");
obj2.set_id("o2");
let obj3 = new productos("AF-S NIKKOR 85mm f/1.8G", 444000, "Este lente para retratos telefoto medio es excelente para el estudio, el set o para capturar imágenes con la luz disponible y producir fotografías y videos en HD de personas con atractivos tonos de piel y un magnífico difuminado de fondo.", "./assets/multimedia/imagenes/objetivos/afNikkor85.png");
obj3.set_id("o3");
let obj4 = new productos("AF-S NIKKOR 70-200mm f/4G ED VR", 902380, "Optimizado para capturar fotografías y videos en HD de alta calidad en cámaras tanto de formato FX como DX, este objetivo incorpora los últimos avances de Nikon en tecnología de lentes y diseño óptico.", "./assets/multimedia/imagenes/objetivos/afNikkor70200.png");
obj4.set_id("o4");
/* Creo mis ARRAY y pusheo los objetos */
    //Lista de Cámaras
let listCams = [];
listCams.push(cams1);
listCams.push(cams2);
listCams.push(cams3);
listCams.push(cams4);

    //Lista de objetivos
let listObjs = [];
listObjs.push(obj1);
listObjs.push(obj2);
listObjs.push(obj3);
listObjs.push(obj4);

    //Lista con todos los productos (unidos mediante el método concat)
let listTodo = listCams.concat(listObjs);



/* ETIQUETAS DEL HTML */
let contenedorCajitasCam = document.querySelectorAll(".contenedorCajitasCam");
let camTitulo = document.querySelector(".camTitulo");
let contenedorCajitasObj = document.querySelectorAll(".contenedorCajitasObj");
let objTitulo = document.querySelector(".objTitulo");
let cajitaCams = document.querySelectorAll(".cajitaCams"); 
let cajitaObjs = document.querySelectorAll(".cajitaObjs");
let carrito = document.querySelectorAll(".carrito");
let divCanasta = document.querySelectorAll(".divCanasta");

/* CAMARAS EN STOCK */
function crearCam (producto){
    contenedorCajitasCam.forEach(elemento => {
        let cajitaCams = document.createElement("div");
        cajitaCams.classList.add("cajitaCams");
        cajitaCams.innerHTML = `    
                                <img class="img" src="${producto.imagen}" alt="${producto.nombre}">
                                <h3 class="modelo">${producto.nombre}</h3>
                                <p class="descripcionCam">${producto.descripcion.substring(0,200)}</p>
                                <p class="precio">$${producto.precio}</p>
                                <a href="javascript:addCarrito(${producto.id})" class="btnComprar">Comprar</a>
                            `;
        elemento.appendChild(cajitaCams)
    });
};
listCams.forEach((producto) => {
    crearCam(producto);
});

/* OBJETIVOS EN STOCK */
function crearObj (producto){
    contenedorCajitasObj.forEach(elemento => {
        let cajitaObjs = document.createElement("div");
        cajitaObjs.classList.add("cajitaObjs");
        cajitaObjs.innerHTML = `    
                                <img class="img" src="${producto.imagen}" alt="${producto.nombre}">
                                <h3 class="modelo">${producto.nombre}</h3>
                                <p class="descripcionCam">${producto.descripcion.substring(0,200)}</p>
                                <p class="precio">$${producto.precio}</p>
                                <a href="javascript:addCarrito(${producto.id})" class="btnComprar">Comprar</a>
                            `;
        elemento.appendChild(cajitaObjs)


    });
};
listObjs.forEach((producto) => {
    crearObj(producto);
});

/* PRODUCTOS EN EL CARRITO */
let arrayCarrito = [];

const agregarAlCarrito = (prodId) => {
    const item = listTodo.find((prod) => prod.id === prodId);
    arrayCarrito.push(item);
    console.log(arrayCarrito);
}

/* EVENTOS */
    //Mostrar Cámaras
camTitulo.addEventListener('click', ()=>{
    for(i=0; i<contenedorCajitasCam.length; i++){
        llamarCams()
    }
});
function llamarCams (){
    contenedorCajitasCam[i].classList.toggle ("mostrarElementos");
}

    //Mostrar Objetivos
objTitulo.addEventListener('click', ()=>{
    for(i=0; i<contenedorCajitasObj.length; i++){
        llamarObjs()
    }
});
function llamarObjs(){
    contenedorCajitasObj[i].classList.toggle ("mostrarElementos");
}   

/* AGREGAR PRODUCTOS AL CARRITO */
let addCar = document.getElementById('addCar');

function addCarrito(){
    alert("hagamos esto")
}

