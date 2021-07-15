class Metodo {
    agregarCuenta(cuenta){
        const listaCuenta = document.getElementById('listaCuentas');
        const elemento = document.createElement('tr');
        elemento.innerHTML = `
            <tr class="card-body d-flex justify-content-around">
                <td>${cuenta.nombre}</td>
                <td>$${cuenta.importe}</td>
                <td>${cuenta.vencimiento}</td>
            </tr>
        `;
        listaCuenta.appendChild(elemento);
    };

    resetearFormulario(){
        document.getElementById('formularioCuenta').reset();
    };

}