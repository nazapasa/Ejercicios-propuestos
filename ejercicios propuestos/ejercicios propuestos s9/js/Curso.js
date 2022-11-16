/*
Ejercicio 02
Cree la estructura de una clase Curso con: nombre, horas y creditos
*/ 

//definir una clase Persona 
class Curso{
    constructor(nombre, horas, creditos){
        this.nombre = nombre;
        this.edad = horas;
        this.creditos = creditos;
    }
    saludar(){
        console.log(`Curso,  ${this.nombre}, ${this.horas}, ${this.creditos}`);
    }
}