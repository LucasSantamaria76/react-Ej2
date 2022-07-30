import FormTask from './../../components/FormTask/FormTask';
import ListTask from '../../components/ListTask/ListTask';
import { useEffect } from 'react';
import { useToDo } from '../../store/contextToDo';
import { getTasks } from '../../store/actions';
import { TodoContainer } from './todo.styles';

export const Todo = () => {
  const { dispatch } = useToDo();
  useEffect(() => {
    dispatch(getTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TodoContainer>
      <h1>Lista de tareas</h1>
      <FormTask />
      <ListTask />
    </TodoContainer>
  );
};
