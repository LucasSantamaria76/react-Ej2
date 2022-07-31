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
