const atributo  = document.getElementById("atributos");
const contenidos  = document.getElementsByClassName("contenido");

console.log(`${atributo.textContent}`);

atributo.textContent = `Atributos  en HTML 5`;

// Recorrer cada párrafo y cambiar su color
for (let contenido of contenidos) {
    contenido.style.color = "#c58018";
}