import React from 'react';

const Todo = props => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.toggleHandler(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;