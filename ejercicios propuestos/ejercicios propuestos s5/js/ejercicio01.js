/*ejercicio01
Calcular el sueldo de empleado dependiendo de su categoria: A:5000, B:4500, C:3000 Si tiene mas de 10 años de labor se le aumenta un 10% de bonificacion
*/

function f01(){
    var nombre = document.getElementById("txtNombre").value;
    var categoria = document.getElementById("categoria").value;
    var anios = document.getElementById("txtAnio").value;
    var sueldo = 0;
    var bonificacion = 0;
    var total = 0;
    switch(categoria){
        case "A":
            sueldo = 5000;
            break;
        case "B":
            sueldo = 4500;
            break;
        case "C":
            sueldo = 3000;
            break;
        default:
            sueldo = 0;
            break;
    }
    if(anios > 10){
        bonificacion = sueldo * 0.1;
    }
    total = sueldo + bonificacion;
    document.getElementById("cab01").innerHTML = "El sueldo de "+nombre+" es: " + total;

}