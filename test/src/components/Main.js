import React, { Component } from 'react';
import Child from './Child';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        // console.log(this.props, this.state)
    }
    
    handleClick = e => {
        this.setState({
            counter : this.state.counter + 1
        })
    }

    handleDecrement = e => {
        this.setState({
            counter : this.state.counter - 1
        })
    }

    render() {
        const { counter } = this.state;
        // const counter = this.state 
        return(
            <div>
                <p style={{
                    fontSize: "45px",
                }} >{counter}</p>
                <Child increment={this.handleClick} decrement={this.handleDecrement} />
            </div>
        )
    }
}

export default Main;