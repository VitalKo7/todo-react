import React from 'react';

const TodoItem = ({ todo, removeTask, toggleTask }) => {
  return (
    <div className="todo-raw">
      {todo.task}
      <div className="iconsContainer">
        <RiCloseCircleLine />
      </div>
    </div>
  );
};

export default TodoItem;
