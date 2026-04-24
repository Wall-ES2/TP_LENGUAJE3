/*Sumar todos los elementos de un array
Dado un array de números, calcula la suma total de sus elementos.*/

const numeros = [1,4,6,3,1,5];

const sumarElementosArray = (array) => {
    let suma = 0;
    
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        suma=suma+element;
        
    }
    return suma
}

const resultado = sumarElementosArray(numeros);
console.log(resultado);
