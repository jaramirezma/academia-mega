export function sumar(a,b){
    return `La suma de ${a} + ${b} = ${a + b}`;
}

export function restar(a,b){
    return `La resta de ${a} - ${b} = ${a - b}`;
}

export function multiplicar(a,b){
    return `La multiplicación de ${a} x ${b} = ${a * b}`;
}

export function dividir(a,b){
    if(b ===0 ) {
        return `No se puede divivir ${a} por cero (${b})`
    } else{
        return `La división de ${a} / ${b} = ${a / b}`;
    }
}