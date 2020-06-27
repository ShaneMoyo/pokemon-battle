import React, { useReducer, createContext } from 'react'; 

export const PokemonContext = createContext(); 

const intialState = { 
    pokemon1: { 
        name: ''
    }, 
    pokemon2: { 
        name: ''
    }, 
}

export default function PokemonContextProvider(props) { 
    const pokemonReducer = (state, action) =>  {
        console.log('state changing', action )
        switch(action.type) { 
            case "LOAD_POKEMON_1": 
             
                const shuffled = action.payload.moves.sort(() => 0.5 - Math.random());
                const selectedMoves = shuffled.slice(0, 4);
                return { ...state, pokemon1: {name: action.payload.name, moves: selectedMoves}}
            case "LOAD_POKEMON_2": 
                // const shuffled = action.payload.moves.sort(() => 0.5 - Math.random());
                // const selectedMoves = shuffled.slice(0, n);
                return { ...state}
            default: 
                return state;
        }
    }
    const [pokemon, dispatch] = useReducer(pokemonReducer, intialState); 

    return (
        <PokemonContext.Provider value={{ pokemon, dispatch}}>
            {props.children}
        </PokemonContext.Provider>
    )
}

