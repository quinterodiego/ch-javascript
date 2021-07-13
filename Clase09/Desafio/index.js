var nombre;
var apellido;
var usuario;
var tituloUsuario;
var nombre_cuenta;
var importe_cuenta;
var cuotas_cuenta;
var mostrar;
var lista_cuotas = '';
var lista = '';

tituloUsuario = document.getElementById('usuario');

btn_cargar.addEventListener('click', () => {
    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;
    usuario = new Usuario(nombre, apellido);
    tituloUsuario.innerHTML = `Usuario: ${usuario.nombre} ${usuario.apellido}`;
});

mostrar = document.getElementById('mostrar');

mostrar.addEventListener('click', () => {
    nombre_cuenta = document.getElementById('nombre_cuenta').value;
    importe_cuenta = document.getElementById('importe_cuenta').value;
    cuotas_cuenta = document.getElementById('cuotas_cuenta').value;
    lista_cuotas = document.getElementById('lista_cuotas');
    for(let i = 0; i < cuotas_cuenta; i++){
        lista += `<li>Cuota ${i+1}: $${importe_cuenta}</li>`;
    }
    lista_cuotas.innerHTML = lista;
});