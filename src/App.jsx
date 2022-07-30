import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Todo } from './views/Todo/Todo';

import './App.css';

export const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </>
  );
};
