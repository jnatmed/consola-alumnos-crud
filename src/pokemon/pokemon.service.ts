import axios from "axios";
import { Pokemon } from "./pokemon.interface";

//devuelve una promesa
export async function getPokemonData(pokemonName: string) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    if (response.status != 200){
        throw new Error();
    }
    const pokemonData : Pokemon = response.data;    
    return pokemonData;
}
