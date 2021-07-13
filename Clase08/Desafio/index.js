var nombreUsuario;
var apellidoUsuario;

nombreUsuario = prompt("Ingrese Nombre");
apellidoUsuario = prompt("Ingrese Apellido");

var usuario = new Usuario(nombreUsuario, apellidoUsuario);

document.getElementById('usuario').innerHTML = `${usuario.nombre} ${usuario.apellido}`;

var cuentasIngresadas = [];
var listaCuentas = '';
var nombreCuenta;
var importe;
var vencimiento;
var validar;

var lista = document.getElementById('listaCuentas');

do {
    nombreCuenta = prompt("Ingrese cuenta (Por ejemplo: Tarjeta VISA)");
    importe = prompt("Ingrese importe");
    vencimiento = prompt("Ingrese dia de vencimiento (dd/mm/aa)");
    validar = parseInt(prompt("Ingrese 0 para seguir, 1 para terminar"));
    let cuenta = `<li>Nombre: ${nombreCuenta} - Importe: $${importe} - Vto: ${vencimiento}</li>`;
    cuentasIngresadas.push(cuenta);
} while(validar == 0);

cuentasIngresadas.forEach( (c) => listaCuentas += c );

lista.innerHTML = listaCuentas;