
// Declaramos la función (exactamente igual que antes)

const configurarInterruptorDeClase = (idElemento) => {
    
    const elemento = document.getElementById(idElemento);

    if (elemento !== null) {
        elemento.addEventListener("click", () =>{
            elemento.classList.toggle("bg-light");
            elemento.classList.toggle("text-bg-success");
        })
    } else {
        console.error("No se encontro elemento con ID: ", idElemento);
    }
}

configurarInterruptorDeClase("mi-elemento")