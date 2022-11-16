/* 
Propuesto03.
Una empresa de seguros ingresa diariamente nuevos socios y para este genera claves unicas para cada uno de la siguiente manera:
Apellido paterno: maravi [ma]
Apellido materno: perez [pe]
Nro de doc de indentidad: 34657890 [7890]
Fecha de nacimiento: 15.03.2020 [150320] validar que la fecha sea anterior a la actual
Numero aleatorio de 4 digitos: [7530]
Clave generada: mape78901503207530
Hacer un programa que permita ingresar los datos requeridos y genere la clave para un usuario.
*/

let apellidoPaterno = prompt("Ingrese el apellido paterno");
let apellidoMaterno = prompt("Ingrese el apellido materno");
let dni = prompt("Ingrese el DNI");
let fechaNacimientoIngreso = prompt("Ingrese fecha de nacimiento").split("."); // ["15", "03", "2020"]
let fechaNacimiento = new Date(fechaNacimientoIngreso[2], parseInt(fechaNacimientoIngreso[1]) - 1, fechaNacimientoIngreso[0]);
let fechaActual = new Date();
if (fechaNacimiento < fechaActual) {
    let numeroAleatorio = Math.floor(Math.random() * 9000 + 1000);
    let clave = `${apellidoPaterno.substring(0, 2)}${apellidoMaterno.substring(0, 2)}${dni.slice(-4)}${fechaNacimientoIngreso[0]}${fechaNacimientoIngreso[1]}${fechaNacimiento.getFullYear().toString().slice(-2)}${numeroAleatorio}`
    console.log(clave);
} else {
    console.log("La fecha de nacimiento es mayor igual a la fecha actual");
}