export function obtenerFechaActual(){
    const fecha = new Date();

    return fecha.toLocaleDateString();
}

export function obtenerHoraActual(){
    const hora = new Date();

    return hora.toLocaleTimeString();
}