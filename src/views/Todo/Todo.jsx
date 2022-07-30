import FormTask from './../../components/FormTask/FormTask';
import ListTask from '../../components/ListTask/ListTask';
import { TodoContainer } from './todo.styles';

export const Todo = () => {
  return (
    <TodoContainer>
      <h1>Lista de tareas</h1>
      <FormTask />
      <ListTask />
    </TodoContainer>
  );
};
