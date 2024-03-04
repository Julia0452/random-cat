var imagen = document.getElementById("imagen")
var boton = document.getElementById("button")
var spinner = document.getElementById("spinner")

function numeroAleatorio() {
    var numero = Math.floor(Math.random() * 99) + 1
    return numero
}

function crearLink() {
    var numero = numeroAleatorio()
    var link = "https://cdn2.thecatapi.com/images/b" + numero + ".jpg"
    return link
}

function mostrarSpinner() {
    spinner.style.display = "block"
}

function ocultarSpinner() {
    spinner.style.display = "none"
}

function cambiarImagen() {
    var link = crearLink()
    imagen.src = link
    mostrarSpinner()
}
boton.onclick = cambiarImagen
imagen.onerror = cambiarImagen
imagen.onload = ocultarSpinner