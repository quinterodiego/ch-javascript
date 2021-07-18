const Guardar = () => {
    let usuarios = JSON.stringify(listaUsuarios);
    localStorage.setItem("usuarios", usuarios);
};

const Borrar = () => {
    localStorage.clear();
};

const CargarUsuarios = () => {
    if(localStorage.length > 0){
        listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
        ListarUsuarios();
    }
};