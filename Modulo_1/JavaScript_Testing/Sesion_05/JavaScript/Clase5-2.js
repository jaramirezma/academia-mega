const titulo  = document.getElementById("titulo");
const mensajes  = document.getElementsByClassName("mensaje");
const botonoes = document.getElementsByTagName("button");

console.log(`${titulo.textContent}`);

titulo.textContent = `Bienvenidos a mi página Web`;
titulo.style.color = "#b6a6f6";

const primerParrafo = document.querySelector(".mensaje");
const todosLosParrafos = document.querySelectorAll(".mensaje");

primerParrafo.innerHTML = "<strong>¡Texto en negritas!</strong>"

// Recorrer cada párrafo y cambiar su color
for (let contenido of mensajes) {
    contenido.style.color = "#c58018";
}

document.getElementById("cambiarTexto").addEventListener("click",function(){
    document.getElementById("titulo").textContent = "Texto cambiado con JavaScript";
});

document.getElementById("boton").addEventListener("click",function(){
    document.getElementById("resultado").textContent = "Botón clickeado";
});

const hoverTexto = document.getElementById("hoverTexto");

hoverTexto.addEventListener("mouseover", function(){
    hoverTexto.style.color = "red";
});

hoverTexto.addEventListener("mouseout", function(){
    hoverTexto.style.color = "black";
});


const hoverDiv = document.getElementById("hoverDiv");

hoverDiv.addEventListener("mouseover", function(){
    hoverDiv.style.backgroundColor = "red";
});

hoverDiv.addEventListener("mouseout", function(){
    hoverDiv.style.backgroundColor = "white";
});