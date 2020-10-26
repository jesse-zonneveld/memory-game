import React, { Component } from "react";
import "../scss/03-components/_button.scss";

class Button extends Component {
    render() {
        return (
            <button className="btn" onClick={this.props.onClickEvent}>
                {this.props.label}
            </button>
        );
    }
}

export default Button;
