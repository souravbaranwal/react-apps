import React, { Component } from "react";
// import Proptypes from 'prop-types';
import "./CSS/button.scss";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleStyle = () => {
    let { size, type } = this.props;
    let style = {};

    // color code

    switch (type) {
      case "primary":
        style = { background: "blue" };
        break;
      case "danger":
        style = { background: "##F5F5F5" };
        break;
      case "success":
        style = { background: "#23d160" };
        break;
      case "info":
        style = { background: "#209cee" };
        break;
      case "link":
        style = { background: "#3273dc" };
        break;
      case "small":
        style = { fontSize: "12px" };
        break;
      default:
        style = { background: "#555555" };
    }
    // size code

    switch (size) {
      case "small":
        style = { ...style, fontSize: "12px" };
        break;
      case "large":
        style = { ...style, fontSize: "20px" };
        break;

      default:
        style = { ...style, fontSize: "16px" };
    }

    return style;
  };
  render() {
    let { label } = this.props;

    return (
      <button style={this.handleStyle()} onClick={this.props.onClickHandler}>
        {label || "please add button name"}
      </button>
    );
  }
}

// Button.propTypes = {
//     label: Proptypes.string.isRequired,
//     type: Proptypes.string.isRequired,
//     size: Proptypes.string.isRequired,
// }

export default Button;
