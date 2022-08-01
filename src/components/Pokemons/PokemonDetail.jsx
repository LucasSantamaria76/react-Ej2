import { useEffect, useState } from 'react';
import { getPokemon } from '../../queries/api';
import { DetailCard } from './listPokemons.styles';

const PokemonDetail = ({ search }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    search &&
      getPokemon(search)
        .then((data) => setPokemon(data))
        .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DetailCard>
      <img
        src={pokemon?.sprites?.front_default || pokemon?.sprites?.front_shiny}
        alt={pokemon.name}
      />
      <div>
        <h3>Nombre: {pokemon?.name}</h3>
        <h4>Altura: {pokemon?.height}M</h4>
        <h4>Peso: {`${pokemon?.weight / 10} kg`}</h4>
      </div>
    </DetailCard>
  );
};

export default PokemonDetail;
