import React, { useRef } from 'react'; 
import api from '../../services/pokemonAPI'; 

export default function Search({ searchHandler}) { 
    const ref = useRef(); 
    const handleSubmit = async  event => { 
        event.preventDefault(); 
        const pokemon = ref.current.value; 
        console.log('pokemon: ', pokemon); 
        if(!ref.current.value) return;

        try {
            const result = await api.getPokemonByName(pokemon);
            console.log('result: ', result);
            searchHandler(result); 
            ref.current.value ="";
        } catch (error) { 
            ref.current.focus();
            ref.current.style.borderColor = 'red';
            ref.current.style.backgroundColor = 'red';
            console.log('error: ', error); 
        }
    }
    return(
        <form onSubmit={event => handleSubmit(event)}>
            <fieldset>
                <label htmlFor="search">Find Pokemoin</label>
                <input id="search" ref={ref} type="text" placeholder="enter a pokemon name"/>
                <button type="submit">Search</button>
            </fieldset>
        </form>
    ); 
}