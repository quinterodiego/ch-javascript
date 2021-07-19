var usuarioActual;

const CrearUsuario = (event) => {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    usuarioActual = new Usuario(nombre, email, password);
    const mensajeUsuario = document.getElementById('mensajeUsuario');
    mensajeUsuario.classList.replace('d-none', 'd-block');
    GuardarUsuario(usuarioActual);
    mensajeUsuario.innerHTML = `Bienvenido <strong>${usuarioActual.nombre}</strong>!`;
        setInterval(() => {
            window.location = './views/manager.html';
        }, 2000);
    event.preventDefault();
};