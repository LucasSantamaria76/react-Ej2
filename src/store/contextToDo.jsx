import { createContext, useContext, useReducer } from 'react';
import { initialState, reducerTodo } from './reducer';

const ContextToDo = createContext();

export const ProviderToDo = ({ children }) => {
  const [state, dispatch] = useReducer(reducerTodo, initialState);

  return <ContextToDo.Provider value={{ state, dispatch }}>{children}</ContextToDo.Provider>;
};

export const useToDo = () => {
  const context = useContext(ContextToDo);
  if (!context) {
    throw new Error('useToDo debe usarse dentro de un ProviderToDo');
  }
  return context;
};
