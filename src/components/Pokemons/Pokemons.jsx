import { Container, InputStyled } from './listPokemons.styles';
import { useState } from 'react';
import ListCardPokemon from './ListCardPokemon';
import debounce from 'lodash.debounce';
import PokemonDetail from './PokemonDetail';

const ListPokemons = () => {
  const [search, setSearch] = useState('');

  const handleSearch = debounce((e) => {
    setSearch(e.target?.value?.toLowerCase());
  }, 1000);

  return (
    <Container>
      <h1>PokeApi</h1>
      <InputStyled
        type='search'
        width='200px'
        onChange={handleSearch}
        placeholder='Buscar Pokemon...'
      />
      {search ? (
        <PokemonDetail search={search} setSearch={setSearch} />
      ) : (
        <ListCardPokemon setSearch={setSearch} />
      )}
    </Container>
  );
};

export default ListPokemons;
