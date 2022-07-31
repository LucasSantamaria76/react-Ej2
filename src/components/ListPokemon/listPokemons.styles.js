import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100vh;
  padding: 60px;
  background-color: #e67e22;
  h1 {
    text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #f00;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #e67e22;
`;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    width: 40px;
    height: 40px;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const InputStyled = styled.input`
  width: ${({ width }) => width ?? '100%'};
  border: 1px solid lightgrey;
  ${({ error }) => (error ? `border-color: red` : `border-color: lightgrey`)};
  border-radius: 5px;
  padding: 5px;
  margin-top: 2px;
  ${({ error }) => !error && `margin-bottom: 1rem`};
  font-size: 0.9rem;
  color: #333;
  background-color: #fff;
  &:focus {
    outline: none;
    border-color: blue;
  }
`;

export const CardPokemonStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #fad7a0;
  cursor: pointer;
  h4 {
    text-transform: capitalize;
  }
`;
