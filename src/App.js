import React from "react";
import uuid from "uuid";

const initialTodos = [
  {
    task: "Organize Garage",
    id: uuid(),
    completed: false
  },
  {
    task: "Bake Cookies",
    id: uuid(),
    completed: false
  }
];

const fakeTodosEndpoint = () => {
  return Promise.resolve(initialTodos);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodoTitle: ""
    };
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  componentDidMount() {
    fakeTodosEndpoint().then(todos => {
      this.setState(oldState => {
        return {
          todos
        };
      });
    });
  }

  onNewTaskInputChange = event => {
    const newValue = event.target.value;
    console.log("the newValue of the input", newValue);

    this.setState(oldState => {
      return {
        newTodoTitle: newValue
      };
    });
  };

  onTodoAdd = event => {
    console.log("adding todo");
    this.setState(oldState => {
      return {
        newTodoTitle: "",
        todos: oldState.todos.concat({
          completed: false,
          id: uuid(),
          task: oldState.newTodoTitle
        })
      };
    });
  };

  markCompleted = id => {
    this.setState(oldState => {
      return {
        todos: oldState.todos.map(todo => {
          if (todo.id === id) {
            return {
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
      
    });
  };

  clearCompleted = () => {
    this.setState(oldState => {
      return {
        todos: oldState.todos.filter(todo => {
            return {
              completed: !todo.completed
            };
        })
      };
      
    });
  };

  render() {
    return (
      <>
      <h3>To Do:</h3>
      <div className='TodoList'>
        {
          this.state.todos.map(todo => {
            const color = todo.completed ? 'green' : 'red'
            return (
              <div
                style={{ color }}
                className="Todo"
                key={todo.id}
              >
                {todo.task}
                <button
                  onClick={event => this.markCompleted(todo.id)}
                >
                  Done
                </button>
              </div>
            );
          })
        }
      </div>

      <div className="TodoForm">
        <input
          type="text"
          placeholder='type the task!'
          value={this.state.newTodoTitle}
          onChange={this.onNewTaskInputChange}
        />
        <button
          onClick={this.onTodoAdd}
        >
          Add new todo
        </button>
        <button onClick={this.clearCompleted}>
            Clear Completed
          </button>
      </div>
    </>
    );
  }
}

export default App;
