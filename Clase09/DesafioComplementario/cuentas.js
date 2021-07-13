var cuentasDisponibles = ["Tarjeta Visa", "Netflix", "Spotify", "Edesur", "Metrogas", "Telecentro"];
var li = "";
var lista;

const CargarCuentasDisponibles = () => {
    cuentasDisponibles.forEach(e => li += `<li>${e}</li>`);
    lista = document.getElementById('lista_cuentas_disponibles');
    lista.innerHTML = li;
}