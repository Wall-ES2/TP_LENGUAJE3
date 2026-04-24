
const ModificarContenido = (idElemento, nuevoTexto) => {
    
    const elemento = document.getElementById(idElemento);

    if (elemento!==null) {
        elemento.textContent = nuevoTexto;   
    } else {
        console.error("No se encontro ningun elemento con el ID: ", idElemento);
    }
}

//Pruebas

ModificarContenido("mensaje-bienvenida", "Hola, bienvenido a mi Trabajo Practico!")

ModificarContenido("estado", "Datos cargados exitosamente.")