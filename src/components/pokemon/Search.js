import React, { useRef } from 'react'; 

export default function Search() { 
    const ref = useRef(); 
    const handleSubmit = event => { 
        event.preventDefault(); 
        const pokemon = ref.current.value; 
        console.log('pokemon: ', pokemon); 
        
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