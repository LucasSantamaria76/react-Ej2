import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { ProviderToDo } from './store/contextToDo';
import { HashRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <HashRouter>
      <ProviderToDo>
        <App />
      </ProviderToDo>
    </HashRouter>
  </StrictMode>
);
