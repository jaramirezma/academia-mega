function expect(actual){
    return {
        toBe(expected){
            if(actual === expected){
                console.log(`Pasó: ${actual} === ${expected}`);
            }else{
                console.log(`Falló: Se esperaba ${expected}, pero se obtuvo ${actual}`);
            }
        },
        toEqual(expected){
            const passed = JSON.stringify(actual) === JSON.stringify(expected);
            if(passed){
                console.log(`Pasó: Objetos iguales`);
            }else{
                console.log(`Falló: Objetos diferentes`);
            }
        }
    }
}

function sumar(a,b){
    return a + b;
}

function validarUsuario(usuario){
    return usuario.nombre  && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.correo);
}

const usuarioValido = {nombre: "Javier", correo: "javier@ejemplo.com"}
const usuarioValido2 = {nombre: "Javier", correo: "javier@ejemplo.co"}
const usuarioInvalido = {nombre: "Agustin", correo: "agustin@ejemplo"}

expect(sumar(1,3)).toBe(5);
expect(sumar(10,0)).toBe(10);
expect(sumar(10,10)).toEqual(20);
expect(sumar(10,0)).toEqual(5);

expect(validarUsuario(usuarioValido)).toBe(true);
expect(validarUsuario(usuarioInvalido)).toBe(true);

expect(validarUsuario(usuarioValido)).toEqual(true);
expect(validarUsuario(usuarioValido)).toEqual(usuarioValido2);
expect(validarUsuario(usuarioInvalido)).toEqual(true);