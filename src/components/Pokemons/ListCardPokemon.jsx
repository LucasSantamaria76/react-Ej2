import { useQuery } from '@tanstack/react-query';
import { getPokemons } from '../../queries/api';
import { CardContainer, ControlsContainer } from './listPokemons.styles';
import { useState } from 'react';
import CardPokemon from './CardPokemon';
import { FcLeft, FcRight, FcUp } from 'react-icons/fc';

const ListCardPokemon = ({ setSearch }) => {
  const [page, setPage] = useState(0);
  const { data, error, isError, isLoading } = useQuery(['pokemons', page], getPokemons);

  if (isLoading) {
    return <p>CARGANDO...</p>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  const handleClick = (e) => {
    const id = e.target.ownerSVGElement?.id;

    id === 'left' && page > 0 && setPage(page - 1);

    id === 'right' && page < data?.count && setPage(page + 1);

    id === 'up' && setPage(0);
  };

  return (
    <>
      {' '}
      <CardContainer>
        {data?.results.map((pokemon) => (
          <CardPokemon key={pokemon?.name} name={pokemon?.name} setSearch={setSearch} />
        ))}
      </CardContainer>
      <ControlsContainer>
        <FcLeft id='left' onClick={(e) => handleClick(e)} />
        <FcUp id='up' onClick={(e) => handleClick(e)} />
        <FcRight id='right' onClick={(e) => handleClick(e)} />
      </ControlsContainer>
    </>
  );
};

export default ListCardPokemon;
