import * as pokemonResource from './pokemonResource';

export function getPokemonGenerations() {
  return pokemonResource.getPokemonGenerations().then(({ data }) => data);
}

export function getPokemonGenerationDatails(url) {
  return pokemonResource.getGenerationDatails(url).then(({ data }) => data);
}

export async function getGenerationsDatails() {
  const { results: generations } = await getPokemonGenerations();

  const generationsDetails = await generations.reduce(
    async (_accumulator, { url }) => {
      const accumulator = await _accumulator;
      const details = await getPokemonGenerationDatails(url);
      return accumulator.concat(details);
    },
    []
  );

  return generationsDetails;
}
