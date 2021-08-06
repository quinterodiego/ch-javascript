class Usuario {
    constructor(pNombre, pApellido, pEmail, pPassword, pAvatar) {
        this.nombre =  pNombre;
        this.apellido = pApellido;
        this.email = pEmail;
        this.password = pPassword;
        this.presupuesto = 0;
        this.cuentas = [];
        this.avatar = pAvatar;
    }
}