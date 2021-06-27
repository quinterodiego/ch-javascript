var numero;
var importe;
var total = 0;

for(let i = 0; i < 3; i++){
    numero = parseInt(prompt("Ingrese número de factura"));
    importe = parseInt(prompt("Ingrese el importe"));
    total = total + importe;
}

alert(`El importe total es: $${total}`);