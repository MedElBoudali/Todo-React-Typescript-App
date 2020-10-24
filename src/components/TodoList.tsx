import React from 'react';
import PropTypes from 'prop-types';

const TodoList: React.FC = props => {
  const todos = [{ id: 't1', text: 'Finish the cource' }];
  return (
    <ul>
      {todos.map(todo => (
        <li>{todo.text}</li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {};

export default TodoList;
