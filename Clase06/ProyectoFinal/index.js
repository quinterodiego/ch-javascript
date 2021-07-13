const listaDestinos = ["Montevideo, Uruguay", "Quito, Ecuador", "Chicago, EEUU"];

class Pasajero {
    constructor(pNombre, pApellido, pDni){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.dni = pDni;
    }
}

class Pasaje {
    constructor(pDestino, pPasajero, pValor) {
        this.destino = pDestino;
        this.pasajero = pPasajero;
        this.valor = pValor;
    }
}

const mostrarVenta = (datos) => {
    alert("Pasajero: " + datos.pasajero.nombre + " " + datos.pasajero.apellido + " - Destino: " + listaDestinos[datos.destino - 1] + " - Valor: $" + datos.valor);
}

const ingresarDatos = () => {
    var pasajero = new Pasajero();
    pasajero.nombre = prompt("Ingrese nombre:");
    pasajero.apellido = prompt("Ingrese apellido:");
    pasajero.dni = parseInt(prompt("Ingrese DNI"));
    var pasaje = new Pasaje();
    pasaje.destino = parseInt(prompt("Elija numero de destino (1-Montevideo (Uru). 2-Quito(Ecu). 3-Chicago(EEUU))"));
    pasaje.pasajero = pasajero;
    switch(pasaje.destino){
        case 1:
            pasaje.valor = 7500;
            break;
        case 2:
            pasaje.valor = 8900;
            break;
        case 3:
            pasaje.valor = 10500;
            break;
        default:
            pasaje.valor = 0;
            break;
    }

    mostrarVenta(pasaje);
}

ingresarDatos();