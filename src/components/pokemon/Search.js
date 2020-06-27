import React, { useRef } from 'react'; 
import api from '../../services/pokemonAPI'; 

export default function Search() { 
    const ref = useRef(); 
    const handleSubmit = async  event => { 
        event.preventDefault(); 
        const pokemon = ref.current.value; 
        console.log('pokemon: ', pokemon); 
        const result = await api.getPokemonByName(pokemon);
        console.log('result: ', result); 
        ref.current.value ="";
    }
    return(
        <form onSubmit={event => handleSubmit(event)}>
            <fieldset>
                <label htmlFor="search">Find Pokemoin</label>
                <input id="search" ref={ref} type="text" />
                <button type="submit">Search</button>
            </fieldset>
        </form>
    ); 
}