import React, { Component } from "react";
import "../scss/03-components/_card.scss";

class Card extends Component {
    addToGameSeenDeck(e) {
        this.props.checkSelectedCard(this.props.index, e.currentTarget);
    }

    render() {
        return (
            <div
                className="card"
                data-index={this.props.index}
                onClick={this.addToGameSeenDeck.bind(this)}
            >
                <div className="card-icon">
                    <i className={this.props.icon}></i>
                </div>
            </div>
        );
    }
}

export default Card;
