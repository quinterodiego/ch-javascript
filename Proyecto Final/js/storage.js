const GuardarUsuario = (usuario) => {
    let nuevaLista;
    if(listaUsuarios.length > 0) {
        nuevaLista = listaUsuarios.filter(function(u){
            return u.nombre !== usuario.nombre; 
        })
        nuevaLista.push(usuario);
        localStorage.setItem("Usuarios", JSON.stringify(nuevaLista));
    }else{
        listaUsuarios.push(usuario);
        localStorage.setItem("Usuarios", JSON.stringify(listaUsuarios));
    }
};

const CargarUsuarios = () => {
    if(localStorage.length > 0) {
        listaUsuarios = JSON.parse(localStorage.getItem("Usuarios"));
    }
};

const CargarTipoCuenta = () => {
    $.ajax({
        url: "./../db/tiposDeCuenta.json",
        success: function (datos) {
            let selectTipoCuenta = $('#tipoCuenta');
            let options = "<option>Elija un tipo</option>";
            datos.map(d => {
                options += `<option>${d.tipo}</option>`;
            });
            selectTipoCuenta.html(options);
        },
    });
}

const ListarCuentas = (usuario) => {
    const listaCuenta = $('#listaCuentas');
    let texto = "";
    let total = 0;
    if(usuario.cuentas.length > 0){
        usuario.cuentas.map(e => {
            texto += `
                <tr class="card-body justify-content-around">
                    <td align="center"><input type="checkbox" id="checkPagado"></td>
                    <td align="center">${e.tipo}</td>
                    <td align="center">${e.nombre}</td>
                    <td align="center">$${e.importe}</td>
                    <td align="center">${e.vencimiento}</td>
                    <td align="center">
                        <a href="#" class="text-danger">
                            <i class="far fa-trash-alt" onclick="eliminarCuenta(${e.id})">
                            </i>
                        </a>
                    </td>
                </tr>
            `;
            total += e.importe;
        })
        listaCuenta.html(texto);
        texto = `
            <tr>
                <th scope="col" align="center"></th>
                <th scope="col" align="center"></th>
                <th scope="col" align="center"></th>
                <th scope="col" align="center">Total $${total}</th>
                <th scope="col" align="center"></th>
                <th scope="col" align="center"></th>
            </tr>
        `;
        $('#footCuentas').html(texto);
    }else{
        $('#footCuentas').html('');
        listaCuenta.html(texto);
    }
};

const UsuarioActual = (usuario) => {
    const elemento = `<span><strong>${usuario.nombre}</strong></span>`;
    $("#usuarioActual").append(elemento);
    if(usuario.cuentas.length > 0) {
        ListarCuentas(usuario);
    }
}