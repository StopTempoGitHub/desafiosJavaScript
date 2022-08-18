//Identifico la etiqueta h1 con la clase titulo
let titulo = document.querySelector(".titulo");
    //modifico estilos del título
titulo.style.color = 'red';
titulo.style.margin = '20px';
titulo.style.textTransform = 'uppercase';

//Identifico los párrafos
let parrafos = document.querySelectorAll('.parrafo');
    //modifico estilos de los parrafos en la colección
for(let i = 0; i < parrafos.length; i++){
    parrafos[i].style.color = 'yellow';
    parrafos[i].style.fontSize = '20px'
}

//Creo un nuevo titulo
let tituloLista = document.createElement('h2');
let contentTiLis = document.createTextNode('Lista de Modificaciones');
tituloLista.appendChild(contentTiLis);
    //estilos modificados del titulo nuevo
tituloLista.style.fontSize = '35px'
tituloLista.style.margin = '20px'
tituloLista.style.color = 'orange'
    //adhiero el nuevo título al main
let menu = document.querySelector('.main');
menu.appendChild(tituloLista)

//Creo una nueva lista
let nuevaLista = document.createElement('ul');
    //adhiero la nueva lista al main
menu.appendChild(nuevaLista);

    //Creo los elementos de la lista en un array
let arrayList = new Array();
arrayList.push("- Estilos del título principal modificados.");
arrayList.push("- Estilos de los párrafos modificados.");
arrayList.push("- Creación de un h2 mediante JS");
arrayList.push("- Creación de una lista mediante JS");

// recorro el arreglo e invoca a la funcion agregar item
for (let i = 0 ; i < arrayList.length;i++){
    let item = arrayList[i];
    agregar_item(item);
}

function  agregar_item (item){
    // creo un elemento de tipo li
    let  li = document.createElement("li");
    // seteo su contenido
    li.textContent = item ;
    // seteo sus estilos
    li.style.color = 'pink'
    li.style.fontSize = '18px'
    //relaciono a la lista existente
    nuevaLista.appendChild(li);
}