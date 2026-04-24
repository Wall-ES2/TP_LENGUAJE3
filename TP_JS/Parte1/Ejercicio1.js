/*Filtrar números pares de un array
o Dado un array de números, crea una función que devuelva solo los números
pares.*/


const numeros = [1,2,3,4,5,6,7,8,9,10]

function filtrarPares(lista) {
    return lista.filter(numero => numero % 2 === 0);
}

const resultado = filtrarPares(numeros);
console.log(resultado);