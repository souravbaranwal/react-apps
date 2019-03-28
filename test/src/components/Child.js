import React, { Component } from 'react';

class Child extends Component {
    render() {
        
        return <div>
            <button type="submit" onClick={() => {
                this.props.increment()
            }}>+</button>
            <button type="submit" onClick={() => {
                this.props.decrement()
            }}>-</button>
        </div>   
    }
}

export default Child;