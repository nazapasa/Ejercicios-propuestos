/*
Ejercicio 02
Desarrollar un programa que permita ingresar datos de un alumno (id, nombre, apellido, edad, promedio, estado) y muestre en consola los datos ingresados.
El estado es aprobo si el promedio es mayor o igual a 13, caso contrario es desaprobado.
En la estructura de la clase Alumno, crear un método que permita mostrar los datos del alumno.
Tome en cuenta que debe agregarse los datos del curso que esta ellvando el alumno (id, nombre, creditos, horas, estado)
Ejemplo:  Un alumno esta cursando el curso de Programación I (id, nombre, creditos, horas, estado) y su estaso es aprobado

*/

class Curso{
    static idCurso = 0;
    constructor(nombre,creditos, horas,estado){
        this.idCurso = ++Curso.idCurso;
        this.nombre = nombre;
        this.creditos = creditos;
        this.horas = horas;
        this.estado = estado;
    }
}
/*
console.log(Curso.idCurso);
const curso1 = new Curso("Programacion I", 4, 520, 'Habilitado');
const curso2 = new Curso("Programacion II", 5, 560, 'Habilitado');
console.log(curso1);
console.log(curso2);
console.log(Curso.idCurso);
*/
class Alumno{
    static idAlumno = 0;
    constructor(nombre, apellido, edad, promedio){
        this.idAlumno = ++Alumno.idAlumno;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.promedio = promedio;
        this.curso = null;
    }
    mostrar(){
        console.log(this);
    }
    setCurso(curso){
        this.curso = curso;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    get getEstado(){
        this.estado = (this.promedio >= 13) ? 'Aprobado' : 'Desaprobado';
        return this.estado;
    }
}
const curso1 = new Curso("Programacion I", 4, 520, 'Habilitado');
const alumno1 = new Alumno("Juan", "Perez", 25, 9);
alumno1.setCurso(curso1);
alumno1.setNombre("Juan Carlos");
alumno1.mostrar();




