import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

const TodoItem = ({ todo, removeTask, toggleTask }) => {
  return (
    <div onClick={() => toggleTask(todo.id)} className="todo-raw">
      {todo.task}
      <div className="iconsContainer">
        <RiCloseCircleLine onClick={() => removeTask(todo.id)} />
      </div>
    </div>
  );
};

export default TodoItem;
