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
//Variables
//var ya no se usa pero funciona igual que let
//palabra reservada, no empezar por numero, ni contener simbolos
//valores primitivos
let variable1 //undefined
let variable2 = 'Mi nombre' //String
let edad = 30  //Number
let soltero = true // (o false) Boolean
let zero = null //Valor especial conocido
let incognita //undefinded

//const
//valores referenciales
//object
let ficha = {
    nombre: 'Mi Nombre',
    edad: 30,
    soltero: true
}


//acceso a propiedades
//por .
console.log(ficha.nombre)
//por nombre de propiedad
console.log(ficha['edad'])

//Array
let lista = [
    'paul',
    'john',
    'george',
    'ringo',
]
console.log(lista)
//acceso a elementos
console.log(lista[3])

//Funciones
let imprimir = function algo() {
    console.log('imprime algo')
}

//diferencia entre valor y referencia
let a = 5
let b = a
a = 7
console.log(nombre)
console.log(ficha)
