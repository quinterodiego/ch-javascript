const listaDestinos = [];

class Destino {
    constructor(pCiudad, pPais, pDistancia){
        this.ciudad = pCiudad;
        this.pais = pPais;
        this.distancia = pDistancia;
    }
}

const ingresarDatos = () => {
    var destino = new Destino();
    destino.ciudad = prompt("Ingrese ciudad");
    destino.pais = prompt("Ingrese país");
    destino.distancia = prompt("Ingrese distancia");
    listaDestinos.push(destino);
}

for(let i = 0; i < 3; i++){
    ingresarDatos();
}

alert("Destinos ingresados: " + listaDestinos[0].ciudad +" (Distancia " + listaDestinos[0].distancia +"kms)" + " - " + listaDestinos[1].ciudad +" (Distancia " + listaDestinos[1].distancia +"kms)" + " - " + listaDestinos[2].ciudad +" (Distancia " + listaDestinos[2].distancia +"kms)");

const listaDistanciasOrdenadas = listaDestinos;
listaDistanciasOrdenadas.sort(function(a, b) {
    return a.distancia - b.distancia;
  });

alert("Distancias ordenadas de menor a mayor: " + listaDistanciasOrdenadas[0].distancia + "kms - " + listaDistanciasOrdenadas[1].distancia + "kms - " + listaDistanciasOrdenadas[2].distancia + "kms");