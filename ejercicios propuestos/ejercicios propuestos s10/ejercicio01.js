/*Ejercicio 01
Crear la estructura de una clase Empleado (id,nombre, nroseguro, salario, estado)
mostrar sus datos en consola.*/

function Empleado (id, nombre, nroseguro, salario, estado) {
    this.id = id;
    this.nombre = nombre;
    this.nroseguro = nroseguro;
    this.salario = salario;
    this.estado = estado;
}

let empleado = new Empleado(120, "Van", "70251397", 5000, "activo");

console.log(`Id: ${empleado.id} | Nombre: ${empleado.nombre} | Nroseguro: ${empleado.nroseguro} | Salario: S/.${empleado.salario} | Estado: ${empleado.estado}`);



