async function obtenerPokemones(){
    const container = document.getElementById("pokemon-container");
    
    for(let i = 1; i<=21; i++){
        try {
            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            console.log(respuesta);

            const data = await respuesta.json();
            console.log(data);

            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <h2>${data.name}</h2>
            `;

            container.appendChild(card);

        } catch (error) {
            console.error("Error al obtener el Pokemon: ", error);
        }
    }
}

async function obtenerRickAndMorty(){
    const container = document.getElementById("rickandmorty-container");
    
    for(let i = 1; i<=21; i++){
        try {
            const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${i}`);
            console.log(respuesta);

            const data = await respuesta.json();
            console.log(data);

            const card = document.createElement("div");
            card.className = "card-rickandmorty";
            card.innerHTML = `
                <img src="${data.image}" alt="${data.name}">
                <h2>${data.name}</h2>
                <strong>Status: ${data.status}</strong>
                <p>Genero: ${data.gender}</p>
            `;

            container.appendChild(card);

        } catch (error) {
            console.error("Error al obtener el Pokemon: ", error);
        }
    }
}

obtenerPokemones();
obtenerRickAndMorty();