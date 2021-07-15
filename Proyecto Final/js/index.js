

document.getElementById('formularioCuenta').addEventListener('submit', function(e){
    const nombre = document.getElementById('nombre').value;
    const importe = document.getElementById('importe').value;
    const vencimiento = document.getElementById('vencimiento').value;

    const cuentas = new Cuenta(nombre, importe, vencimiento);
    const usarMetodo = new Metodo();
    usarMetodo.agregarCuenta(cuentas);
    usarMetodo.resetearFormulario();
    e.preventDefault();
});