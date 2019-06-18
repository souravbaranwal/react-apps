import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      todos: []
    };
  }
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value) {
      this.setState({
        value: "",
        todos: [...this.state.todos, this.state.value]
      });
    }
  };
  render() {
    const { value } = this.state;
    return (
      <div className="TodoListMain">
        <div className="header">
          <form action="" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={value}
              placeholder="tasks"
              onChange={this.handleChange}
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
        <div className="footer">
          <ul>
            {this.state.todos &&
              this.state.todos.map((todo, index) => {
                return <li key={index}>{todo}</li>;
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
