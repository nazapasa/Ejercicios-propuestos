/*
Propuesto02.
En un edificio de 5 pisos hay 20 departamentos, se hacen cobros por mantenimiento de 120 soles por cada departamento, en cada piso hay 4 departamentos [101,102,103 y 104].
Se desea un programa que permita ingresar por piso que departamentos han pagado o no, para esto se ingresa: 
piso 1: 103,102
piso 2: 202,201,203
de tal manera que los que no se mencionen son los que no pagaron.
Mostrar un reporte de departamentos que estan al dia, los que no y el monto recaudado hasta el momento de un solo mes.
*/

let edificio = [[101], [], [], [], []];
let edificioTodos = [[101, 102, 103, 104], [201, 202, 203, 204], [301, 302, 303, 304], [401, 402, 403, 404], [501, 502, 503, 504]];
let montoPagado = 0;

do {
    let piso = parseInt(prompt("Ingrese piso"));
    let depa = prompt("Ingrese departamento").split(",");
    edificio[piso - 1] = depa;
    montoPagado += 120 * depa.length;
} while(confirm("¿Desea continuar?"));

console.log(`Monto total pagado: S/.${montoPagado}`);

for (let i = 0; i < 5; i++) {
    console.log(`Piso ${i+1}:`);
    for (let j = 0; j < edificio[i].length; j++) {
        console.log(`${edificio[i][j]}`);
        edificioTodos[i] = edificioTodos[i].filter(item => item != edificio[i][j]);
    }
}

console.log(edificioTodos);