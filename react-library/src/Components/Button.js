import React, { Component } from 'react';
import Proptypes from 'prop-types';


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <button>
                {this.props.label || 'please add button name'}
            </button>
        )
    }
}

Button.propTypes = {
    label: Proptypes.string.isRequired,
    type: Proptypes.string.isRequired,
    size: Proptypes.string.isRequired,
}

export default Button;