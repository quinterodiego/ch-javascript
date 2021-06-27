class Destino {
    constructor(pCiudad, pPais, pDistancia){
        this.ciudad = pCiudad;
        this.pais = pPais;
        this.distancia = pDistancia;
    }

    calcularPasaje(){
        let pasaje = (this.distancia / 100) * 2070;
        alert(`El valor del pasaje a la ciudad de ${this.ciudad} (${this.pais}) es:  $${pasaje}`);
    }
}

var ciudad;
var pais;
var distancia;
ciudad = prompt("Ingrese CIUDAD");
pais = prompt("Ingrese PAIS");
distancia = parseInt(prompt("Ingrese DISTANCIA"));

var destino = new Destino(ciudad, pais, distancia);

destino.calcularPasaje();