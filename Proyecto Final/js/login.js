const CrearUsuario = (event) => {
    const nombre = $('#nombre').val();
    const email = $('#email').val();
    const password = $('#password').val();

    if(nombre == '' || email ==  '' || password == '') {
        return
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