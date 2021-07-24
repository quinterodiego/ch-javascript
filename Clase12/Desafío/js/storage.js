const GuardarUsuario = (usuarioActual) => {
    let usuario = JSON.stringify(usuarioActual);
    localStorage.setItem("usuario", usuario);
};

const CargarUsuario = () => {
    if(localStorage.length > 0) {
        usuario = JSON.parse(localStorage.getItem("usuario"));
        usuarioActual = usuario;
        UsuarioActual(usuarioActual);
    }
};

const UsuarioActual = (usuario) => {
    const elemento = `<span>Usuario: <strong>${usuario.nombre}</strong></span>`;
    $("#usuarioActual").append(elemento);
    ListarCuentas(usuario);
}