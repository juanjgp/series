/*
* JS Para la registro de los datos de entrada del usuario en otra página.
*
* @author Juan José González <j_jose8888@hotmail.com>
* {@link https://github.com/juanjgp/series GitHub}
*/

// Llamar a la función capturar series y datos de usuario.
get_series_usuario();

// Muestra lo que devuelve la función que comprueba si se ha escrito registro en la barra de busqueda,
if(!comprobacion_datos_usuario()) location = "index.html";
console.log(comprobacion_datos_usuario());

// Función mostrar datos de usuario en el primer formulario del registro.
function muestra_series(nombre, email, edad, serie1, serie2, serie3) {
    nombre_muestra.value = nombre;
    email_muestra.value = email;
    edad_muestra.value = edad;
    serie1_muestra.value = serie1;
    serie2_muestra.value = serie2;
    serie3_muestra.value = serie3;
}