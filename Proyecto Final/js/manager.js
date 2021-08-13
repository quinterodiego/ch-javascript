CargarUsuarios();

CargarIncrementoGasto();

CargarTipoCuenta();

usuarioActual = JSON.parse(sessionStorage.getItem("UsuarioActual"));

UsuarioActual(usuarioActual);

var idCuenta = 0;

const CalcularPresupuesto = (event) => {
    let presupuesto = new Number($('#inputPresupuesto').val());
    usuarioActual.presupuesto = presupuesto.toFixed(2);
    GuardarUsuario(usuarioActual);
    ListarCuentas(usuarioActual);
    event.preventDefault();
}

const AgregarCuenta = (event) => {
    idCuenta = usuarioActual.cuentas.length + 1;
    const id = idCuenta;
    const ingresoGasto = $('#ingresoGasto').val() === "Ingreso" ? 0 : 1;
    const tipo = $('#tipoCuenta').val();
    const nombre = $('#nombre').val();
    const importe = new Number($('#importe').val());
    const fechaSplit = $('#vencimiento').val().split('-');
    const vencimiento = fechaSplit[2] + '-' + '' + fechaSplit[1] + '-' + fechaSplit[0];
    const cuenta = new Cuenta(id, ingresoGasto, tipo, nombre, importe.toFixed(2), vencimiento);
    usuarioActual.cuentas.push(cuenta);
    sessionStorage.setItem("UsuarioActual", JSON.stringify(usuarioActual));
    $('#formularioCuenta').trigger('reset');
    GuardarUsuario(usuarioActual);
    ListarCuentas(usuarioActual);
    event.preventDefault();
};

const eliminarCuenta = (idCuenta) => {
    let filtro = usuarioActual.cuentas.filter(e => e.id != idCuenta);
    usuarioActual.cuentas = filtro;
    sessionStorage.setItem("UsuarioActual", JSON.stringify(usuarioActual));
    GuardarUsuario(usuarioActual);
    ListarCuentas(usuarioActual);
}