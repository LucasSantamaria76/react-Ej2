const URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemon = async (name) => {
  try {
    const res = await fetch(`${URL}${name}`);
    return res.json();
  } catch (error) {
    console.log('error', error);
  }
};

export const getPokemons = async ({ queryKey }) => {
  const res = await fetch(`${URL}?offset=${queryKey[1] * 10}&limit=10`);
  return res.json();
};
