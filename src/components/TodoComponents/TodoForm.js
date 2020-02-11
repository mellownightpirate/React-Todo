import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
<form>
      <input
        onChange={this.props.todoChangeHandler}
        type="text"
        name="todo"
        value={this.props.value}
        placeholder="Write your todo's here..."
      />
      <button onClick={this.props.addTodoHandler}>Add Todo</button>
      <button onClick={this.props.clearTodoListHandler}>Clear Completed</button>
    </form>
    )
    
  }

};

export default TodoForm;