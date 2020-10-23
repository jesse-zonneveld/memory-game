import React, { Component } from "react";
import "../scss/03-components/_card.scss";

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-symbol">{this.props.symbol}</div>
            </div>
        );
    }
}

export default Card;
