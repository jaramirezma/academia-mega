document.getElementById("formularioNotas").addEventListener("submit", function(e){
    e.preventDefault();

    const nota1 = document.getElementById("nota1").value.trim();
    const nota2 = document.getElementById("nota2").value.trim();
    const nota3 = document.getElementById("nota3").value.trim();
    const nota4 = document.getElementById("nota4").value.trim();
    const nota5 = document.getElementById("nota5").value.trim();

    const resultado = document.getElementById("resultado");

    try {
        const promedio = calcularPromedioEscolar(nota1,nota2, nota3, nota4, nota5);

        resultado.textContent = `El promedio de las calificaciones es: ${promedio}`;
        resultado.style.color = promedio > 8.5
            ? "green"
            : promedio >= 7
            ? "orange"
            : "red";

    } catch (error) {
        console.log("Error:", error.message);

        resultado.textContent = `${error.message}`;
        resultado.style.color = "red";
    }
    
});

/* ***** .....PLAN DE PRUEBAS..... ***** */
/*Objetivo: Verificar que la función "calcularPromedioEscolar" retome correctamente 
el promedio de tres calificaciones entre 0 y 10, y maneje errores adecuadamente */
function calcularPromedioEscolar(n1, n2, n3, n4, n5){
    console.log("Calculando promedio escolar...");

    /* Escenario de Prueba 1
        ->Nombre: Campo vacío
        ->Entreda: 10, 9, "", 6, 8
        ->Resultado esperado: Error: "Todas la calificaciones deben ser ingresadas"
        ->Resultado obtenido: Error mostrado
        ->Estado: Éxito
    */
    if(n1 === "" || n2 === "" || n3 === "" || n4 === "" || n5 === ""){
        throw new Error("Todas la calificaciones deben ser ingresadas");
    }
    
    /* Escenario de Prueba 2
        ->Nombre:Promedio válido
        ->Entreda: 10, a, 7, 6, 8
        ->Resultado esperado: Error: "Todas la calificaciones deben ser números válidos"
        ->Resultado obtenido: Error mostrado
        ->Estado: Éxito
    */
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);
    n4 = parseFloat(n4);
    n5 = parseFloat(n5);

    if([n1,n2,n3,n4,n5].some(isNaN)){
        throw new Error("Todas la calificaciones deben ser números válidos");
    }

    /* Escenario de Prueba 3
        ->Nombre:Calificación fuera de rango
        ->Entreda: 10, 9, 7, 6, 80
        ->Resultado esperado: Error: Las calificaciones deben estar entre 0 y 10
        ->Resultado obtenido: Error mostrado
        ->Estado: Éxito
    */
    else if([n1,n2,n3,n4,n5].some(n=>n<0 || n>10)){
        throw new Error("Las calificaciones deben estar entre 0 y 10");
    }

    /* Escenario de Prueba 4
        -> Nombre: Todas las calificaciones deben ser números enteros
        -> Entrada: 10, 10, 5, 6.4, 2
        -> Resultado esperado: Error: Solo se permiten calificaciones con números enteros
        -> Resultado obtenido: Error mostrado
        -> Estado: Éxito
    */
    if ([n1,n2,n3,n4,n5].some(n => !Number.isInteger(n))) {
        throw new Error("Solo se permiten calificaciones con números enteros");
    }

     /* Escenario de Prueba 5 (actualizado)
        -> Nombre: Todas las calificaciones son 0
        -> Entrada: 0, 0, 0, 0, 0
        -> Resultado esperado: Error: "No se permiten todas las calificaciones en 0"
        -> Resultado obtenido: Error mostrado
        -> Estado: Éxito
    */
    if ([n1, n2, n3, n4, n5].every(n => n === 0)) {
        throw new Error("No se permiten todas las calificaciones en 0");
    }

    /* Escenario de Prueba 6
        ->Nombre: Promedio válido
        ->Entreda: 10, 9, 7, 6, 8
        ->Resultado esperado: El promedio de las calificaciones es: 8
        ->Resultado obtenido: Promedio mostrado
        ->Estado: Éxito
    */
    return (n1 + n2 + n3 + n4 + n5) / 5;
}