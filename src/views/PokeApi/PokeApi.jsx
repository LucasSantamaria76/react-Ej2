import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ListPokemon from '../../components/ListPokemon/ListPokemon';
import { Container, InputStyled } from './pokeApi.styles';
import { useState } from 'react';
import debounce from 'lodash.debounce';

const PokeApi = () => {
  const [search, setSearch] = useState('pikachu');
  const queryClient = new QueryClient();

  const handleSearch = debounce((e) => {
    setSearch(e.target?.value);
  }, 1000);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Container>
          <h1>PokeApi</h1>
          <InputStyled width='200px' onChange={handleSearch} />
          <ListPokemon search={search} />
        </Container>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default PokeApi;
