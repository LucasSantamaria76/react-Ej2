import { useQuery } from '@tanstack/react-query';
import { getPokemon } from '../../queries/api';
import { BackIcon, DetailCard } from './listPokemons.styles';

const PokemonDetail = ({ search, setSearch }) => {
  const { data: pokemon, isError, isLoading } = useQuery(['pokemonDetails', search], getPokemon);

  if (isLoading) {
    return <p>Buscando...</p>;
  }

  if (isError) {
    return <p>Pokemon no encontrado</p>;
  }

  return (
    <>
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
      <BackIcon onClick={() => setSearch('')} />
    </>
  );
};

export default PokemonDetail;
