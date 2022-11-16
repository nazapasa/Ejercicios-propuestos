/*
Ejercicio 02
Desarrollar una aplicación que permita agregar elementos a un TextArea
de tal modo que se elija el articulo de una lista de selección y se elija si se compra con o sin promocion.
sin botones
*/

function f01(){

    

    var indice = document.getElementById("select").selectedIndex;
    var valor = document.getElementById("select").options[indice].value;
    var texto = document.getElementById("select").options[indice].text;
    
    document.getElementById("mensaje").innerHTML = "Valor: " + f02() + " Texto: " + texto;
}

function f02(){
    var indice = document.getElementById("flexRadioDefault1").selectedIndex;
}
