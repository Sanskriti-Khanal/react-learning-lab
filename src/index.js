import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './components/todolist';
import './index.css';
import App from './App';
// import ReactDOM from 'react-dom/client';?
// import TodoList from '../../../../Documents/todolist';?

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TodoList/>
  </React.StrictMode>
);
