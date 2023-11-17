//Practica 1
let msg = "hola mundo"

console.log(msg);
//Esto es una linea de comentario
/** Comentario de bloque
 * 
 */
//variables let ""

document.addEventListener("DOMContentLoaded",init)

function init(event) {
    let title = document.getElementById("title")
    title.style.color = "red"
    title.innerHTML = msg
    loadData("data.json")
}

function loadData(url) {
    let json  
    fetch(url)
        .then(response => json = response.json())
        .then(data => pintaMisHobbies(data))
           
              
}
function pintaMisHobbies(json) {
    console.log(json)
}