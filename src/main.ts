import readline from 'readline';
import { getPokemonData } from './pokemon/pokemon.service';

console.log('Busqueda de Pokemon crud v0.0.1');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const pedidoDatosPokemon = () => {
	rl.question('Ingrese el nombre del pokemon a buscar:', (pokemon) => {	
		getPokemonData(pokemon)
      .then( data => {
        console.log(data);
      })
      .catch(error => {
        console.log('Pokemon no encontrado');
      });
	});
};

pedidoDatosPokemon();