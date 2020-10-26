import React, { Component } from "react";
import "../scss/03-components/_overlay.scss";

class Overlay extends Component {
    render() {
        return (
            <div
                className={
                    this.props.active ? "overlay block-clicking" : "overlay"
                }
            ></div>
        );
    }
}

export default Overlay;
