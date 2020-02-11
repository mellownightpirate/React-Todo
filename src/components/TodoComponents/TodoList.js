import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
      <div>
        {props.todoList.map(todo => (
          <Todo
            toggleHandler={props.toggleHandler}
            key={todo.uuid}
            todo={todo}
          />
        ))}
      </div>
    );
  };
  
  export default TodoList;