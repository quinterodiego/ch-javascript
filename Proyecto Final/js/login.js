const CrearUsuario = (event) => {
    const nombre = $('#nombre').val();
    const email = $('#email').val();
    const password = $('#password').val();
    usuarioActual = new Usuario(nombre, email, password);

    $('#crear-usuario').trigger('reset');

    const mensajeUsuario = $('#mensajeUsuario');
    mensajeUsuario.removeClass('d-none');
    mensajeUsuario.addClass('d-block');

    GuardarUsuario(usuarioActual);

    mensajeUsuario.html(`Bienvenido <strong>${usuarioActual.nombre}</strong>!`);

    setInterval(() => {
        window.location = './views/manager.html';
    }, 2000);

    event.preventDefault();
};