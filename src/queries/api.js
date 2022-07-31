const URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemon = async ({ queryKey }) => {
  const res = await fetch(`${URL}${queryKey[1]}`);
  return res.json();
};

export const getPokemons = async ({ queryKey }) => {
  const res = await fetch(`${URL}?offset=${queryKey[1] * 10}&limit=10`);
  return res.json();
};
