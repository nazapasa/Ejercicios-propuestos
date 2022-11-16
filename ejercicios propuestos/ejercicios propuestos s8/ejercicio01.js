$(document).ready(() => {
    $("#carrera").change(function() {
        mostrarCursos();
    });

    $("#ciclos").change(function() {
        mostrarCursos();
    });

    function mostrarCursos() {
        let carrera = $("#carrera").val();
        let ciclo = parseInt($("#ciclos").val());
        //alert(`${carrera} ${ciclo}`);

        $("table").hide();
        if (carrera == "b") {
            switch(ciclo) {
                case 1:
                    $("#b-1").show(1000);
                    break;
                case 2:
                    $("#b-2").show(1000);
                    break;
            }
        } else {
            switch(ciclo) {
                case 1:
                    $("#i-1").show(1000);
                    break;
                case 2:
                    $("#i-2").show(1000);
                    break;
            }
        }
    }
});