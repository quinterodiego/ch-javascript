const remera = 1200;
const buzo = 2200;
const camisa = 2500;
var producto;
var subTotal;
var iva = 0.21;
var total;
console.log("Hola");

const productoElegido = prompt("Ingrese el producto (Remera $1200 - Buzo $2200 - Camisa $2500)");

switch(productoElegido) {
    case 'remera':
        producto = remera;
    case 'buzo':
        producto = buzo;
    case 'camisa':
        producto = camisa;
}

const cantidad = parseInt(prompt("Ingrese cantidad"));

console.log(cantidad);
const calcularIva = (valorProducto, valorIva) => valorProducto * valorIva;

const calcularCompra = (producto, cantidad) => {
    subTotal = calcularIva(producto, iva);
    return (producto + subTotal) * cantidad;
}

total = calcularCompra(producto, cantidad);
alert(`El importe de tu compra es: $${total}`);