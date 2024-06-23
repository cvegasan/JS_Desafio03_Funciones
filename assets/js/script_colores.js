//3.1   Crea 4 divs que tengan alto y ancho de 200px y de colores azul, rojo, verde y
//      amarillo (insertar estilos con atributo style). Cada uno de los divs debe tener
//      un identificador único. (1 Punto)

document.addEventListener('DOMContentLoaded', () => {
document.querySelector('#div01').style.width='200px';
document.querySelector('#div01').style.height='200px';
document.querySelector('#div01').style.border= '2px solid black';
document.querySelector('#div01').style.backgroundColor= '#5086c1';//blue

document.querySelector('#div02').style.width='200px';
document.querySelector('#div02').style.height='200px';
document.querySelector('#div02').style.border= '2px solid black';
document.querySelector('#div02').style.backgroundColor= '#ff6961'; //red

document.querySelector('#div03').style.width='200px';
document.querySelector('#div03').style.height='200px';
document.querySelector('#div03').style.border= '2px solid black';
document.querySelector('#div03').style.backgroundColor= '#77dd77'; //green

document.querySelector('#div04').style.width='200px';
document.querySelector('#div04').style.height='200px';
document.querySelector('#div04').style.border= '2px solid black';
document.querySelector('#div04').style.backgroundColor= '#fdfd96'; //amarillo
});

//3.2   Dentro del script agrega el evento para que al hacer click a cada uno de los
//      divs, este cambie de color al color negro. Utiliza addEventListener para
//      agregar el evento.

document.addEventListener('click', (event) => {
    const id = event.target.getAttribute("id");
    console.log("Se ha clickeado el id "+id);
    if (id==='div01'||id==='div02'||id==='div03'||id==='div04')
        document.querySelector('#' +id).style.backgroundColor= 'black';
});

//3.3   Crea una página junto a un script que guarde dentro de una variable global
//      un color dependiendo de la letra del teclado presionada. (2 Puntos).
//          ○ La letra a guardará el color rosado.
//          ○ La letra s guardará el color naranjo.
//          ○ La letra d guardará el color celeste.
//          ○ Para guardar el color revisa el tip al final del enunciado.
//          ○ Crea un nuevo div con el id “key”, de 200 px de ancho y alto y de
//          color blanco y borde negro.

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#key').style.width='200px';
    document.querySelector('#key').style.height='200px';
    document.querySelector('#key').style.border= '2px solid black';
    document.querySelector('#key').style.backgroundColor= 'white';
});

// 3.4  Siguiendo con la lógica del punto anterior, al presionar las teclas q, w o e se
//      deberá crear un div nuevo de las mismas dimensiones antes mencionadas
//      con los colores morado, gris y café respectivamente. (1 Punto)

 // div01.className = 'dimensiones border pad'; ¿Se podria haber llamado con esto y dejar el stilo en un css?

 const container = document.querySelector('#container04');
 let color;

document.addEventListener('keydown', (event) => {
    const divKey = document.querySelector('#key');
    const existeDiv11 = document.querySelector('#div11');
    const existeDiv12 = document.querySelector('#div12');
    const existeDiv13 = document.querySelector('#div13');

    //Este elemento ya se encuentra creado
    if (event.key === 'a')
        color='#ee5ca5'; //rosado
    else if (event.key==='s')
        color='#ffc340'; //naranjo
    else if (event.key==='d')
        color='#40cfff'; //celeste
    divKey.style.backgroundColor = color;


    //Creación dinámica de los divs con sus propiedades
    if ((event.key === 'q') && (existeDiv11 === null)) {
        //Cambia a color MORADO
        let div11 = document.createElement('div');
        div11.id = 'div11';
        div11.innerHTML = 'Presionó Tecla Q';
        div11.style.width='200px';
        div11.style.height='200px';
        div11.style.border='1px solid black';
        div11.style.backgroundColor='#b186f1'; //purple
        container.appendChild(div11);
    }else if ((event.key === 'w')&& (existeDiv12 === null)) {
            //Cambia a color VERDE
            let div12 = document.createElement('div');
            div12.id = 'div12';
            div12.innerHTML = 'Presionó Tecla W';
            div12.style.width='200px';
            div12.style.height='200px';
            div12.style.border='1px solid black';
            div12.style.backgroundColor='grey';
            container.appendChild(div12);
        }else if ((event.key === 'e') && (existeDiv13 === null)){
                 //Cambia a color CAFE
                let div13 = document.createElement('div');
                div13.id = 'div13';
                div13.innerHTML = 'Presionó Tecla E';
                div13.style.width='200px';
                div13.style.height='200px';
                div13.style.border='1px solid black';
                div13.style.backgroundColor='#946D43';
                container.appendChild(div13);
        }
});