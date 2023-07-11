import axios from 'axios';
// import moment from 'moment';
// import { Alumno } from './alumno/alumno';
// import { Ialumno } from './alumno/alumno.interfaces';
// import readline from 'readline';
// import fs from 'fs';

console.log('Alumnos crud v0.0.1');

async function getPokemonData() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    const pokemonData = response.data;
    console.log(pokemonData);
  } catch (error) {
    console.error(error);
  }
}

getPokemonData();

