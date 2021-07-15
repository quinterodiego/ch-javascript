var nombreUsuario;
var usuarioActual;
var listaUsuarios = [];

const CrearUsuario = () => {
    const formulario = document.getElementById('crear-usuario');
    formulario.addEventListener('submit', function(e) {
        nombreUsuario = document.getElementById('usuario').value;
        usuarioActual = new Usuario(nombreUsuario);
        listaUsuarios.push(usuarioActual);
        UsuarioActual(usuarioActual);
        ListarUsuarios();
        VaciarListaCuentas();
        ResetearFormulario(formulario);
        e.preventDefault();
    });
};

const AgregarCuenta = () => {
    const formulario = document.getElementById('formularioCuenta');
    formulario.addEventListener('submit', function(e){
        const nombre = document.getElementById('nombre').value;
        const importe = document.getElementById('importe').value;
        const vencimiento = document.getElementById('vencimiento').value;

        const cuenta = new Cuenta(nombre, importe, vencimiento);
        usuarioActual.ListaCuentas(cuenta);

        ListarCuentas(usuarioActual);

        ResetearFormulario(formulario);
        e.preventDefault();
    });
};

const ResetearFormulario = (formulario) => {
    formulario.reset();
};

const UsuarioActual= (usuario) => {
    const usuarioActual = document.getElementById('usuarioActual');
    usuarioActual.innerHTML = '';
    const elemento = document.createElement('span');
    elemento.innerHTML = `<span>Usuario Actual: <strong>${usuario.nombre}</strong></span>`;
    usuarioActual.appendChild(elemento);
}

const ListarUsuarios = () => {
    const comboListaUsuario = document.getElementById('listaUsuarios');
    const elemento = document.createElement('a');
    console.log("Lista usuarios", listaUsuarios);
    if(listaUsuarios != null) {
        listaUsuarios.forEach(e => {
            elemento.innerHTML = `<a class="dropdown-item" href="#">${e.nombre}</a>`;
            comboListaUsuario.appendChild(elemento);
        });
    }
};

const ListarCuentas = (usuario) => {
    const listaCuenta = document.getElementById('listaCuentas');
    const elemento = document.createElement('tr');
    usuario.cuentas.forEach(e => {
        elemento.innerHTML = `
            <tr class="card-body d-flex justify-content-around">
                <td>${e.nombre}</td>
                <td>$${e.importe}</td>
                <td>${e.vencimiento}</td>
            </tr>
        `;
        listaCuenta.appendChild(elemento);
    })
};

const VaciarListaCuentas = () => {
    const elemento = document.getElementById('listaCuentas');
    console.log(elemento.childNodes.length);
    while(elemento.childNodes.length >= 1) {
        elemento.removeChild(elemento.firstChild);
    }
}