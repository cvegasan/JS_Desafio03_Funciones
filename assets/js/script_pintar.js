// Se tiene como base el siguiente ejercicio que cambia el color de fondo de un elemento de
// HTML al hacerle click (3 Puntos)

// 2.1  El código debe estar en 2 archivos: pintar.html y script.js. El script debe
//      estar dentro de la carpeta assets/js (1 Punto).
//      Para obtener el puntaje debes entregar los archivos cumplimiendo la
//      estructura pedida en conjunto con los requerimientos de 3.2 y 3.3
const ele = document.querySelector("#ele1");
ele.addEventListener("click", () => {
        ele.style.backgroundColor = 'yellow';
});

// 2.2  Modifica la función para que reciba el elemento clickeado de forma de no
//      tener que seleccionarlo nuevamente dentro de la función (1 Punto).
//      Para obtener el puntaje, debes entregar los archivos pintar.html y script.js
//      funcionando en conjunto con el código modificado.
document.addEventListener('click', (event) => {
    const id = event.target.getAttribute("id");
    if (id==='eleClickeado')
        document.querySelector('#' +id).style.backgroundColor= 'orange';
});

// 2.3  Modifica el código anterior para poder pasarle un color como argumento a la
//      función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
//      párrafo se debe pasar amarillo como color. (1 Punto).

eleVerdeAmarillo.addEventListener("click", (event) => {
    const id = event.target.getAttribute("id");
    if (id==='eleVerdeAmarillo')
        pintar('yellow',id); //cambia a amarillo al hacer click
});

function pintar(color = 'green',id='eleVerdeAmarillo') {
    document.querySelector('#' +id).style.backgroundColor= color;
}
pintar(); //Llama a la funcion con valor con defecto color=green