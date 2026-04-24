/*Eliminar elementos duplicados
    o Crea una función que reciba un array y elimine los elementos repetidos,
    devolviendo un array con valores únicos.*/

const elementos = ['3', 3, "Hola", 32, 4.3, "Hola", 3]

function eliminarDuplicados(array){
    return array.filter((valor,indice,arrayOriginal)=>{
        return arrayOriginal.indexOf(valor)===indice;
    })
}

const resultado = eliminarDuplicados(elementos);

console.log(resultado);