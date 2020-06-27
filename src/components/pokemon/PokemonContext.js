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
                return { ...state, pokemon1: action.payload}
            case "LOAD_POKEMON_2": 
                return { ...state, pokemon2: action.payload}
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

