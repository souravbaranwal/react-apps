import React from 'react';
import { Button } from "react-bulma-components/full";
import { connect } from 'react-redux';

class Counter extends React.Component {

  increment = () => {
    // this.setState({
    //   count: this.state.count + 1
    // });
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    // this.setState({
    //   count: this.state.count - 1
    // });
    this.props.dispatch({ type: 'DECREMENT' });
  }

  reset = () => {
      // this.setState({
      //     count: 0
      // })
      this.props.dispatch({ type: 'RESET' });
  }

  
  render() {
    return (
      <div>
        <h2>Counter</h2>
        
        <div>
          <Button onClick={this.decrement}>-</Button>
          <span>{this.props.count}</span>
          <Button onClick={this.increment}>+</Button>
        </div>
        <Button onClick={this.reset}>reset</Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}
export default connect(mapStateToProps)(Counter);