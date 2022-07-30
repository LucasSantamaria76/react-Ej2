import styled from 'styled-components';

export const Form = styled.form`
  width: 96%;
  margin: 0 auto;
  h1 {
    margin: 0;
    padding: 0;
    color: #000;
    text-align: center;
  }

  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 100%;
    margin: 10px auto 0;
    padding: 8px;
    border: 1px solid #000;
    border-radius: 4px;
    font-size: 1.2rem;
  }

  input:focus {
    outline: none;
  }

  button {
    width: 100%;
    padding: 8px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1.2rem;
    cursor: pointer;
    background-color: var(--primary-color);
    box-shadow: 1px 1px 5px #000;
  }

  .btnDelTask {
    background-color: var(--danger-color);
  }

  button:active {
    box-shadow: none;
  }

  .error {
    color: red;
    font-size: 0.8rem;
  }

  .inputError {
    border: 1px solid red;
  }
`;
