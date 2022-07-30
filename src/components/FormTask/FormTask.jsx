import { useEffect, useRef, useState } from 'react';
import { addTask, deleteTask, editTask } from '../../store/actions';
import { useToDo } from '../../store/contextToDo';
import './formTask.styles.css';
import Swal from 'sweetalert2';

const FormTask = () => {
  const [task, setTask] = useState('');
  const [taskToEdit, setTaskToEdit] = useState('');
  const [error, setError] = useState(false);
  const { state, dispatch } = useToDo();
  const inputRef = useRef();

  useEffect(() => {
    if (state.toEdit) {
      setTask(state.tasks.find((task) => task.id === state.toEdit).title);
      setTaskToEdit(state.toEdit);
      dispatch(editTask(''));
      inputRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.toEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim().length) {
      dispatch(addTask(task, taskToEdit));
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
      setTaskToEdit('');
      setTask('');
      inputRef.current.focus();
    } else setError(true);
  };

  const handleDelete = () => {
    Swal.fire({
      title: '¿ Seguro que desea eliminar todas la tareas ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#304b64',
      cancelButtonColor: '#8a3737',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTask(null, true));
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    });
  };

  return (
    <>
      <h1 className='title'>{taskToEdit ? 'Editar Tarea' : 'Nueva tarea'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className={`${error ? 'inputError' : ''}`}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onFocus={() => setError(false)}
          ref={inputRef}
          autoFocus
        />
        {error && <p className='error'>La tarea no puede estar vacía</p>}
        <button type='submit'>{taskToEdit ? 'Editar Tarea' : 'Agregar tarea'}</button>
        <button type='button' className='btnDelTask' onClick={() => handleDelete()}>
          Eliminar lista de tareas
        </button>
      </form>
    </>
  );
};

export default FormTask;
