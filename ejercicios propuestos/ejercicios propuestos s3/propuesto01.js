// Variables globales
var contadorPacientes = 0;

leerDatos();

function leerDatos(){
    do{
        ingresarDatos();
        contadorPacientes++;
    }while(confirm("Desea ingresar mas datos?"));
    console.log("Cantidad de pacientes: " + contadorPacientes);
}

function ingresarDatos(){
    let edad = eval(prompt("Introduce la edad"));
    let sexo = prompt("Introduce el sexo [M/F]");
    let distrito = prompt("Introduce el distrito");
    
}
