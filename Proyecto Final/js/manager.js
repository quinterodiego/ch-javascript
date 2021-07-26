CargarUsuarios();

usuarioActual = JSON.parse(sessionStorage.getItem("UsuarioActual"));
console.log("usuario: ", usuarioActual);
UsuarioActual(usuarioActual);

var idCuenta = 0;

const AgregarCuenta = (event) => {
    idCuenta = usuarioActual.cuentas.length + 1;
    const id = idCuenta;
    const nombre = $('#nombre').val();
    const importe = $('#importe').val();
    const vencimiento = $('#vencimiento').val();
    const cuenta = new Cuenta(id, nombre, importe, vencimiento);
    usuarioActual.cuentas.push(cuenta);
    sessionStorage.setItem("UsuarioActual", JSON.stringify(usuarioActual));
    $('#formularioCuenta').trigger('reset');
    GuardarUsuario(usuarioActual);
    ListarCuentas(usuarioActual);
    event.preventDefault();
};