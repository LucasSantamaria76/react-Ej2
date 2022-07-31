import { useQuery } from '@tanstack/react-query';
import { getPokemon } from '../../views/PokeApi/api';
import { Container } from './listPokemon.styles';

const ListPokemon = ({ search }) => {
  const { data, error, isLoading } = useQuery(['pokemon', search], getPokemon);

  console.log(data);

  if (isLoading) {
    return <p>CARGANDO...</p>;
  }

  if (isLoading) {
    return <p>{error}</p>;
  }

  return <Container></Container>;
};

export default ListPokemon;
