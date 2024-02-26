var imagen = document.getElementById("imagen")
var boton = document.getElementById("button")

function numeroAleatorio() {
    var numero = Math.floor(Math.random() * 99) + 1
    return numero
}

function crearLink() {
    var numero = numeroAleatorio()
    var link = "https://cdn2.thecatapi.com/images/b" + numero + ".jpg"
    return link
}

function cambiarImagen() {
    var link = crearLink()
    imagen.src = link
}
boton.onclick = cambiarImagen
imagen.onerror = cambiarImagen