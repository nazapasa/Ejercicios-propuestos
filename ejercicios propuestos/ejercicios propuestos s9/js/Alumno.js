/*
Ejercicio 01
Cree la estructura de una clase Alumno con: nombre, promedio y estado
*/

class Alumno{

    constructor(nombre, promedio, estado){
        this.nombre = nombre;
        this.promedio = promedio;
        this.estado = estado;

        }

        saludar(){
            console.log(`El alumno ${this.nombre}, con el ${this.promedio} y se encuentra en ${this.estado}`);
    }

}