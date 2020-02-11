import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <div
        style={this.props.todo.completed ? { textDecoration: 'line-through' } : null}
        onClick={() => this.props.toggleHandler(this.props.todo.id)}
      >
        {this.props.todo.task}
      </div>
    );

  }
  

};

export default Todo;