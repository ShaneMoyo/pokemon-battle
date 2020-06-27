import React, { useState } from 'react'; 
import Search from './Search'; 

export default function PokemonContainer() { 
    const [pokemon1, setPokemon1] = useState({ name: 'none'}); 
    const [pokemon2, setPokemon2] = useState({ name: 'none'}); 

    return (
        <section>
             <h1>Pokemon Container</h1>
             <div>
                <h3>Pokemon1: {pokemon1.name}</h3>
                <Search searchHandler={setPokemon1}/>
             </div>
             <div>
                <h3>Pokemon2: {pokemon2.name}</h3>
                <Search searchHandler={setPokemon2}/> 
             </div>
        </section>
       
    );
}