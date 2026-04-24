const miArray = []

const formulario = document.getElementById("mi-formulario");
const inputDato = document.getElementById("input-dato");
const listaVisual = document.getElementById("lista-visual");

formulario.addEventListener("submit", (evento) => {
    
    //Evita que la pagina se recargue al apretar el boton
    evento.preventDefault();

    const nuevoValor = inputDato.value.trim();

    if (nuevoValor !== "") {
        miArray.push(nuevoValor);
        inputDato.value = "";
        actualizarPantalla();
    }
});

const actualizarPantalla = () => {   
    listaVisual.innerHTML = miArray.map(item => `<li class="list-group-item">${item}</li>`).join("");
    console.log("Array acutal: ", miArray);
}