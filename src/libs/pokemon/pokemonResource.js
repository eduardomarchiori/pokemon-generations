import { requestApi } from '../common';

export function getPokemonGenerations() {
  return requestApi.get('https://pokeapi.co/api/v2/generation/');
}

export function getGenerationDatails(url) {
  return requestApi.get(url);
}
