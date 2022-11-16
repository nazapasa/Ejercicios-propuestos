/*Ejercicio 2.
En una empresa se deben ingresar datos de los empleados para dar bonificaciones.
Los datos son: Nombre, categoria[A,B,C] y años de labor [1-10].
Sueldos:
A->3000
B->2500
C->2000
La bonificacion a pagar sera de 10% para los que trabajaron menos de 5 años y 15% para 5 o mas.
Mostrar las lista de empleados con sus nombres, sueldos y bonificaciones.}
Mostrar el sueldo mayor y menor.
Mostrar el prmedio de sueldos.
*/

let empleados = [], sueldosBase = [], sueldosFinal = [], bonificaiones = [];

while(confirm("¿Desea ingresar un nuevo empleado?")){
empleador.push(prompt("Ingrese el nombre del empleado"));
let sueldoBase = calcularSueldo(prompt("ingrese categoria"));
let aniosDelabor = parseInt(prompt("ingrese años de labor"));
sueldosBase.push(sueldoBase);
sueldosFinal.push(sueldoBase * (1 + calcularRatioBonificacion(aniosDelabor)));
bonificaciones.push(sueldoBase * calcularRatioBonificacion(aniosDekabor));
}

for(let i in empleados){
    console.log("El empleado" ${empleados[i]}\t|\tBonificaciones[i].toFixed(2)})

}






while(confirm("Desea ingresar un nombre?", "Si", "No")){
    nombres[i] = prompt("Ingrese el nombre:");
    i++;
}
console.log(nombres);

