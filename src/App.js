import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import uuid from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          task: "Organize Garage",
          id: uuid,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: uuid,
          completed: false
        }
      ],
      todo: ""
    };
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTodo = e => {
    e.preventDefault();
    let newTodo = { task: this.state.todo, completed: false, id: uuid() };
    this.setState({
      todoList: [...this.state.todoList, newTodo],
      todo: ""
    });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  toggleTodoComplete = id => {
    let todoList = this.state.todoList.slice();
    todoList = todoList.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todoList });
  };

  clearCompletedtodoList = e => {
    e.preventDefault();
    const todoList = this.state.todoList.filter(todo => !todo.completed);
    this.setState({ todoList });
  };

  render() {
    return (
      <div>
        <TodoList
          toggleHandler={this.toggleTodoComplete}
          todoList={this.state.todoList}
        />
        <TodoForm
          value={this.state.todo}
          todoChangeHandler={this.changeTodo}
          addTodoHandler={this.addTodo}
          clearTodoListHandler={this.clearCompletedtodoList}
        />
      </div>
    );
  }
}

export default App;
