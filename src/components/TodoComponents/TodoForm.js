import React from 'react';
const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.todoChangeHandler}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Write your todo's here..."
      />
      <button onClick={props.addTodoHandler}>Add Todo</button>
      <button onClick={props.clearTodoListHandler}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;