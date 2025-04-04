import{saludar, despedir} from "./saludo.js";
import{sumar, restar, multiplicar, dividir} from "./Actividad.js";
import{obtenerFechaActual, obtenerHoraActual} from "./fecha.js";


const nombre = "Javier Agustin";


//Saludo
console.log(saludar(nombre));
console.log(despedir(nombre));

//Actividad
console.log(sumar(10,5));
console.log(restar(10,5));
console.log(multiplicar(10,5));
console.log(dividir(10,5));
console.log(dividir(10,0));

//Fecha
console.log("Fecha actual: ", obtenerFechaActual());
console.log("Hora actual:", obtenerHoraActual());


