//Creo mis OBJETOS
    //Cámaras
let cams1 = new productos("Nikon D3500", 388000, "Una cámara tan sencilla de usar como aquellas para apuntar y disparar, pero permite tomar increíbles fotos y videos con la calidad de una DSLR que realmente harán la diferencia.");
cams1.set_id("c1");
let cams2 = new productos("Nikon D7500", 581367, "Creada a partir del deseo de contar con el rendimiento y la innovación de primera calidad en una cámara con conectividad compacta y sencilla, la D7500 ofrece las mismas características de resolución, rango de sensibilidad ISO, procesamiento y eficiencia energética que la galardonada D500, pero en una DSLR para aficionados.");
cams2.set_id("c2");
let cams3 = new productos("Nikon D780", 1439422, "Obtenga versatilidad a través del esplendor de la fotografía de cuadro completo y video 4K, cámara lenta, intervalos, exposiciones largas y una gran cantidad de herramientas creativas e inspiradoras de toma de fotografías.");
cams3.set_id("c3");
let cams4 = new productos("Nikon D850", 1647207, "Una maravilla de ingenio, que logra una extraordinaria calidad de imagen, mayor eficiencia de recolección de luz, lectura de datos más rápida y un color más real.");
cams4.set_id("c4");
    //Objetivos
let obj1 = new productos("AF Nikkor 50mm f/1.4D", 238361, "Con excelentes ópticas NIKKOR y una ultra rápida apertura máxima f/1.4, el AF NIKKOR 50mm f/1.4D brinda una magnífica resolución y reproducción de color además de un clásico ángulo de visión de 50 mm.");
obj1.set_id("o1");
let obj2 = new productos("AF-S NIKKOR 24-85 mm f/3.5-4.5G ED VR", 322000, "Versátil lente que cubre perspectivas desde gran angular hasta telefoto medio, lo que lo hace un magnífico lente multipropósito para fotografías y videos en HD.");
obj2.set_id("o2");
let obj3 = new productos("AF-S NIKKOR 85mm f/1.8G", 444000, "Este lente para retratos telefoto medio es excelente para el estudio, el set o para capturar imágenes con la luz disponible y producir fotografías y videos en HD de personas con atractivos tonos de piel y un magnífico difuminado de fondo.");
obj3.set_id("o3");
let obj4 = new productos("AF-S NIKKOR 70-200mm f/4G ED VR", 902380, "Optimizado para capturar fotografías y videos en HD de alta calidad en cámaras tanto de formato FX como DX, este objetivo incorpora los últimos avances de Nikon en tecnología de lentes y diseño óptico.");
obj4.set_id("o4");

//Creo mis ARRAY y pusheo los objetos
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


//LÓGICA Y VISIBILIDAD DE LA PÁGINA
let nombreUs = prompt("Ingresa tu nombre");
alert ("¡Bienvenido a StopTempo, " + nombreUs + "! \nEn esta sección podrás comprar cámaras y objetivos Nikon."); 
let confirmCompra = confirm ("¿Te gustaría comprar alguno de nuestros productos?")

//Condición de compra
switch (confirmCompra){
    //VAMOS A COMPRAR
    case true:
        let flag = true ;
        while (flag) {
            let mensaje = "Indique lo que desea hacer: ";
            mensaje +=    "\n1) Mostrar Cámaras";
            mensaje +=    "\n2) Mostrar Objetivos";
            mensaje +=    "\n3) Mostrar todos los productos";
            mensaje +=    "\n4) Salir " ;
        
            let resp = prompt (mensaje);
        
            switch (resp){
                case "1": 
                        mostrarCams();
                        break;
                case "2":          
                        mostrarObjs();
                        break;
                case "3": 
                        mostrarTodo();
                        break;        
                case "4": 
                        alert("¡Gracias por usar nuestros servicios!");
                        flag=false;
                        break;        
                case null: 
                        alert("¡Gracias por usar nuestros servicios!");
                        flag=false;
                        break;
                default : 
                        alert ("No ingreso una opcion valida") ;                     
            }
        }             
        break;
    //NO COMPRO NADA
    case false:
        alert ("Disfruta del contenido de la página. ¡Estamos a tu disposición cuando lo desees!");
        break;
}

//FUNCIONES
    //Función que muestra cada uno de los elementos de los array.
function mostrarCams (){
    alert ("Nuestras cámaras son: \n");
    for (i=0; i<listCams.length; i++){
        alert (JSON.stringify(listCams[i].nombre) + " --> ID: " + JSON.stringify(listCams[i].id) +
        "\n Valor: $" + JSON.stringify(listCams[i].precio) + "\n" +
        JSON.stringify(listCams[i].descripcion)
        );
    };
}
function mostrarObjs (){
    alert ("Nuestros objetivos son: \n");
    for (i=0; i<listObjs.length; i++){
        alert (JSON.stringify(listObjs[i].nombre) + " --> ID: " + JSON.stringify(listObjs[i].id) + 
        "\n Valor: $" + JSON.stringify(listObjs[i].precio) + "\n" +
        JSON.stringify(listObjs[i].descripcion)
        );
    };
}


    //Funciones para mostrar todos los productos ordenados según precio
function mostrarTodo(){
    if (existen_productos()) {
        let resp = prompt("Los productos se ordenarán según su precio.\n Desea verlos en forma Ascendente (A) o Desendente (D)").toUpperCase();
        if (resp == "A") {
            listTodo.sort((a,b) =>{
                if (a.precio > b.precio) {
                    return 1;
                }
                if (a.precio < b.precio) {
                    return -1;
                }
                return 0;
            })
        }
        if (resp == "D"){
            listTodo.sort((a,b) =>{
                if (a.precio > b.precio) {
                    return -1;
                }
                if (a.precio < b.precio) {
                    return 1;
                }
                return 0;
            })
        }
        mostrar_arreglo();
    }
}
function existen_productos(){
    if (listTodo.length == 0){
        alert("No hay productos en stock");
        return false;
    }  
    return true;
}
function mostrar_arreglo(){
    let mensaje = "Los productos en stock son";  
    listTodo.forEach( (produc)=> {
        mensaje += "\n " + produc.mostrar_descripcion();
    })
    alert(mensaje);    
}