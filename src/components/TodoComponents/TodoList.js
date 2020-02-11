import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{
  render(){
    return (
      <div>
        {this.props.todoList.map(todo => (
          <Todo
            toggleHandler={this.props.toggleHandler}
            key={todo.uuid}
            todo={todo}
          />
        ))}
      </div>
    );
  }
    
  };
  
  export default TodoList;