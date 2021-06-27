const listaCiudades = [];
const listaPaises = [];

class Destino {
    constructor(pCiudad, pPais){
        this.ciudad = pCiudad;
        this.pais = pPais;
    }
}

const ingresarDatos = () => {
    var destino = new Destino();
    destino.ciudad = prompt("Ingrese ciudad");
    destino.pais = prompt("Ingrese país");
    listaCiudades.push(destino.ciudad);
    listaPaises.push(destino.pais);
}

for(let i = 0; i < 3; i++){
    ingresarDatos();
}

alert("Ciudades ingresadas: " + listaCiudades[0] + " - " + listaCiudades[1] + " - " + listaCiudades[2]);
alert("Paises ingresados: " + listaPaises[0] + " - " + listaPaises[1] + " - " + listaPaises[2]);