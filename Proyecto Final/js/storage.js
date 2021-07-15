const Guardar = () => {
    document.getElementById('formGuardar').addEventListener('submit', function(e){
        let usuarios = JSON.stringify(listaUsuarios);
        localStorage.setItem("usuarios", usuarios);
        e.preventDefault();
    });
};

const CargarUsuarios = () => {
    listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    console.log("Carga", listaUsuarios);
    ListarUsuarios();
};