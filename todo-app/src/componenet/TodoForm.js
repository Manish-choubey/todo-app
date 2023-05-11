import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../redux/todoSlice';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim() !== '') {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter TODO title"
      />
      <button type="submit">Add TODO</button>
    </form>
  );
};

export default TodoForm;
