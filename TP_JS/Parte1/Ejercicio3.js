/*3.Ordenar un array de nombres alfabéticamente
Recibe un array con nombres y devuélvelo ordenado de A-Z.*/

const nombres = ["Willy", "Facundo", "Alberto", "Aaron", "Abel", "Franco"]



const ordenarAlfabeticamente = (lista) => {
    let resultado = [...lista];

    //BubbleSort 
    for (let i = 0; i < resultado.length; i++) {
        for (let j = 0; j < resultado.length - 1; j++) {
               
            if (resultado[j] > resultado[j+1]) {
                [resultado[j], resultado[j+1]]= [resultado[j+1], resultado[j]];
            }
        }
        
    }
    return resultado;
}

resultado = ordenarAlfabeticamente(nombres);

console.log(resultado);