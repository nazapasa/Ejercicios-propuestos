/*
ejercicio02
Ingreaar 5 notas de un alumno y calcular el promedio, tomando en cuenta el tipo de alumno:
    1. Si es regular el promedio sera entre las 5 notas.
    2. Si es espcial se tomara en cuenta las 4 notas mayores para el promedio.
    */
    function f01(){
        var nombre = document.getElementById("txtNombre").value;
        var tipoAlumno = document.getElementById("tipoAlumno").value;
        var nota1 = parseInt(document.getElementById("txtNota1").value);
        var nota2 = parseInt(document.getElementById("txtNota2").value);
        var nota3 = parseInt(document.getElementById("txtNota3").value);
        var nota4 = parseInt(document.getElementById("txtNota4").value);
        var nota5 = parseInt(document.getElementById("txtNota5").value);
    
        var promedio = 0;
        var suma = nota1 + nota2 + nota3 + nota4 + nota5;
        var menor = Math.min(nota1, nota2, nota3, nota4, nota5);
        if(tipoAlumno == "1"){
            promedio = suma / 5;
        }else{
            promedio = (suma - menor) / 4;
        }
        document.getElementById("cab01").innerHTML = "El promedio de "+nombre+" es: " + promedio;
    }
    
    function f02(txt,lbl){
        var nota = parseInt(document.getElementById(txt).value);
        document.getElementById(lbl).innerHTML =  nota;
    }
    