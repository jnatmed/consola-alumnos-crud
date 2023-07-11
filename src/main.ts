import axios from 'axios';
// import moment from 'moment';
// import { Alumno } from './alumno/alumno';
// import { Ialumno } from './alumno/alumno.interfaces';
import readline from 'readline';
// import fs from 'fs';

console.log('Busqueda de Pokemon crud v0.0.1');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

async function getPokemonData(pokemonName: string) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemonData = response.data;
    console.log(pokemonData);
  } catch (error) {
    console.error(error);
  }
}

const pedidoDatosPokemon = () => {
	rl.question('Ingrese el nombre del pokemon a buscar:', (pokemon) => {	
		getPokemonData(pokemon);
	});
};

pedidoDatosPokemon();