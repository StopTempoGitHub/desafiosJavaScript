let service = parseInt(0);
let valorFotos = parseInt(0);

let resultado = parseInt(0);

//Función para sumar los valores ingresados.
function sumar() {
    return resultado = service + valorFotos;
}
//Función para calcular el valor por fotografía.
function multiplicacion() {
    return valorFotos = 10 * cantFotos
}

//Creo mis objetos
let prod1 = new productos("Nadador", 10, "Un pechista en plena respiracion.");
let prod2 = new productos("Chef", 10, "Un chef presentando su plato.");
let prod3 = new productos("Viajero", 10, "Un hombre esperando su vuelo en pandemia.");
let prod4 = new productos("Servicios", 200, "Sesión fotográfica para productos o modelos.");

//Creo mi array y pusheo los objetos
let listProductos = [];
listProductos.push(prod1);
listProductos.push(prod2);
listProductos.push(prod3);
listProductos.push(prod4);

//Función para llamar a cada uno de los elementos del array como un lista.
function saludar (){
    alert ("Nuestros productos son: \n");
    for (i=0; i<listProductos.length; i++){
        alert (JSON.stringify(listProductos[i].nombre) + 
        "\n Valor: " + JSON.stringify(listProductos[i].precio) + " USD \n" +
        JSON.stringify(listProductos[i].descripcion)
        );
    };
}

alert ("Bienvenido a la sección de compras de StopTempo")
let confirmCompra = confirm ("¿Te gustaría comprar alguno de nuestros servicios o productos?")

//Condición de compra
switch (confirmCompra){
    //VAMOS A COMPRAR
    case true:
        saludar(); //Llamada a la funcion
        //Contratamos los servicios?
        let confirmServicio = confirm ("¿Te gustaría contratar nuestro servicio fotográfico?"); 
            switch (confirmServicio){
                case true:
                    service = 200;
                    alert ("El costo por el servicio fotográfico es: " + service + " USD");
                    break;
                case false:
                    service = 0;
                    break;
            }
        //Compramos los productos?
        let confirmProd = confirm ("¿Querés comprar alguna foto?");
            switch (confirmProd){
                case true:
                    alert ("Podes comprar hasta 3 imágenes para tu escritorio");
                    cantFotos = parseInt(prompt("Ingresa un valor del 1 al 3").trim());
                    alert ("El valor por " + cantFotos + " fotos es: " + multiplicacion() + " USD");
                    break;
                case false:
                    break;
            }
        
        //Resultado de la compra!
        alert ("El valor total de tu compra es: " + sumar() + " USD");
        break;

    //NO COMPRO NADA
    case false:
        alert ("Disfruta del contenido de la página. ¡Estamos a tu disposición cuando lo desees!");
        break;
}


//Este es el código del que partieron las anteriores entregas. Se trabaja solo con variables. El uso de arrays no esta ligado al código. No se encuentra modo de realizar sumas con elementos selecciones específicamente del array.