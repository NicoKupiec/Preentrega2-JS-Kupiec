// Productos disponibles
const productosDisponibles = [
    { tipo: 'pantalon', colores: ['rojo', 'azul', 'verde'], talles: ['s', 'm', 'l'], precio: 60 },
    { tipo: 'pantalon de jean', colores: ['rojo', 'azul', 'verde'], talles: ['s', 'm', 'l'], precio: 60 },
    { tipo: 'pantalon de jogging', colores: ['rojo', 'azul', 'verde'], talles: ['s', 'm', 'l'], precio: 40 },
    { tipo: 'camisa', colores: ['rojo', 'azul', 'verde'], talles: ['s', 'm', 'l'], precio: 60 },
    { tipo: 'camisa elegante sport', colores: ['rojo', 'azul', 'verde'], talles: ['s', 'm', 'l'], precio: 110 },
    { tipo: 'camisa office', colores: ['rojo', 'azul', 'verde'], talles: ['s', 'm', 'l'], precio: 120 },
    { tipo: 'remera', colores: ['rojo', 'azul', 'verde'], talles: ['s', 'm', 'l'], precio: 60 },
    { tipo: 'remera informal', colores: ['rojo', 'azul', 'verde'], talles: ['s', 'm', 'l'], precio: 70 },
    { tipo: 'remera oversize', colores: ['rojo', 'azul', 'verde'], talles: ['s', 'm', 'l'], precio: 90 }
];

//validación de producto
function validarTipo(tipo) {
    return productosDisponibles.some(producto => producto.tipo === tipo.toLowerCase());
}

function validarColor(tipo, color) {
    const producto = productosDisponibles.find(producto => producto.tipo === tipo.toLowerCase());
    return producto && producto.colores.includes(color.toLowerCase());
}

function validarTalle(tipo, talle) {
    const producto = productosDisponibles.find(producto => producto.tipo === tipo.toLowerCase());
    return producto && producto.talles.includes(talle.toLowerCase());
}

function validarCantidad(cantidad) {
    return !isNaN(cantidad) && cantidad > 0;
}

// Obtener el precio del producto
function obtenerPrecioProducto(tipo) {
    const producto = productosDisponibles.find(producto => producto.tipo === tipo.toLowerCase());
    return producto ? producto.precio : 0;
}

// Filtro de producto
function filtrarSubcategoria(categoria) {
    const subcategorias = productosDisponibles.filter(producto => producto.tipo.includes(categoria) && producto.tipo !== categoria);
    
    if (subcategorias.length > 0) {
        let opciones = subcategorias.map(producto => producto.tipo).join(', ');
        return prompt(`Seleccionaste ${categoria}. Eligí un modelo: (${opciones})`).toLowerCase();
    } else {
        alert(`No hay modelos disponibles para ${categoria}`);
        return null;
    }
}

// Calcular el total y realizar compra
function calcularTotal(precioUnidad, cantidad) {
    return precioUnidad * cantidad;
    }
    
function realizarCompra() {
    let totalGeneral = 0;
    let resumenCompra = "";
        
    let seguirComprando = true;
        
    while (seguirComprando) {
    // Filtro por categoría y Subcategoría
    const categoria = prompt("Seleccioná una prenda (pantalón, camisa, remera):").toLowerCase();

    if (!['pantalon', 'camisa', 'remera'].includes(categoria)) {
        alert("El dato ingresado no es valido. Por favor, intentalo de nuevo.");
        continue;
    }

    const subcategoria = filtrarSubcategoria(categoria);
    if (!subcategoria || !validarTipo(subcategoria)) {
        alert("el dato ingresado no es valido. Por favor, intentalo de nuevo.");
        continue;
    }

    // selección de color talle y cantidad
    const color = prompt("Seleccioná un color (rojo, azul, verde):").toLowerCase();
    if (!validarColor(subcategoria, color)) {
        alert("Color no válido. Por favor, intentalo de nuevo.");
        continue;
    }

    const talle = prompt("Seleccioná un talle (S, M, L):").toLowerCase();
    if (!validarTalle(subcategoria, talle)) {
        alert("Talle no válido. Por favor, intentalo de nuevo.");
        continue;
    }

    const cantidad = Number(prompt("Ingresá la cantidad que queres comprar:"));
    if (!validarCantidad(cantidad)) {
        alert("Cantidad no válida. Por favor, ingresa un número válido.");
        continue;
    }

    // Calculo de precio por cantidad 
    const precioUnidad = obtenerPrecioProducto(subcategoria);
    const totalProducto = calcularTotal(precioUnidad, cantidad);

    // Resumen de la compra
    resumenCompra += `\n${cantidad} ${subcategoria}(s) de color ${color}, talle ${talle}, Precio por unidad: $${precioUnidad}, Total: $${totalProducto}`;

    alert(`Agregaste al carrito:\n${resumenCompra}\nTotal actual: $${totalGeneral}`);
    seguirComprando = confirm("¿Queres agregar otra prenda?");

    totalGeneral += totalProducto;
    }

    alert("Resumen final de tu compra:\n" + resumenCompra + "\nTotal a pagar: $" + totalGeneral);
    }

    // Función para que se ejecute al cargar la página
    window.onload = function() {
    setTimeout(realizarCompra, 500);
    };