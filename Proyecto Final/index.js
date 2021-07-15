class Cuenta {
    constructor(pNombre, pImporte, pVencimiento){
        this.nombre = pNombre;
        this.importe = pImporte;
        this.vencimiento = pVencimiento;
    }
}

class Metodo {
    agregarCuenta(cuenta){
        const listaCuenta = document.getElementById('listaCuentas');
        const elemento = document.createElement('div');
        elemento.innerHTML = `
            <div class="card text-center mt-5">
                <div class="card-body d-flex justify-content-around">
                    <strong>Nombre:</strong> ${cuenta.nombre}
                    <strong>Importe:</strong> $${cuenta.importe}
                    <strong>Vencimiento:</strong> ${cuenta.vencimiento}
                </div>
            </div>
        `;
        listaCuenta.appendChild(elemento);
    };

    resetearFormulario(){
        document.getElementById('formularioCuenta').reset();
    };

}

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