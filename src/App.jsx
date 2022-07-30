import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Todo } from './views/Todo/Todo';
import Home from './views/Home/Home';
import PokeApi from './views/PokeApi/PokeApi';

import './App.css';

export const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/pokeapi' element={<PokeApi />} />
      </Routes>
    </>
  );
};
