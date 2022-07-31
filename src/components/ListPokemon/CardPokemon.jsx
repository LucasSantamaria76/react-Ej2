import { useEffect, useState } from 'react';
import { CardPokemonStyled } from './listPokemons.styles';

const CardPokemon = ({ url }) => {
  const [pokemon, setPokemon] = useState({});

  const getDataPokemon = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPokemon(data);
  };

  useEffect(() => {
    getDataPokemon(url);
  }, [url]);

  return (
    <CardPokemonStyled>
      <img src={pokemon?.sprites?.front_default} alt={pokemon.name} />
      <h4>{pokemon?.name}</h4>
    </CardPokemonStyled>
  );
};

export default CardPokemon;
