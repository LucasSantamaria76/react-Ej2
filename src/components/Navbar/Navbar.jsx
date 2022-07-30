import { NavLink } from 'react-router-dom';
import { NavContainer } from './navbar.styles.js';
import { BiTask, BiTaskX } from 'react-icons/bi';

const Navbar = () => {
  return (
    <NavContainer>
      <NavLink to='/' end>
        <h4>React ( ej.º 2)</h4>
      </NavLink>
      <ul>
        <li>
          <BiTask />
          <NavLink to='/todo' end>
            Lista de Tareas
          </NavLink>
        </li>
        <li>
          <NavLink to='/pokeapi' end>
            PokeApi
          </NavLink>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Navbar;
