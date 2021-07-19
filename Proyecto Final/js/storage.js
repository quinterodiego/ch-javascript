const GuardarUsuario = () => {
    let usuario = JSON.stringify(usuarioActual);
    localStorage.setItem("usuario", usuario);
};

const CargarUsuario = () => {
    if(localStorage.length > 0){
        usuario = JSON.parse(localStorage.getItem("usuario"));
        usuarioActual = usuario;
        UsuarioActual(usuarioActual);
    }
};