//***Funciones declarativa***
/*function saludar(nombre){
    console.log(`Hola, ${nombre}`)
}
saludar("Javier Agustin");

function sumar(a, b){
    return a + b;
}
console.log(sumar(5,3)); //8 */


//***Funciones anonimas***
/*let saludar1 = function(nombre){
    console.log(`Hola, ${nombre}`)
}
saludar1("Ramirez Martinez");

const restar = function(a,b){
    return a - b;
}
console.log(restar(10,4)); //6 */


//***Funciones de flecha***
/*let saludar2 = (nombre) => console.log(`Hola, ${nombre}`)
saludar2("Mega Prácticas");

const multiplicar = (a,b) => a * b;
console.log(multiplicar(4,2)); //8 

const sumar = (a,b) =>{
    let resultado = a + b;
    return resultado;
}
console.log(sumar(3,7)); //10 */

/*let numero;
let mensajeGlobal = "Hola desde fuera";

function ejemploScope(numero){
    numero ++;

    this.numero = numero;

    let mensajeLocal = "Hola desde dentro";
    console.log(mensajeGlobal);
    console.log(mensajeLocal);
    console.log(numero);
}

numero = 2;
ejemploScope(numero);
console.log(mensajeGlobal);
//console.log(mensajeLocal);
console.log(numero);*/




//Closure
function contador(){
    let cuenta = 0;

    return function (){
        cuenta++;
        return cuenta;
    };
}

const incrementar = contador();

console.log(`Incrementador = ${incrementar()}`);
console.log(`Incrementador = ${incrementar()}`);
console.log(`Incrementador = ${incrementar()}`);
console.log(`Incrementador = ${incrementar()}`);
console.log(`Incrementador = ${incrementar()}`);
console.log(`Incrementador = ${incrementar()}`);
console.log(`Incrementador = ${incrementar()}`);
console.log(`Incrementador = ${incrementar()}`);
console.log(`Incrementador = ${incrementar()}`);
console.log(`Incrementador = ${incrementar()}`);


//EJERCICIO
//Crea una funcion que devuelva otra funcion que multiplica por un número especifico
function multiplicador(factor){
    return function(numero){
        return numero * factor;
    }
}

const duplicar = multiplicador(2);
const triplicar = multiplicador(3);
console.log(`El valor duplicado es: ${duplicar(27)}`);
console.log(`El valor triplicado es: ${triplicar(27)}`);