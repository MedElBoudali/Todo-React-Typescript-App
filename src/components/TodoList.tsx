import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

interface TodoListProps {
  items: { id: string; text: string }[];
  deleteItem: (todoId: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, deleteItem }) => {
  const deleteHandler = (id: string) => {
    deleteItem(id);
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={deleteHandler.bind(null, item.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default TodoList;
