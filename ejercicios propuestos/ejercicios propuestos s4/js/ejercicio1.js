/*
Propuesto01.
En un evento de 5 dias (lunes 7 nov al viernes 11 nov) se desea colocar exposiciones de 1 o 2 horas maximo entre horarios de 9am a 8pm.
Hacer un programa que permita reservar espacios de tiempo que esten dentro del rango permitido y que no permita traslapes.
Al final se debera mostrar las fechas y horarios reservados.
*/
let dias = [];

loop:
do {
    let dia = parseInt(prompt("Ingrese el dia (7 - 11)"));
    if (dia < 7 || dia > 11) {
        console.log("El día debe estar entre 7 y 11");
        continue;
    }

    let horaDeInicio = parseInt(prompt("Ingrese la hora de inicio (9 - 20)"));
    if (horaDeInicio < 9 || horaDeInicio >= 20) { 
        console.log("El horario es de 9am a 8pm");
        continue;
    }

    let horasDeUso = parseInt(prompt("Ingrese la horas de uso (1 o 2)"));
    if ((horaDeInicio + horasDeUso > 20) && (horasDeUso == 1 || horasDeUso == 2)) { 
        console.log("El horario es de 9am a 8pm"); 
        continue;
    }

    let fechaHoraDeInicio = new Date(2022, 10, dia, horaDeInicio);
    let fechaHoraDeFin = new Date(2022, 10, dia, horaDeInicio + horasDeUso);

    if(dias[dia] === undefined) {
        dias[dia] = [];
    } else {
        for (let i = 0; i < dias[dia].length; i++) {
            if ((fechaHoraDeInicio >= dias[dia][i][0] && fechaHoraDeInicio < dias[dia][i][1]) || (fechaHoraDeFin > dias[dia][i][0] && fechaHoraDeFin < dias[dia][i][1])) {
                console.log("El horario está ocupado");
                continue loop;
            }
        }
    }
    dias[dia].push([
        new Date(2022, 10, dia, horaDeInicio),
        new Date(2022, 10, dia, horaDeInicio + horasDeUso)
    ]);
} while(confirm("¿Desea continuar?"));

for(let i = 7; i <= 11; i++) {
    if (dias[i] === undefined) { continue; }; 
    console.log(`${i} de Noviembre:`);
    for (let j = 0; j < dias[i].length; j++) {
        console.log(`Inicio: ${dias[i][j][0].getHours()} Fin: ${dias[i][j][1].getHours()}`);
    }
}