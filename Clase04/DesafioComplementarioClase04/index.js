console.log('Hola');

var Cantidad = 0;
const Iva = 0.1321;
var Total = 0;

const Destino = parseInt(prompt('Ingrese numero de destino ( 1) Barcelona $18000 - 2) Paris $19000 - 3) Berlin $20000)'));

const MostrarDestino = () => alert(`El destino elegido es: ${Destino}`);

MostrarDestino();

Cantidad = parseInt(prompt('Ingrese la cantidad de pasajes'));

const CalcularPasajes = (destino, cantidad) => {
    switch(destino) {
        case 1:
            Total = ((18000 * Iva) + 18000) * cantidad;
            break;
        case 2:
            Total = ((19000 * Iva) + 19000) * cantidad;
            break;
        case 3:
            Total = ((20000 * Iva) + 20000) * cantidad;
            break;
    }
}

CalcularPasajes(Destino, Cantidad);
alert(`El total de su compra es: $${Total}`);