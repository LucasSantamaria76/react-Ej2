import { useToDo } from '../../store/contextToDo';
import CardTask from '../CardTask/CardTask';
import { ListTaskContainer } from './listTask.styles';

const ListTask = () => {
  const { state } = useToDo();

  return (
    <ListTaskContainer>
      {state.tasks.map((task) => (
        <CardTask key={task.id} task={task} />
      ))}
    </ListTaskContainer>
  );
};

export default ListTask;
