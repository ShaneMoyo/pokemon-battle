import React, { useContext } from 'react'; 
import { PokemonContext } from './PokemonContext';
import Search from './Search'; 


export default function PokemonDetail({ index }) { 
    const { pokemon, dispatch } = useContext(PokemonContext); 
    return (
        <div>
            <h1>Pokemon {index}: {pokemon['pokemon'+index].name}</h1> 
            <Search searchHandler={pokemon => dispatch({type: 'LOAD_POKEMON_' + index, payload: pokemon })}/>
        </div> 
    )

}