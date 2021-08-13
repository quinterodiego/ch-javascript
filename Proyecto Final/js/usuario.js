class Usuario {
    constructor(pNombre, pEmail, pPassword, pAvatar) {
        this.nombre =  pNombre;
        this.email = pEmail;
        this.password = pPassword;
        this.presupuesto = 0;
        this.cuentas = [];
        this.avatar = pAvatar;
    }
}