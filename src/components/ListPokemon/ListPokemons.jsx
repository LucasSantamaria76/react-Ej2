import { useQuery } from '@tanstack/react-query';
import { getPokemons } from '../../queries/api';
import { CardContainer, Container, ControlsContainer, InputStyled } from './listPokemons.styles';
import { useState } from 'react';
import debounce from 'lodash.debounce';
import CardPokemon from './CardPokemon';
import { FcLeft, FcRight, FcUp } from 'react-icons/fc';
import { getPokemon } from './../../queries/api';

const ListPokemons = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const { data, error, isLoading } = useQuery(['pokemons', page], getPokemons);

  const handleSearch = debounce((e) => {
    setSearch(e.target?.value);
  }, 1000);

  if (isLoading) {
    return <p>CARGANDO...</p>;
  }

  if (isLoading) {
    return <p>{error}</p>;
  }

  const handleClick = (e) => {
    const id = e.target.ownerSVGElement?.id;

    id === 'left' && page > 0 && setPage(page - 1);

    id === 'right' && page < data?.count && setPage(page + 1);

    id === 'up' && setPage(0);
  };

  return (
    <Container>
      <h1>PokeApi</h1>
      <InputStyled
        type='search'
        width='200px'
        onChange={handleSearch}
        placeholder='Buscar Pokemon...'
      />
      <CardContainer>
        {data?.results.map((pokemon) => (
          <CardPokemon key={pokemon?.name} name={pokemon?.name} />
        ))}
      </CardContainer>
      <ControlsContainer>
        <FcLeft id='left' onClick={(e) => handleClick(e)} />
        <FcUp id='up' onClick={(e) => handleClick(e)} />
        <FcRight id='right' onClick={(e) => handleClick(e)} />
      </ControlsContainer>
    </Container>
  );
};

export default ListPokemons;
