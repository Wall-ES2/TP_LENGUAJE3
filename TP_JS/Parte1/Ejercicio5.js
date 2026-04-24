/*Buscar un elemento en un array
Implementa una función que verifique si un nombre específico está presente
en un array y devuelva su índice o -1 si no está.*/

const nombres = ["Willy", "Facundo", "Alberto", "Aaron", "Abel", "Franco"]

const buscarNombre = (array, nombreBuscado) => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element===nombreBuscado) {
            return index;
            
        }
    }
    return -1;
}

console.log(buscarNombre(nombres,"Alberto"));