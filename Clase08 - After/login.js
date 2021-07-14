var usuarioBD = "admin";
var passwordBD = 123456;

const Ingresar = () => {
    let usuario = document.getElementById('usuario').value;
    let password = document.getElementById('password').value;
    let mensajeValidacion = document.getElementById('mensaje-validacion');

    if (usuario == usuarioBD && password == passwordBD) {
        mensajeValidacion.className = 'text-success';
        mensajeValidacion.innerHTML = `Bienvenido ${usuario}`;
        setInterval(() => {
            window.location = './index.html';
        }, 3000);
    } else {
        mensajeValidacion.className = 'text-danger';
        mensajeValidacion.innerHTML = "Usuario o contraseña incorrecta";
    }
};