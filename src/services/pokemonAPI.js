export default { 
    getPokemonByName(pokemon) { 
        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => {
            if(!res.ok) throw new Error('server error'); 
            return res.json(); 
        }); 
    },
}