const usuario = {
    nombre : "Javier",
    edad : 27,
    ciudad : "Guadalajara"
}

const usuarioJson = JSON.stringify(usuario);
console.log("JSON en Texto: ", usuarioJson);

const usuarioObjeto = JSON.parse(usuarioJson);
console.log("JSON en Objeto: ", usuarioObjeto);

console.log(usuarioObjeto.nombre);

localStorage.setItem("usuario", usuarioJson);

const datosGuardados = localStorage.getItem("usuario");
const datosObjeto = JSON.parse(datosGuardados);
console.log(datosObjeto.edad);
console.log(datosObjeto);

localStorage.removeItem("usuario");