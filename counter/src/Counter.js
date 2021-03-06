import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  reset = () => {
    this.setState({
      count: 0
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Reset Counter</button>
      </div>
    );
  }
}

export default Counter;
