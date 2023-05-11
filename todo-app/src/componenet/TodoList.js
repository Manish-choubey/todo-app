import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../redux/todoSlice';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeTodo(id));
  };

  const handleToggle = todo => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    dispatch(updateTodo(updatedTodo));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggle(todo)}
          >
            {todo.title}
          </span>
          <button onClick={()=> handleRemove(todo.id)}>Remove</button>
</li>
))}
</ul>
);
};

export default TodoList;
