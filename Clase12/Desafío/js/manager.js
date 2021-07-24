const AgregarCuenta = (event) => {
    const nombre = $('#nombre').val();
    const importe = $('#importe').val();
    const vencimiento = $('#vencimiento').val();
    const cuenta = new Cuenta(nombre, importe, vencimiento);
    usuarioActual.cuentas.push(cuenta);
    $('#formularioCuenta').trigger('reset');
    GuardarUsuario(usuarioActual);
    ListarCuentas(usuarioActual);
    event.preventDefault();
};

const ListarCuentas = (usuario) => {
    const listaCuenta = $('#listaCuentas');
    let texto = "";
    usuario.cuentas.forEach(e => {
        texto += `
            <tr class="card-body justify-content-around">
                <td align="center"><input type="checkbox" id="checkPagado"></td>
                <td align="center">${e.nombre}</td>
                <td align="center">$${e.importe}</td>
                <td align="center">${e.vencimiento}</td>
                <td align="center">
                    <a href="#" class="text-danger">
                        <i class="far fa-trash-alt"></i>
                    </a>
                </td>
            </tr>
        `;
        listaCuenta.html(texto);
    })
};