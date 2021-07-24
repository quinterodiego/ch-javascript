var listaUsuarios = [];
var usuarioActual;
var nombre = "";
var email = "";
var password = "";

CargarUsuarios();

const CrearUsuario = (event) => {
    nombre = $('#nombre').val();
    email = $('#email').val();
    password = $('#password').val();

    if(nombre == '' || email ==  '' || password == '') {
        return;
    }

    $('#crear-usuario button').attr('data-toggle', 'modal');
    $('#crear-usuario button').attr('data-target', '#exampleModalCenter');

    usuarioActual = new Usuario(nombre, email, password);

    $('#crear-usuario').trigger('reset');

    GuardarUsuario(usuarioActual);

    sessionStorage.setItem("UsuarioActual", JSON.stringify(usuarioActual));

    setInterval(() => {
        window.location = './views/manager.html';
    }, 1000);

    event.preventDefault();
};

const ValidarNombre = () => {
        let inputNombre = $('#nombre').val();
        let nombreExiste = listaUsuarios.find((e) => e.nombre === inputNombre)
        if(nombreExiste != null) {
            $('#nombreExiste').removeClass('d-none');
        }else{
            $('#nombreExiste').addClass('d-none');
        }
}

const ValidarEmail = () => {
    let inputEmail = $('#email').val();
    let emailExiste = listaUsuarios.find((e) => e.email === inputEmail)
    if(emailExiste != null) {
        $('#emailExiste').removeClass('d-none');
    }else{
        $('#emailExiste').addClass('d-none');
    }
}