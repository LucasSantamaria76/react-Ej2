const URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemon = async ({ queryKey }) => {
  const res = await fetch(`${URL}${queryKey[1]}`);
  return res.json();
};
