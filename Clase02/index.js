var nombre = prompt("Ingrese su nombre");
var apellido = prompt("Ingrese su apellido");
var edad = parseInt(prompt("Ingrese su edad"));
var limiteEdad = 21;

if(edad >= limiteEdad){
    alert("Bienvenido " + nombre + " " + apellido + " - Tienes " + edad + " años. ERES MAYOR DE EDAD!!!");
}else{
    alert("Lo lamentamos " + nombre + " " + apellido + " - Tienes " + edad + " años y NO ERES MAYOR DE EDAD!!!");
}       