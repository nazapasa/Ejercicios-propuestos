/*Ejercicios:
Ejercicio 1.
Desarrollar una aplicacion para ingresar nombres y promedios de varios alumnos.
a. Mostrar la lista de alumnos con sus promedios.
b. Mostrar el promedio del grupo de alumnos.
c. Mostrar el promedio menor y mayor ingresados*/

let nombres = [];
let promedio = [];
var i= 0;
var p= 0;
while(confirm("Desea ingresar un nombre?", "¿Desea ingresar el promedio?" "Si", "No")){
    nombres[i] = prompt("Ingrese el nombre:");
    i++;
    promedio[p]= prompt("Ingrese el promedio");
}


console.log(nombres, promedio);

