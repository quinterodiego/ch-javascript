var nombreUsuario;
var usuarioActual;
var listaUsuarios = [];

const CrearUsuario = (event) => {
    const formulario = document.getElementById('crear-usuario');
    nombreUsuario = document.getElementById('usuario').value;
    usuarioActual = new Usuario(nombreUsuario);
    listaUsuarios.push(usuarioActual);
    UsuarioActual(usuarioActual);
    ListarUsuarios();
    VaciarListaCuentas();
    ResetearFormulario(formulario);
    event.preventDefault();
};

const AgregarCuenta = (event) => {
    const formulario = document.getElementById('formularioCuenta');
    const nombre = document.getElementById('nombre').value;
    const importe = document.getElementById('importe').value;
    const vencimiento = document.getElementById('vencimiento').value;
    const cuenta = new Cuenta(nombre, importe, vencimiento);
    usuarioActual.cuentas.push(cuenta);

    ListarCuentas(usuarioActual);
    ResetearFormulario(formulario);
    event.preventDefault();
};

const ResetearFormulario = (formulario) => {
    formulario.reset();
};

const UsuarioActual= (usuario) => {
    usuarioActual = usuario;
    const nombreUsuarioActual = document.getElementById('nombreUsuarioActual');
    const elemento = document.createElement('span');

    nombreUsuarioActual.innerHTML = '';
    elemento.innerHTML = `<span>Usuario Actual: <strong>${usuario.nombre}</strong></span>`;
    nombreUsuarioActual.appendChild(elemento);

    ListarCuentas(usuarioActual);
}

const ListarUsuarios = () => {
    const comboListaUsuario = document.getElementById('listaUsuarios');
    let texto = `<option class="dropdown-item" href="#">Cambiar usuario</option>`;
    listaUsuarios.forEach(e => {
        texto += `<option class="dropdown-item" href="#">${e.nombre}</option>`;
    });
    comboListaUsuario.innerHTML = texto;
};

const ListarCuentas = (usuario) => {
    const listaCuenta = document.getElementById('listaCuentas');
    let texto = "";
    usuario.cuentas.forEach(e => {
        texto += `
            <tr class="card-body justify-content-around">
                <td align="center">${e.nombre}</td>
                <td align="center">$${e.importe}</td>
                <td align="center">${e.vencimiento}</td>
                <td align="center">
                    <a href="#" class="text-primary">
                        <i class="far fa-edit"></i>
                    </a>
                </td>
                <td align="center">
                    <a href="#" class="text-danger">
                        <i class="far fa-trash-alt"></i>
                    </a>
                </td>
            </tr>
        `;
        listaCuenta.innerHTML = texto;
    })
};

const VaciarListaCuentas = () => {
    const elemento = document.getElementById('listaCuentas');
    while(elemento.childNodes.length >= 1) {
        elemento.removeChild(elemento.firstChild);
    }
}

const CambiarUsuario = () => {
    let e = document.getElementById("listaUsuarios");
    let strUsuario = e.options[e.selectedIndex].text;
    UsuarioActual(listaUsuarios.find(e => strUsuario == e.nombre));
};