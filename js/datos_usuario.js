/*
* JS Para el almacenamiento de datos introducidos por el usuario.
*
* @author Juan José González <j_jose8888@hotmail.com>
* {@link https://github.com/juanjgp/series GitHub}
*/

// Variables globales para almacenar.
var nombre;
var email;
var edad;
var serie1;
var serie2;
var serie3;
var geolocalizacion;

// sessionStorage
/**
 * Almacenar datos en el sessionStorage
 * @param {HTMLElement} nombre nombre del usuario
 * @param {HTMLElement} email email del usuario
 * @param {HTMLElement} edad edad del usuario
 * @param {HTMLElement} serie1 serie favorita elegida por el usuario
 * @param {HTMLElement} serie2 segunda serie favorita elegida por el usuario
 * @param {HTMLElement} serie3 tercera serie favorita elegida por el usuario
 * @param {HTMLElement} geolocalización obtiene la localización del equipo
 */
// Función que guarda los datos introducidos por el usuario.
function series_usuario(nombre, email, edad, serie1, serie2, serie3) {

    sessionStorage.setItem('nombre', nombre.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('edad', edad.value);
    sessionStorage.setItem('serie1', serie1.options[serie1.selectedIndex].text);
    sessionStorage.setItem('serie2', serie2.options[serie2.selectedIndex].text);
    sessionStorage.setItem('serie3', serie3.options[serie3.selectedIndex].text);
    sessionStorage.setItem('geolocalizacion', geolocalizacion);
}

/**
 * Coger datos en el sessionStorage
 * @param {HTMLElement} nombre nombre del usuario
 * @param {HTMLElement} email email del usuario
 * @param {HTMLElement} edad edad del usuario
 * @param {HTMLElement} serie1 serie favorita elegida por el usuario
 * @param {HTMLElement} serie2 segunda serie favorita elegida por el usuario
 * @param {HTMLElement} serie3 tercera serie favorita elegida por el usuario
 */
// Función que captura los datos introducidos por el usuario.
function get_series_usuario() {
    nombre = sessionStorage.getItem('nombre');
    email = sessionStorage.getItem('email');
    edad = sessionStorage.getItem('edad');
    serie1 = sessionStorage.getItem('serie1');
    serie2 = sessionStorage.getItem('serie2');
    serie3 = sessionStorage.getItem('serie3');
    console.log("Nombre: " + nombre);
    console.log("Email: " + email);
    console.log("Edad: " + edad);
    console.log("Serie favorita: " + serie1);
    console.log("Segunda serie favorita: " + serie2);
    console.log("Tercera serie favorita: " + serie3);
    muestra_series(nombre, email, edad, serie1, serie2, serie3);
}

// Función que comprueba si se pasa a registro desde la barra de busqueda.
function comprobacion_datos_usuario() {
    if (nombre == null) {
        sessionStorage.setItem("Error", " No se ha rellenado el formulario. No te pases de listo.")
        return false;
    }
    return true;
}
// Función geolocalización
function geolocalizacion() {
    if (!navigator.geolocation) {
        geolocalizacion = "El navegador no es compatible con API Geolocation";
    }
    else {
        navigator.geolocation.getCurrentPosition(
            // Éxito
            (position)=>{geolocalizacion = 'Latitud: ' + position.coords.latitude + ', longitud: '+ position.coords.longitude},
            // Error
            ()=>{geolocalizacion = "La geolocalización no se ha podido realizar"}
        )
    }
}

// FIN sessionStorage
/**
 * Almacenar datos en el localStorage
 * @param {HTMLElement} nombre nombre del usuario
 * @param {HTMLElement} email email del usuario
 * @param {HTMLElement} edad edad del usuario
 * @param {HTMLElement} serie1 serie favorita elegida por el usuario
 * @param {HTMLElement} serie2 segunda serie favorita elegida por el usuario
 * @param {HTMLElement} serie3 tercera serie favorita elegida por el usuario
 */
// Almacenamiento en localStorage
function historico_series(nombre, email, edad, serie1, serie2, serie3) {
    let historicoStorage = localStorage.getItem('historico');
    var historico = [];
    if (historicoStorage == null) {
        historico = [];
    }
    else{
        historico = JSON.parse(historicoStorage);
    }
    let registroUsuario = {
        nombre: nombre.value,
        email: email.value,
        edad: edad.value,
        serie1:serie1.options[serie1.selectedIndex].text,
        serie2:serie2.options[serie2.selectedIndex].text,
        serie3:serie3.options[serie3.selectedIndex].text
    }
    historico.push(registroUsuario);
    localStorage.setItem('historico', JSON.stringify(historico));
}