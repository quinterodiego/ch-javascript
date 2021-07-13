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

const CargarUsuario = (e) => {
    nombre = e.target.value;
    usuario = new Usuario(nombre);
    tituloUsuario.innerHTML = `Usuario: ${usuario.nombre}`;
}




const CargarCuotas = (e) => {
    nombre_cuenta = document.getElementById('nombre_cuenta').value;
    importe_cuenta = document.getElementById('importe_cuenta').value;
    cuotas_cuenta = parseInt(e.target.value);
    lista_cuotas = document.getElementById('lista_cuotas');
    for(let i = 0; i < cuotas_cuenta; i++){
        lista += `<li>Cuota ${i+1}: $${importe_cuenta}</li>`;
        lista_cuotas.innerHTML = lista;
    }
}