import React, { useState } from 'react'; 
import PokemonContext from './PokemonContext';
import PokemonDetail from './PokemonDetail' 

export default function PokemonContainer() { 

    return (
        <PokemonContext>
            <section>
                <h1>Pokemon Container</h1>
                <PokemonDetail index={1}/>
                <PokemonDetail index={2}/>
            </section>
        </PokemonContext>
       
    );
}