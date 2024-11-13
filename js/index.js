const productos = [
    // Pantalones Hombres
    { id: 1, tipo: "Pantalón", nombre: "Pantalón Jean", precio: 5000, genero: "Hombre" },
    { id: 2, tipo: "Pantalón", nombre: "Pantalón Cargo", precio: 6000, genero: "Hombre" },
    { id: 3, tipo: "Pantalón", nombre: "Pantalón Chino", precio: 10000, genero: "Hombre" },
    { id: 4, tipo: "Pantalón", nombre: "Pantalón Jogging", precio: 3000, genero: "Hombre" },
    { id: 5, tipo: "Pantalón", nombre: "Pantalón Formal", precio: 12000, genero: "Hombre" },

    // Camisas Hombres
    { id: 6, tipo: "Camisa", nombre: "Camisa Denim", precio: 7000, genero: "Hombre" },
    { id: 7, tipo: "Camisa", nombre: "Camisa Formal", precio: 9000, genero: "Hombre" },
    { id: 8, tipo: "Camisa", nombre: "Camisa a Cuadros", precio: 6000, genero: "Hombre" },
    { id: 9, tipo: "Camisa", nombre: "Camisa de Lino", precio: 8000, genero: "Hombre" },
    { id: 10, tipo: "Camisa", nombre: "Camisa Entallada", precio: 9000, genero: "Hombre" },

    // Remeras Hombres
    { id: 11, tipo: "Remera", nombre: "Remera Clásica", precio: 3000, genero: "Hombre" },
    { id: 12, tipo: "Remera", nombre: "Remera Deportiva", precio: 3000, genero: "Hombre" },
    { id: 13, tipo: "Remera", nombre: "Remera Polo", precio: 5000, genero: "Hombre" },
    { id: 14, tipo: "Remera", nombre: "Remera Gráfica", precio: 4000, genero: "Hombre" },
    { id: 15, tipo: "Remera", nombre: "Remera Chomba", precio: 4500, genero: "Hombre" },

    // Musculosas Hombres
    { id: 16, tipo: "Musculosa", nombre: "Musculosa Lisa", precio: 3000, genero: "Hombre" },
    { id: 17, tipo: "Musculosa", nombre: "Musculosa Deportiva", precio: 5000, genero: "Hombre" },
    { id: 18, tipo: "Musculosa", nombre: "Musculosa de Algodón", precio: 3000, genero: "Hombre" },
    { id: 19, tipo: "Musculosa", nombre: "Musculosa Estampada", precio: 4000, genero: "Hombre" },
    { id: 20, tipo: "Musculosa", nombre: "Musculosa Slim Fit", precio: 5000, genero: "Hombre" },

    // Pantalones Mujeres
    { id: 21, tipo: "Pantalón", nombre: "Pantalón Palazzo", precio: 5000, genero: "Mujer" },
    { id: 22, tipo: "Pantalón", nombre: "Pantalón de Jean", precio: 4000, genero: "Mujer" },
    { id: 23, tipo: "Pantalón", nombre: "Pantalón Culotte", precio: 5000, genero: "Mujer" },
    { id: 24, tipo: "Pantalón", nombre: "Pantalón Jogging", precio: 4000, genero: "Mujer" },
    { id: 25, tipo: "Pantalón", nombre: "Pantalón de Vestir", precio: 9000, genero: "Mujer" },

    // Camisas Mujeres
    { id: 26, tipo: "Camisa", nombre: "Camisa Blusa", precio: 5000, genero: "Mujer" },
    { id: 27, tipo: "Camisa", nombre: "Camisa de Seda", precio: 7000, genero: "Mujer" },
    { id: 28, tipo: "Camisa", nombre: "Camisa de Algodón", precio: 5000, genero: "Mujer" },
    { id: 29, tipo: "Camisa", nombre: "Camisa Oversize", precio: 6000, genero: "Mujer" },
    { id: 30, tipo: "Camisa", nombre: "Camisa Estampada", precio: 6000, genero: "Mujer" },

    // Remeras Mujeres
    { id: 31, tipo: "Remera", nombre: "Remera Crop Top", precio: 4000, genero: "Mujer" },
    { id: 32, tipo: "Remera", nombre: "Remera Básica", precio: 3000, genero: "Mujer" },
    { id: 33, tipo: "Remera", nombre: "Remera Gráfica", precio: 4500, genero: "Mujer" },
    { id: 34, tipo: "Remera", nombre: "Remera en V", precio: 4000, genero: "Mujer" },

    // Musculosas Mujeres
    { id: 35, tipo: "Musculosa", nombre: "Musculosa Casual", precio: 5000, genero: "Mujer" },
    { id: 36, tipo: "Musculosa", nombre: "Musculosa Deportiva", precio: 6000, genero: "Mujer" },
    { id: 37, tipo: "Musculosa", nombre: "Musculosa Crop", precio: 5000, genero: "Mujer" },
    { id: 38, tipo: "Musculosa", nombre: "Musculosa Estampada", precio: 5000, genero: "Mujer" },
    { id: 39, tipo: "Musculosa", nombre: "Musculosa de Encaje", precio: 6000, genero: "Mujer" }
];

const sinonimos = {
    camiseta: "remera",
    pantalon: "pantalón",
    camisa: "camisa",
    remera: "camiseta",
    musculosa: "top",
    jean: "vaquero",
    hombre: ["hombre", "masculino"],
    mujer: ["mujer", "femenino"]
};

function normalizarPalabra(palabra) {
    const palabraSinAcentos = palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return palabraSinAcentos.toLowerCase();
}

function buscarProductos() {
    const busqueda = document.getElementById("menu-buscar").value.toLowerCase().trim();
    const palabrasBusqueda = busqueda.split(" ").map(normalizarPalabra);

    const productosFiltrados = productos.filter(producto => {
        const nombreProducto = normalizarPalabra(producto.nombre);
        const tipoProducto = normalizarPalabra(producto.tipo);
        const generoProducto = normalizarPalabra(producto.genero);

        return palabrasBusqueda.every(palabra => {
            const palabrasAComparar = sinonimos[palabra] ? [palabra, sinonimos[palabra]] : [palabra];
            return palabrasAComparar.some(palabraAComparar => 
                nombreProducto.includes(palabraAComparar) || 
                tipoProducto.includes(palabraAComparar) || 
                generoProducto.includes(palabraAComparar)
            );
        });
    });

    mostrarProductos(productosFiltrados);
}

function mostrarProductos(filtrados) {
    const contenedor = document.querySelector(".lista-productos");
    contenedor.innerHTML = "";

    if (filtrados.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron productos</p>";
    } else {
        filtrados.forEach(producto => {
            contenedor.innerHTML += crearHTMLProducto(producto);
        });
    }
}

function crearHTMLProducto(producto) {
    return `
      <div class="producto">
        <img src="https://via.placeholder.com/150" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.tipo} para ${producto.genero}</p>
        <div class="precio">$${producto.precio}</div>
        <label for="talle-${producto.id}">Talle:</label>
        <select id="talle-${producto.id}">
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <button class="boton-comprar" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
      </div>
    `;
}

// Carrito
const carrito = [];

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito() {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        carrito.push(...JSON.parse(carritoGuardado));
        mostrarCarrito();
    }
}

function agregarAlCarrito(idProducto) {
    const talleSeleccionado = document.getElementById(`talle-${idProducto}`).value;
    const productoEnCarrito = carrito.find(item => item.id === idProducto && item.talle === talleSeleccionado);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        const producto = productos.find(p => p.id === idProducto);
        carrito.push({ ...producto, cantidad: 1, talle: talleSeleccionado });
    }
    mostrarCarrito();
    guardarCarrito();
}

function mostrarCarrito() {
    const contenedorCarrito = document.getElementById("carrito");
    contenedorCarrito.innerHTML = "";

    let total = 0;
    carrito.forEach((producto, index) => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;
        const item = document.createElement("div");
        item.classList.add("carrito-item");
        item.innerHTML = `
            <p>${producto.nombre} (Talle: ${producto.talle}) - $${producto.precio} x ${producto.cantidad} = $${subtotal}</p>
            <button onclick="cambiarCantidad(${index}, -1)">-</button>
            <span>${producto.cantidad}</span>
            <button onclick="cambiarCantidad(${index}, 1)">+</button>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        contenedorCarrito.appendChild(item);
    });

    const totalContainer = document.createElement("div");
    totalContainer.classList.add("carrito-total");
    totalContainer.innerHTML = `<strong>Total a pagar: $${total}</strong>`;

    const botonPedido = document.createElement("button");
    botonPedido.textContent = "Realizar Pedido";
    botonPedido.classList.add("btn-realizar-pedido");
    botonPedido.onclick = mostrarVentanaPedido;

    totalContainer.appendChild(botonPedido);
    contenedorCarrito.appendChild(totalContainer);
}

function mostrarVentanaPedido() {
    const resumenPedido = document.createElement("div");
    resumenPedido.classList.add("ventana-pedido");

    resumenPedido.innerHTML = `
        <div class="ventana-header">
            <h2>Resumen del Pedido</h2>
            <button class="btn-cerrar" onclick="cerrarVentanaPedido()">Cerrar</button>
        </div>
    `;

    let total = 0;
    const listaProductos = document.createElement("div");
    listaProductos.classList.add("lista-productos-pedido");
    carrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;
        const item = document.createElement("p");
        item.textContent = `${producto.nombre} (Talle: ${producto.talle}) - $${producto.precio} x ${producto.cantidad} = $${subtotal}`;
        listaProductos.appendChild(item);
    });

    const totalPedido = document.createElement("div");
    totalPedido.classList.add("total-pedido");
    totalPedido.innerHTML = `<strong>Total a pagar: $${total}</strong>`;

    resumenPedido.appendChild(listaProductos);
    resumenPedido.appendChild(totalPedido);

    document.body.appendChild(resumenPedido);
}

function cerrarVentanaPedido() {
    const ventana = document.querySelector(".ventana-pedido");
    if (ventana) {
        ventana.remove();
    }
}

function cambiarCantidad(index, cambio) {
    const producto = carrito[index];
    producto.cantidad += cambio;

    if (producto.cantidad <= 0) {
        eliminarDelCarrito(index);
    } else {
        mostrarCarrito();
        guardarCarrito();
    }
}

function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    mostrarCarrito();
    guardarCarrito();
}

cargarCarrito();
mostrarProductos(productos);
document.getElementById("menu-buscar").addEventListener("input", buscarProductos);