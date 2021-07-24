const GuardarUsuario = (usuario) => {
    listaUsuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
};

const CargarUsuarios = () => {
    if(localStorage.length > 0) {
        listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
};

const UsuarioActual = (usuario) => {
    const elemento = `<span>Usuario: <strong>${usuario.nombre}</strong></span>`;
    $("#usuarioActual").append(elemento);
    if(usuario.cuentas.length > 0) {
        ListarCuentas(usuario);
    }

}