import './todo.styles.css';
import FormTask from './../../components/FormTask/FormTask';
import ListTask from '../../components/ListTask/ListTask';

export const Todo = () => {
  return (
    <div className='todo'>
      <h1>Lista de tareas</h1>
      <FormTask />
      <ListTask />
    </div>
  );
};
