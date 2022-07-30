import Swal from 'sweetalert2';
import { deleteTask, editTask } from '../../store/actions';
import { useToDo } from '../../store/contextToDo';
import './cardTask.styles.css';

const CardTask = ({ task }) => {
  const { dispatch } = useToDo();

  const handleDelete = (task) => {
    Swal.fire({
      title: `¿ Seguro que desea eliminar la tarea: ${task.title} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#304b64',
      cancelButtonColor: '#8a3737',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) dispatch(deleteTask(task.id));
    });
  };

  return (
    <>
      <div className='card'>
        <h3>{task.title}</h3>
        <div className='btnGroup'>
          <button className='btnEdit' onClick={() => dispatch(editTask(task.id))}>
            ✎
          </button>
          <button className='btnDelete' onClick={() => handleDelete(task)}>
            🗑️
          </button>
        </div>
      </div>
    </>
  );
};

export default CardTask;
