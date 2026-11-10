
const boton_proyectos = document.getElementById("boton-proyectos");

boton_proyectos.addEventListener('click', scrollPagina);


function scrollPagina(){
    window.scrollTo(0, 900); // podemos usar window.ScrollTo para hacer que la página scrolle a unas ciertas coordenadas que le indicamos en esta funcion.
}