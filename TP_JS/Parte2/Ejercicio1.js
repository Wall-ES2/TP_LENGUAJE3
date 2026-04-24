/*Crear una lista dinámica
o Usando un array de nombres, crea dinámicamente elementos <li> dentro de
un <ul> en el DOM.*/

const nombres = ["Gaston", "Alberto", "Mendoza", "Coz", "Nacho"];

const contenedorLista = document.getElementById("mi-lista");

nombres.forEach(nombre => {
    const elementoLi = document.createElement("li");

    elementoLi.textContent = nombre;

    contenedorLista.appendChild(elementoLi);
})

/*2. Modificar contenido de un elemento por su ID
o Usa una función que reciba un ID y un nuevo texto, modificando el contenido
del elemento correspondiente.*/