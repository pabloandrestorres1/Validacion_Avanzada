function validacion() {
    var nomtarjER = /^ [\p{L} \-\.]+ /;
    var numtarjER = /^ [\d ]{10,30}/;

    var numerotarjeta = document.getElementById("numtarj");
    var nombretarjeta = document.getElementById("nomtarj");
    var fechacaducidad = document.getElementById("feccad");
    var cvc = document.getElementById("cvc");

    let testBoolean = true;

    if (numerotarjeta.value == "") {
        alert("[ERROR] Número de Tarjeta Vacío");
        testBoolean = false;
    }else if (numtarjER == false) {
        alert("[ERROR] El Número de Tarjeta introducido no es válido");
        testBoolean = false;
    }

    if (nombretarjeta.value == "") {
        alert("[ERROR] Nombre de Tarjeta Vacío");
        testBoolean = false;
    }else if (nomtarjER == false) {
        alert("[ERROR] El Nombre de tarjeta introducido no es válido");
        testBoolean = false;
    }

    if (fechacaducidad.value == "") {
        alert("[ERROR] Fecha de Caducidad Vacía");
        testBoolean = false;
    }

    if (cvc.value == "") {
        alert("[ERROR] Código CVC Vacío");
        testBoolean = false;
    } 

    if (testBoolean == true) {
        alert("El formulario se ha enviado correctamente");
      }
}
