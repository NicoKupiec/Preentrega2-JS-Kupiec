// Tipos de producto y cantidad
function Tipo(tipo) {
    const tiposDisponibles = ['pantalon', 'camisa', 'remera'];
    return tiposDisponibles.includes(tipo.toLowerCase());
}

function Color(color) {
    const coloresDisponibles = ['rojo', 'azul', 'verde'];
    return coloresDisponibles.includes(color.toLowerCase());
}

function Talle(talle) {
    const tallesDisponibles = ['s', 'm', 'm', 'l'];
    return tallesDisponibles.includes(talle.toLowerCase());
}

function Cantidad(cantidad) {
    return !isNaN(cantidad) && cantidad > 0;
}

// Precio de productos
function obtenerPrecioProducto(tipo) {
    const precios = {
        pantalon: 50,
        camisa: 100,
        remera: 80
    };
    return precios[tipo.toLowerCase()] || 0;
}

// Calcular total
function calcularTotal(precioUnidad, cantidad) {
    return precioUnidad * cantidad;
}

// seleccion de producto y resumen de compra
function realizarCompra() {
    let totalGeneral = 0;
    let resumenCompra = "";

    let seguirComprando = true;
    
    while (seguirComprando) {
        const tipo = prompt("Seleccione un producto (pantalón, camisa, remera):");
        const color = prompt("Seleccione el color (rojo, azul, verde):");
        const talle = prompt("Seleccione el talle (S, M, L):");
        const cantidad = Number(prompt("Ingrese la cantidad que desea comprar:"));

        // Validaciones
        if (!Tipo(tipo)) {
            alert("Tipo de producto no válido. Por favor, intentelo de nuevo.");
            return;
        }
        if (!Color(color)) {
            alert("Color no válido. Por favor, intentelo de nuevo.");
            return;
        }
        if (!Talle(talle)) {
            alert("Talle no válida. Por favor, intentelo de nuevo.");
            return;
        }
        if (!Cantidad(cantidad)) {
            alert("Cantidad no válida. Por favor, ingrese un número válido.");
            return;
        }

        // Calcular producto indicado y cantidad
        const precioUnidad = obtenerPrecioProducto(tipo);
        const totalProducto = calcularTotal(precioUnidad, cantidad);

        // Total de productos seleccionados
        totalGeneral += totalProducto;

        resumenCompra += `${cantidad} ${tipo}(s) de color ${color}, talle ${talle}, Precio unitario: $${precioUnidad}, Total: $${totalProducto} \n`;
        // Seleccionar un nuevo producto o finalizar la compra
        seguirComprando = confirm(`Has seleccionado:\n
        ${cantidad} ${tipo}(s) de color ${color}, talle ${talle}, precio total: $${totalProducto}.\n
        ¿Deseas agregar otro producto?`);

    }
        // Resumen de compra productos seleccionados y costo toal
    alert(`Resumen de tu compra:\n${resumenCompra}\nTotal a pagar: $${totalGeneral}`);
}
        // Funcion para que se abra la pagina y luego se realice la llamada del primer promt
    window.onload = function() {
        setTimeout(realizarCompra, 500);
    };
