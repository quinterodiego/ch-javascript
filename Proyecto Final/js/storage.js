const Guardar = () => {
    document.getElementById('formGuardar').addEventListener('submit', function(e){
        let usuarios = JSON.stringify(listaUsuarios);
        localStorage.setItem("usuarios", usuarios);
        e.preventDefault();
    });
};

const Borrar = () => {
    document.getElementById('formBorrar').addEventListener('submit', function(e){
        localStorage.clear();
        e.preventDefault();
    });
};

const CargarUsuarios = () => {
    if(localStorage.length > 0){
        listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
        ListarUsuarios();
    }
};