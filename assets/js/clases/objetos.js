//Definimos la estructura de mis objetos
class productos {
    constructor(nombre, precio, descripcion, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.id = 1;
    }
    
    
    //Muestra la descripcion completa de los productos     
    mostrar_descripcion(){
        return ('"' + this.nombre + '"' + " --> ID: " +this.id + " - Valor: $" + this.precio);
    }

    //Método del objeto para setear un nuevo ID
    set_id(nuevo_id){
        this.id = nuevo_id;
    }
};