import { useEffect, useState } from 'react';
import { CardPokemonStyled } from './listPokemons.styles';
import { getPokemon } from '../../queries/api';
import PokemonDetail from './PokemonDetail';

const CardPokemon = ({ name }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    name && getPokemon(name).then((data) => setPokemon(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => <PokemonDetail search={pokemon?.name} />;

  return (
    <CardPokemonStyled onClick={handleClick}>
      <img src={pokemon?.sprites?.front_default} alt={pokemon.name} />
      <h4>{pokemon?.name}</h4>
    </CardPokemonStyled>
  );
};

export default CardPokemon;