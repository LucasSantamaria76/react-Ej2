import { CardPokemonStyled } from './listPokemons.styles';
import { getPokemon } from '../../queries/api';
import { useQuery } from '@tanstack/react-query';
//import PokemonDetail from './PokemonDetail';

const CardPokemon = ({ name, setSearch }) => {
  const {
    data: pokemon,
    error,
    isError,
    isLoading,
  } = useQuery(['pokemonDetails', name], getPokemon);

  if (isLoading) {
    return <p>CARGANDO...</p>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  return (
    <CardPokemonStyled onClick={() => setSearch(pokemon?.name)}>
      <img
        src={
          pokemon.sprites.other.home?.front_default ||
          pokemon.sprites?.front_default ||
          pokemon.sprites?.front_shiny
        }
        alt={pokemon.name}
      />
      <h4>{pokemon?.name}</h4>
    </CardPokemonStyled>
  );
};

export default CardPokemon;
