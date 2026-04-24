
const baseDeDatos = [
    { 
        titulo: "Auriculares Corsair HS80", 
        descripcion: "Audio espacial inmersivo con micrófono de calidad broadcast y almohadillas viscoelásticas. Especiales para gaming competitivo.", 
        imagen: "https://katech.com.ar/wp-content/uploads/AUR223-jpg.webp",
        precio: 150000
    },
    { 
        titulo: "Teclado Logitech G Pro X", 
        descripcion: "Diseño Tenkeyless (TKL) ultracompacto con interruptores GX Blue audibles y táctiles, diseñado para torneos de eSports.", 
        precio: 135000,
        imagen: "https://gorilagames.com/img/Public/1019-producto-g-pro-x-teclado-logitech-1-system-linq-enumerabletakeiteratord.jpg" 
    },
    { 
        titulo: "Monitor Gamer ViewSonic 24\"", 
        descripcion: "Pantalla IPS Full HD a 144Hz con 1ms de tiempo de respuesta y tecnología AMD FreeSync Premium para un juego súper fluido.", 
        precio: 280000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_964666-MLA91872883455_092025-O.webp" 
    }
];


const contenedor = document.getElementById("contenedor-tarjetas");


const generarTarjetas = () => {
    contenedor.innerHTML = baseDeDatos.map(producto => `
        <div class="col-md-4 mb-4">
            
            <div class="card h-100 shadow-sm border-0 tarjeta-interactiva overflow-hidden">
                
                <img src="${producto.imagen}" class="card-img-top p-3" alt="${producto.titulo}" style="height: 200px; width: 100%; object-fit: contain; background-color: white;">
                
                <div class="card-body d-flex flex-column"> <h5 class="card-title fw-bold text-dark">${producto.titulo}</h5>
                    <p class="card-text text-muted" style="font-size: 0.9rem;">${producto.descripcion}</p>
                    
                    <div class="mt-auto"> 
                        <h4 class="fw-bold text-primary mb-3">$${producto.precio}</h4>
                        <button class="btn btn-outline-primary w-100 fw-bold">Ver Producto</button>
                    </div>
                </div>
                
            </div>
        </div>
    `).join("");
};


generarTarjetas();