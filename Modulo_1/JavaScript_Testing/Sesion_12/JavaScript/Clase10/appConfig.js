const appConfig = (function(){
    let instance;

    function createIntance(){
        const config = {
            apiUrl : "https://api.example.com",
            token : "fldsmdfr12345",
        }
        return config;
    }
    return{
        getInstane(){
            if(!instance){
                instance = createIntance();
            }
            return instance;
        }
    }
})();

const config = appConfig.getInstane();
const config2 = appConfig.getInstane();

console.log(config === config2);