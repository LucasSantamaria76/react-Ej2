import styled from 'styled-components';

export const ListTaskContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  }
`;
