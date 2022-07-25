alert ("Bienvenido a la sección de compras de StopTempo")
let confirmCompra = confirm ("¿Te gustaría comprar alguno de nuestros servicios o productos?")

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

//Condición de compra
switch (confirmCompra){
    //VAMOS A COMPRAR
    case true:
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
                    alert ("Podes comprar hasta 15 imágenes para tu escritorio");
                    alert ("Cada imagen tiene un costo de 10 USD");
                    cantFotos = prompt("Ingresa un valor del 1 al 15");
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

/*COMENTARIOS A TUTORÍA*/
// Para esta entrega intenté hacer el cálculo de lo que podría llegar a ser una carrito de compra... Imagino que es super básico, pero tampoco tengo todavía muy ideado que es lo que voy a vender ni tampoco tenía pensado poner un carro de compra. Pero podría ser útil en mi página web. Podes verla ingresando a: www.stoptempo.com.ar
// Por ahora la sección de contacto no funciona; por ende acá va mi consulta: ¿Con lo que veamos en JS podría hacer que funcione? ¿O en realidad para hacer funcionar un formulario de contacto necesito ver otras propiedades de cursos mas adelantados?