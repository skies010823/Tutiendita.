// Variables
let carrito = [];

// Función para agregar productos al carrito
document.querySelectorAll('.agregar').forEach((boton, index) => {
    boton.addEventListener('click', () => {
        // Obtener el nombre, precio y cantidad del producto
        const producto = {
            nombre: document.querySelectorAll('h3')[index].textContent,
            precio: document.querySelectorAll('.precio')[index].textContent,
        };

        // Agregar producto al carrito
        carrito.push(producto);
        mostrarCarrito();
    });
});

// Mostrar productos en el carrito
function mostrarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = '';

    carrito.forEach((producto) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - ${producto.precio}`;
        listaCarrito.appendChild(li);
    });
}

// Función de pago (por ahora, solo muestra un mensaje)
document.getElementById('pagar').addEventListener('click', () => {
    alert('Pago procesado. ¡Gracias por comprar en TuTiendita!');
});


