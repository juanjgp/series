/*
* JS Para la comprobación de los datos de entrada del usuario.
*
* @author Juan José González <j_jose8888@hotmail.com>
* {@link https://github.com/juanjgp/series GitHub}
*/

// Captura en variables de los objetos.
var nombreInput;
var emailInput;
var edadInput;
var serie1Input;
var serie2Input;
var serie3Input;
var formulario;


// Función comprobar datos del formulario.
function comprobar_formulario(event) {
    if (serie1Input.value == "0") {
            serie1Input.focus();
            console.log("El campo de serie favorita no puede estar vacío");
            event.preventDefault();
            return false;
    }
    else if (serie2Input.value == "0") {
            serie2Input.focus();
            console.log("El campo de segunda serie favorita no puede estar vacío");
            event.preventDefault();
            return false;
    }
    else if (serie3Input.value == "0") {
            serie3Input.focus();
            console.log("El campo de tercera serie favorita no puede estar vacío");
            event.preventDefault();
            return false;
    }
    else{
        // Funciónes almacenamiento datos y series usuario e historicos.
        series_usuario(nombreInput, emailInput, edadInput, serie1Input, serie2Input, serie3Input);
        historico_series(nombreInput, emailInput, edadInput, serie1Input, serie2Input, serie3Input);
        return true;
    }
}

/**
 * Carga de objetos del DOM comprobaciones y eventos del formulario
 */
function carga_inicial() {
        // Captura de todos los Elements
        nombreInput = document.getElementById("nombre");
        emailInput = document.getElementById("email");
        edadInput = document.getElementById("edad");
        serie1Input = document.getElementById("serie1");
        serie2Input = document.getElementById("serie2");
        serie3Input = document.getElementById("serie3");
        formulario = document.getElementById("formulario");

        // Comprobar el error de registro
        if (sessionStorage.getItem("error") != null) 
        {
                error.innerText = sessionStorage.getItem("error");
                sessionStorage.removeItem("error");
        }
        formulario.addEventListener('submit', comprobar_formulario);
}

// Inicio de carga de eventos través de carga.
document.addEventListener('DOMContentLoaded', carga_inicial);
// Llamada a función geolocalización nada más cargar la página.
geolocalizacion()