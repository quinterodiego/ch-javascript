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

const CargarIncrementoGasto = () => {
    let selectIncrementoGasto = $('#ingresoGasto');
    let options = "<option>Ingreso</option><option>Gasto</option>";
    selectIncrementoGasto.html(options);
}

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
    let saldo = 0;
    let presupuesto = parseFloat(usuarioActual.presupuesto);
    if(usuario.cuentas.length > 0){
        usuario.cuentas.map(e => {
            let ingresoGasto = e.ingresoGasto === 0 ? '<span class="text-success font-weight-bold">+</span>' : '<span class="text-danger font-weight-bold">-</span>';

            texto += `
                <tr class="card-body justify-content-around">
                    <td align="center"><input type="checkbox" id="checkPagado"></td>
                    <td align="center">${ingresoGasto}</td>
                    <td align="center">${e.tipo}</td>
                    <td align="center">${e.nombre}</td>
                    <td align="center">$ ${e.importe}</td>
                    <td align="center">${e.vencimiento}</td>
                    <td align="center">
                        <a href="#">
                            <i class="far fa-trash-alt" onclick="eliminarCuenta(${e.id})">
                            </i>
                        </a>
                    </td>
                </tr>
            `;

            e.ingresoGasto === 0 ? total += e.importe : total -= e.importe;
            saldo = (presupuesto + total).toFixed(2);
            if (usuarioActual.presupuesto > saldo){
                $('#footCuentas').removeClass('alert-success').addClass('alert-danger');
            }else{
                $('#footCuentas').removeClass('alert-danger').addClass('alert-success');
            }
        })
        
        listaCuenta.html(texto);
        texto = `
            <tr>
                <th scope="col" align="center"></th>
                <th scope="col" align="center"></th>
                <th scope="col" align="center"></th>
                <th scope="col" align="center">Presupuesto Mensual: $ ${usuarioActual.presupuesto}</th>
                <th scope="col" align="center">Saldo $ ${saldo}</th>
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
    const elemento = `<span><strong>${usuario.nombre}</strong></span><img src="${usuario.avatar}" class="rounded-circle ml-1 mr-1">`;
    $("#usuarioActual").append(elemento);
    if(usuario.cuentas.length > 0) {
        ListarCuentas(usuario);
    }
}