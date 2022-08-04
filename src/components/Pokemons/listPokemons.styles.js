import styled from 'styled-components';
import { FcUpLeft } from 'react-icons/fc';

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
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 20px;
  width: 100%;
  height: 70vh;
  overflow-y: Auto;
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
    margin: 20px;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(2);
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

export const CardPokemonStyled = styled.button`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #fad7a0;
  cursor: pointer;
  img {
    width: 130px;
    height: 130px;
  }
  h4 {
    text-transform: capitalize;
  }
`;

export const DetailCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 500px;
  height: 300px;
  margin-top: 30px;
  border: 1px solid lightgrey;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #fad7a0;
  overflow: hidden;
  & div {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }
  img {
    margin: 0;
    padding: 0;
    width: 280px;
    height: 300px;

    transform: translateX(60px);
  }
`;

export const BackIcon = styled(FcUpLeft)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin: 20px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.5);
  }
`;
