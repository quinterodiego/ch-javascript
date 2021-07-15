class Usuario {
    constructor(pNombre) {
        this.nombre =  pNombre;
        this.cuentas = [];
    }

    ListaCuentas = (cuenta) => {
        this.cuentas.push(cuenta);
    }
}