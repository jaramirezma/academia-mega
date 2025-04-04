const MathModule = (function(){
    //Variables privadas
    const PI = 3.1416;

    //Funciones privadas
    function cuadrado(x){
        return x * x;
    }

    //Funciones publicas
    return{
        areaCirculo(radio){
            return PI * cuadrado(radio);
        },
        suma(a,b){
            return a + b;
        }
    }
})();

console.log(MathModule.areaCirculo(2));
console.log(MathModule.suma(20,7));
// console.log(MathModule.cuadrado(4,4));