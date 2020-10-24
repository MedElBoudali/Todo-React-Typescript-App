import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

const App: React.FC = () => {
  const todos = [
    { id: 't1', text: 'Finish the cource' },
    { id: 't2', text: 'Finish the cource' },
    { id: 't3', text: 'Finish the cource' }
  ];
  return (
    <div className='App'>
      <TodoList items={todos} />
    </div>
  );
};

export default App;
