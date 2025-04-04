//var edad = 7; //Variable global completa | No es tan recomendable

//let edad1 = 50; //No es global
//const edad2 = 20; //El alcance de const

//funcion(edad){
//    let edad = this.edad
    //
    //
//}

//if (edad < 18){
//    let edad = this.edad;
//    console.log(`Eres menor de edad`);
    
//}else if (edad >= 18 && edad < 65){
//    console.log(`Eres un adulto`);
//}else{
//    console.log(`Eres un adulto mayor`);
//}

//console.log(edad)
//console.log(dato2)
//console.log(dato)

//let numero = prompt("Ingresa un número");

//numero = Number(numero);

//if(numero > 0){
//    console.log("El número es positivio")
//}else if(numero<0){
//    console.log("El numero es negativo");
//}else if(numero ){
//    console.log("El número es cero");
//}

//for(let i = 1; i <= 15; i++){
//    console.log(`Interación número ${i}`);
//}

//let contador = 1;
//while (contador <=15){
//    console.log(`Contador en ${contador}`);
//    contador ++;
//}

//let num = prompt(`Ingresa un número`);
//num = Number(num);

//if(num %2 === 0){
//    console.log("El número es par");
//}else{
//    console.log("El número es impar");
//}

//let suma = 0;
//for(let i = 1; i <= 100; i++){
//    suma += i;
//}

//console.log(`La suma del 1 al 100 es: ${suma}`)

//Actividad
let intentos = 0;
let claveCorrecta = "1234";
let claveIngresada;

while(intentos < 3){
    claveIngresada = prompt("Ingresa la contraseña");

    if(claveIngresada === claveCorrecta){
        console.log("Acceso concedido.");
        break;
    }else{
        console.log("Contraseña incorrecta");
    }
    intentos++;
}

if(intentos === 3){
    console.log("Has agotado tus intentos");
}