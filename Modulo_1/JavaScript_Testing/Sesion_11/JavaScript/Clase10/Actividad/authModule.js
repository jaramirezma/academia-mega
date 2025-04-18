const AuthModule = (function(){
    //Simular usuario
    const userDB = {
        username : "admin",
        password : "1234"
    }

    let currentUser = null;

    return {
        login(username, password){
            if(currentUser){
                console.log(`Ya posees una sesión activa de: ${currentUser.name}`);
            }else{
                if(username === userDB.username && password === userDB.password){
                    currentUser = UserSingleton.getIntance(username);
                    console.log(`Usuario Autenticado: ${currentUser.name}`);
                }else{
                    console.log("Credenciales Incorrectas");
                }
            }
        },
        logout(){
            if(currentUser){
                console.log(`Hasta luego, ${currentUser.name}`);
                currentUser = null;
                UserSingleton.clearInstance();
            }else{
                console.log("No hay usuario autenticado");
            }
        }
    }
})();