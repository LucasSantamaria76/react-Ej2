import { NavLink } from 'react-router-dom';
import { NavContainer } from './navbar.styles.js';
import { BiTask, BiTaskX } from 'react-icons/bi';
import { MdCatchingPokemon } from 'react-icons/md';
import { useToDo } from '../../store/contextToDo.jsx';
import { useEffect } from 'react';
import { getTasks } from '../../store/actions.js';

const Navbar = () => {
  const {
    state: { tasks },
    dispatch,
  } = useToDo();

  useEffect(() => {
    dispatch(getTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasTasks = tasks.length > 0;

  return (
    <NavContainer hasTasks={hasTasks}>
      <NavLink to='/' end>
        <h4>React ( ej.º 2)</h4>
      </NavLink>
      <ul>
        <li>
          <NavLink to='/' end>
            Home
          </NavLink>
        </li>
        <li>
          {hasTasks ? <BiTask className='tasksIcon' /> : <BiTaskX className='tasksIcon' />}
          <NavLink to='/todo' end>
            Lista de Tareas
          </NavLink>
        </li>
        <li>
          <MdCatchingPokemon />
          <NavLink to='/pokeapi' end>
            PokeApi
          </NavLink>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Navbar;
