import { useToDo } from '../../store/contextToDo';
import CardTask from '../CardTask/CardTask';
import './listTask.styles.css';

const ListTask = () => {
  const { state } = useToDo();

  return (
    <div className='list'>
      {state.tasks.map((task) => (
        <CardTask key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
